import React from 'react';
import {Modal, Spin, Table} from 'antd';
import {vehicleColumns} from "../../utils/constant";

const VehicleModal = ({ visible, onClose, vehicles, isLoading, apiCallFor }) => {

  return (
    <Modal open={visible} onCancel={onClose} footer={null} title="Vehicles">
      {isLoading && apiCallFor==='vehicle' ? <Spin/> :<Table dataSource={vehicles || []} columns={vehicleColumns} rowKey="name"/>}
    </Modal>
  );
};

export default VehicleModal;
