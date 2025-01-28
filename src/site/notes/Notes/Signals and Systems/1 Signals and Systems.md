---
{"dg-publish":true,"permalink":"/notes/signals-and-systems/1-signals-and-systems/","hide":"true","updated":"2025-01-28T23:25:45.721+01:00"}
---

Jump back to [[Notes/Signals and Systems/Signals and Systems#Table of Contents\|chapter selection]].

---
**Table of Contents**

- [[Notes/Signals and Systems/1 Signals and Systems#1 Signals and Systems\|1 Signals and Systems]]
	- [[Notes/Signals and Systems/1 Signals and Systems#1 Signals and Systems\|1.1 Continuous-Time and Discrete-Time Signals]]
	- [[Notes/Signals and Systems/1 Signals and Systems#1 Signals and Systems\|1.2 Energy and Power]]
	- [[Notes/Signals and Systems/1 Signals and Systems#1 Signals and Systems\|1.3 Transformations]]
	- [[Notes/Signals and Systems/1 Signals and Systems#1 Signals and Systems\|1.4 Periodic Signals]]
	- [[Notes/Signals and Systems/1 Signals and Systems#1 Signals and Systems\|1.5 Even and Odd Signals]]
	- [[Notes/Signals and Systems/1 Signals and Systems#1 Signals and Systems\|1.6 Exponential Signals]]
	- [[Notes/Signals and Systems/1 Signals and Systems#1 Signals and Systems\|1.7 Unit Impulse and Unit Step]]
	- [[Notes/Signals and Systems/1 Signals and Systems#1 Signals and Systems\|1.8 Interconnection of Systems]]
	- [[Notes/Signals and Systems/1 Signals and Systems#1 Signals and Systems\|1.9 Basic Properties]]

---
# 1 Signals and Systems 

## 1.1 Continuous-Time and Discrete-Time Signals 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=32&selection=69,0,79,7|•]]

Signals are represented mathematically as functions of one or more independent variables. Here, attention is on signals involving a single independent variable, usually time $t$ for convenience. In the case of continuous-time signals, the independent variable is continuous, and thus these signals are defined for a continuum of values of the independent variable. On the other hand, discrete-time signals are defined only at discrete times, and consequently, for these signals, the independent variable takes on only a discrete set of values. 

For continuous-time signals, we will enclose the independent variable in parentheses $(\cdot)$, whereas for discrete-time signals we will use brackets $[\cdot]$ to enclose the independent variable. A discrete-time signal $x[n]$ may represent a phenomenon for which the independent variable is inherently discrete. Signals such as demographic data are examples of this. 

On the other hand, a very important class of discrete-time signals arises from the sampling of continuous-time signals. In this case, the discrete-time signal $x[n]$ represents successive samples of an underlying phenomenon for which the independent variable is continuous. 

--- 
## 1.2 Energy and Power 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=36&selection=158,0,170,5|•]]

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
## 1.3 Transformations 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=38&selection=226,0,236,8|•]]

A very central concept in signal and system analysis is that of the transformation of a signal. Transformations happen all around us: digital-to-analog converters or noise reduction in music systems, for example. 

Some important and very fundamental transformations:
- **Time shift**: $x(t) \to x(t - t_0)$,
- **Time reversal**: $x(t) \to x(-t)$, and
- **Time scaling**: $x(t) \to x(\alpha t)$.

---
## 1.4 Periodic Signals 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=42&selection=502,0,506,7|•]]

A very important class of signals encountered frequently is periodic signals. The defining property is that for a positive value of $T$, it holds that:
$$
x(t) = x(t + T),
$$
for all values of $t$. In other words, a periodic signal is unchanged by a time shift $T$. Then, the signal $x(t)$ is periodic with period $T$. 

---
## 1.5 Even and Odd Signals 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=44&selection=36,0,46,7|•]]

Another set of useful properties of signals relates to their symmetry under time reversal. A signal is considered **even** if $x(t) = x(-t)$, and **odd** if $x(-t) = -x(t)$. An odd signal must be zero at time zero, as we can see from the definition. Thus, every signal can be written as a superposition of an odd and even part:
$$
x(t) = \mathcal{E}(x) + \mathcal{O}(x) = \frac{x(t) + x(-t)}{2} + \frac{x(t) - x(-t)}{2}.
$$

---
## 1.6 Exponential Signals 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=46&selection=12,0,17,18|•]]

Consider the continuous-time complex exponential signal of the form $x(t) = C \cdot e^{\alpha t}$. Depending on the values of $\alpha$ and $C$, these signals can have different characteristics:
1. **Real exponential signals**: $\alpha, C \in \mathbb{R}$. These have two different behaviors:
   1. $\alpha < 0 \Rightarrow$ exponential decay, or
   2. $\alpha > 0 \Rightarrow$ exponential growth with time.
2. **Periodic complex exponential signals**: $\mathfrak{Re}(\alpha) = 0$. These signals are periodic with periodicity $T_0 = \frac{2 \pi}{\omega_0}$ for $\alpha = i\omega_0$. Like any periodic signal, they have infinite total energy but finite average power. 
3. **General complex exponential signals**: $\alpha, C \in \mathbb{C}$. We can differentiate three cases:
   1. $\mathfrak{Re}(\alpha) = 0$: $x(t)$ is sinusoidal,
   2. $\mathfrak{Re}(\alpha) > 0$: $x(t)$ is sinusoidal multiplied by an exponentially increasing envelope, or
   3. $\mathfrak{Re}(\alpha) < 0$: $x(t)$ is sinusoidal multiplied by an exponentially decaying envelope.

The discussions from [[Notes/Signals and Systems/1 Signals and Systems#1.3 Transformations\|#1.3 Transformations]] to [[Notes/Signals and Systems/1 Signals and Systems#1.6 Exponential signals\|#1.6 Exponential signals]] are exactly analogous in the case of a discrete-time signal and will not be repeated. Note that this is the last notice about this occurrence.

---
## 1.7 Unit Impulse and Unit Step 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=61&selection=111,0,127,9|•]]

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
## 1.8 Interconnection of Systems 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=72&selection=144,0,150,7|•]]

An important idea is the concept of interconnecting systems since many real systems are built as interconnections of several subsystems. By breaking down a system into its interconnection of simpler subsystems, it may be possible to synthesize complex systems out of simpler, basic building blocks. The most frequently encountered connections are the _series/cascade_ and _parallel_ types:
![Attachments/Notes/Signals and Systems/1 Signals and Systems/IMG-0128215547941.webp|900](/img/user/Attachments/Notes/Signals%20and%20Systems/1%20Signals%20and%20Systems/IMG-0128215547941.webp)
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=73&rect=88,274,456,600|•]]

The symbol $\bigoplus$ denotes addition, so that the output of the parallel system is the sum of the outputs of systems 1 and 2. Another important type is the feedback interconnection:
![Attachments/Notes/Signals and Systems/1 Signals and Systems/IMG-0128215547975.webp|900](/img/user/Attachments/Notes/Signals%20and%20Systems/1%20Signals%20and%20Systems/IMG-0128215547975.webp)
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=74&rect=54,505,325,597|•]]

The output of system 1 is the input to system 2, while the output of system 2 is fed back and added to the external input to produce the actual input to system 1. These types of connections often arise in real systems. Consider figure (a) and note that it is equivalent to (b):
![Attachments/Notes/Signals and Systems/1 Signals and Systems/IMG-0128215548001.webp|900](/img/user/Attachments/Notes/Signals%20and%20Systems/1%20Signals%20and%20Systems/IMG-0128215548001.webp)
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=74&rect=79,82,323,316|•]]

---
## 1.9 Basic Properties

### 1.9.1 Memory 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=75&selection=51,0,63,6|•]]

A system is said to be _memoryless_ if the output at a given time depends only on the input at that time. A basic memoryless system is the identity system, whose output is its input. 

As counterexamples:
- The accumulator $y[n] = \sum_{k=-\infty}^{n} x[k]$ has memory.
- The delay system $y[n] = x[n-1]$ also has memory. 

A capacitor is an example of a real system with memory, since the output (voltage) is:
$$
V(t) = \frac{1}{C} \int_{-\infty}^{t} I(\tau) \, d\tau.
$$

### 1.9.2 Invertibility and Inverse Systems 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=76&selection=165,0,173,7|•]]

A system is said to be invertible if distinct inputs produce distinct outputs. An inverse system exists such that:
![Attachments/Notes/Signals and Systems/1 Signals and Systems/IMG-0128215548030.webp|900](/img/user/Attachments/Notes/Signals%20and%20Systems/1%20Signals%20and%20Systems/IMG-0128215548030.webp)
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=77&rect=106,565,359,612|•]]

Invertibility is important in contexts like encoding and decoding systems, such as in communication or cryptography. For example, lossless coding requires that the encoder must be invertible.

### 1.9.3 Causality 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=77&selection=205,0,209,9|•]]

A system is causal if the output at time $t$ depends only on values of the input at the present time or in the past. A system is nonanticipative if it does not depend on future input values. Examples of non-causal systems:
$$
y[n] = x[n] - x[n+1], \quad y(t) = x(t+1).
$$

### 1.9.4 Stability 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=79&selection=55,0,59,9|•]]

A system is stable if small inputs lead to bounded outputs. For example:
![[Attachments/Notes/Signals and Systems/Signals and Systems/IMG-0128212142478.webp\|400]]
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=79&rect=188,46,306,245|•]]

If the input is bounded, the output must also remain bounded.

### 1.9.5 Time Invariance 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=81&selection=204,0,206,15|•]]

A system is time-invariant if its behavior and characteristics are fixed over time. Formally:
$$
x[n] \to y[n] \Leftrightarrow x[n-n_0] \to y[n-n_0].
$$

### 1.9.6 Linearity 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=84&selection=70,0,74,9|•]]

A linear system fulfills:
1. Additivity: $x_1 + x_2 \to y_1 + y_2$,
2. Homogeneity: $\alpha x_1 \to \alpha y_1$.

These can be combined:
$$
\alpha x_1 + \beta x_2 \to \alpha y_1 + \beta y_2.
$$

---