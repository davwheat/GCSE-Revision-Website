---
title: "Equations of Linear Lines"
date: "2019-11-24"
description: "You should never trust a maths teacher with graph paper: they're probably plotting something."
subject: "maths"
topic: "graphs"
---

You should never trust a maths teacher with graph paper: they're probably plotting something.

# The Linear Line Equation

If there's one thing you should remember from reading this it should be the linear line equation. This can be used to represent **any straight line** on a graph.

$$
y=mx+c
$$

## What the hell do those letters mean

$m$ is used to represent the gradient of the lines (how steep it is).

$c$ is the y-intercept of the line - where the line crossed across the y axis.

### Example questions

```react
<ExamQuestion withSolution type="no-box" questionNumber={1} marks={1} marksSquareBrackets marksText lines={1} answerLine>
State the gradient of the line <TeX math="y=2x+3"></TeX>.
</ExamQuestion>
<Collapser title="Solution" solution>
<TeX block math="\text{gradient}=2"/>
<br/>
<P paragraph>
<TeX math="y=mx+c"/>
</P>
<P paragraph>
<TeX math="y=2x+3"/>
</P>
<P paragraph>
<TeX math="m=2"/>
</P>
<P paragraph>
<TeX math="\text{gradient}=2"/>
</P>
</Collapser>

<ExamQuestion withSolution type="no-box" questionNumber={2} marks={1} marksSquareBrackets marksText lines={1} answerLine>
Give the coordinates where the line <TeX math="y=2x+3"></TeX> crosses the y-axis.
</ExamQuestion>
<Collapser title="Solution" solution>
<TeX block math="(0,3)"/>
<br/>
<P paragraph>
<TeX math="y=2x+3"/>
</P>
<P paragraph>
<TeX math="\text{y-intercept}=c=+3"/>
</P>
<P paragraph>
<TeX math="\text{y axis}\to x=0"/>
</P>
<P paragraph>
<TeX math="x=0, y=3\to(0,3)"/>
</P>
</Collapser>
```

```react
<Advert />
```

# Equation of a line from two points

The $y=mx+c$ equation is used for many graph-related things, including finding the equation of a line from two points.

So, let's say you've got this question in your exam...

```react
<ExamQuestion type="no-box" questionNumber={3} marks={3} marksSquareBrackets marksText lines={3} answerLine>
Find the equation of the line that passes through the points <TeX math="(1,3)"></TeX> and <TeX math="(4,9)"></TeX>.
<br/>
Give your answer in the form <TeX math="y=mx+c"></TeX>. Do <b>not</b> use a graphical method.
</ExamQuestion>
```

It looks pretty tricky, but, trust me, if you take it one step at a time, you'll be fine.

1. You have to work out the **gradient** of the line, first. To do this, we use:

$$
\text{gradient}=\frac{\text{change in y}}{\text{change in x}}
$$

1. We put our **coordinates** into this equation: $\frac{9-3}{4-1}=\frac{6}{3}=\frac{2}{1}=2$. Our **gradient** is $2$, so we can start our equation.

$$
y=2x+c
$$

3. After, we **swap** out $x$ and $y$ with the $x$ and $y$ values of **one of the coordinates** to get the **y-intercept** value.

$$
3=2(1)+c
$$

$$
3=2+c
$$

$$
c=1
$$

4. So now we can **complete the equation** because we have the **gradient** and **y-intercept**:

$$
y=2x+1
$$

```react
<Advert />
```

### Example questions

Try some of these exam-style questions on your own.

```react
<ExamQuestion withSolution type="no-box" questionNumber={3} marks={3} marksSquareBrackets marksText lines={3} answerLine>
Find the equation of the line that passes through the points <TeX math="(2,2)"></TeX> and <TeX math="(4,0)"></TeX>.
<br/>
Give your answer in the form <TeX math="y=mx+c"></TeX>. Do <b>not</b> use a graphical method.
</ExamQuestion>
<Collapser title="Solution" solution>
<TeX block math="y=-x+4"/>
<br/>
<P paragraph>
<TeX math="\text{gradient}=\frac{\text{change in y}}{\text{change in x}}"/>
</P>
<P paragraph>
<TeX math="\text{gradient}=\frac{0-2}{4-2}=\frac{-2}{2}=-1"/>
</P>
<P paragraph>
<TeX math="4=-1(0)+c"/>
</P>
<P paragraph>
<TeX math="c=+4"/>
</P>
<P paragraph>
<TeX math="(y=-1x+4)\equiv(y=-x+4)"/>
</P>
</Collapser>

<ExamQuestion withSolution type="no-box" questionNumber={3} marks={3} marksSquareBrackets marksText lines={3} answerLine>
Find the equation of the line that passes through the points <TeX math="(0,0)"></TeX> and <TeX math="(3,4)"></TeX>.
<br/>
Give your answer in the form <TeX math="y=mx+c"></TeX>. Do <b>not</b> use a graphical method.
</ExamQuestion>
<Collapser title="Solution" solution>
<TeX block math="y=\frac{4}{3}x+0"/>
<br/>
<P paragraph>
<TeX math="\text{gradient}=\frac{\text{change in y}}{\text{change in x}}"/>
</P>
<P paragraph>
<TeX math="\text{gradient}=\frac{4-0}{3-0}=\frac{4}{3}"/>
</P>
<P paragraph>
One of the points is <TeX math="(0,0)"/>, which is the origin. This immediately tells us that our y-intercept (<TeX math="c"/>) is <TeX math="0"/>.
</P>
<P paragraph>
Even though our y-intercept is <TeX math="0"/>, we must still include it in the equation as the question asked for the answer in <TeX math="y=mx+c"></TeX> form.
</P>
<P paragraph>
<TeX math="y=\frac{4}{3}x+0"/>
</P>
</Collapser>
```

```react
<Advert />
```
