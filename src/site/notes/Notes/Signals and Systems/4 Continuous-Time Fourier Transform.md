---
{"dg-publish":true,"permalink":"/notes/signals-and-systems/4-continuous-time-fourier-transform/","hide":"true","updated":"2025-05-30T20:30:17.687+02:00"}
---

Jump back to ==[[Notes/Signals and Systems/Signals and Systems#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Signals and Systems/4 Continuous-Time Fourier Transform#4.1 Representation of Aperiodic Signals: The Continuous-Time Fourier Transform\|4.1 Representation of Aperiodic Signals: The Continuous-Time Fourier Transform]]
[[Notes/Signals and Systems/4 Continuous-Time Fourier Transform#4.2 Convergence of Fourier Transforms\|4.2 Convergence of Fourier Transforms]]
[[Notes/Signals and Systems/4 Continuous-Time Fourier Transform#4.3 Properties of the Continuous-Time Fourier Transform\|4.3 Properties of the Continuous-Time Fourier Transform]]
[[Notes/Signals and Systems/4 Continuous-Time Fourier Transform#4.4 Basic Fourier Transform Pairs\|4.4 Basic Fourier Transform Pairs]]
[[Notes/Signals and Systems/4 Continuous-Time Fourier Transform#4.5 Systems Characterised by Linear Constant-Coefficient Differential Equations\|4.5 Systems Characterised by Linear Constant-Coefficient Differential Equations]]

---
# 4 Continuous-Time Fourier Transform
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=315&selection=2,0,8,9| ]]

A large class of signals, including all signals with finite energy, can be represented as a linear combination (or more generally, an integral) of complex exponentials. For periodic signals, as discussed in [[Notes/Signals and Systems/3 Fourier Series Representation of Periodic Signals\|Chapter 3]], these complex exponential building blocks are harmonically related, leading to a discrete sum in the Fourier series representation. For aperiodic signals, the constituent frequencies are infinitesimally close, and the representation takes the form of an integral rather than a sum. The resulting continuous spectrum of complex amplitudes is called the **Fourier transform**, and the synthesis integral used to reconstruct the signal from its spectrum is called the **inverse Fourier transform**.

The Fourier transform was one of Joseph Fourier's most significant contributions. He developed the intuition that an aperiodic signal could be viewed as a periodic signal in the limit where its period $T$ approaches infinity. As the period increases ($T \to \infty$), the fundamental frequency $\omega_0 = 2\pi/T$ decreases ($\omega_0 \to 0$), and the harmonically related components $k\omega_0$ become infinitesimally close in frequency. In this limit, the Fourier series sum transitions into an integral.

---
## 4.1 Representation of Aperiodic Signals: The Continuous-Time Fourier Transform
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=316&selection=38,0,52,9| ]]

### 4.1.1 Example: From Periodic Square Wave to Aperiodic Rectangular Pulse
Consider a periodic square wave $x_T(t)$ with period $T$, defined over one period as:
$$
x_T(t) = \begin{cases} 1, & \text{for } |t| < T_1, \\ 0, & \text{for } T_1 < |t| \le T/2, \end{cases}
$$
where $2T_1 < T$. The Fourier series coefficients $a_k$ for this periodic signal are given by:
$$
a_k = \frac{1}{T} \int_{-T_1}^{T_1} 1 \cdot e^{-ik\omega_0 t} dt = \frac{2\sin(k\omega_0 T_1)}{k\omega_0 T} = \frac{2T_1}{T} \operatorname{sinc}\left(\frac{k\omega_0 T_1}{\pi}\right),
$$
where $\omega_0 = 2\pi/T$ and $\operatorname{sinc}(x) = \sin(\pi x)/(\pi x)$. The quantity $T a_k = \frac{2\sin(k\omega_0 T_1)}{k\omega_0}$ represents the samples of an envelope function.
As $T \to \infty$, the periodic square wave $\tilde{x}(t)$ approaches a single, aperiodic rectangular pulse $x(t)$ (equal to 1 for $|t|<T_1$ and 0 otherwise). In this limit, $\omega_0 \to 0$, and $k\omega_0$ becomes a continuous variable $\omega$. The values $T a_k$ become samples of a continuous function (the envelope) $X(i\omega) = \frac{2\sin(\omega T_1)}{\omega}$. This envelope is the Fourier transform of the rectangular pulse.

### 4.1.2 Derivation
For a general aperiodic signal $x(t)$ (assumed to be of finite duration for this heuristic derivation, or otherwise satisfying convergence conditions), we can construct a periodic signal $\tilde{x}(t)$ by repeating $x(t)$ with a period $T$, such that $x(t)$ is one period of $\tilde{x}(t)$.

![Attachments/Oppenheim,Willsky_Signals and Systems 19.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2019.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=318&rect=120,433,420,596| ]]

As $T \to \infty$, $\tilde{x}(t)$ becomes identical to $x(t)$ for all $t$. The Fourier series representation of $\tilde{x}(t)$ is:
$$
\tilde{x}(t) = \sum_{k=-\infty}^\infty a_k e^{ik \omega_0 t}, \quad \text{with} \quad a_k = \frac{1}{T} \int_{-T/2}^{T/2} \tilde{x}(t)e^{-ik \omega_0 t} dt,
$$
where $\omega_0 = 2\pi / T$. Since $\tilde{x}(t)=x(t)$ for $-T/2 \le t < T/2$ (and $x(t)=0$ outside this range if we consider $x(t)$ as the single period), then $a_k = \frac{1}{T} \int_{-\infty}^{\infty} x(t)e^{-ik \omega_0 t} dt$.
Let us define the envelope $X(i\omega)$ of $T a_k$ as $\omega \to k\omega_0$:
$$
X(i\omega) = \lim_{T\to\infty} (T a_k) = \lim_{T\to\infty} \int_{-T/2}^{T/2} x(t) e^{-i(k\omega_0) t} dt = \int_{-\infty}^\infty x(t) e^{-i \omega t} dt.
$$
Now, substitute $a_k = \frac{1}{T}X(ik\omega_0) = \frac{\omega_0}{2\pi}X(ik\omega_0)$ into the Fourier series for $\tilde{x}(t)$:
$$
\tilde{x}(t) = \sum_{k=-\infty}^\infty \left(\frac{\omega_0}{2\pi}X(ik\omega_0)\right) e^{ik \omega_0 t} = \frac{1}{2\pi} \sum_{k=-\infty}^\infty X(ik\omega_0)e^{ik \omega_0 t}\omega_0.
$$
As $T \to \infty$, $\omega_0 = \Delta\omega \to d\omega$, and the summation becomes an integral (a Riemann sum definition):
$$
x(t) = \frac{1}{2\pi} \int_{-\infty}^\infty X(i\omega)e^{i\omega t} d\omega.
$$
Thus, the **continuous-time Fourier transform (CTFT)** pair is:
$$
\text{Analysis (Forward FT): } \quad X(i\omega) = \int_{-\infty}^\infty x(t) e^{-i\omega t} dt
$$
$$
\text{Synthesis (Inverse FT): } \quad x(t) = \frac{1}{2\pi} \int_{-\infty}^\infty X(i\omega) e^{i\omega t} d\omega
$$
Here, $X(i\omega)$ is called the **Fourier transform**, **spectrum**, or **spectral density** of $x(t)$. It represents the complex amplitude of the constituent exponential $e^{i\omega t}$ in $x(t)$.

---
## 4.2 Convergence of Fourier Transforms
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=320&selection=148,0,154,18| ]]

Although the heuristic derivation assumed $x(t)$ has finite duration, the CTFT pair applies to a broader class of signals, including many of infinite duration. The existence and convergence of the Fourier transform integral $X(i\omega)$ and the inverse transform integral (reconstructing $x(t)$) depend on the properties of $x(t)$. Let $\hat{x}(t)$ be the signal reconstructed by the inverse transform:
$$
\hat{x}(t) = \frac{1}{2\pi} \int_{-\infty}^\infty X(i\omega) e^{i\omega t} d\omega.
$$
Sufficient conditions for the Fourier transform $X(i\omega)$ to exist and for $\hat{x}(t)$ to represent $x(t)$ include:

1.  $x(t)$ is **square integrable** (i.e., $x(t)$ has finite energy):
    $$\int_{-\infty}^\infty |x(t)|^2 dt < \infty.$$
    If this condition holds, then $X(i\omega)$ also has finite energy ($\int_{-\infty}^\infty |X(i\omega)|^2 d\omega < \infty$, by Parseval's relation), and the inverse transform converges to $x(t)$ in the mean-square sense. That is, the energy of the difference $e(t) = \hat{x}(t) - x(t)$ is zero.
2.  $x(t)$ satisfies the **Dirichlet conditions**:
    -   $x(t)$ is **absolutely integrable**:
        $$\int_{-\infty}^\infty |x(t)| dt < \infty.$$
        (This condition alone guarantees that $X(i\omega)$ is well-defined and bounded for all $\omega$).
    -   $x(t)$ has a finite number of maxima and minima in any finite interval (bounded variation).
    -   $x(t)$ has a finite number of discontinuities in any finite interval, and each discontinuity must be finite.

If all three Dirichlet conditions are met, then $\hat{x}(t) = x(t)$ for all $t$ where $x(t)$ is continuous. At points of discontinuity, $\hat{x}(t)$ converges to the average of the values of $x(t)$ on either side of the discontinuity (the midpoint of the jump).

### 4.2.1 Periodic Signals and Impulses
Periodic signals, which are generally neither absolutely integrable nor square integrable over an infinite interval (they have infinite energy but finite power), can still have Fourier transforms if we permit the use of Dirac impulse functions in the frequency domain. For instance, the Fourier transform of $x(t) = e^{i\omega_0 t}$ is $X(i\omega) = 2\pi \delta(\omega-\omega_0)$. This generalisation allows the Fourier series and Fourier transform to be unified within a common framework.

---
## 4.3 Properties of the Continuous-Time Fourier Transform
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=359&selection=16,0,34,5| ]]

If $x(t) \stackrel{FT}{\longleftrightarrow} X(i\omega)$ and $y(t) \stackrel{FT}{\longleftrightarrow} Y(i\omega)$, several useful properties hold:

| Property                           |                  Aperiodic Signal $x(t), y(t)$                   | Fourier Transform $X(i\omega), Y(i\omega)$                                                                                     |
| :--------------------------------- | :--------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------- |
| Linearity                          |                        $a x(t) + b y(t)$                         | $a X(i\omega) + b Y(i\omega)$                                                                                                  |
| Time Shifting                      |                           $x(t - t_0)$                           | $e^{-i\omega t_0} X(i\omega)$                                                                                                  |
| Frequency Shifting (Modulation)    |                      $e^{i\omega_0 t} x(t)$                      | $X(i(\omega - \omega_0))$                                                                                                      |
| Conjugation                        |                             $x^*(t)$                             | $X^*(-i\omega)$                                                                                                                |
| Time Reversal                      |                             $x(-t)$                              | $X(-i\omega)$                                                                                                                  |
| Time and Frequency Scaling         |                   $x(at)$, for real $a \neq 0$                   | $\frac{1}{a} X\left(\frac{i\omega}{a}\right)$                                                                                  |
| Convolution                        |   $x(t) * y(t) = \int_{-\infty}^\infty x(\tau)y(t-\tau)d\tau$    | $X(i\omega) Y(i\omega)$                                                                                                        |
| Multiplication                     |                           $x(t) y(t)$                            | $\frac{1}{2\pi} (X(i\omega) * Y(i\omega)) = \frac{1}{2\pi} \int_{-\infty}^\infty X(i\theta) Y(i(\omega - \theta)) d\theta$     |
| Differentiation in Time            |                       $\frac{d x(t)}{dt}$                        | $i\omega X(i\omega)$                                                                                                           |
| Integration                        |                 $\int_{-\infty}^t x(\tau) d\tau$                 | $\frac{1}{i\omega} X(i\omega) + \pi X(0) \delta(\omega)$ (where $X(0) = \int x(t)dt$)                                          |
| Differentiation in Frequency       |                             $t x(t)$                             | $i \frac{d X(i\omega)}{d\omega}$                                                                                               |
| Conjugate Symmetry for Real $x(t)$ |                          $x(t)$ is real                          | $X(i\omega) = X^*(-i\omega)$; $\mathfrak{Re}\left[X(i\omega)\right]$ is even, $\mathfrak{Im}\left[X(i\omega)\right]$ is odd.   |
| Symmetry for Real and Even $x(t)$  |                     $x(t)$ is real and even                      | $X(i\omega)$ is real and even.                                                                                                 |
| Symmetry for Real and Odd $x(t)$   |                      $x(t)$ is real and odd                      | $X(i\omega)$ is purely imaginary and odd.                                                                                      |
| Even-Odd Decomp. for Real $x(t)$   | $x_e(t) = \mathcal{E}v\{x(t)\}$, $x_o(t) = \mathcal{O}d\{x(t)\}$ | $x_e(t) \leftrightarrow \mathfrak{Re}\left[X(i\omega)\right]$; $x_o(t) \leftrightarrow i \mathfrak{Im}\left[X(i\omega)\right]$ |
| Parseval's Relation                |                $\int_{-\infty}^\infty x(t)^2 dt$                 | $\frac{1}{2\pi} \int_{-\infty}^\infty X(i\omega)^2 d\omega$                                                                    |

---
### Parseval's Relation
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=343&selection=12,0,16,8| ]]

If $x(t)$ and $X(i\omega)$ are a Fourier transform pair (using $i\omega$ or $j\omega$ interchangeably for notation), then Parseval's relation states:
$$
\int_{-\infty}^{+\infty}|x(t)|^2 dt = \frac{1}{2\pi} \int_{-\infty}^{+\infty}|X(i\omega)|^2 d\omega.
$$
This relation can be derived by starting with the integral of $|x(t)|^2$:
$$
\begin{aligned}
\int_{-\infty}^{+\infty}|x(t)|^2 dt & =\int_{-\infty}^{+\infty} x(t) x^*(t) dt.
\end{aligned}
$$
Substitute the inverse Fourier transform for $x^*(t)$: $x^*(t) = \left(\frac{1}{2\pi}\int_{-\infty}^\infty X(i\omega') e^{i\omega' t} d\omega'\right)^* = \frac{1}{2\pi}\int_{-\infty}^\infty X^*(i\omega') e^{-i\omega' t} d\omega'$.
$$
\begin{aligned}
\int_{-\infty}^{+\infty}|x(t)|^2 dt & =\int_{-\infty}^{+\infty} x(t)\left[\frac{1}{2\pi} \int_{-\infty}^{+\infty} X^*(i\omega') e^{-i\omega' t} d\omega'\right] dt.
\end{aligned}
$$
Reversing the order of integration (assuming conditions allow):
$$
\int_{-\infty}^{+\infty}|x(t)|^2 dt = \frac{1}{2\pi} \int_{-\infty}^{+\infty} X^*(i\omega') \left[\int_{-\infty}^{+\infty} x(t) e^{-i\omega' t} dt\right] d\omega'.
$$
The bracketed term is the Fourier transform $X(i\omega')$. Thus:
$$
\int_{-\infty}^{+\infty}|x(t)|^2 dt = \frac{1}{2\pi} \int_{-\infty}^{+\infty} X^*(i\omega') X(i\omega') d\omega' = \frac{1}{2\pi} \int_{-\infty}^{+\infty}|X(i\omega')|^2 d\omega'.
$$
The term on the left-hand side, $\int_{-\infty}^{\infty}|x(t)|^2 dt$, is the total energy in the signal $x(t)$ (if $x(t)$ represents a voltage or current across a 1-ohm resistor, for instance). Parseval's relation states that this total energy can be determined either by integrating the energy per unit time ($|x(t)|^2$) over all time, or by integrating the energy per unit angular frequency ($|X(i\omega)|^2/(2\pi)$) over all frequencies. For this reason, $|X(i\omega)|^2$ is often referred to as the **energy-density spectrum** of the signal $x(t)$. This relation for finite-energy aperiodic signals is the direct counterpart to Parseval's relation for periodic signals, which relates the average power of a periodic signal to the sum of the powers of its harmonic components.

---
## 4.4 Basic Fourier Transform Pairs
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=360&selection=30,0,36,5| ]]

| Signal $x(t)$                                       |                            Fourier Transform $X(i\omega)$                            |                   Fourier Series Coefficients $a_k$ (if $x(t)$ is periodic with period $T=2\pi/\omega_0$)                    |
| :-------------------------------------------------- | :----------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
| $\sum_{k=-\infty}^\infty a_k e^{ik \omega_0 t}$     |            $2\pi \sum_{k=-\infty}^\infty a_k \delta(\omega - k\omega_0)$             |                                                            $a_k$                                                             |
| $e^{i\omega_0 t}$                                   |                           $2\pi \delta(\omega - \omega_0)$                           |                      $a_1 = 1$ (if $\omega_0$ is fundamental), $a_k = 0$ for $k\omega_0 \neq \omega_0$                       |
| $\cos(\omega_0 t)$                                  |      $\pi \left[ \delta(\omega - \omega_0) + \delta(\omega + \omega_0) \right]$      |                                        $a_1 = a_{-1} = 1/2$, $a_k = 0$ for $k\neq 1$                                         |
| $\sin(\omega_0 t)$                                  | $\frac{\pi}{i} \left[ \delta(\omega - \omega_0) - \delta(\omega + \omega_0) \right]$ |                                  $a_1 = 1/(2i), a_{-1} = -1/(2i)$, $a_k = 0$ for $k\neq 1$                                   |
| $1$ (DC signal)                                     |                                $2\pi \delta(\omega)$                                 |                                             $a_0 = 1$, $a_k = 0$ for $k \neq 0$                                              |
| Rectangular pulse: $x(t)=1$ for $                   |                                          t                                           | <T_1$, $0$ else$\frac{2\sin(\omega T_1)}{\omega} = 2T_1 \operatorname{sinc}\left(\frac{\omega T_1}{\pi}\right)$ Not periodic |
| $\delta(t)$ (unit impulse)                          |                                         $1$                                          |                                                         Not periodic                                                         |
| $u(t)$ (unit step)                                  |                       $\frac{1}{i\omega} + \pi \delta(\omega)$                       |                                                         Not periodic                                                         |
| $\delta(t - t_0)$                                   |                                  $e^{-i\omega t_0}$                                  |                                                         Not periodic                                                         |
| $e^{-at} u(t)$, $\mathfrak{Re}\left[a\right] > 0$   |                               $\frac{1}{a + i\omega}$                                |                                                         Not periodic                                                         |
| $t e^{-at} u(t)$, $\mathfrak{Re}\left[a\right] > 0$ |                             $\frac{1}{(a + i\omega)^2}$                              |                                                         Not periodic                                                         |
| Gaussian: $e^{-at^2}$, $a>0$                        |                      $\sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}$                       |                                                         Not periodic                                                         |

Note: The specific Fourier Series coefficients for periodic signals depend on the choice of fundamental period $T=2\pi/\omega_0$. The sinc function used for the rectangular pulse is $\operatorname{sinc}(x) = \sin(\pi x)/(\pi x)$.

---
## 4.5 Systems Characterised by Linear Constant-Coefficient Differential Equations
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=361&selection=44,0,58,9| ]]

Continuous-time LTI systems are often described by linear constant-coefficient differential equations of the general form:
$$
\sum_{k=0}^N a_k \frac{d^k y(t)}{dt^k} = \sum_{k=0}^M b_k \frac{d^k x(t)}{dt^k}.
$$
The frequency response $H(i\omega)$ of such a system can be found by applying the Fourier transform to both sides of the equation. Using the differentiation property $\mathcal{F}\left\{\frac{d^k f(t)}{dt^k}\right\} = (i\omega)^k F(i\omega)$, we obtain:
$$
\sum_{k=0}^N a_k (i\omega)^k Y(i\omega) = \sum_{k=0}^M b_k (i\omega)^k X(i\omega).
$$
The frequency response $H(i\omega) = Y(i\omega)/X(i\omega)$ is therefore:
$$
H(i\omega) = \frac{\sum_{k=0}^M b_k (i\omega)^k}{\sum_{k=0}^N a_k (i\omega)^k}.
$$
Thus, for systems described by linear constant-coefficient differential equations, the frequency response $H(i\omega)$ is a rational function of $i\omega$ (a ratio of polynomials in $i\omega$).

---