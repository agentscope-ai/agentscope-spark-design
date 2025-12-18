import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-image-generator {

  .${(p) => p.theme.prefixCls}-image {
    border-radius: 8px;
    filter: blur(20px);
    animation: ${(p) => p.theme.prefixCls}clearBlur 1s ease forwards;
    overflow: hidden;
  }


  &-wrapper {
    overflow: hidden;
  }


  &-text {
    position: relative;
    display: flex;
    gap: 8px;
    height: 40px;
    align-items: center;
    font-size: 14px;
    line-height: 26px;
    color: ${(p) => p.theme.colorText};


    &-success {
      color: ${(p) => p.theme.colorSuccess};
      font-size: 20px;
    }
  }

  &-default-skeleton {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;


    &-bg {
      position: absolute;
      inset: 0;
      

      &-animate {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 250%;
        height: 250%;
        transform: translate(-50%, -50%) rotate(0deg);
        animation: ${(p) => p.theme.prefixCls}spin 6s linear infinite;
        background: radial-gradient(103.37% 63.46% at 108.3% 0%, rgba(122, 239, 214, 0.60) 0%, rgba(122, 239, 214, 0.00) 100%), radial-gradient(176.66% 108.46% at -9.16% 114.87%, #938CD4 0%, #E4E2FD 100%), #E4E2FD;
      }
    }

    &-icon {
      width: 32px;
      height: 32px;
    } 

    &-content {
      display: flex;
      flex-direction: column;
      gap: 4px;
      align-items: center;
      justify-content: center;
      z-index: 1;
      
    }

    &-text {
      margin-top: 8px;
      font-size: 14px;
      color: ${(p) => p.theme.colorBgBase};
    }
  }
}



@keyframes ${(p) => p.theme.prefixCls}clearBlur {
  from {
    filter: blur(20px);
  }
  to {
    filter: blur(0);
  }
}

@keyframes ${(p) => p.theme.prefixCls}spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
`;
