---
{"dg-publish":true,"permalink":"/notes/signals-and-systems/4-continuous-time-fourier-transform/","hide":"true","updated":"2025-02-07T10:57:49.708+01:00"}
---

Jump back to ==[[Notes/Signals and Systems/Signals and Systems#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Signals and Systems/4 Continuous-Time Fourier Transform#4.1 Representation of Aperiodic Signals: The Continuous-Time Fourier Transform\|4.1 Representation of Aperiodic Signals: The Continuous-Time Fourier Transform]]
- [[Notes/Signals and Systems/4 Continuous-Time Fourier Transform#4.2 Convergence of Fourier Transforms\|4.2 Convergence of Fourier Transforms]]
- [[Notes/Signals and Systems/4 Continuous-Time Fourier Transform#4.3 Properties of the Continuous-Time Fourier Transform\|4.3 Properties of the Continuous-Time Fourier Transform]]
- [[Notes/Signals and Systems/4 Continuous-Time Fourier Transform#4.4 Basic Fourier Transform Pairs\|4.4 Basic Fourier Transform Pairs]]
- [[Notes/Signals and Systems/4 Continuous-Time Fourier Transform#4.5 Systems Characterised by Linear Constant-Coefficient Differential Equations\|4.5 Systems Characterised by Linear Constant-Coefficient Differential Equations]]

---
# 4 Continuous-Time Fourier Transform
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=315&selection=2,0,8,9|•]]

A large class of signals, including all finite-energy signals, can be represented as a linear combination of complex exponentials. For periodic signals, these building blocks are harmonically related. For aperiodic signals, the frequencies are infinitesimally close, and the representation takes the form of an integral rather than a sum. The resulting spectrum of coefficients is called the **Fourier transform**, and the synthesis integral used to reconstruct the signal is called the **inverse Fourier transform**.

The Fourier transform was one of Fourier's most significant contributions. He reasoned that an aperiodic signal could be treated as a periodic signal with an infinite period. As the period increases, the fundamental frequency decreases, and the harmonically related components become closer in frequency. In the limit, the Fourier series sum becomes an integral.

---
## 4.1 Representation of Aperiodic Signals: The Continuous-Time Fourier Transform 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=316&selection=38,0,52,9|•]]

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

![Attachments/Oppenheim,Willsky_Signals and Systems 19.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2019.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=318&rect=120,433,420,596|•]]

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
## 4.2 Convergence of Fourier Transforms 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=320&selection=148,0,154,18|•]]

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
## 4.3 Properties of the Continuous-Time Fourier Transform 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=359&selection=16,0,34,5|•]]

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
## 4.4 Basic Fourier Transform Pairs 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=360&selection=30,0,36,5|•]]

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
## 4.5 Systems Characterised by Linear Constant-Coefficient Differential Equations 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=361&selection=44,0,58,9|•]]

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