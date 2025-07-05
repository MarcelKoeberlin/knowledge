---
{"dg-publish":true,"permalink":"/website/website-github-clone/src/site/notes/notes/signals-and-systems/1-signals-and-systems/","updated":"2025-07-03T20:20:02.062+02:00"}
---


Jump back to ==[[Notes/Signals and Systems/Signals and Systems#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Signals and Systems/1 Signals and Systems#1.1 Continuous-Time and Discrete-Time Signals\|1.1 Continuous-Time and Discrete-Time Signals]]
[[Notes/Signals and Systems/1 Signals and Systems#1.2 Energy and Power\|1.2 Energy and Power]]
[[Notes/Signals and Systems/1 Signals and Systems#1.3 Transformations\|1.3 Transformations]]
[[Notes/Signals and Systems/1 Signals and Systems#1.4 Periodic Signals\|1.4 Periodic Signals]]
[[Notes/Signals and Systems/1 Signals and Systems#1.5 Even and Odd Signals\|1.5 Even and Odd Signals]]
[[Notes/Signals and Systems/1 Signals and Systems#1.6 Exponential Signals\|1.6 Exponential Signals]]
[[Notes/Signals and Systems/1 Signals and Systems#1.7 Unit Impulse and Unit Step\|1.7 Unit Impulse and Unit Step]]
[[Notes/Signals and Systems/1 Signals and Systems#1.8 Interconnection of Systems\|1.8 Interconnection of Systems]]
[[Notes/Signals and Systems/1 Signals and Systems#1.9 Basic Properties\|1.9 Basic Properties]]

---
# 1 Signals and Systems

## 1.1 Continuous-Time and Discrete-Time Signals
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=32&selection=69,0,79,7| ]]

Signals are represented mathematically as functions of one or more independent variables. Here, our attention is focused on signals involving a single independent variable, which we will usually denote as time $t$ for convenience. In the case of **continuous-time signals**, the independent variable is continuous, and thus these signals are defined for a continuum of values of the independent variable. On the other hand, **discrete-time signals** are defined only at discrete points in time; consequently, for these signals, the independent variable takes on only a discrete set of values.

For continuous-time signals, we will enclose the independent variable in parentheses, for instance $x(t)$. For discrete-time signals, we will use brackets to enclose the independent variable, for instance $x[n]$. A discrete-time signal $x[n]$ may represent a phenomenon for which the independent variable is inherently discrete. Demographic data, sampled at yearly intervals, is an example of this.

Alternatively, a very important class of discrete-time signals arises from the **sampling** of continuous-time signals. In this case, the discrete-time signal $x[n]$ represents successive samples of an underlying continuous phenomenon.

---
## 1.2 Energy and Power
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=36&selection=158,0,170,5| ]]

In many applications, the signals considered are directly related to physical quantities such as power and energy in a physical system. As a starting example, consider a voltage $v(t)$ across a resistor with resistance $R$, causing a current $I(t)$ to flow. The instantaneous power dissipated in the resistor is $p(t) = v(t)I(t) = v^2(t)/R$. This allows us to calculate the total energy expended over the time interval $t_1 \le t \le t_2$ as:
$$
\int_{t_1}^{t_2} p(t) dt,
$$
and the average power over this interval as:
$$
\frac{1}{t_2 - t_1} \int_{t_1}^{t_2} p(t) dt.
$$

With these simple physical examples in mind, it is conventional to use similar terminology for power and energy for *any* continuous-time signal $x(t)$ or *any* discrete-time signal $x[n]$, even if they do not directly represent physical power or energy. The "instantaneous power" is often taken to be proportional to $|x(t)|^2$ or $|x[n]|^2$.

The **total energy** of a signal over a finite time interval $[t_1, t_2]$ (or $[n_1, n_2]$) is defined as:
$$
E_{[t_1,t_2]} = \int_{t_1}^{t_2} |x(t)|^2 dt \quad \text{or} \quad E_{[n_1,n_2]} = \sum_{n=n_1}^{n_2} |x[n]|^2.
$$
The **time-averaged power** over this interval is:
$$
P_{[t_1,t_2]} = \frac{1}{t_2 - t_1} \int_{t_1}^{t_2} |x(t)|^2 dt \quad \text{or} \quad P_{[n_1,n_2]} = \frac{1}{n_2 - n_1 + 1} \sum_{n=n_1}^{n_2} |x[n]|^2.
$$

For signals considered over an infinite time interval ($-\infty < t < \infty$ or $-\infty < n < \infty$), the total energy is:
$$
E_\infty = \lim_{T\to\infty} \int_{-T}^{T} |x(t)|^2 dt \quad \text{or} \quad E_\infty = \sum_{n=-\infty}^{\infty} |x[n]|^2.
$$
Note that for some signals (for instance, a non-zero constant signal), this integral or sum might not converge, meaning such signals have infinite total energy. The time-averaged power over an infinite interval is then defined as:
$$
P_\infty = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} |x(t)|^2 dt \quad \text{or} \quad P_\infty = \lim_{N \to \infty} \frac{1}{2N + 1} \sum_{n=-N}^{N} |x[n]|^2.
$$

These definitions allow us to identify three important classes of signals:
1.  **Finite total energy signals (Energy signals):** These have $E_\infty < \infty$. For such signals, it follows that $P_\infty = 0$.
2.  **Finite average power signals (Power signals):** These have $0 < P_\infty < \infty$. For such signals, it follows that $E_\infty = \infty$. Periodic signals are a common example.
3.  Signals with neither finite total energy nor finite average power, such as $x(t) = t$.

---
## 1.3 Transformations
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=38&selection=226,0,236,8| ]]

A central concept in signal and system analysis is the transformation of an independent variable (usually time) of a signal. Such transformations are fundamental to understanding how signals are modified or how different signals relate to one another. Examples of systems performing signal transformations are abundant, including audio equalisers that modify the spectrum of a music signal or medical imaging systems that reconstruct an image from sensor data.

Some important and very fundamental transformations of the time variable are:
- **Time shift**: $x(t) \to x(t - t_0)$. This shifts the signal along the time axis by $t_0$. If $t_0 > 0$, the signal is delayed; if $t_0 < 0$, the signal is advanced.
- **Time reversal (or reflection)**: $x(t) \to x(-t)$. This reflects the signal about the time origin $t=0$.
- **Time scaling**: $x(t) \to x(\alpha t)$. If $|\alpha| > 1$, the signal is compressed in time. If $0 < |\alpha| < 1$, the signal is expanded in time. If $\alpha < 0$, it also involves time reversal.

---
## 1.4 Periodic Signals
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=42&selection=502,0,506,7| ]]

A very important class of signals encountered frequently is periodic signals. A continuous-time signal $x(t)$ is periodic if there exists a positive value $T$ such that:
$$
x(t) = x(t + T) \quad \text{for all } t.
$$
In other words, a periodic signal is unchanged by a time shift of $T$. The signal $x(t)$ is then said to be periodic with period $T$. The **fundamental period** $T_0$ is defined as the smallest positive value of $T$ for which the periodicity condition holds. Any integer multiple of $T_0$, $mT_0$ (where $m$ is a positive integer), is also a period of $x(t)$.

---
## 1.5 Even and Odd Signals
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=44&selection=36,0,46,7| ]]

Another set of useful properties of signals relates to their symmetry under time reversal. A signal $x(t)$ (or $x[n]$) is considered **even** if it is identical to its time-reversed counterpart:
$$x(-t) = x(t) \quad (\text{or } x[-n]=x[n]).$$
A signal is considered **odd** if it is the negative of its time-reversed counterpart:
$$x(-t) = -x(t) \quad (\text{or } x[-n]=-x[n]).$$
An odd signal must be zero at time zero (if defined at $t=0$ or $n=0$), since $x(-0) = -x(0)$ implies $x(0)=-x(0)$, so $2x(0)=0$, which means $x(0)=0$.
Any signal can be uniquely decomposed into a sum of an even part and an odd part:
$$
x(t) = \mathcal{E}v\{x(t)\} + \mathcal{O}d\{x(t)\},
$$
where the even part $\mathcal{E}v\{x(t)\}$ and odd part $\mathcal{O}d\{x(t)\}$ are given by:
$$
\mathcal{E}v\{x(t)\} = \frac{x(t) + x(-t)}{2},
$$
$$
\mathcal{O}d\{x(t)\} = \frac{x(t) - x(-t)}{2}.
$$
(Analogous definitions apply for discrete-time signals $x[n]$).

---
## 1.6 Exponential Signals
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=46&selection=12,0,17,18| ]]

Consider the continuous-time complex exponential signal of the form $x(t) = C e^{\alpha t}$, where $C$ and $\alpha$ are, in general, complex numbers. Depending on the values of $C$ and $\alpha$, these signals can exhibit a variety of characteristics:

1.  **Real exponential signals**: $C$ and $\alpha$ are real numbers.
    1.  If $\alpha < 0$, $x(t)$ represents an exponential decay.
    2.  If $\alpha > 0$, $x(t)$ represents an exponential growth.
    3.  If $\alpha = 0$, $x(t)=C$ is a constant (DC signal).
2.  **Periodic complex exponential signals (Purely imaginary $\alpha$ )**: Let $\alpha = i\omega_0$, where $\omega_0$ is real. Then $x(t) = C e^{i\omega_0 t}$. This signal is periodic with fundamental period $T_0 = 2\pi/|\omega_0|$ (if $\omega_0 \neq 0$). If $\omega_0=0$, it is a DC signal, which is periodic with any period $T>0$. Like other non-zero periodic signals, these have infinite total energy but finite average power (specifically, $P_\infty = |C|^2$).
3.  **General complex exponential signals**: Let $C = |C|e^{i\theta_C}$ and $\alpha = \sigma_0 + i\omega_0$. Then $x(t) = |C|e^{\sigma_0 t} e^{i(\omega_0 t + \theta_C)}$.
    1.  If $\mathfrak{Re}\left[\alpha\right] = \sigma_0 = 0$: $x(t)$ is purely sinusoidal (as in point 2).
    2.  If $\mathfrak{Re}\left[\alpha\right] = \sigma_0 > 0$: $x(t)$ is a sinusoidal signal multiplied by an exponentially increasing envelope.
    3.  If $\mathfrak{Re}\left[\alpha\right] = \sigma_0 < 0$: $x(t)$ is a sinusoidal signal multiplied by an exponentially decaying envelope.

Many of the concepts discussed from [[Notes/Signals and Systems/1 Signals and Systems#1.3 Transformations\|section 1.3]] to [[Notes/Signals and Systems/1 Signals and Systems#1.6 Exponential Signals\|section 1.6]] have direct analogues for discrete-time signals. However, a key difference arises in the periodicity of discrete-time complex exponentials: A discrete-time complex exponential $x[n]=e^{i\omega_0 n}$ is periodic if and only if its frequency $\omega_0$ is a rational multiple of $2\pi$. That is, $\omega_0/(2\pi) = k/N$ for some integers $k$ and $N \neq 0$. This implies $\omega_0 N = 2\pi k$ must hold for some integer $N$, which is then a period.

---
## 1.7 Unit Impulse and Unit Step
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=61&selection=111,0,127,9| ]]

In this section, several other basic signals of considerable importance in signal and system analysis are introduced.
Consider the **discrete-time unit impulse** (or unit sample), $\delta[n]$:
$$
\delta[n] =
\begin{cases}
1 & \text{if } n = 0, \\
0 & \text{if } n \neq 0.
\end{cases}
$$
And the **discrete-time unit step**, $u[n]$:
$$
u[n] =
\begin{cases}
1 & \text{if } n \geq 0, \\
0 & \text{if } n < 0.
\end{cases}
$$
There is a close relationship between the unit impulse and the unit step in discrete time. In particular, the unit impulse is the _first difference_ of the unit step:
$$
\delta[n] = u[n] - u[n-1].
$$
Conversely, the unit step is the _running sum_ of the unit impulse:
$$
u[n] = \sum_{m=-\infty}^{n} \delta[m].
$$
An alternative form for the running sum (by change of variable $k=n-m$) is $u[n] = \sum_{k=0}^{\infty} \delta[n-k]$.
A key property of the discrete-time unit impulse is the **sifting property**:
$$
x[n] \delta[n-n_0] = x[n_0] \delta[n-n_0].
$$
Summing over $n$ gives $\sum_n x[n]\delta[n-n_0] = x[n_0]$.

For continuous-time signals, the **continuous-time unit impulse** (or Dirac delta function) $\delta(t)$ and **unit step** $u(t)$ are analogous. The unit step is the integral of the unit impulse:
$$
u(t) = \int_{-\infty}^t \delta(\tau) d\tau.
$$
(This implies $u(t)=1$ for $t>0$ and $u(t)=0$ for $t<0$; the value at $t=0$ is often undefined or taken as $1/2$).
Conversely, the unit impulse is the derivative of the unit step:
$$
\delta(t) = \frac{du(t)}{dt}.
$$
The sifting property for the continuous-time impulse is $\int_{-\infty}^\infty x(t)\delta(t-t_0)dt = x(t_0)$.

The unit impulse should be considered an idealisation of a pulse that is infinitely short in duration, has unit area, and is infinitely tall. Any real physical system possesses some "inertia" or finite response time. The response of such a system to an input pulse that is _sufficiently short_ (compared to the system's response time) is often independent of the exact pulse duration or shape, and depends primarily on its integrated effect (its area). For a system with a faster response, the input pulse must be shorter for this approximation to hold. The ideal unit impulse is considered short enough to probe the response of _any_ linear time-invariant system.

---
## 1.8 Interconnection of Systems
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=72&selection=144,0,150,7| ]]

An important concept in systems analysis is the interconnection of systems, since many real-world systems are constructed as interconnections of several simpler subsystems. By decomposing a complex system into an interconnection of simpler subsystems, it may be possible to analyse or synthesise it using basic building blocks. The most frequently encountered connections are the _series (or cascade)_ and _parallel_ types:

![Attachments/Oppenheim,Willsky_Signals and Systems.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=73&rect=87,275,458,599| ]]

The symbol $\bigoplus$ denotes addition of signals, so the output of the parallel system is the sum of the outputs from system 1 and system 2 (when both have the same input). Another important type of connection is the _feedback_ interconnection:

![Attachments/Oppenheim,Willsky_Signals and Systems 1.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%201.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=74&rect=52,506,327,597| ]]

In this (negative) feedback configuration, the output of system 1 is the input to system 2. The output of system 2 is then fed back and subtracted from (or added to, for positive feedback) the external input to produce the actual input signal that drives system 1. These types of interconnections are prevalent in many practical systems, for instance, in control systems and amplifiers. Block diagram equivalences, such as shown below, are often useful for simplifying or analysing interconnected systems.

![Attachments/Oppenheim,Willsky_Signals and Systems 2.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%202.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=74&rect=90,84,325,315| ]]

---
## 1.9 Basic Properties

### 1.9.1 Memory
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=75&selection=51,0,63,6| ]]

A system is said to be **memoryless** if its output at any given time depends only on the input at that same time. An example of a basic memoryless system is the identity system, $y(t)=x(t)$ or $y[n]=x[n]$, where the output is simply equal to the input. Another is a resistor where $v(t)=Ri(t)$.

Systems that are not memoryless are said to possess **memory**. Their output depends on past (and for non-causal systems, possibly future) values of the input. As counterexamples:
- The accumulator system $y[n] = \sum_{k=-\infty}^{n} x[k]$ has memory, as the output at time $n$ depends on all past and present inputs.
- The delay system $y[n] = x[n-1]$ also has memory, as the output at time $n$ depends on the input at time $n-1$.
A capacitor is an example of a physical system component with memory, since the voltage across it is $V(t) = \frac{1}{C} \int_{-\infty}^{t} I(\tau) d\tau$, depending on the history of the current $I(\tau)$.

### 1.9.2 Invertibility and Inverse Systems
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=76&selection=165,0,173,7| ]]

A system is said to be **invertible** if distinct inputs produce distinct outputs. If a system is invertible, then an **inverse system** exists which, when cascaded with the original system, yields an output equal to the original system's input. That is, if system $S$ produces $y(t)$ from $x(t)$, its inverse $S^{-1}$ produces $x(t)$ from $y(t)$.

![Attachments/Oppenheim,Willsky_Signals and Systems 3.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%203.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=77&rect=104,566,358,606| ]]

Invertibility is important in many contexts, such as signal processing (for instance, deconvolution to remove distortions) and communication systems (for instance, decoding an encoded signal). Lossless data compression, for example, requires that the encoding process must be invertible to allow perfect reconstruction of the original data.

### 1.9.3 Causality
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=77&selection=205,0,209,9| ]]

A system is **causal** if its output at any time $t$ (or $n$) depends only on values of the input at the present time and in the past (i.e., for $t' \le t$ or $n' \le n$). Such a system is also termed **non-anticipative**, as its output does not anticipate future values of the input. All real-time physical systems must be causal.
Examples of non-causal systems include:
$$
y[n] = x[n] - x[n+1] \quad (\text{depends on future input } x[n+1]),
$$
$$
y(t) = x(t+1) \quad (\text{depends on future input } x(t+1)).
$$

### 1.9.4 Stability
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=79&selection=55,0,59,9| ]]

A system is **stable** in the Bounded-Input, Bounded-Output (BIBO) sense if every bounded input signal produces an output signal that is also bounded. That is, if an input $x(t)$ satisfies $|x(t)| \le B_x < \infty$ for all $t$ (where $B_x$ is a finite positive number), then the output $y(t)$ must satisfy $|y(t)| \le B_y < \infty$ for all $t$ (where $B_y$ is also a finite positive number, which may depend on $B_x$).
For instance, consider a simple pendulum with small oscillations (stable system) versus an inverted pendulum (unstable system): a small perturbation (input) to the inverted pendulum can lead to a large, unbounded output (falling over).

![Attachments/Oppenheim,Willsky_Signals and Systems 4.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%204.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=79&rect=191,46,305,240| ]]

### 1.9.5 Time Invariance
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=81&selection=204,0,206,15| ]]

A system is **time-invariant** if its behaviour and characteristics are fixed over time. Formally, a system is time-invariant if a time shift in the input signal causes an identical time shift in the output signal. That is, if an input $x[n]$ produces an output $y[n]$ (so $x[n] \to y[n]$), then for any arbitrary time shift $n_0$, the input $x_d[n]=x[n-n_0]$ must produce the output $y_d[n]=y[n-n_0]$. (An analogous definition applies for continuous-time systems with $t$ and $t_0$).

### 1.9.6 Linearity
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=84&selection=70,0,74,9| ]]

A system is **linear** if it satisfies the superposition principle. This principle combines two properties:
1.  **Additivity:** If input $x_1(t)$ produces output $y_1(t)$, and input $x_2(t)$ produces output $y_2(t)$, then the input $x_1(t)+x_2(t)$ must produce the output $y_1(t)+y_2(t)$.
2.  **Homogeneity (or Scaling):** If input $x_1(t)$ produces output $y_1(t)$, then for any complex constant $\alpha$, the input $\alpha x_1(t)$ must produce the output $\alpha y_1(t)$.

These two properties can be combined into a single condition for superposition: for any inputs $x_1(t), x_2(t)$ and any complex constants $\alpha, \beta$:
$$
\text{If } x_1(t) \to y_1(t) \text{ and } x_2(t) \to y_2(t), \text{ then } \alpha x_1(t) + \beta x_2(t) \to \alpha y_1(t) + \beta y_2(t).
$$
Analogous definitions apply for discrete-time systems.

---