---
{"dg-publish":true,"permalink":"/notes/chapters/1-signals-and-systems/","hide":"true","updated":"2025-01-28T17:49:19.000+01:00"}
---

Jump back to chapter selection: [[Notes/Signals and Systems/Signals and Systems\|Notes/Signals and Systems/Signals and Systems]]

# 1 Signals and Systems

[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=32&selection=2,0,6,7|•]]

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