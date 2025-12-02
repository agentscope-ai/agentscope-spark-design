import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-chat-anywhere-welcome-default {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

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
    margin-top: -10px;
  }
  
  &-prompts {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  }

  &-prompt {
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colorFillQuaternary};
    color: ${({ theme }) => theme.colorText};
    font-size: 14px;
    padding: 10px 16px;
    border-radius: 8px;
    cursor: pointer;
    gap: 20px;
    

    &:hover {
      background-color: ${({ theme }) => theme.colorFillTertiary};
    }
    
  }
}
`;
