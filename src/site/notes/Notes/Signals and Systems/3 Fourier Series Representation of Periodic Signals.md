---
{"dg-publish":true,"permalink":"/notes/signals-and-systems/3-fourier-series-representation-of-periodic-signals/","hide":"true","updated":"2025-05-29T15:00:09.307+02:00"}
---

Jump back to ==[[Notes/Signals and Systems/Signals and Systems#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Signals and Systems/3 Fourier Series Representation of Periodic Signals#3.1 The Response of LTI Systems to Complex Exponentials\|3.1 The Response of LTI Systems to Complex Exponentials]]
- [[Notes/Signals and Systems/3 Fourier Series Representation of Periodic Signals#3.2 Fourier Series Representation of Continuous-Time Periodic Signals\|3.2 Fourier Series Representation of Continuous-Time Periodic Signals]]
- [[Notes/Signals and Systems/3 Fourier Series Representation of Periodic Signals#3.3 Convergence of the Fourier Series\|3.3 Convergence of the Fourier Series]]
- [[Notes/Signals and Systems/3 Fourier Series Representation of Periodic Signals#3.4 Properties of the Continuous-Time Fourier Series\|3.4 Properties of the Continuous-Time Fourier Series]]
- [[Notes/Signals and Systems/3 Fourier Series Representation of Periodic Signals#3.5 Fourier Series Representation of Discrete-Time Periodic Signals\|3.5 Fourier Series Representation of Discrete-Time Periodic Signals]]
- [[Notes/Signals and Systems/3 Fourier Series Representation of Periodic Signals#3.6 Properties of the Discrete-Time Fourier Series\|3.6 Properties of the Discrete-Time Fourier Series]]
- [[Notes/Signals and Systems/3 Fourier Series Representation of Periodic Signals#3.7 Fourier Series and LTI Systems\|3.7 Fourier Series and LTI Systems]]
- [[Notes/Signals and Systems/3 Fourier Series Representation of Periodic Signals#3.8 Filtering\|3.8 Filtering]]
- [[Notes/Signals and Systems/3 Fourier Series Representation of Periodic Signals#3.9 Important Examples: Continuous-Time\|3.9 Important Examples: Continuous-Time]]
- [[Notes/Signals and Systems/3 Fourier Series Representation of Periodic Signals#3.10 Important Examples: Discrete-Time Filters\|3.10 Important Examples: Discrete-Time Filters]]

---
# 3 Fourier Series Representation of Periodic Signals
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=208&selection=6,0,16,7|•]]

The representation and analysis of LTI systems through the convolution sum are based on representing signals as linear combinations of shifted impulses. This chapter explores an alternative representation for signals and LTI systems.

---
## 3.1 The Response of LTI Systems to Complex Exponentials 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=213&selection=58,0,72,12|•]]

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
## 3.2 Fourier Series Representation of Continuous-Time Periodic Signals 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=217&selection=120,0,132,7|•]]

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
## 3.3 Convergence of the Fourier Series 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=226&selection=234,0,246,6|•]]

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
-  **Finite power over one period**:
	$$\int_0^T |x(t)|^2 \, dt < \infty.$$
-  **Bounded variation**: $x(t)$ has a finite number of maxima and minima in one period.
- **Finite discontinuities**: $x(t)$ has a finite number of discontinuities per period, and each discontinuity is finite.

At points of discontinuity, the Fourier series converges to the average value of the signal on either side of the discontinuity.

### 3.3.3 Practical Implications
Signals satisfying the Dirichlet conditions have Fourier series representations. Even if $x(t)$ and its Fourier series differ at isolated points, their integrals and energy are identical, making them indistinguishable for analysis in LTI systems.

---
## 3.4 Properties of the Continuous-Time Fourier Series 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=233&selection=18,0,28,6|•]]

Below is a table summarising several useful properties of the continuous-time Fourier series:

|                  Property                  |                                          Periodic Signal                                           |                                            Fourier Series Coefficients                                            |
| :----------------------------------------: | :------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: |
|                                            |          $x(t)$ periodic with period $T$ and fundamental frequency $\omega_0 = 2 \pi / T$          |                                                       $a_k$                                                       |
|               **Linearity**                |                                         $A x(t) + B y(t)$                                          |                                                  $A a_k + B b_k$                                                  |
|             **Time Shifting**              |                                            $x(t - t_0)$                                            |                            $a_k e^{-i k \omega_0 t_0} = a_k e^{-i k (2 \pi / T) t_0}$                             |
|           **Frequency Shifting**           |                                     $e^{j M \omega_0 t} x(t)$                                      |                                                     $a_{k-M}$                                                     |
|              **Conjugation**               |                                              $x^*(t)$                                              |                                                    $a_{-k}^*$                                                     |
|             **Time Reversal**              |                                              $x(-t)$                                               |                                                     $a_{-k}$                                                      |
|              **Time Scaling**              |                         $x(\alpha t)$ (periodic with period $T / \alpha$)                          |                                                       $a_k$                                                       |
|          **Periodic Convolution**          |                               $\int_T x(\tau) y(t - \tau) \, d\tau$                                |                                                    $T a_k b_k$                                                    |
|             **Multiplication**             |                                            $x(t) y(t)$                                             |                                      $\sum_{l = -\infty}^\infty a_l b_{k-l}$                                      |
|            **Differentiation**             |                                        $\frac{d x(t)}{dt}$                                         |                                   $i k \omega_0 a_k = i k \frac{2 \pi}{T} a_k$                                    |
|              **Integration**               |               $\int_{-\infty}^t x(t) \, dt$ (finite and periodic only if $a_0 = 0$)                |                           $\frac{1}{i k \omega_0} a_k = \frac{1}{i k (2 \pi / T)} a_k$                            |
|  **Conjugate Symmetry for Real Signals**   |                                            $x(t)$ real                                             | $a_k = a_{-k}^*, \mathfrak{Re}\{a_k\} = \mathfrak{Re}\{a_{-k}\}, \mathfrak{Im}\{a_k\} = -\mathfrak{Im}\{a_{-k}\}$ |
|         **Real and Even Signals**          |                                        $x(t)$ real and even                                        |                                                $a_k$ real and even                                                |
|          **Real and Odd Signals**          |                                        $x(t)$ real and odd                                         |                                          $a_k$ purely imaginary and odd                                           |
| **Even-Odd Decomposition of Real Signals** | $x(t) = x_e(t) + x_o(t)$, where $x_e(t) = \frac{x(t) + x(-t)}{2}, x_o(t) = \frac{x(t) - x(-t)}{2}$ |                         $\mathfrak{Re}\{a_k\}$ for even, $i \mathfrak{Im}\{a_k\}$ for odd                         |
|          **Parseval's Relation**           |                 $\frac{1}{T} \int_T\| x(t)\|^2dt=\sum_{k=-\infty}^\infty\|a_k\|^2$                 |                                                                                                                   |

---
### Parseval's Relation for Continuous-Time Periodic Signals
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=236&selection=147,1,155,7|•]]

Parseval's relation for continuous-time periodic signals is
$$
\frac{1}{T} \int_T|x(t)|^2 d t=\sum_{k=-\infty}^{+\infty}\left|a_k\right|^2,
$$
where the $a_k$ are the Fourier series coefficients of $x(t)$ and $T$ is the period of the signal.
Note that the left-hand side is the average power (e.g. energy per unit time) in one period of the periodic signal $x(t)$. Also,

$$
\frac{1}{T} \int_T\left|a_k e^{j k \omega_0 t}\right|^2 d t=\frac{1}{T} \int_T\left|a_k\right|^2 d t=\left|a_k\right|^2,
$$
so that $\left|a_k\right|^2$ is the average power in the $k$-th harmonic component of $x(t)$. Thus, what Parseval's relation states is that the total average power in a periodic signal equals the sum of the average powers in all of its harmonic components.

---
## 3.5 Fourier Series Representation of Discrete-Time Periodic Signals 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=242&selection=202,0,214,7|•]]

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
## 3.6 Properties of the Discrete-Time Fourier Series 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=252&selection=33,0,43,6|•]]

|                Property                 |                                                                    Periodic Signal                                                                    |                           Fourier Series Coefficients                            |
| :-------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: |
|              **Linearity**              |                                                                   $A x[n] + B y[n]$                                                                   |                                 $A a_k + B b_k$                                  |
|            **Time Shifting**            |                                                                     $x[n - n_0]$                                                                      |                           $a_k e^{-i k \omega_0 n_0}$                            |
|         **Frequency Shifting**          |                                                               $e^{j M \omega_0 n} x[n]$                                                               |                                    $a_{k-M}$                                     |
|             **Conjugation**             |                                                                       $x^*[n]$                                                                        |                                    $a_{-k}^*$                                    |
|            **Time Reversal**            |                                                                        $x[-n]$                                                                        |                                     $a_{-k}$                                     |
|            **Time Scaling**             | $x_{(m)}[n]= \begin{cases}x[n / m], & \text { if } n \text { is a multiple of } m \\ 0, & \text { if } n \text { is not a multiple of } m\end{cases}$ | $\frac{1}{m} a_k\binom{\text { viewed as periodic }}{\text { with period } m N}$ |
|        **Periodic Convolution**         |                                                           $\sum_{r=0}^{N-1} x[r] y[n - r]$                                                            |                                   $N a_k b_k$                                    |
|           **Multiplication**            |                                                                      $x[n] y[n]$                                                                      |                          $\sum_{l=0}^{N-1} a_l b_{k-l}$                          |
|          **First Difference**           |                                                                    $x[n] - x[n-1]$                                                                    |                     $\left(1 - e^{-i k \omega_0}\right) a_k$                     |
|             **Running Sum**             |                                              $\sum_{m=0}^n x[m]$ (finite and periodic only if $a_0 = 0$)                                              |               $\frac{1}{1 - e^{-i k \omega_0}} a_k$ for $k\neq 0$                |
| **Conjugate Symmetry for Real Signals** |                                                                      $x[n]$ real                                                                      |                                 $a_k = a_{-k}^*$                                 |
|         **Parseval's Relation**         |                                          $\frac{1}{N} \sum_{n=0}^{N-1}\|x[n]\|^2=\sum_{k=0}^{N-1}\|a_k\|^2$                                           |                                                                                  |

---
## 3.7 Fourier Series and LTI Systems 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=257&selection=275,0,285,7|•]]

The response of an LTI system to a Fourier series input takes the form:
$$
y(t) = \sum_{k=-\infty}^\infty a_k H(i k \omega_0) e^{i k \omega_0 t}.
$$
The Fourier coefficients of the output are modified by the frequency response:
$$
a_k \longrightarrow a_k H(i k \omega_0).
$$

---
## 3.8 Filtering 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=262&selection=148,0,150,9|•]]

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
- Continuous-time high-pass and bandpass filter:

![Attachments/Oppenheim,Willsky_Signals and Systems 18.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2018.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=269&rect=103,409,315,590|•]]
  
- Discrete-time low-pass, high-pass, and bandpass filter:

![Attachments/Oppenheim,Willsky_Signals and Systems 17.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2017.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=269&rect=67,38,318,298|•]]
  
---
## 3.9 Important Examples: Continuous-Time 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=270&selection=76,0,93,9|•]]

### 3.9.1 Simple RC Low-Pass Filter 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=270&selection=148,0,156,6|•]]

Electrical circuits are commonly used to implement continuous-time filtering operations. One of the simplest examples is the first-order RC circuit:

![Attachments/Oppenheim,Willsky_Signals and Systems 10.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2010.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=271&rect=149,482,297,597|•]]

In this circuit, the output signal can either be the capacitor voltage $v_c(t)$ or the resistor voltage. If we take the capacitor voltage as the output, the relationship between input and output is described by the differential equation:
$$
RC \frac{d v_c(t)}{d t} + v_c(t) = v_s(t).
$$

Assuming initial rest, the system is LTI. The frequency response $H(i\omega)$ is determined by assuming an input of $v_s(t) = e^{i\omega t}$, resulting in:
$$
H(i \omega) = \frac{1}{1 + RC \cdot i \omega}.
$$

The magnitude and phase of $H(i \omega)$ are as follows:

![Attachments/Oppenheim,Willsky_Signals and Systems 11.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2011.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=272&rect=104,316,435,599|•]]

For $\omega \approx 0$, $|H(i\omega)| \approx 1$, indicating that low frequencies pass with minimal attenuation. For higher $\omega$, $|H(i\omega)|$ decreases, making this circuit a nonideal low-pass filter.

The impulse response and step response of the system are:
$$
h(t) = \frac{1}{RC} e^{-t / RC} u(t),
$$
$$
s(t) = \left[1 - e^{-t / RC}\right] u(t).
$$

![Attachments/Oppenheim,Willsky_Signals and Systems 12.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2012.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=273&rect=74,342,309,601|•]]

There is a trade-off between frequency response and time-domain behavior. A larger $RC$ enhances low-pass filtering but results in slower step response.

---
### 3.9.2 Simple RC High-Pass Filter 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=272&selection=193,0,205,6|•]]

If we choose the resistor voltage $v_r(t)$ as the output, the relationship between input and output becomes:
$$
RC \frac{d v_r(t)}{d t} + v_r(t) = RC \frac{d v_s(t)}{d t}.
$$

The frequency response $G(i\omega)$ is given by:
$$
G(i\omega) = \frac{i \omega RC}{1 + i \omega RC}.
$$

The magnitude and phase of $G(i\omega)$ are shown below:

![Attachments/Oppenheim,Willsky_Signals and Systems 13.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2013.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=274&rect=128,319,467,604|•]]

The high-pass filter attenuates low frequencies and allows high frequencies to pass, particularly for $|\omega| \gg 1 / RC$.

As with the low-pass filter, increasing $RC$ extends the passband to lower frequencies but slows the system's step response. More complex filters with additional energy storage elements can achieve sharper transitions and greater flexibility.

---
## 3.10 Important Examples: Discrete-Time Filters 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=275&selection=53,0,69,9|•]]

Discrete-time filters described by linear constant-coefficient difference equations are widely used in practice. These filters are categorized into:
1. **Recursive filters** (IIR): Impulse responses of infinite length.
2. **Non-recursive filters** (FIR): Impulse responses of finite length.

### 3.10.1 First-Order Recursive Discrete-Time Filters 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=275&selection=149,0,151,43|•]]

A first-order recursive discrete-time filter is described by:
$$
y[n] - a y[n-1] = x[n].
$$

The frequency response is:
$$
H(e^{i\omega}) = \frac{1}{1 - a e^{-i\omega}}.
$$

For $a = 0.6$, the magnitude and phase of $H(e^{i\omega})$ are shown below:

![Attachments/Oppenheim,Willsky_Signals and Systems 14.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2014.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=277&rect=121,372,342,630|•]]

For $a = -0.6$, the magnitude and phase are as follows:

![Attachments/Oppenheim,Willsky_Signals and Systems 15.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2015.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=277&rect=126,46,345,352|•]]

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

### 3.10.2 Non-Recursive Discrete-Time Filters 
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=276&selection=230,0,234,34|•]]

A general non-recursive difference equation is:
$$
y[n] = \sum_{k=-N}^M b_k x[n-k].
$$

This equation represents a weighted average of $x[n]$ values, often used in moving-average filters. These filters smooth high-frequency variations, effectively acting as low-pass filters.

For a moving-average filter of size $N + M + 1$ with uniform weights, the frequency response is:
$$
H(e^{i\omega}) = \frac{1}{N + M + 1} e^{i \omega [(N - M) / 2]} \frac{\sin[\omega (M + N + 1) / 2]}{\sin(\omega / 2)}.
$$

The magnitude of $H(e^{i\omega})$ for $N + M + 1 = 33$ and $N + M + 1 = 65$ is shown:

![Attachments/Oppenheim,Willsky_Signals and Systems 16.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2016.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=279&rect=89,179,455,466|•]]

---