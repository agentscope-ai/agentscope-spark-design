import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-operate-card {
  width: 100%;
  border-radius: ${(p) => p.theme.borderRadiusLG}px;
  overflow: hidden;
  background-color: ${(p) => p.theme.colorFillTertiary};

  &-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 12px;
    height: 32px;

    &-icon {
      font-size: 16px;
    }

    &-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 13px;
      font-weight: 500;
      color: ${(p) => p.theme.colorText};
    }

    &-description {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      color: ${(p) => p.theme.colorTextTertiary};
    }

    &-arrow {
      margin: 0 0 0 auto;
    }

    &-has-body {
      cursor: pointer;
    }
  }

  &-body {
    opacity: 0;
    animation: ${(p) =>
      p.theme.prefixCls}-operate-card-body-open 0.2s ease-in-out forwards;
    
    @keyframes ${(p) => p.theme.prefixCls}-operate-card-body-open {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  
  }


  &-line-body {
    margin: 0 12px 12px 20px;
    border-left: 1px solid ${(p) => p.theme.colorBorderSecondary};
  }

  &-thinking {
    padding-left: 16px;
    font-size: 12px;
    line-height: 20px;
    color: ${(p) => p.theme.colorTextTertiary};
    opacity: 0.85;
    white-space: pre-wrap;
  }


  &-todo-list {

    &-item {
      height: 32px;
      display: flex;
      align-items: center;
      padding: 0 12px;
      gap: 8px;
      
      color: ${(p) => p.theme.colorText};


      &-done {
        color: ${(p) => p.theme.colorTextTertiary};
      }

      &-icon {
        font-size: 16px;
      }

      &-title {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 12px;
      }

      &-done {
        
      }

    }
  
  }


  &-web-search-item {
    display: flex;
    height: 32px;
    align-items: center;
    padding: 0 12px;
    gap: 8px;
    color: ${(p) => p.theme.colorText};
    cursor: pointer;

    &-icon {
      display: block;
      width: 16px;
      height: 16px;
      border: 1px solid ${(p) => p.theme.colorBorderSecondary};
      border-radius: 99px;
    }

    &-title {
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: ${(p) => p.theme.colorTextSecondary};

      &:hover {
        color: ${(p) => p.theme.colorText};
        
      }

    }

    &-subTitle {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      border-left: 1px solid ${(p) => p.theme.colorBorderSecondary};
      font-size: 12px;
      line-height: 1;
      color: ${(p) => p.theme.colorTextTertiary};
      padding-left: 8px;
      margin-left: 4px;
    }

  }


  &-tool-call-block {
    margin-left: 16px;
    margin-top: 8px;

  
    &-title {
      font-size: 12px;
      color: ${(p) => p.theme.colorText};
      line-height: 20px;
      margin-bottom: 4px;
    }

  }



  &-device-action {
    height: auto;
    align-items: flex-start;

    &-icon {
      margin-top: 6px;
    }

    &-time {
      margin-bottom: 4px;
      font-size: 12px;
      line-height: 20px;
      color: ${(p) => p.theme.colorTextSecondary};
    }

    &-content {
      
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    &-description {
      width: 0;
      flex: 1;
      margin: 8px 0 6px 0;
    }

    &-image {
      margin: 4px 0;
      height: 32px;
      margin-left: 8px;
      display: block;
      border-radius: 6px;
      overflow: hidden;
      border: 1px solid ${(p) => p.theme.colorBorderSecondary};
    }


    
  }

  &-rag-empty-placeholder {
    padding: 16px 0;
    border: 1px solid ${(p) => p.theme.colorBorderSecondary};
    border-radius: 6px;
    background-color: ${(p) => p.theme.colorBgBase};
    line-height: 20px;
    font-size: 12px;
    color: ${(p) => p.theme.colorTextSecondary};
    margin: 0 12px 12px 12px;
  }

  &-rag-query {
    margin: 0 12px 8px 12px;
    line-height: 20px;
    font-size: 12px;
    color: ${(p) => p.theme.colorTextSecondary};

    &-title {
      font-weight: 500;
    }

    &-images {
      margin: 0 12px 8px 12px;
      display: flex;
      gap: 8px;
    }
  }

  &-rag-item {
    margin-left: 16px;

    &-title {
      font-size: 12px;
      color: ${(p) => p.theme.colorText};
      line-height: 20px;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    &-content {
      padding: 8px;
      border-radius: 6px;
      background-color: ${(p) => p.theme.colorFillTertiary};

      &-text {
        font-size: 12px;
        line-height: 20px;
      }
    }

    &-images {
      margin-top: 8px;
      padding: 8px;
      display: flex;
      gap: 8px;
      background-color: ${(p) => p.theme.colorFillQuaternary};
      
    }

    &-footer {
      display: block;
      margin-top: 8px;
      font-size: 12px;
      line-height: 20px;
      color: ${(p) => p.theme.colorTextTertiary};
    }

  }

  &-rag-item ~ &-rag-item {
    margin-top: 8px;
  }
}
`;
