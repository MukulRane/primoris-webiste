import React from 'react';
import './MigrationOfExistingArchives.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const MigrationOfExistingArchives = () => {
  return (
    <div className="section-with-equal-wrapper">
      <SectionTitle title="Migration of Existing Archives" dividerColor="#000" />
      <div className="section-with-equal">
        <div className="section-with-equal-card">
          <div className="section-with-equal-content">
            <p>
              SAP archive migration is extremely challenging, time consuming, and expensive. A huge amount of data and documents need to be exported out of SAP, followed by a controlled import through SAP. ARTEC EMA has the benefit of an embedded migration tool for SAP data which allows a fully automatic online migration of any SAP Archive. EMA will be connected to SAP by replacing the repository in SAP using the EMA Content Server. Once connected to SAP, the old archive will be connected to EMA to provide immediate access to all archived data.
            </p>
            <p>
              The change in the setup can be done in just a few minutes. Once activated, EMA will archive all new documents delivered from SAP. Any SAP request for archived documents will be routed through EMA towards the old archive. All requested documents will be stored in EMA for future reference. All of the other documents will be pulled from the old archive until the synchronization is 100%. The EMA SAP migration allows online migration with no downtime and no maintenance.
            </p>
          </div>
          <div className="section-with-equal-image">
            <img src={require('../../../images/ema-for-sap-migration.png')} alt="Migration of Existing Archives" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MigrationOfExistingArchives;
