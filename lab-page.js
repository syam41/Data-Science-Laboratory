/* =========================================================
   LAB PAGE - scripts for the standalone Python lab page.
   Loaded after script.js, so PYODIDE_VERSION, labState, etc.
   are already in scope.
   ========================================================= */

const labTemplates = [
    { title: "Pandas starter", note: "Build a DataFrame, group by and describe.",
      code: "import pandas as pd\n\nrecords = {\n    'Name'   : ['Aisha','Rahul','Sneha','Imran','Divya'],\n    'Branch' : ['CSE','CSE','ECE','ECE','CSE'],\n    'CGPA'   : [8.9, 7.4, 9.1, 6.8, 8.3],\n}\ndf = pd.DataFrame(records)\nprint(df)\nprint('\\nshape:', df.shape)\nprint('\\naverage CGPA by branch:')\nprint(df.groupby('Branch')['CGPA'].mean().round(2))" },
    { title: "Statistics starter", note: "Mean, median and spread on a small column.",
      code: "import numpy as np\n\nmarks = [72, 65, 78, 55, 70, 90, 63, 81]\narr = np.array(marks)\nprint('count  :', arr.size)\nprint('mean   :', round(arr.mean(), 2))\nprint('median :', np.median(arr))\nprint('std dev:', round(arr.std(), 2))\nprint('min/max:', arr.min(), arr.max())" },
    { title: "Matplotlib starter", note: "Draw a bar chart and show it in the console.",
      code: "import base64\nimport matplotlib\nmatplotlib.use('agg')\nimport matplotlib.pyplot as plt\n\nlabels = ['Aisha','Rahul','Sneha','Imran','Divya']\nmarks  = [72, 65, 78, 55, 70]\n\nplt.figure(figsize=(6, 3))\nplt.bar(labels, marks, color='#163a63')\nplt.title('Total marks per student')\nplt.ylabel('marks')\nplt.tight_layout()\nplt.savefig('lab.png')\nprint('DATA:image/png;base64,' + base64.b64encode(open('lab.png','rb').read()).decode())" },
    { title: "Time series starter", note: "date_range, resample and a trend.",
      code: "import pandas as pd\n\nindex = pd.date_range('2025-01-01', periods=24, freq='h')\nseries = pd.Series(range(1, 25), index=index)\nprint('raw shape:', series.shape)\nprint('\\nthree hour totals:')\nprint(series.resample('3h').sum())\nprint('\\ndaily total:')\nprint(series.resample('D').sum())" },
    { title: "Regex starter", note: "str.extract turns text into a table.",
      code: "import pandas as pd\n\nrows = ['Aisha - CSE - 8.9', 'Rahul - ECE - 7.4', 'Sneha - MEC - 9.1']\ndf = pd.DataFrame({'text': rows})\ndf[['Name','Branch','CGPA']] = df['text'].str.extract(r'^(\\w+) - (\\w+) - ([\\d.]+)$')\ndf['CGPA'] = df['CGPA'].astype(float)\nprint(df[['Name','Branch','CGPA']])" }
];

function labBlockHtml(prefix, options) {
    var opts = options || {};
    var hasExperiment = (opts.starter !== undefined && opts.starter !== null);
    var html = "" +
        '<p class="lab-intro">A real Python 3 sandbox (Pyodide) running inside your browser' +
        " &middot; numpy and pandas are loaded automatically on the first run.</p>" +
        '<div class="lab-head">' +
        '   <span class="code-status" id="labStatus' + prefix + '">runtime not started</span>' +
        '   <div class="lab-tools">' +
        '       <button type="button" class="btn-run" onclick="labRun(\'' + prefix + '\', this)">&#9654; RUN CODE</button>' +
        '       <button type="button" class="btn-copy" onclick="labCopy(\'' + prefix + '\')">&#10697; COPY</button>' +
        (hasExperiment
            ? '       <button type="button" class="btn-lab-ghost" onclick="labFill(\'' + prefix + '\', \'experiment\')">START FROM EXPERIMENT</button>'
            : '') +
        '       <button type="button" class="btn-lab-ghost" onclick="labFill(\'' + prefix + '\', \'blank\')">BLANK TEMPLATE</button>' +
        '       <button type="button" class="btn-lab-ghost" onclick="labMatplotlib(\'' + prefix + '\', this)">LOAD MATPLOTLIB</button>' +
        '       <button type="button" class="btn-lab-ghost" onclick="labClear(\'' + prefix + '\')">CLEAR OUTPUT</button>' +
        '   </div>' +
        '</div>' +
        '<div class="lab-editor">' +
        '   <pre class="lab-gutter" id="labGutter' + prefix + '" aria-hidden="true">1</pre>' +
        '   <textarea id="labEditor' + prefix + '" class="lab-code" spellcheck="false" autocomplete="off"' +
        '             autocapitalize="off" autocorrect="off" wrap="off"' +
        '             aria-label="Python code editor"></textarea>' +
        '</div>' +
        '<div class="lab-console">' +
        '   <pre class="lab-out" id="labOut' + prefix + '" aria-live="polite">Press RUN CODE to execute this file.</pre>' +
        '   <div class="lab-images" id="labImages' + prefix + '"></div>' +
        '</div>' +
        '<p class="lab-hint">Ctrl + Enter runs the code &middot; the first run downloads the' +
        " Python runtime once and needs an internet connection &middot; plots created with" +
        " <code>plt.savefig</code> are shown below the console.</p>";
    return html;
}

function labStateInit(prefix, starter) {
    if (!labState[prefix]) labState[prefix] = { starter: starter || LAB_BLANK, draft: null };
    else if (starter) labState[prefix].starter = starter;
    return labState[prefix];
}

function labMount(prefix, starter) {
    var editor = document.getElementById("labEditor" + prefix);
    if (!editor) return;
    var state = labStateInit(prefix, starter || LAB_BLANK);
    editor.value = (state.draft !== null) ? state.draft : state.starter;
    labState[prefix] = state;
    wireLabEditor(prefix);
    labSyncGutterNow(prefix);
    var out = document.getElementById("labOut" + prefix);
    if (out) out.textContent = "Press RUN CODE to execute this file.";
    var images = document.getElementById("labImages" + prefix);
    if (images) images.innerHTML = "";
}

function renderExperimentsLab() {
    var panel = document.getElementById("labMainPanel");
    if (!panel) return;
    panel.innerHTML = labBlockHtml("Main", null);
    labStateInit("Main", LAB_BLANK);
    labMount("Main", LAB_BLANK);

    var templates = document.getElementById("labTemplates");
    if (templates) {
        templates.innerHTML = labTemplates.map(function (t, i) {
            return "" +
                '<button type="button" class="lab-template" onclick="loadLabTemplate(' + i + ')">' +
                '   <span class="lab-tpl-title">' + escapeHtml(t.title) + '</span>' +
                '   <span class="lab-tpl-note">' + escapeHtml(t.note) + '</span>' +
                '</button>';
        }).join("");
    }

    var ref = document.getElementById("labReference");
    if (ref) {
        var items = [
            ["print()", "shows a value in the console"],
            ["df.head(), df.shape, df.dtypes", "inspect a table"],
            ["df.describe()", "summary of every number"],
            ["df.groupby('col')['x'].mean()", "aggregates by group"],
            ["df['col'].fillna(value)", "fill missing data"],
            ["df.sort_values('col')", "sort a frame"],
            ["plt.savefig('fig.png')", "save a figure (use DATA: prefix to show it)"]
        ];
        ref.innerHTML = items.map(function (row) {
            return "<li><code>" + escapeHtml(row[0]) + "</code> &mdash; " + escapeHtml(row[1]) + "</li>";
        }).join("");
    }
}

function loadLabTemplate(index) {
    var t = labTemplates[index];
    if (!t) return;
    var editor = document.getElementById("labEditorMain");
    if (!editor) return;
    if (editor.value.trim() && editor.value !== LAB_BLANK && !window.confirm("Replace the editor content with this template?")) return;
    editor.value = t.code;
    if (!labState.Main) labState.Main = { starter: LAB_BLANK, draft: null };
    labState.Main.draft = t.code;
    labSyncGutterNow("Main");
    var out = document.getElementById("labOutMain");
    if (out) out.textContent = "Press RUN CODE to execute this file.";
    editor.focus();
    toast(t.title + " loaded into the editor.");
}

function mountViewLabs() {
    if (document.getElementById("labSubPanel")) {
        if (!labState.Sub) labState.Sub = { starter: LAB_BLANK, draft: null };
        labMount("Sub", labState.Sub.starter || LAB_BLANK);
    }
}
viewReady = mountViewLabs;