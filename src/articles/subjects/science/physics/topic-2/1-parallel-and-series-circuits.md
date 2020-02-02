---
title: "Circuits: I've got the power!"
date: "2019-11-14"
description: "A circuit is an interconnection of electrical components. Don't get all loopy over them! Just try your best and you'll get right into the flow."
subject: "physics"
subjectGroup: "science"
topic: "topic 2: electricity"
---

A circuit is an interconnection of electrical components. Don't get all loopy over them! Just try your best and you'll get right into the flow.

# Types of circuit

There are two types of circuit that you need to know: **series** and **parallel**. These types of circuits differ in several ways, including the rules used to calculate potential difference, current, and resistance.

# Series circuits

![Figure 1: A series circuit with two bulbs and a 12 V battery](articles/physics/topic-2/series-bulb-circuit.svg)

In _Figure 1_, two **identical** bulbs are connected **in series** with a 12 V battery. The potential difference (sometimes called PD or voltage) is shared equally between the two bulbs. The voltmeters each read 6V because $\frac{12 V}{2 bulbs}=6V$.

## Series circuit rules

- The same current flows through each component
- The total potential difference of the power supply is shared between each component, _n_: $V_{supply}=V_{1}+V_{2}+...+V_{n}$
- The total resistance of two components is equal to the sum of each components' resistance: $R_{total} = R_{1} + R_{2}$

```react
<Advert />
```

### Example

![Two resistors (5 ohm & 10 ohm) connected in series with each other.](articles/physics/topic-2/resistance.svg)

Calculate the **total resistance** between **A** and **B**.

$R_{total} = 5 ohms + 10 ohms = 15 ohms$

The total resistance between **A** and **B** is **15 ohms**.

# Parallel circuits

![Figure 2: a parallel circuit with two lamps, each connected to a seperate branch, and a 12 V battery.](articles/physics/topic-2/parallel-bulb-circuit.svg)

In Figure 2, two **identical** lamps have been connected in parallel with a 12 V battery. Following the rules of parallel circuits laid out below, there is a 12 V potential difference across each lamp and the same current flowing through each branch of the parallel circuit.

When components are joined in parallel, the total current of the **circuit** increases. The total current of the circuit is higher than it was in series (1A in parallel, 0.5A in series). Since $\text{Resistance}=\frac{\text{Voltage}}{\text{Current}}$, the higher the current, the lower the resistance - resistance is **inversely proportional** to current, It's because of this that the combined resistance of the two lamps in parallel is 12 ohms ($R=\frac{\text{12 V}}{\text{1 A}}=\text{12 ohms}$) and is 24 ohms in the series circuit ($R=\frac{\text{12 V}}{\text{0.5 A}}=\text{24 ohms}$).

## Rules

- The potential difference across each branch of a parallel circuit is **the same**.
- The total current of the circuit is the sum of the currents through each parallel branch.
- The total resistance across _n_ components in parallel is calculated with this formula: $\frac{1}{R_{\text{total}}}=\frac{1}{R_{\text{1}}}+\frac{1}{R_{\text{2}}}+...+\frac{1}{R_{\text{n}}}$

### Example

![Two resistors (5 ohm & 10 ohm) connected in parallel with each other.](articles/physics/topic-2/parallel-resistance.svg)

Calculate the **total resistance** between **X** and **Y** to 2 decimal places.

$\frac{1}{R_{\text{total}}}=\frac{1}{5 ohms}+\frac{1}{10 ohms}=0.1+0.2=\frac{1}{0.3}=3.33333... ohms$

The total resistance between **X** and **Y** is **3.33 ohms**.

```react
<Advert />
```
