---
{"dg-publish":true,"dg-path":"Notes/Signals and Systems","permalink":"/notes/signals-and-systems/","dgShowToc":"true","updated":"2025-01-24T10:22:34.000+01:00"}
---

This note will mostly follow along the book [Signals and Systems - 2nd edition](https://www.amazon.com/Signals-Systems-2nd-Alan-Oppenheim/dp/0138147574) by Alan V. Oppenheim and Alan S. Willsky. Not every chapter is covered, especially the more 'basic' ones. It is not supposed to be a simple summary, but instead a place where the main concepts are covered, without having to read through 987 pages again/yourself.

**Table of Contents**

- [[Notes/Signals and Systems#1 Signals and Systems\|1 Signals and Systems]]
- [[Notes/Signals and Systems#2 Linear Time-Invariant Systems\|2 Linear Time-Invariant Systems]]
- [[Notes/Signals and Systems#3 Fourier Series Representation of Periodic Signals\|3 Fourier Series Representation of Periodic Signals]]
- [[Notes/Signals and Systems#4 Continuous-Time Fourier Transform\|4 Continuous-Time Fourier Transform]]

---
While working on my master’s thesis and trying to figure out how to perform accurate noise measurements, I discovered that signal processing is about much more than just Fourier transforming your measured signal. This realisation hit me when we were using a highly sensitive oscilloscope to measure laser noise. After Fourier transforming the data—which was time-consuming and computationally intensive—we noticed something surprising: the noise trace was _still_ too noisy.
Naturally, my first instinct was to Google "how to make noisy data smooth." I quickly learned there are countless ways to tackle this problem. However, I also realised how important it is in signal processing to truly understand _where_ and _how_ the data was obtained in the first place, and how you process it. Sure, applying a moving average might smooth the trace, but should I do that in the time domain or the frequency domain? And what if the issue isn’t the processing at all—what if my measurement setup itself isn’t suited to the task? How could that even be possible when I’m using the best and fastest oscilloscope on the market?
It didn’t take long for me to realise this was a fascinating topic, and I started reading more about it in my free time.

---
# 1 Signals and Systems 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=32&selection=2,0,6,7|•]]

## 1.1 Continuous-Time and Discrete-Time Signals [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=32&selection=69,0,79,7|•]]

Signals are represented mathematically as functions of one or more independent variables. Here, attention is on signals involving a single independent variable, usually time $t$ for convenience. In the case of continuous-time signals, the independent variable is continuous, and thus these signals are defined for a continuum of values of the independent variable. On the other hand, discrete-time signals are defined only at discrete times, and consequently, for these signals, the independent variable takes on only a discrete set of values. 

For continuous-time signals, we will enclose the independent variable in parentheses $(\cdot)$, whereas for discrete-time signals we will use brackets $[\cdot]$ to enclose the independent variable. A discrete-time signal $x[n]$ may represent a phenomenon for which the independent variable is inherently discrete. Signals such as demographic data are examples of this. 

On the other hand, a very important class of discrete-time signals arises from the sampling of continuous-time signals. In this case, the discrete-time signal $x[n]$ represents successive samples of an underlying phenomenon for which the independent variable is continuous. 

--- 
## 1.2 Energy and Power [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=36&selection=158,0,170,5|•]]

In many applications, the signals considered are directly related to physical quantities capturing power and energy in a physical system. As a starting example, consider voltage $v(t)$ and current $I(t)$ across a resistor with resistance $R$. The instantaneous power is $p(t) = v(t)I(t) = \frac{v^2(t)}{R}$. This allows us to calculate the total energy expended over the time interval $t_1 < t < t_2$ as: 
$$
\int_{t_1}^{t_2} p(t) \, dt,
$$
and the average power as:
$$
\frac{1}{t_2 - t_1} \int_{t_1}^{t_2} p(t) \, dt.
$$

With these simple physical examples in mind, it is common to use similar terminology for power and energy for *any* continuous-time signal $x(t)$ and *any* discrete-time signal $x[n]$. 

The energy in a given time interval $[t_1, t_2]$ is:
$$
E = \int_{t_1}^{t_2} |x(t)|^2 \, dt \quad \text{or} \quad E = \sum_{n=n_1}^{n_2} |x[n]|^2,
$$
while the time-averaged power is:
$$
P = \frac{E}{t_2 - t_1} \quad \text{or} \quad P = \frac{E}{n_2 - n_1 + 1}.
$$

For signals over infinite time intervals, we find:
$$
E_\infty = \int_{-\infty}^\infty |x(t)|^2 \, dt \quad \text{or} \quad E_\infty = \sum_{n=-\infty}^\infty |x[n]|^2.
$$
Note that for some signals, these integrals might not converge (for example, a non-zero constant signal). Such signals have infinite energy. The time-averaged power then becomes:
$$
P_\infty = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^T |x(t)|^2 \, dt \quad \text{or} \quad P_\infty = \lim_{N \to \infty} \frac{1}{2N + 1} \sum_{n=-N}^N |x[n]|^2.
$$

These definitions allow us to identify three important classes of signals:
1. **Finite energy signals**: $E_\infty < \infty \implies P_\infty = 0.$
2. **Finite average power signals**: $P_\infty < \infty \implies E_\infty = \infty.$
3. **Signals with neither finite energy nor finite power**, such as $x(t) = t$.

---
## 1.3 Transformations [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=38&selection=226,0,236,8|•]]

A very central concept in signal and system analysis is that of the transformation of a signal. Transformations happen all around us: digital-to-analog converters or noise reduction in music systems, for example. 

Some important and very fundamental transformations:
- **Time shift**: $x(t) \to x(t - t_0)$,
- **Time reversal**: $x(t) \to x(-t)$, and
- **Time scaling**: $x(t) \to x(\alpha t)$.

---
## 1.4 Periodic Signals [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=42&selection=502,0,506,7|•]]

A very important class of signals encountered frequently is periodic signals. The defining property is that for a positive value of $T$, it holds that:
$$
x(t) = x(t + T),
$$
for all values of $t$. In other words, a periodic signal is unchanged by a time shift $T$. Then, the signal $x(t)$ is periodic with period $T$. 

---
## 1.5 Even and Odd Signals [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=44&selection=36,0,46,7|•]]

Another set of useful properties of signals relates to their symmetry under time reversal. A signal is considered **even** if $x(t) = x(-t)$, and **odd** if $x(-t) = -x(t)$. An odd signal must be zero at time zero, as we can see from the definition. Thus, every signal can be written as a superposition of an odd and even part:
$$
x(t) = \mathcal{E}(x) + \mathcal{O}(x) = \frac{x(t) + x(-t)}{2} + \frac{x(t) - x(-t)}{2}.
$$

---
## 1.6 Exponential Signals [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=46&selection=12,0,17,18|•]]

Consider the continuous-time complex exponential signal of the form $x(t) = C \cdot e^{\alpha t}$. Depending on the values of $\alpha$ and $C$, these signals can have different characteristics:
1. **Real exponential signals**: $\alpha, C \in \mathbb{R}$. These have two different behaviors:
   1. $\alpha < 0 \Rightarrow$ exponential decay, or
   2. $\alpha > 0 \Rightarrow$ exponential growth with time.
2. **Periodic complex exponential signals**: $\mathfrak{Re}(\alpha) = 0$. These signals are periodic with periodicity $T_0 = \frac{2 \pi}{\omega_0}$ for $\alpha = i\omega_0$. Like any periodic signal, they have infinite total energy but finite average power. 
3. **General complex exponential signals**: $\alpha, C \in \mathbb{C}$. We can differentiate three cases:
   1. $\mathfrak{Re}(\alpha) = 0$: $x(t)$ is sinusoidal,
   2. $\mathfrak{Re}(\alpha) > 0$: $x(t)$ is sinusoidal multiplied by an exponentially increasing envelope, or
   3. $\mathfrak{Re}(\alpha) < 0$: $x(t)$ is sinusoidal multiplied by an exponentially decaying envelope.

The discussions from [[Notes/Signals and Systems#1.3 Transformations\|#1.3 Transformations]] to [[Notes/Signals and Systems#1.6 Exponential signals\|#1.6 Exponential signals]] are exactly analogous in the case of a discrete-time signal and will not be repeated. Note that this is the last notice about this occurrence.

---
## 1.7 Unit Impulse and Unit Step [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=61&selection=111,0,127,9|•]]

In this section, several other basic signals of considerable importance are introduced. Consider the unit impulse:
$$
\delta[n] =
\begin{cases} 
1 & \text{if } n = 0, \\
0 & \text{otherwise.}
\end{cases}
$$

And the unit step:
$$
u[n] = 
\begin{cases} 
1 & \text{if } n \geq 0, \\
0 & \text{otherwise.}
\end{cases}
$$

There is a close relation between the unit impulse and the unit step. In particular, the unit impulse is the _first difference_ of the unit step: 
$$
\delta[n] = u[n] - u[n-1],
$$
while the unit step is the _running sum_ of the unit impulse: 
$$
u[n] = \sum_{m=-\infty}^{n} \delta[m] = \sum_{k=0}^{\infty} \delta[n-k].
$$

Further, we find that $x[n] \delta\left[n-n_0\right] = x\left[n_0\right] \delta\left[n-n_0\right]$. For continuous-time signals, the relation is:
$$
u(t) = \int_{-\infty}^t \delta(\tau) \, d\tau = \int_{0}^\infty \delta(t - \sigma) \, d\sigma,
$$
and 
$$
\delta(t) = \frac{d u(t)}{dt}.
$$

The unit impulse should be considered an idealization of an infinitely short pulse. Any system has some "inertia" associated with it, such that the response of a system to a _sufficiently short_ pulse is independent of the pulse duration or shape. The primary characteristic of the pulse is therefore only its integrated effect, e.g., its area. For a system with a fast response, the pulse must be shorter for this approximation to hold. The ideal unit impulse is short enough for _any_ system. 

---
## 1.8 Interconnection of Systems [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=72&selection=144,0,150,7|•]]

An important idea is the concept of interconnecting systems since many real systems are built as interconnections of several subsystems. By breaking down a system into its interconnection of simpler subsystems, it may be possible to synthesize complex systems out of simpler, basic building blocks. The most frequently encountered connections are the _series/cascade_ and _parallel_ types:
![Attachments/Notes/Signals and Systems/IMG-0120164805.webp|900](/img/user/Attachments/Notes/Signals%20and%20Systems/IMG-0120164805.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=73&rect=88,274,456,600|•]]

The symbol $\bigoplus$ denotes addition, so that the output of the parallel system is the sum of the outputs of systems 1 and 2. Another important type is the feedback interconnection:
![Attachments/Notes/Signals and Systems/IMG-0120164805-1.webp|900](/img/user/Attachments/Notes/Signals%20and%20Systems/IMG-0120164805-1.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=74&rect=54,505,325,597|•]]

The output of system 1 is the input to system 2, while the output of system 2 is fed back and added to the external input to produce the actual input to system 1. These types of connections often arise in real systems. Consider figure (a) and note that it is equivalent to (b):
![Attachments/Notes/Signals and Systems/IMG-0120164805-2.webp|900](/img/user/Attachments/Notes/Signals%20and%20Systems/IMG-0120164805-2.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=74&rect=79,82,323,316|•]]

---
## 1.9 Basic Properties

### 1.9.1 Memory [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=75&selection=51,0,63,6|•]]

A system is said to be _memoryless_ if the output at a given time depends only on the input at that time. A basic memoryless system is the identity system, whose output is its input. 

As counterexamples:
- The accumulator $y[n] = \sum_{k=-\infty}^{n} x[k]$ has memory.
- The delay system $y[n] = x[n-1]$ also has memory. 

A capacitor is an example of a real system with memory, since the output (voltage) is:
$$
V(t) = \frac{1}{C} \int_{-\infty}^{t} I(\tau) \, d\tau.
$$

### 1.9.2 Invertibility and Inverse Systems [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=76&selection=165,0,173,7|•]]

A system is said to be invertible if distinct inputs produce distinct outputs. An inverse system exists such that:
![Attachments/Notes/Signals and Systems/IMG-0120164806.webp|900](/img/user/Attachments/Notes/Signals%20and%20Systems/IMG-0120164806.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=77&rect=106,565,359,612|•]]

Invertibility is important in contexts like encoding and decoding systems, such as in communication or cryptography. For example, lossless coding requires that the encoder must be invertible.

### 1.9.3 Causality [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=77&selection=205,0,209,9|•]]

A system is causal if the output at time $t$ depends only on values of the input at the present time or in the past. A system is nonanticipative if it does not depend on future input values. Examples of non-causal systems:
$$
y[n] = x[n] - x[n+1], \quad y(t) = x(t+1).
$$

### 1.9.4 Stability [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=79&selection=55,0,59,9|•]]

A system is stable if small inputs lead to bounded outputs. For example:
![Attachments/Notes/Signals and Systems/IMG-0120164806-1.webp|400](/img/user/Attachments/Notes/Signals%20and%20Systems/IMG-0120164806-1.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=79&rect=188,46,306,245|•]]

If the input is bounded, the output must also remain bounded.

### 1.9.5 Time Invariance [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=81&selection=204,0,206,15|•]]

A system is time-invariant if its behavior and characteristics are fixed over time. Formally:
$$
x[n] \to y[n] \Leftrightarrow x[n-n_0] \to y[n-n_0].
$$

### 1.9.6 Linearity [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=84&selection=70,0,74,9|•]]

A linear system fulfills:
1. Additivity: $x_1 + x_2 \to y_1 + y_2$,
2. Homogeneity: $\alpha x_1 \to \alpha y_1$.

These can be combined:
$$
\alpha x_1 + \beta x_2 \to \alpha y_1 + \beta y_2.
$$

---
# 2 Linear Time-Invariant Systems
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=105&selection=2,0,6,7|•]]

In [[Notes/Signals and Systems#1 Signals and Systems\|Chapter 1]], a number of basic system properties have been discussed. Two of these, linearity and time invariance, play a fundamental role in signal and system analysis for two major reasons. First, many physical processes possess these properties and thus can be modeled as linear time-invariant (**LTI**) systems. In addition, LTI systems can be analyzed in considerable detail, providing both insight into their properties and a set of powerful tools that form the core of signal and system analysis.

One reason why LTI systems are of interest is that any such system possesses the [[Notes/Signals and Systems#1.14 Linearity\|superposition property]]. As a consequence, if we can represent the input to an LTI system in terms of a linear combination of a set of basic signals, we can then use superposition to compute the output of the system in terms of its responses to these basic signals. Unless stated otherwise, this chapter considers LTI systems.

---
## 2.1 The Convolution Sum [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=106&selection=76,0,86,3|•]]

The so-called sifting property of the discrete-time unit impulse is:
$$
x[n] = \sum_{k=-\infty}^\infty x[k] \delta[n-k].
$$

Because the sequence $\delta[n-k]$ is nonzero only for $k = n$, the summation on the right-hand side "sifts" through the sequence of values $x[k]$ and preserves only the corresponding value at $k = n$. This property allows us to represent $x[n]$ as a superposition of scaled versions of a simple set of elementary functions.

The property of time invariance tells us that the responses of a time-invariant system to time-shifted unit impulses are simply time-shifted versions of one another. Let $h_k[n]$ be the response of a linear system with input $\delta[n-k]$, i.e., $\delta[n-k] \rightarrow h_k[n]$. Then, it holds:
$$
y[n] = \sum_{k=-\infty}^\infty x[k] h_k[n],
$$
which means we can construct the response to an arbitrary input.

If the system is also time-invariant and $\delta[n] \rightarrow h[n]$, then:
$$
y[n] = \sum_{k=-\infty}^\infty x[k] h[n-k].
$$

This is called the **convolution sum** or the **superposition sum**, often written as:
$$
y[n] = x[n] * h[n].
$$

The LTI system is therefore completely characterized by its response to the unit impulse.

For continuous-time LTI systems, we have the sifting property:
$$
x(t) = \int_{-\infty}^\infty x(\tau) \delta(t-\tau) \, d\tau,
$$
and the convolution integral:
$$
y(t) = x(t) * h(t) = \int_{-\infty}^\infty x(\tau) h(t-\tau) \, d\tau,
$$
where $\delta(t) \rightarrow h(t)$. This is called the **convolution integral** or the **superposition integral**.

---
## 2.2 Convolution Properties of LTI Systems [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=134&selection=16,0,26,7|•]]

LTI systems satisfy important properties:
1. **Commutativity**: $x(t) * h(t) = h(t) * x(t)$,
2. **Distributivity**: $x * \left(h_1 + h_2\right) = x * h_1 + x * h_2$, and
3. **Associativity**: $x * \left(h_1 * h_2\right) = \left(x * h_1\right) * h_2$.

Distributivity can be depicted graphically:
![Attachments/Notes/Signals and Systems/IMG-0120164807.webp|900](/img/user/Attachments/Notes/Signals%20and%20Systems/IMG-0120164807.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=136&rect=108,407,300,593|•]]

Similarly, associativity can be depicted graphically:
![Attachments/Notes/Signals and Systems/IMG-0120164807-1.webp|900](/img/user/Attachments/Notes/Signals%20and%20Systems/IMG-0120164807-1.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=139&rect=94,310,303,595|•]]

---
## 2.3 Basic Properties

### 2.3.1 Memory
If a discrete-time LTI system has an impulse response $h[n]$ that is not identically zero for $n \neq 0$, then the system has memory. For a continuous-time LTI system, the system is memoryless if $h(t) = 0$ for $t \neq 0$. Such a system has the form:
$$
y(t) = Kx(t),
$$
where $h(t) = K\delta(t)$. If $K = 1$, the system satisfies $x = x * \delta = y$ and becomes the identity system, which reduces to the sifting property.

### 2.3.2 Invertibility
If an LTI system is invertible, its inverse is also LTI. If:
$$
x \xrightarrow{h} y \quad \text{and we want} \quad y \xrightarrow{h'} x,
$$
then we must have:
$$
h * h' = \delta.
$$

### 2.3.3 Causality
Causality requires $h[n] = 0$ for $n < 0$. The impulse response must be zero before the impulse occurs, consistent with the intuitive concept of causality. The equivalence of causality and the condition of initial rest applies only to linear systems:
$$
x(t < t') = 0 \quad \text{implies} \quad y(t < t') = 0.
$$

### 2.3.4 Stability
An LTI system is stable if the impulse response is absolutely summable, i.e.,
$$
\sum_{k=-\infty}^\infty |h[k]| < \infty.
$$
For any $n$, if $|x[n]| < B < \infty$, then:
$$
|y[n]| \leq B \cdot \sum_{k=-\infty}^\infty |h[k]| < \infty,
$$
for some bounding constant $B$.

For continuous-time variables, stability requires:
$$
\int_{-\infty}^\infty |h(t)| \, dt < \infty.
$$

### 2.3.5 Unit Step Response of an LTI System
Besides the impulse response, the step response is another basic but important signal. The step response is defined as:
$$
s[n] = \sum_{k=-\infty}^n h[k] = u[n] * h[n],
$$
or in continuous-time:
$$
s(t) = \int_{-\infty}^t h(\tau) \, d\tau.
$$

Also note that:
$$
	h[n] = s[n] - s[n-1], \quad h(t) = \frac{ds(t)}{dt}.
$$

---
## 2.4 Causal LTI Systems Described by Differential Equations [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=147&selection=54,0,72,9|•]]

An important class of systems is described by a _linear constant-coefficient differential equation_. These equations provide an implicit specification of the system, describing a relationship between input and output rather than providing an explicit expression. To obtain an explicit expression, one must solve the differential equation. The condition of initial rest ensures that a system described by a linear constant-coefficient differential equation is time-invariant.

Consider a general _N_-th order linear constant-coefficient differential equation:
$$
\sum_{k=0}^N a_k \cdot \frac{d^k y(t)}{dt^k} = \sum_{k=0}^M b_k \cdot \frac{d^k x(t)}{dt^k}.
$$

For $N = 0$, this reduces to:
$$
y(t) = \frac{1}{a_0} \sum_{k=0}^M b_k \frac{d^k x(t)}{dt^k}.
$$

For $N \geq 1$, the solution $y(t)$ consists of two parts: the particular solution (dependent on the input) and the homogeneous solution (the solution to the equation with no input):
$$
\sum_{k=0}^N a_k \cdot \frac{d^k y(t)}{dt^k} = 0,
$$
which represents the natural response of the system.

In discrete-time, the equation becomes:
$$
\sum_{k=0}^N a_k y[n-k] = \sum_{k=0}^M b_k x[n-k].
$$
The natural response satisfies:
$$
\sum_{k=0}^N a_k y[n-k] = 0.
$$

Alternatively, we can rewrite the discrete-time equation as:
$$
y[n] = \frac{1}{a_0} \left( \sum_{k=0}^M b_k x[n-k] - \sum_{k=1}^N a_k y[n-k] \right),
$$
which requires knowledge of $y[n-1], \dots, y[n-N]$. This type of equation is called a recursive equation.

For $N = 0$, we have:
$$
y[n] = \sum_{k=0}^M \frac{b_k}{a_0} x[n-k],
$$
where the impulse response is $h[n] = \frac{b_k}{a_0}$ for $0 \leq n \leq M$. Such systems are non-recursive and have a finite impulse response (FIR). 

For $N \geq 1$, when the differential equation is recursive, the impulse response is infinite, and these systems are referred to as infinite impulse response (IIR) systems.

---
## 2.5 Block Diagram Representation [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=155&selection=17,0,38,9|•]]

Systems described by linear constant-coefficient differential equations can be represented using block diagrams, providing a visual understanding of their behavior. These diagrams are valuable for both analysis and implementation.

Consider the causal system described by the first-order difference equation:
$$
y[n] + a y[n-1] = b x[n],
$$
which can be rewritten as:
$$
y[n] = b x[n] - a y[n-1].
$$

This equation requires three basic operations: addition, multiplication, and delay:
![Attachments/Notes/Signals and Systems/IMG-0120164807-2.webp|700](/img/user/Attachments/Notes/Signals%20and%20Systems/IMG-0120164807-2.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=156&rect=113,383,295,597|•]]

The block diagram representation of this equation is:
![Attachments/Notes/Signals and Systems/IMG-0120164808.webp|700](/img/user/Attachments/Notes/Signals%20and%20Systems/IMG-0120164808.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=156&rect=138,279,302,373|•]]

The feedback arises because the equation is recursive. The block diagram shows that memory is required for this system, corresponding to the delay operator.

For the continuous-time system:
$$
\frac{dy}{dt} + a y(t) = b x(t),
$$
we can rewrite it as:
$$
y(t) = -\frac{1}{a} \frac{dy}{dt} + b x(t).
$$
However, differentiators $\frac{d}{dt}$ are sensitive to noise and errors. Instead, rewriting as:
$$
y(t) = \int_{-\infty}^t \left( b x(\tau) - a y(\tau) \right) \, d\tau,
$$
assuming $y(-\infty) = 0$, allows for implementation using integrators:
![Attachments/Notes/Signals and Systems/IMG-0120164808-1.webp|700](/img/user/Attachments/Notes/Signals%20and%20Systems/IMG-0120164808-1.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=158&rect=142,463,338,599|•]]

The integrator is a memory element, as seen from:
$$
y(t) = y(t_0) + \int_{t_0}^t \left( b x(\tau) - a y(\tau) \right) \, d\tau,
$$
where $y(t_0)$ must be stored.

---
## 2.6 Singularity Functions [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=158&selection=151,0,155,9|•]]

From the sifting property, the unit impulse is the impulse response of the identity system:
$$
x(t) = x(t) * \delta(t),
$$
which implies:
$$
\delta(t) = \delta(t) * \delta(t).
$$

If we define the unit impulse as the limiting form of a signal, it means there are many dissimilar signals that behave like an impulse in the limit. The impulse is defined by its behavior under convolution.

An equivalent operational definition is:
$$
g(-t) = g(-t) * \delta(t) \quad \text{and} \quad g(0) = \int_{-\infty}^\infty g(\tau) \delta(\tau) \, d\tau,
$$
for any signal $g(t)$. The unit impulse belongs to the class of singularity functions, satisfying:
$$
f(t) \delta(t) = f(0) \delta(t).
$$

Higher-order singularity functions are defined by their convolution behavior. For example:
$$
y(t) = \frac{dx}{dt} \coloneqq x(t) * u_1(t),
$$
where $u_1(t)$ is the unit doublet. Higher-order doublets are defined recursively:
$$
\frac{d^k x}{dt^k} \coloneqq x * u_k(t) = \left( x * u_1(t) \right) * u_1(t), \quad u_k(t) = u_1(t) * \cdots * u_1(t) \text{ ($k$ times)}.
$$

For the unit step:
$$
u(t) = \int_{-\infty}^t \delta(\tau) \, d\tau,
$$
and the unit ramp:
$$
u_{-2}(t) = u(t) * u(t) = \int_{-\infty}^t u(\tau) \, d\tau = t u(t).
$$

Higher-order integrals of $\delta(t)$ are the impulse responses of cascades of integrators:
$$
u_{-k}(t) = \underbrace{u(t) * \cdots * u(t)}_{k \text{ times }} = \int_{-\infty}^t u_{-(k-1)}(\tau) \, d\tau.
$$

This can be expressed as:
$$
u_{-k}(t) = \frac{t^{k-1}}{(k-1)!} u(t),
$$
with alternative notations:
$$
\delta(t) = u_0(t), \quad u_{-1}(t) = u(t), \quad \text{and} \quad u_k(t) = u_{k-1}(t) * u_1(t).
$$

---
# 3 Fourier Series Representation of Periodic Signals
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=208&selection=6,0,16,7|•]]

The representation and analysis of LTI systems through the convolution sum are based on representing signals as linear combinations of shifted impulses. This chapter explores an alternative representation for signals and LTI systems.

---
## 3.1 The Response of LTI Systems to Complex Exponentials [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=213&selection=58,0,72,12|•]]

In the study of LTI systems, it is advantageous to represent signals as linear combinations of basic signals with the following two properties:
1. The set of basic signals can construct a broad and useful class of signals.
2. The response of an LTI system to each signal is simple enough to provide a convenient representation for the system's response to any signal constructed as a linear combination of the basic signals.

Fourier analysis is significant because it fulfills these properties using complex exponential signals in both continuous and discrete time. The response of an LTI system to a complex exponential input is the same complex exponential with only a change in amplitude:
$$
\begin{aligned}
\text{Continuous time: } & e^{st} \longrightarrow H(s)e^{st}, \\
\text{Discrete time: } & z^n \longrightarrow H(z)z^n,
\end{aligned}
$$
where $H(s)$ or $H(z)$ is a complex amplitude factor. A signal $x \longrightarrow a \cdot x$ is called an **eigenfunction** of the system, and the (complex) constant $a$ is called the **eigenvalue**.

### 3.1.1 Continuous-Time Proof
Complex exponentials are eigenfunctions of any LTI system. For example:
$$
y(t) = \int_{-\infty}^\infty h(\tau) x(t-\tau) \, d\tau = \int_{-\infty}^\infty h(\tau) e^{s(t-\tau)} \, d\tau.
$$
Rewriting:
$$
y(t) = e^{st} \int_{-\infty}^\infty h(\tau) e^{-s\tau} \, d\tau = H(s)e^{st},
$$
assuming the integral converges. Hence, $y(t)$ is a scaled version of $e^{st}$.

### 3.1.2 Discrete-Time Proof
Similarly, for discrete-time systems, let the input be:
$$
x[n] = z^n,
$$
where $z$ is a complex number. The output is:
$$
y[n] = \sum_{k=-\infty}^\infty h[k] x[n-k] = \sum_{k=-\infty}^\infty h[k] z^{n-k}.
$$
Rewriting:
$$
y[n] = z^n \sum_{k=-\infty}^\infty h[k] z^{-k} = H(z)z^n,
$$
where:
$$
H(z) = \sum_{k=-\infty}^\infty h[k] z^{-k}.
$$

Thus, complex exponentials are eigenfunctions of discrete-time LTI systems.

### 3.1.3 Decomposition of Signals
To analyze LTI systems, a general signal can be decomposed into eigenfunctions:
$$
x(t) = \sum_n a_n e^{s_nt}.
$$
Using the eigenfunction and superposition properties:
$$
y(t) = \sum_n a_n H(s_n)e^{s_nt}.
$$

Both in continuous and discrete time, if the input is a linear combination of complex exponentials, the output is also a linear combination of the same complex exponential signals.

---
## 3.2 Fourier Series Representation of Continuous-Time Periodic Signals [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=217&selection=120,0,132,7|•]]

For a periodic signal $x(t)$ with period $T$, it can be represented as a linear combination of harmonically related complex exponentials:
$$
x(t) = \sum_{k=-\infty}^\infty a_k e^{i k \frac{2\pi}{T}t}.
$$
This is the **Fourier series representation**.

### 3.2.1 Real Signals
If $x(t)$ is real, $a_k^* = a_{-k}$, allowing:
$$
x(t) = a_0 + \sum_{k=1}^\infty \left( a_k e^{i k \omega_0 t} + a_k^* e^{-i k \omega_0 t} \right),
$$
where $\omega_0 = \frac{2\pi}{T}$. Rewriting:
$$
x(t) = a_0 + 2 \sum_{k=1}^\infty A_k \cos(k\omega_0 t + \theta_k),
$$
with $a_k = A_k e^{i \theta_k}$.

Alternatively, using $a_k = B_k + i C_k$:
$$
x(t) = a_0 + 2 \sum_{k=1}^\infty \left( B_k \cos(k\omega_0 t) - C_k \sin(k\omega_0 t) \right).
$$

### 3.2.2 Derivation of Fourier Coefficients
Assuming $x(t)$ has a Fourier series representation, multiply both sides by $e^{-jn\omega_0t}$ and integrate:
$$
\int_0^T x(t)e^{-i n \omega_0 t} \, dt = \int_0^T \sum_k a_k e^{i(k-n)\omega_0 t} \, dt.
$$
Using orthogonality:
$$
\int_0^T e^{i(k-n)\omega_0 t} \, dt =
\begin{cases}
T, & k = n, \\
0, & k \neq n.
\end{cases}
$$
The Fourier coefficients are:
$$
a_k = \frac{1}{T} \int_0^T x(t) e^{-i k \omega_0 t} \, dt.
$$

The average value of $x(t)$ over one period is:
$$
a_0 = \frac{1}{T} \int_0^T x(t) \, dt.
$$

---
## 3.3 Convergence of the Fourier Series [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=226&selection=234,0,246,6|•]]

Although Fourier claimed that any periodic signal could be represented by a Fourier series, this is only true for specific signal classes.

### 3.3.1 Approximation and Error
Approximating a periodic signal:
$$
x_N(t) = \sum_{k=-N}^N a_k e^{i k \omega_0 t}.
$$
The approximation error:
$$
e_N(t) = x(t) - x_N(t).
$$
The error energy is:
$$
E_N = \int_0^T |e_N(t)|^2 \, dt.
$$
Minimizing $E_N$ gives the Fourier coefficients:
$$
a_k = \frac{1}{T} \int_0^T x(t) e^{-i k \omega_0 t} \, dt.
$$

### 3.3.2 Convergence Conditions
For periodic signals, Fourier series convergence is guaranteed if:
1. **Finite power**:
   $$
   \int_0^T |x(t)|^2 \, dt < \infty.
   $$
2. **Bounded variation**: $x(t)$ has a finite number of maxima and minima in one period.
3. **Finite discontinuities**: $x(t)$ has a finite number of discontinuities per period, and each discontinuity is finite.

At points of discontinuity, the Fourier series converges to the average value of the signal on either side of the discontinuity.

### 3.3.3 Practical Implications
Signals satisfying the Dirichlet conditions have Fourier series representations. Even if $x(t)$ and its Fourier series differ at isolated points, their integrals and energy are identical, making them indistinguishable for analysis in LTI systems.

---
## 3.4 Properties of the Continuous-Time Fourier Series [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=233&selection=18,0,28,6|•]]

Below is a table summarising several useful properties of the continuous-time Fourier series:

|                  Property                  |                                          Periodic Signal                                           |                                                    Fourier Series Coefficients                                                    |
| :----------------------------------------: | :------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: |
|                                            |          $x(t)$ periodic with period $T$ and fundamental frequency $\omega_0 = 2 \pi / T$          |                                                               $a_k$                                                               |
|               **Linearity**                |                                         $A x(t) + B y(t)$                                          |                                                          $A a_k + B b_k$                                                          |
|             **Time Shifting**              |                                            $x(t - t_0)$                                            |                                    $a_k e^{-i k \omega_0 t_0} = a_k e^{-i k (2 \pi / T) t_0}$                                     |
|           **Frequency Shifting**           |                                     $e^{j M \omega_0 t} x(t)$                                      |                                                             $a_{k-M}$                                                             |
|              **Conjugation**               |                                              $x^*(t)$                                              |                                                            $a_{-k}^*$                                                             |
|             **Time Reversal**              |                                              $x(-t)$                                               |                                                             $a_{-k}$                                                              |
|              **Time Scaling**              |                         $x(\alpha t)$ (periodic with period $T / \alpha$)                          |                                                               $a_k$                                                               |
|          **Periodic Convolution**          |                               $\int_T x(\tau) y(t - \tau) \, d\tau$                                |                                                            $T a_k b_k$                                                            |
|             **Multiplication**             |                                            $x(t) y(t)$                                             |                                              $\sum_{l = -\infty}^\infty a_l b_{k-l}$                                              |
|            **Differentiation**             |                                        $\frac{d x(t)}{dt}$                                         |                                           $i k \omega_0 a_k = i k \frac{2 \pi}{T} a_k$                                            |
|              **Integration**               |               $\int_{-\infty}^t x(t) \, dt$ (finite and periodic only if $a_0 = 0$)                |                                   $\frac{1}{i k \omega_0} a_k = \frac{1}{i k (2 \pi / T)} a_k$                                    |
|  **Conjugate Symmetry for Real Signals**   |                                            $x(t)$ real                                             | $a_k = a_{-k}^*, \mathfrak{Re}\{a_k\} = \mathfrak{Re}\{a_{-k}\}, \mathfrak{Im}\{a_k\} = -\mathfrak{Im}\{a_{-k}\}$ |
|         **Real and Even Signals**          |                                        $x(t)$ real and even                                        |                                                        $a_k$ real and even                                                        |
|          **Real and Odd Signals**          |                                        $x(t)$ real and odd                                         |                                                  $a_k$ purely imaginary and odd                                                   |
| **Even-Odd Decomposition of Real Signals** | $x(t) = x_e(t) + x_o(t)$, where $x_e(t) = \frac{x(t) + x(-t)}{2}, x_o(t) = \frac{x(t) - x(-t)}{2}$ |                             $\mathfrak{Re}\{a_k\}$ for even, $i \mathfrak{Im}\{a_k\}$ for odd                             |
|          **Parseval's Relation**           |              $\frac{1}{T} \int_T dt\cdot\| x(t)\|^2=\sum_{k=-\infty}^\infty\|a_k\|^2$              |                                                                                                                                   |

---
## 3.5 Fourier Series Representation of Discrete-Time Periodic Signals [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=242&selection=202,0,214,7|•]]

For discrete-time periodic signals $x[n]$ with period $N$ and fundamental frequency $\omega_0 = \frac{2 \pi}{N}$, the Fourier series representation is finite:
$$
x[n] = \sum_{k=0}^{N-1} a_k e^{i k \omega_0 n},
$$
where the Fourier coefficients are:
$$
a_k = \frac{1}{N} \sum_{n=0}^{N-1} x[n] e^{-i k \omega_0 n}.
$$
The coefficients satisfy $a_k = a_{k+N}$ due to periodicity. This representation is a finite series with $N$ terms.

---
## 3.6 Properties of the Discrete-Time Fourier Series [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=252&selection=33,0,43,6|•]]

|                Property                 |                          Periodic Signal                           |       Fourier Series Coefficients        |
| :-------------------------------------: | :----------------------------------------------------------------: | :--------------------------------------: |
|              **Linearity**              |                         $A x[n] + B y[n]$                          |             $A a_k + B b_k$              |
|            **Time Shifting**            |                            $x[n - n_0]$                            |       $a_k e^{-i k \omega_0 n_0}$        |
|         **Frequency Shifting**          |                     $e^{j M \omega_0 n} x[n]$                      |                $a_{k-M}$                 |
|             **Conjugation**             |                              $x^*[n]$                              |                $a_{-k}^*$                |
|            **Time Reversal**            |                              $x[-n]$                               |                 $a_{-k}$                 |
|            **Time Scaling**             |                $x[mn]$ (if $n$ is divisible by $m$)                |            $\frac{1}{m} a_k$             |
|        **Periodic Convolution**         |                  $\sum_{r=0}^{N-1} x[r] y[n - r]$                  |               $N a_k b_k$                |
|           **Multiplication**            |                            $x[n] y[n]$                             |      $\sum_{l=0}^{N-1} a_l b_{k-l}$      |
|          **First Difference**           |                          $x[n] - x[n-1]$                           | $\left(1 - e^{-i k \omega_0}\right) a_k$ |
|             **Running Sum**             |    $\sum_{m=0}^n x[m]$ (finite and periodic only if $a_0 = 0$)     |  $\frac{1}{1 - e^{-i k \omega_0}} a_k$   |
| **Conjugate Symmetry for Real Signals** |                            $x[n]$ real                             |             $a_k = a_{-k}^*$             |
|         **Parseval's Relation**         | $\frac{1}{N} \sum_{n=0}^{N-1}\|x[n]\|^2=\sum_{k=0}^{N-1}\|a_k\|^2$ |                                          |

---
## 3.7 Fourier Series and LTI Systems [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=257&selection=275,0,285,7|•]]

The response of an LTI system to a Fourier series input takes the form:
$$
y(t) = \sum_{k=-\infty}^\infty a_k H(i k \omega_0) e^{i k \omega_0 t}.
$$
The Fourier coefficients of the output are modified by the frequency response:
$$
a_k \longrightarrow a_k H(i k \omega_0).
$$

---
## 3.8 Filtering [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=262&selection=148,0,150,9|•]]

Filtering modifies the frequency components of a signal. Common filters include:
- **Low-pass filter**: Passes low frequencies near $\omega = 0$, attenuating higher frequencies.
- **High-pass filter**: Passes high frequencies, attenuating lower ones.
- **Bandpass filter**: Passes frequencies within a band, attenuating others.

An ideal low-pass filter has the frequency response:
$$
H(i \omega) =
\begin{cases}
1, & |\omega| \leq \omega_c, \\
0, & |\omega| > \omega_c.
\end{cases}
$$

Ideal filters in continuous and discrete time differ because discrete-time filters have a periodic frequency response.

Visual examples of ideal filters:
- Continuous-time low-pass, high-pass, and bandpass:
  ![Attachments/Notes/Signals and Systems/IMG-0120164809.webp|700](/img/user/Attachments/Notes/Signals%20and%20Systems/IMG-0120164809.webp)
- Discrete-time low-pass, high-pass, and bandpass:
  ![Attachments/Notes/Signals and Systems/IMG-0120164809-1.webp|700](/img/user/Attachments/Notes/Signals%20and%20Systems/IMG-0120164809-1.webp)

---
## 3.9 Important Examples: Continuous-Time [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=270&selection=76,0,93,9|•]]

### 3.9.1 Simple RC Low-Pass Filter [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=270&selection=148,0,156,6|•]]

Electrical circuits are commonly used to implement continuous-time filtering operations. One of the simplest examples is the first-order RC circuit:

![Attachments/Notes/Signals and Systems/IMG-0120164809-2.webp|700](/img/user/Attachments/Notes/Signals%20and%20Systems/IMG-0120164809-2.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=271&rect=146,482,300,597|•]]

In this circuit, the output signal can either be the capacitor voltage $v_c(t)$ or the resistor voltage. If we take the capacitor voltage as the output, the relationship between input and output is described by the differential equation:
$$
RC \frac{d v_c(t)}{d t} + v_c(t) = v_s(t).
$$

Assuming initial rest, the system is LTI. The frequency response $H(i\omega)$ is determined by assuming an input of $v_s(t) = e^{i\omega t}$, resulting in:
$$
H(i \omega) = \frac{1}{1 + RC \cdot i \omega}.
$$

The magnitude and phase of $H(i \omega)$ are as follows:
![Attachments/Notes/Signals and Systems/IMG-0120164810.webp|700](/img/user/Attachments/Notes/Signals%20and%20Systems/IMG-0120164810.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=272&rect=104,317,440,603|•]]

For $\omega \approx 0$, $|H(i\omega)| \approx 1$, indicating that low frequencies pass with minimal attenuation. For higher $\omega$, $|H(i\omega)|$ decreases, making this circuit a nonideal low-pass filter.

The impulse response and step response of the system are:
$$
h(t) = \frac{1}{RC} e^{-t / RC} u(t),
$$
$$
s(t) = \left[1 - e^{-t / RC}\right] u(t).
$$

![Attachments/Notes/Signals and Systems/IMG-0120164810-1.webp|700](/img/user/Attachments/Notes/Signals%20and%20Systems/IMG-0120164810-1.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=273&rect=73,344,313,604|•]]

There is a trade-off between frequency response and time-domain behavior. A larger $RC$ enhances low-pass filtering but results in slower step response.

---
### 3.9.2 Simple RC High-Pass Filter [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=272&selection=193,0,205,6|•]]

If we choose the resistor voltage $v_r(t)$ as the output, the relationship between input and output becomes:
$$
RC \frac{d v_r(t)}{d t} + v_r(t) = RC \frac{d v_s(t)}{d t}.
$$

The frequency response $G(i\omega)$ is given by:
$$
G(i\omega) = \frac{i \omega RC}{1 + i \omega RC}.
$$

The magnitude and phase of $G(i\omega)$ are shown below:
![Attachments/Notes/Signals and Systems/IMG-0120164810-2.webp|700](/img/user/Attachments/Notes/Signals%20and%20Systems/IMG-0120164810-2.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=274&rect=128,320,467,606|•]]

The high-pass filter attenuates low frequencies and allows high frequencies to pass, particularly for $|\omega| \gg 1 / RC$.

As with the low-pass filter, increasing $RC$ extends the passband to lower frequencies but slows the system's step response. More complex filters with additional energy storage elements can achieve sharper transitions and greater flexibility.

---
## 3.10 Important Examples: Discrete-Time Filters [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=275&selection=53,0,69,9|•]]

Discrete-time filters described by linear constant-coefficient difference equations are widely used in practice. These filters are categorized into:
1. **Recursive filters** (IIR): Impulse responses of infinite length.
2. **Non-recursive filters** (FIR): Impulse responses of finite length.

### 3.10.1 First-Order Recursive Discrete-Time Filters [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=275&selection=149,0,151,43|•]]

A first-order recursive discrete-time filter is described by:
$$
y[n] - a y[n-1] = x[n].
$$

The frequency response is:
$$
H(e^{i\omega}) = \frac{1}{1 - a e^{-i\omega}}.
$$

For $a = 0.6$, the magnitude and phase of $H(e^{i\omega})$ are shown below:
![Attachments/Notes/Signals and Systems/IMG-0120164811.webp|700](/img/user/Attachments/Notes/Signals%20and%20Systems/IMG-0120164811.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=277&rect=124,371,345,631|•]]

For $a = -0.6$, the magnitude and phase are as follows:
![Attachments/Notes/Signals and Systems/IMG-0120164811-1.webp|700](/img/user/Attachments/Notes/Signals%20and%20Systems/IMG-0120164811-1.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=277&rect=123,53,345,356|•]]

- **Low-pass behavior**: For $a > 0$, the system acts as a low-pass filter.
- **High-pass behavior**: For $a < 0$, the system acts as a high-pass filter.

The impulse and step responses are:
$$
h[n] = a^n u[n],
$$
$$
s[n] = \frac{1 - a^{n+1}}{1 - a} u[n].
$$

Higher-order recursive filters offer sharper filtering characteristics and more flexibility.

### 3.10.2 Non-Recursive Discrete-Time Filters [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=276&selection=230,0,234,34|•]]

A general non-recursive difference equation is:
$$
y[n] = \sum_{k=-N}^M b_k x[n-k].
$$

This equation represents a weighted average of $x[n]$ values, often used in moving-average filters. These filters smooth high-frequency variations, effectively acting as low-pass filters.

For a moving-average filter of size $N + M + 1$, the frequency response is:
$$
H(e^{i\omega}) = \frac{1}{N + M + 1} e^{i \omega [(N - M) / 2]} \frac{\sin[\omega (M + N + 1) / 2]}{\sin(\omega / 2)}.
$$

The magnitude of $H(e^{i\omega})$ for $N + M + 1 = 33$ and $N + M + 1 = 65$ is shown:
![Attachments/Notes/Signals and Systems/IMG-0120164812.webp|700](/img/user/Attachments/Notes/Signals%20and%20Systems/IMG-0120164812.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=279&rect=88,179,456,458|•]]

---
# 4 Continuous-Time Fourier Transform
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=315&selection=2,0,8,9|•]]

A large class of signals, including all finite-energy signals, can be represented as a linear combination of complex exponentials. For periodic signals, these building blocks are harmonically related. For aperiodic signals, the frequencies are infinitesimally close, and the representation takes the form of an integral rather than a sum. The resulting spectrum of coefficients is called the **Fourier transform**, and the synthesis integral used to reconstruct the signal is called the **inverse Fourier transform**.

The Fourier transform was one of Fourier's most significant contributions. He reasoned that an aperiodic signal could be treated as a periodic signal with an infinite period. As the period increases, the fundamental frequency decreases, and the harmonically related components become closer in frequency. In the limit, the Fourier series sum becomes an integral.

---
## 4.1 Representation of Aperiodic Signals: The Continuous-Time Fourier Transform [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=316&selection=38,0,52,9|•]]

### 4.1.1 Example: Square Wave
Consider a square wave over one period $T$:
$$
x(t) =
\begin{cases}
1, & \text{for } |t| < T_1, \\
0, & \text{for } T_1 < |t| < T/2.
\end{cases}
$$

The Fourier series coefficients are:
$$
T a_k = \frac{2 \sin(\omega T_1)}{\omega}, \quad \omega = k\omega_0.
$$

As $T \to \infty$, the square wave approaches a rectangular pulse, and the Fourier series coefficients multiplied by $T$ become closely spaced samples of the envelope function $2\sin(\omega T_1)/\omega$. Eventually, they form a continuum.

### 4.1.2 Derivation
For a finite-duration signal $x(t)$, we construct a periodic signal $\tilde{x}(t)$ where $x(t)$ is one period:
![Attachments/Notes/Signals and Systems/IMG-0120164812-1.webp|700](/img/user/Attachments/Notes/Signals%20and%20Systems/IMG-0120164812-1.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=318&rect=123,434,423,595|•]]

As $T \to \infty$, $\tilde{x}(t)$ becomes identical to $x(t)$. The Fourier series representation of $\tilde{x}(t)$ is:
$$
\tilde{x}(t) = \sum_{k=-\infty}^\infty a_k e^{i k \omega_0 t}, \quad
a_k = \frac{1}{T} \int_{-T/2}^{T/2} \tilde{x}(t)e^{-i k \omega_0 t} dt,
$$
where $\omega_0 = 2\pi / T$. The envelope $X(i\omega)$ of $T a_k$ is defined as:
$$
X(i\omega) = \int_{-\infty}^\infty x(t) e^{-i \omega t} dt.
$$

Expressing $\tilde{x}(t)$ in terms of $X(i\omega)$:
$$
\tilde{x}(t) = \frac{1}{2\pi} \sum_{k=-\infty}^\infty X(i k \omega_0)e^{i k \omega_0 t}\omega_0.
$$

As $T \to \infty$, $\omega_0 \to 0$, and the summation becomes an integral:
$$
x(t) = \frac{1}{2\pi} \int_{-\infty}^\infty X(i\omega)e^{i\omega t} d\omega.
$$

Thus, the Fourier transform pair is:
$$
x(t) = \frac{1}{2\pi} \int_{-\infty}^\infty X(i\omega) e^{i\omega t} d\omega,
$$
$$
X(i\omega) = \int_{-\infty}^\infty x(t) e^{-i\omega t} dt.
$$

Here, $X(i\omega)$ represents the **spectrum** of $x(t)$ and provides the information needed to describe $x(t)$ as a linear combination of sinusoidal signals.

---
## 4.2 Convergence of Fourier Transforms [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=320&selection=148,0,154,18|•]]

Although the derivation assumed $x(t)$ has finite duration, it applies to a broad class of signals, including those of infinite duration. To ensure that the Fourier transform is valid, consider:
$$
\hat{x}(t) = \frac{1}{2\pi} \int_{-\infty}^\infty X(i\omega) e^{i\omega t} d\omega.
$$

The Fourier transform is valid if:
1. $x(t)$ is **square integrable** (finite energy):
   $$
   \int_{-\infty}^\infty |x(t)|^2 dt < \infty.
   $$
   In this case, $X(i\omega)$ is finite, and the difference $e(t) = \hat{x}(t) - x(t)$ has no energy.
2. $x(t)$ satisfies the **Dirichlet conditions**:
   - $x(t)$ is absolutely integrable:
     $$
     \int_{-\infty}^\infty |x(t)| dt < \infty.
     $$
   - $x(t)$ has a finite number of maxima and minima in any finite interval.
   - $x(t)$ has a finite number of discontinuities, each of which is finite.

For signals that meet these conditions, $\hat{x}(t) = x(t)$ for all $t$ except at points of discontinuity, where $\hat{x}(t)$ equals the average of the values on either side.

### 4.2.1 Periodic Signals and Impulses
Periodic signals, which are neither absolutely nor square integrable over an infinite interval, can still have Fourier transforms if impulse functions are permitted in the transform. This allows the Fourier series and Fourier transform to be unified into a common framework.

---
## 4.3 Properties of the Continuous-Time Fourier Transform [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=359&selection=16,0,34,5|•]]

Several useful properties of the continuous-time Fourier transform:

|                   Property                    |                                          Aperiodic Signal                                           |                                                                                          Fourier Transform                                                                                          |
| :-------------------------------------------: | :-------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                               |                                               $x(t)$                                                |                                                                                            $X(i \omega)$                                                                                            |
|                                               |                                               $y(t)$                                                |                                                                                            $Y(i \omega)$                                                                                            |
|                 **Linearity**                 |                                          $a x(t) + b y(t)$                                          |                                                                                   $a X(i \omega) + b Y(i \omega)$                                                                                   |
|               **Time Shifting**               |                                       $x\left(t - t_0\right)$                                       |                                                                                   $e^{-i \omega t_0} X(i \omega)$                                                                                   |
|            **Frequency Shifting**             |                                       $e^{i \omega_0 t} x(t)$                                       |                                                                                $X\left(i (\omega - \omega_0)\right)$                                                                                |
|                **Conjugation**                |                                              $x^*(t)$                                               |                                                                                          $X^*(-i \omega)$                                                                                           |
|               **Time Reversal**               |                                               $x(-t)$                                               |                                                                                           $X(-i \omega)$                                                                                            |
|        **Time and Frequency Scaling**         |                                              $x(a t)$                                               |                                                                           $\frac{1}{a} X\left(\frac{i \omega}{a}\right)$                                                                            |
|                **Convolution**                |                                            $x(t) * y(t)$                                            |                                                                                      $X(i \omega) Y(i \omega)$                                                                                      |
|              **Multiplication**               |                                             $x(t) y(t)$                                             |                                                         $\frac{1}{2 \pi} \int_{-\infty}^\infty X(i \theta) Y(i (\omega - \theta)) d\theta$                                                          |
|          **Differentiation in Time**          |                                        $\frac{d}{d t} x(t)$                                         |                                                                                       $i \omega X(i \omega)$                                                                                        |
|                **Integration**                |                                    $\int_{-\infty}^t x(t) \, dt$                                    |                                                                     $\frac{1}{i \omega} X(i \omega) + \pi X(0) \delta(\omega)$                                                                      |
|       **Differentiation in Frequency**        |                                              $t x(t)$                                               |                                                                                 $i \frac{d}{d \omega} X(i \omega)$                                                                                  |
|    **Conjugate Symmetry for Real Signals**    |                                             $x(t)$ real                                             | $\begin{aligned} & X(i \omega) = X^*(-i \omega) \\ & \mathfrak{Re}\{X(i \omega)\} = \mathfrak{Re}\{X(-i \omega)\} \\ & \mathfrak{Im}\{X(i \omega)\} = -\mathfrak{Im}\{X(-i \omega)\} \end{aligned}$ |
|    **Symmetry for Real and Even Signals**     |                                        $x(t)$ real and even                                         |                                                                                     $X(i \omega)$ real and even                                                                                     |
|     **Symmetry for Real and Odd Signals**     |                                         $x(t)$ real and odd                                         |                                                                               $X(i \omega)$ purely imaginary and odd                                                                                |
|  **Even-Odd Decomposition for Real Signals**  |  $\begin{aligned} & x_e(t) = \mathcal{E}\{x(t)\} \\ & x_o(t) = \mathcal{O}\{x(t)\} \end{aligned}$   |                                                 $\begin{aligned} & \mathfrak{Re}\{X(i \omega)\} \\ & i \mathfrak{Im}\{X(i \omega)\} \end{aligned}$                                                  |
| **Parseval's Relation for Aperiodic Signals** | $\int_{-\infty}^\infty dt\cdot x(t)^2 = \frac{1}{2\pi} \int_{-\infty}^\infty X(i \omega)^2 d\omega$ |                                                                                                                                                                                                     |

Parseval's theorem states that total energy can be expressed as energy over time integrated across all time or as energy per frequency integrated across all frequencies. Consequently, $|X(i \omega)|^2$ is often referred to as the **energy-density spectrum**.

---
## 4.4 Basic Fourier Transform Pairs [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=360&selection=30,0,36,5|•]]

|                      Signal                      |                                  Fourier Transform                                   |          Fourier Series Coefficients (if periodic)           |
| :----------------------------------------------: | :----------------------------------------------------------------------------------: | :----------------------------------------------------------: |
| $\sum_{k=-\infty}^\infty a_k e^{i k \omega_0 t}$ |            $2\pi \sum_{k=-\infty}^\infty a_k \delta(\omega - k\omega_0)$             |                            $a_k$                             |
|                $e^{i \omega_0 t}$                |                           $2\pi \delta(\omega - \omega_0)$                           |             $a_1 = 1$, $a_k = 0$ for $k \neq 1$              |
|                $\cos(\omega_0 t)$                |      $\pi \left[ \delta(\omega - \omega_0) + \delta(\omega + \omega_0) \right]$      |  $a_1 = a_{-1} = \frac{1}{2}$, $a_k = 0$ for $k \neq \pm 1$  |
|                $\sin(\omega_0 t)$                | $\frac{\pi}{i} \left[ \delta(\omega - \omega_0) - \delta(\omega + \omega_0) \right]$ | $a_1 = -a_{-1} = \frac{1}{2i}$, $a_k = 0$ for $k \neq \pm 1$ |
|                    $x(t) = 1$                    |                                $2\pi \delta(\omega)$                                 |             $a_0 = 1$, $a_k = 0$ for $k \neq 0$              |
|                   $\delta(t)$                    |                                         $1$                                          |                              -                               |
|                      $u(t)$                      |                      $\frac{1}{i \omega} + \pi \delta(\omega)$                       |                              -                               |
|                $\delta(t - t_0)$                 |                                 $e^{-i \omega t_0}$                                  |                              -                               |
|     $e^{-a t} u(t), \mathfrak{Re}\{a\} > 0$      |                               $\frac{1}{a + i \omega}$                               |                              -                               |
|    $t e^{-a t} u(t), \mathfrak{Re}\{a\} > 0$     |                             $\frac{1}{(a + i \omega)^2}$                             |                              -                               |

---
## 4.5 Systems Characterised by Linear Constant-Coefficient Differential Equations [[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=361&selection=44,0,58,9|•]]

Continuous-time LTI systems described by linear constant-coefficient differential equations are widely used in practice. A general form of such equations is:
$$
\sum_{k=0}^N a_k \frac{d^k y(t)}{d t^k} = \sum_{k=0}^M b_k \frac{d^k x(t)}{d t^k}.
$$

The frequency response $H(i\omega)$ can be derived using the Fourier transform. Applying the transform to both sides:
$$
\mathcal{F}\left\{\sum_{k=0}^N a_k \frac{d^k y(t)}{d t^k}\right\} = \mathcal{F}\left\{\sum_{k=0}^M b_k \frac{d^k x(t)}{d t^k}\right\}.
$$

This leads to:
$$
H(i \omega) = \frac{Y(i \omega)}{X(i \omega)} = \frac{\sum_{k=0}^M b_k (i \omega)^k}{\sum_{k=0}^N a_k (i \omega)^k}.
$$

Thus, $H(i \omega)$ is a rational function (a ratio of polynomials in $i \omega$), commonly referred to as the frequency response of the system.

---
>[!DANGER] Work in progress from here on
>Expect low quality and strange formatting

# 5 The discrete-time Fourier transform
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=389&selection=2,0,8,9|•]]


Consider the general sequence $x[n]$ of finite duration, e.g. $x[n]=0$ outride of $\left[-N_{1}, N_{2}\right]$.
Then, the discrete-time Fourier transform is $\tilde{x}\left(e^{i \omega}\right)=\sum_{n} x[n] e^{-i \omega n}$, and then also $\sim^{n}$ "Analysis equation" $x[n]=\frac{1}{2 \pi} \int_{2 \pi} d \omega \cdot \tilde{x}\left(e^{i \omega}\right) e^{i \omega}$. Note, $\tilde{x}\left(e^{i \omega}\right)$ has a period of $2 \pi$.
"Synthesis equation"
Thus, an aperiodic sequence can be thought of as a linear combination of complex exponentials.

---
## 5.1 Convergence issue
The analysis equation will converge either if
1)... $x[n]$ is absolutely summable: $\sum_{n}|x[n]|<\infty$
2)... $x[n]$ has finite energy: $\quad \sum_{n}|x[n]|^{2}<\infty$

The synthesis equation on the other hand will always converge, since the integral is over a finite interval.

---
## 5.2 Fourier transform for periodic signals
Consider the sequence $x[n]$ with periodicity $N$ and Fourier series representation
$x[n]=\sum_{k=\sim N} a_{k} e^{i k \frac{2 \pi}{N} n}$. Then, its Fourier transform is $\tilde{x}\left(e^{i \omega}\right)=\sum_{k} 2 \pi a_{k} \cdot \delta\left(\omega-\frac{2 \pi k}{N}\right)$.

---
## 5.3 Properties of the discrete-time Fourier transform
![](https://cdn.mathpix.com/cropped/2025_01_18_fe980612f9d3f033eaf5g-09.jpg?height=2682&width=1974&top_left_y=198&top_left_x=47)
![](https://cdn.mathpix.com/cropped/2025_01_18_fe980612f9d3f033eaf5g-10.jpg?height=641&width=1955&top_left_y=108&top_left_x=42)

