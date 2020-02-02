---
title: "Circle Graphs"
date: "2019-11-24"
description: "I'll happily do algebra, geometry, trigonometry, and probability but graphing is where I draw the line."
subject: "maths"
topic: "graphs"
higherOnly: true
---

I'll happily do algebra, geometry, trigonometry, and probability but graphing is where I _draw the line_.

# What the hell is a circle graph

I mean, I'm not quite sure what to say here... It's a _graph_... That's a _circle_!

https://www.desmos.com/calculator/1eqdtjbzgs?embed

Loopy!

# Circle Graph Equations

This is gonna look super complicated but please don't go! I need the advertising mo-- I mean... you need the learning!

The **equation of a circle** is

$$
x^2+y^2=r^2
$$

Where $r$ is the **radius of the circle**.

For example, $x^2+y^2=25$ would be a circle with **centre** $(0,0)$ and **radius 5**, as $\sqrt{25}=5$.

```react
<Advert />
```

## Exam-style question

```react
<ExamQuestion withSolution type="no-box" questionNumber={1} marks={1} marksSquareBrackets marksText lines={1} answerLine>
Give the radius of the circle described by the equation <TeX math="x^2+y^2=100"></TeX>.
</ExamQuestion>
<Collapser title="Solution" solution>
<TeX block math="10"/>
<br/>
<P paragraph>
<TeX math="\sqrt{100}=10"/>
</P>
</Collapser>
```

# Tangents to a circle

A tangent to a circle is any **straight line** that **touches** the circle at only one point.

https://www.desmos.com/calculator/4haksob59p?embed

In the above example, the line $x=5$ is **tangent to** the circle $x^2+y^2=25$ as it touches the circle at one point: $(5,0)$.

## Equations of the tangent to a circle

The easiest way to explain how to find the equation of a tangent to a circle is to show you the method.

https://www.desmos.com/calculator/w12wvjw2eq?embed

```react
<ExamQuestion type="no-box" questionNumber={2} marks={5} marksSquareBrackets marksText lines={5} answerLine>
Find the equation of the tangent to the circle <TeX math="x^2+y^2=25"></TeX> at point <b>P</b>.
</ExamQuestion>
```

1. First we have to find out the coordinates of point P. Using the graph, we can see that point P is at $(-3,4)$.
   https://www.desmos.com/calculator/l9ekthtleo?embed&mini" width="100%" height="300px" style="margin:12px 0 0 0" frameborder="0"></iframe>
2. Next, we have to work out the equation of the line that passes through the points $(0,0)$ and $(-3,4)$ (P).
   1. Using the knowledge from a [previous article](subjects/maths/topics/graphs/1-equations-of-lines/), we can work out that the line would be $y=-\frac{4}{3}x$.
   2. Now we can draw that line on the graph, too
      https://www.desmos.com/calculator/hjp9wpuuwk?embed&mini
3. Now we need to work out the equation of the tangent
   1. Using our knowledge of [perpendicular lines](subjects/maths/topics/graphs/2-perpendicular-lines/), we know that the gradient of the tangent will be the **negative reciprocal** of the gradient of the line we just drew: $-\frac{4}{3}\to\frac{3}{4}$
   2. Now we have to use our knowledge of [calculating the equation of a line between two points](subjects/maths/topics/graphs/1-equations-of-lines/) to work out the equation of the line with gradient $\frac{3}{4}$ passing through point $(-3,4)$
   3. The answer to this is $y=\frac{3}{4}x+\frac{25}{4}$.

Usually, the exam board tends to use circles with radius $5$ as they work nicely with the tangents, due to being a pythagorean triple $(3,4,5)$.

```react
<Advert />
```
