import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-chat-anywhere-welcome-default {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;

  &-greeting {
   color: ${({ theme }) => theme.colorText};
   font-size: 16px;
   line-height: 26px;
   font-weight: 500;
  }

  &-description {
    color: ${({ theme }) => theme.colorTextSecondary};
    font-size: 12px;
    line-height: 18px;
  }
  
  &-prompts {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    width: 360px;
    margin: 10px auto;
  }

  &-prompt {
    height: 42px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colorFillQuaternary};
    color: ${({ theme }) => theme.colorText};
    font-size: 14px;
    padding: 10px 16px;
    border-radius: 8px;
    cursor: pointer;
    gap: 12px;

    &-icon {
      width: 20px;
      height: 20px;
    }

    &-label {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    

    &:hover {
      background-color: ${({ theme }) => theme.colorFillTertiary};
    }
    
  }
}
`;
