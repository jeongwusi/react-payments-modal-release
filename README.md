# react-payments-modal-release

우아한테크코스 레벨 2 페이먼츠 미션

- 모달 배포하기

## 설치 방법

```
npm i react-payments-modal-release
```

## 사용 방법

**Modal 컴포넌트 불러오기**

```jsx
import Modal from "react-payments-modal-release";
```

**Modal 사용하기**

```jsx
<Modal onOpen={onOpen} onClose={onClose}>
  <div>우리카드</div>
</Modal>
```

## Props

- onClose: 모달을 열고 닫기 위한 요소로 함수의 형태입니다.
- children: 모달 내부에 들어갈 콘텐츠입니다.

```jsx
import { Modal } from "react-payments-modal-release";

const CardCompanyModal = ({ onOpen, onClose }) => {
  return (
    <Modal onOpen={onOpen} onClose={onClose}>
      <div>우리카드</div>
    </Modal>
  );
};

export default CardCompanyModal;
```
