/*!
 * File Management Component
 * A reuseable interface for managing files for a web server
 * (c) 2020 Joshua Adams
 */

/* ============================== Import Modules ============================ */

import table from '../../node_modules/@joshadams/table.js/src/js/module.js';

/* ================================ Variables =============================== */

// N/A

/* ============================= Private Methods ============================ */

function _getSampleTable() {
  const data = [];

  const options = {
    div: 'container',
    data,
    renderer: null,
    headers: {
      names: ['No', 'Name', 'Description'],
      renderer: null
    },
    rows: {
      renderer: null,
    },
    cells: {
      onClick: null,
      onDblClick: null,
      onHover: null,
      renderer: null
    }
  };

  for (let i = 0; i < 10; i++) {
    data.push({ No: 1, Name: 'Images', Description: 'Folder of all images' });
    data.push({ No: 2, Name: 'Documents', Description: 'Folder of all documents' });
    data.push({ No: 3, Name: 'pig.jpg', Description: 'Image of a pig' });
  }

  table.init(options);
}

function _addDragSelect() {
  const ds = new DragSelect({ // eslint-disable-line no-undef
    selectables: document.getElementsByClassName('table-table__row'),
    area: document.getElementById('container'),
    callback: function cb(elements) { // eslint-disable-line no-unused-vars
      // do something
    }
  });
  return ds;
}

/* ============================== Public Methods ============================ */

function init(options) { // eslint-disable-line no-unused-vars
  _getSampleTable();

  _addDragSelect();
}

/* =========================== Export Public APIs =========================== */

export default {
  init
};
