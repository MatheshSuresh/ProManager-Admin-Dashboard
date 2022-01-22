import React from 'react';

const ProjectTable = () => {
  return (
      <div className='projectTable'>
          <table className='table'>
              <tr className='table-header'>
                  <th className='table-head'>Recent Projects</th>
                  <th className='table-head'>Created</th>
                  <th className='table-head'>Reporter</th>
                  <th className='table-head'>Due</th>
                  <th className='table-head'>Stats</th>
              </tr>
          </table>
      </div>
  );
};

export default ProjectTable;
