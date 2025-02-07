---
{"dg-publish":true,"permalink":"/notes/signals-and-systems/2-linear-time-invariant-systems/","hide":"true","updated":"2025-02-07T10:57:49.748+01:00"}
---

Jump back to ==[[Notes/Signals and Systems/Signals and Systems#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Signals and Systems/2 Linear Time-Invariant Systems#2.1 The Convolution Sum\|2.1 The Convolution Sum]]
- [[Notes/Signals and Systems/2 Linear Time-Invariant Systems#2.2 Convolution Properties of LTI Systems\|2.2 Convolution Properties of LTI Systems]]
- [[Notes/Signals and Systems/2 Linear Time-Invariant Systems#2.3 Basic Properties\|2.3 Basic Properties]]
- [[Notes/Signals and Systems/2 Linear Time-Invariant Systems#2.4 Causal LTI Systems Described by Differential Equations\|2.4 Causal LTI Systems Described by Differential Equations]]
- [[Notes/Signals and Systems/2 Linear Time-Invariant Systems#2.5 Block Diagram Representation\|2.5 Block Diagram Representation]]
- [[Notes/Signals and Systems/2 Linear Time-Invariant Systems#2.6 Singularity Functions\|2.6 Singularity Functions]]

---
# 2 Linear Time-Invariant Systems
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=105&selection=2,0,6,7|•]]

In [[Notes/Signals and Systems/1 Signals and Systems\|Chapter 1]] , a number of basic system properties have been discussed. Two of these, linearity and time invariance, play a fundamental role in signal and system analysis for two major reasons. First, many physical processes possess these properties and thus can be modeled as linear time-invariant (**LTI**) systems. In addition, LTI systems can be analyzed in considerable detail, providing both insight into their properties and a set of powerful tools that form the core of signal and system analysis.

One reason why LTI systems are of interest is that any such system possesses the [[Notes/Signals and Systems/2 Linear Time-Invariant Systems#1.14 Linearity\|superposition property]]. As a consequence, if we can represent the input to an LTI system in terms of a linear combination of a set of basic signals, we can then use superposition to compute the output of the system in terms of its responses to these basic signals. Unless stated otherwise, this chapter considers LTI systems.

---
## 2.1 The Convolution Sum 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=106&selection=76,0,86,3|•]]

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
## 2.2 Convolution Properties of LTI Systems 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=134&selection=16,0,26,7|•]]

LTI systems satisfy important properties:
1. **Commutativity**: $x(t) * h(t) = h(t) * x(t)$,
2. **Distributivity**: $x * \left(h_1 + h_2\right) = x * h_1 + x * h_2$, and
3. **Associativity**: $x * \left(h_1 * h_2\right) = \left(x * h_1\right) * h_2$.

Distributivity can be depicted graphically:

![Attachments/Oppenheim,Willsky_Signals and Systems 5.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%205.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=136&rect=111,405,296,597|•]]

Similarly, associativity can be depicted graphically:

![Attachments/Oppenheim,Willsky_Signals and Systems 6.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%206.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=139&rect=94,309,303,594|•]]

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
## 2.4 Causal LTI Systems Described by Differential Equations 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=147&selection=54,0,72,9|•]]

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
## 2.5 Block Diagram Representation 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=155&selection=17,0,38,9|•]]

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

![Attachments/Oppenheim,Willsky_Signals and Systems 7.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%207.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=156&rect=113,384,295,595|•]]

The block diagram representation of this equation is:

![Attachments/Oppenheim,Willsky_Signals and Systems 8.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%208.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=156&rect=137,274,302,372|•]]

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

![Attachments/Oppenheim,Willsky_Signals and Systems 9.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%209.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=158&rect=141,459,334,594|•]]

The integrator is a memory element, as seen from:
$$
y(t) = y(t_0) + \int_{t_0}^t \left( b x(\tau) - a y(\tau) \right) \, d\tau,
$$
where $y(t_0)$ must be stored.

---
## 2.6 Singularity Functions 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=158&selection=151,0,155,9|•]]

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