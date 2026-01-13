import { Markdown } from '@agentscope-ai/chat';


const content = `根据您的需求，以下是几款专为拍照优化的手机推荐：

### 1. **通义 Vivid 7 —— 智能摄影新体验**  
- **核心优势**：搭载AI智能摄影功能，可自动优化色彩与细节，轻松拍出专业级照片[^1]。  
- **配置亮点**：6.5英寸1080P全面屏、8GB RAM + 128GB存储、4500mAh电池。  
- **参考价格**：2999-3299元。  

### 2. **百炼 Zephyr Z9 —— 轻薄便携的远摄利器**  
- **核心优势**：配备30倍数字变焦镜头，可清晰捕捉远处细节，适合旅行和远景拍摄[^1]。  
- **配置亮点**：6.4英寸轻薄机身、128GB存储 + 6GB RAM、4000mAh电池。  
- **参考价格**：2499-2799元。  

### 3. **百炼 X1 —— 全能影像旗舰**  
- **核心优势**：超感光四摄系统，支持多场景拍摄，尤其适合暗光环境成像[^1]。  
- **配置亮点**：6.7英寸2K高刷屏、12GB RAM + 256GB存储、5000mAh长续航电池。  
- **参考价格**：4599-4999元。  

---

[^1]: [百炼手机产品介绍](https://bailian-datahub-data-pre.oss-cn-hangzhou.aliyuncs.com/10112/multimodal/docJson/%E7%99%BE%E7%82%BC%E7%B3%BB%E5%88%97%E6%89%8B%E6%9C%BA%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D_1765960149745.json?Expires=1766219359&OSSAccessKeyId=LTAI5tKzNnKPFwCJSCpxx51h&Signature=zmVcZK31IUdvQ0ZeBd4Omz4vd1Y%3D)`;


export default function () {
  return <Markdown
    content={content}
  />;
}