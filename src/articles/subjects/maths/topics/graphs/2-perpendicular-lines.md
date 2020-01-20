---
title: "Perpendicular Lines"
date: "2019-11-24"
description: "I just saw a y=x movie. Unfortunately, its plot was quite predictable. (Please. Someone help. These jokes are too bad.)"
subject: "maths"
topic: "graphs"
---

I just saw a y=x movie. Unfortunately, its plot was quite predictable. (Please. Someone help. These jokes are too terrible.)

# What makes a line perpendicular?

A perpendicular line is one that **intersects** another at a **90° angle**. Take a look at this demo of two lines **perpendicular to each other**.

https://www.desmos.com/calculator/yazd6hlrqd?embed

The two lines always meet at **right angles**, making them perpendicular.

## Finding equations of perpendicular lines

One phrase scares some students and makes them lose confidence when learning about perpendicular lines: _**NEGATIVE RECIPROCAL**_!

**Negative reciprocal** just means **flip the fraction** and **swap the positive/negative** sign.

So to find the **equation** of a **line perpendicular** to $y=2x$, we'd find the negative reciprocal of the gradient ($2$) which is $-\frac{1}{2}$, and put that back in where the original gradient was to get $y=-\frac{1}{2}x$.

### Walkthrough 1

```react
<ExamQuestion type="no-box" questionNumber={1} marks={2} marksSquareBrackets marksText lines={1} answerLine>
Find the negative reciprocal of <TeX math="3"></TeX>.
</ExamQuestion>
```

- Any whole number can be written as itself over $1$
  - In this case we can say that $3=\frac{3}{1}$.
- Next, we do what I said above.
  - First we swap the fraction: $\frac{3}{1}\to\frac{1}{3}$
  - Then we swap the plus for a minus: $+\frac{1}{3}\to-\frac{1}{3}$

The negative reciprocal of $3$ is $-\frac{1}{3}$. We can see this if we plot $y=3x$ and $y=-\frac{1}{3}x$ on a graph:

https://www.desmos.com/calculator/epuefmgsys?embed

### Walkthrough 2

```react
<ExamQuestion type="no-box" questionNumber={2} marks={2} marksSquareBrackets marksText lines={1} answerLine>
Find the negative reciprocal of <TeX math="-\frac{4}{3}"></TeX>.
</ExamQuestion>
```

- As this number is already a fracttion we can just flip it.
  - First we swap the fraction: $-\frac{4}{3}\to-\frac{3}{4}$
  - Then we get swap the monus to a plus: $-\frac{3}{4}\to+\frac{3}{4}$

The negative reciprocal of $-\frac{4}{3}$ is $\frac{3}{4}$. We can see this if we plot $y=-\frac{4}{3}x$ and $y=\frac{3}{4}x$ on a graph:

https://www.desmos.com/calculator/7eaunlqo3h?embed

# Exam-style questions

```react
<ExamQuestion withSolution type="no-box" questionNumber={3} marks={3} marksSquareBrackets marksText lines={3} answerLine>
Line <b>AB</b> has the equation <TeX math="y=\frac{2}{3}x+7"></TeX>.
<br />
Work out the gradient of the line perpendicular to <b>AB</b>.
</ExamQuestion>
<Collapser title="Solution" solution>
<TeX block math="\text{gradient}=-\frac{3}{2}(=-1.5)"/>
<br/>
<P paragraph>
<TeX math="\text{gradient}=\frac{2}{3}"/>
</P>
<P paragraph>
<TeX math="\frac{2}{3}\to\frac{3}{2}"/>
</P>
<P paragraph>
<TeX math="\frac{3}{3}\to-\frac{3}{2}"/>
</P>
</Collapser>

<ExamQuestion withSolution type="no-box" questionNumber={4} marks={3} marksSquareBrackets marksText lines={3} answerLine>
Line <b>AB</b> has the equation <TeX math="y=-\frac{4}{2}x+7"></TeX>.
<br />
Work out the gradient of the line perpendicular to <b>AB</b>.
</ExamQuestion>
<Collapser title="Solution" solution>
<TeX block math="\text{gradient}=\frac{1}{2}(=0.5)"/>
<br/>
<P paragraph>
<TeX math="\text{gradient}=-\frac{4}{2}=-\frac{2}{1}"/>
</P>
<P paragraph>
<TeX math="-\frac{2}{1}\to-\frac{1}{2}"/>
</P>
<P paragraph>
<TeX math="-\frac{1}{2}\to+\frac{1}{2}"/>
</P>
</Collapser>
```
