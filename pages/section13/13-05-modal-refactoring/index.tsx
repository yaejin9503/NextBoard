import { useState } from 'react'; 
import { Button, Modal, Space } from 'antd';
import DaumPostcodeEmbed from 'react-daum-postcode';
import type { Address } from 'react-daum-postcode'; 

export default function ModalAlertPage(){ 

  const [isOpen, setOpen ] = useState<boolean>(false); 

  const handleComplete = (data : Address) :void => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    onToggleModal(); 
  };

  const onToggleModal = () => { 
    setOpen((prev) => !prev)
  }


  return( 
    <>
      <Button type="primary" onClick={onToggleModal}>
       찾아보기
      </Button>
      { /** 모달 종료 방식 1- 숨기는 방법  */}
      {/* <Modal title="" 
            open={isModalOpen} 
            onOk={() => {setModalOpen(false)}} 
            onCancel={() => {setModalOpen(false)}}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}

      { /** 모달 종료 방식 2 - 삭제하는 방법  */}
      {isOpen && ( 
         <Modal title="" 
         open={true} 
         onOk={onToggleModal} 
         onCancel={onToggleModal}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal>
      )}
    </>
  )
}