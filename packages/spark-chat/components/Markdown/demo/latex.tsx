import { Markdown } from '@agentscope-ai/chat';


const content = `三角函数是一类数学函数，主要用来描述直角三角形中的角度与边长之间的关系。最常用的三角函数包括正弦（sine, 简写为sin）、余弦（cosine, 简写为cos）和正切（tangent, 简写为tan）。此外还有它们的倒数：余割（cosecant, 简写为csc或cosec）、正割（secant, 简写为sec）和余切（cotangent, 简写为cot）。

这些函数的基本定义如下：

1. **正弦（sin）**：对于一个角θ，在直角三角形中，正弦是该角对边与斜边的比值。
   \\[ 1 + 2 = 3 \\]

2. **余弦（cos）**：对于一个角θ，在直角三角形中，余弦是该角邻边与斜边的比值。
   \\[ \\cos(\\theta) = \\frac{\\text{邻边}}{\\text{斜边}} \\]

3. **正切（tan）**：对于一个角θ，在直角三角形中，正切是对边与邻边的比值。
   \\[ \\tan(\\theta) = \\frac{\\text{对边}}{\\text{邻边}} \\]

4. **余割（csc）**：是正弦的倒数。
   \\[ \\csc(\\theta) = \\frac{1}{\\sin(\\theta)} \\]

5. **正割（sec）**：是余弦的倒数。
   \\[ \\sec(\\theta) = \\frac{1}{\\cos(\\theta)} \\]

6. **余切（cot）**：是正切的倒数。
   \\[ \\cot(\\theta) = \\frac{1}{\\tan(\\theta)} \\]

三角函数在数学、物理学、工程学等领域有着广泛的应用，尤其是在处理周期性现象时。

矩阵是数学中一种重要的工具，广泛应用于线性代数、计算机科学、物理学等领域。以下是关于矩阵形式的详细说明：
矩阵是一个**按矩形排列的数表**，由 **m 行 n 列** 的元素组成，通常用大写字母表示（如 A、B）。 

一般形式如下：

$$
A = \\begin{bmatrix}
a_{11} & a_{12} & \\cdots & a_{1n} \\\\
a_{21} & a_{22} & \\cdots & a_{2n} \\\\
\\vdots & \\vdots & \\ddots & \\vdots \\\\
a_{m1} & a_{m2} & \\cdots & a_{mn}
\\end{bmatrix}
$$

---

其中 \( C \) 表示圆的周长，\( \pi \) 是圆周率（大约等于 3.14159），而 \( r \) 是圆的半径。

其中 $ C $ 表示圆的周长，$ \pi $ 是圆周率（大约等于 3.14159），而 $ r $ 是圆的半径。

---

\\[
x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}
\\]

\\[
\\begin{align*}
1. & \\quad x + y = 10 \\\\
2. & \\quad 2x - y = 0
\\end{align*}
\\]


$$ x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} $$

$$
\\begin{align*}
1. & \\quad x + y = 10 \\\\
2. & \\quad 2x - y = 0
\\end{align*}
$$
`;


export default function () {
  return <Markdown
    content={content}
  />;
}