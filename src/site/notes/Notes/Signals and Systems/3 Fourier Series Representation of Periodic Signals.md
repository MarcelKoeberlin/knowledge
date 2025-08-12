---
{"dg-publish":true,"permalink":"/notes/signals-and-systems/3-fourier-series-representation-of-periodic-signals/","hide":"true","updated":"2025-05-30T20:27:27.115+02:00"}
---

Jump back to ==[[Notes/Signals and Systems/Signals and Systems#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[#3.1 The Response of LTI Systems to Complex Exponentials|3.1 The Response of LTI Systems to Complex Exponentials]]
[[#3.2 Fourier Series Representation of Continuous-Time Periodic Signals|3.2 Fourier Series Representation of Continuous-Time Periodic Signals]]
[[#3.3 Convergence of the Fourier Series|3.3 Convergence of the Fourier Series]]
[[#3.4 Properties of the Continuous-Time Fourier Series|3.4 Properties of the Continuous-Time Fourier Series]]
[[#3.5 Fourier Series Representation of Discrete-Time Periodic Signals|3.5 Fourier Series Representation of Discrete-Time Periodic Signals]]
[[#3.6 Properties of the Discrete-Time Fourier Series|3.6 Properties of the Discrete-Time Fourier Series]]
[[#3.7 Fourier Series and LTI Systems|3.7 Fourier Series and LTI Systems]]
[[#3.8 Filtering|3.8 Filtering]]
[[#3.9 Important Examples: Continuous-Time|3.9 Important Examples: Continuous-Time]]
[[#3.10 Important Examples: Discrete-Time Filters|3.10 Important Examples: Discrete-Time Filters]]

---
# 3 Fourier Series Representation of Periodic Signals
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=208&selection=6,0,16,7| ]]

The representation and analysis of LTI systems through the convolution sum, as discussed in [[Notes/Signals and Systems/2 Linear Time-Invariant Systems\|Chapter 2]], are based on representing signals as linear combinations of shifted impulses. This chapter explores an alternative and powerful representation for periodic signals and for the analysis of LTI systems, known as the Fourier series.

---
## 3.1 The Response of LTI Systems to Complex Exponentials
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=213&selection=58,0,72,12| ]]

In the study of LTI systems, it is particularly advantageous to represent signals as linear combinations of basic signals that possess two key properties:
1. The set of basic signals can be used to construct a broad and useful class of signals.
2. The response of an LTI system to each of these basic signals is simple in form, thus providing a convenient way to represent the system's response to any signal constructed as a linear combination of these basic signals.

Fourier analysis is highly significant because complex exponential signals satisfy these properties for LTI systems, in both continuous and discrete time. Specifically, the response of an LTI system to a complex exponential input is the same complex exponential, merely scaled by a complex amplitude factor:
$$
\begin{aligned}
\text{Continuous time: } & x(t) = e^{st} \quad \longrightarrow \quad y(t) = H(s)e^{st}, \\
\text{Discrete time: } & x[n] = z^n \quad \longrightarrow \quad y[n] = H(z)z^n,
\end{aligned}
$$
where $s$ (for continuous time) and $z$ (for discrete time) are complex numbers. The complex amplitude factor $H(s)$ or $H(z)$ is characteristic of the system and is called the system's **transfer function** or **system function**, evaluated at $s$ or $z$. A signal $x$ for which the system output is $y = a \cdot x$ (where $a$ is a constant) is called an **eigenfunction** of the system, and the complex constant $a$ is the corresponding **eigenvalue**. Thus, complex exponentials are eigenfunctions of LTI systems.

### 3.1.1 Continuous-Time Proof
For a continuous-time LTI system with impulse response $h(t)$, if the input is $x(t) = e^{st}$, the output $y(t)$ is given by the convolution integral:
$$
y(t) = \int_{-\infty}^\infty h(\tau) x(t-\tau) d\tau = \int_{-\infty}^\infty h(\tau) e^{s(t-\tau)} d\tau.
$$
We can rewrite this as:
$$
y(t) = e^{st} \int_{-\infty}^\infty h(\tau) e^{-s\tau} d\tau.
$$
If the integral converges, we define:
$$
H(s) = \int_{-\infty}^\infty h(\tau) e^{-s\tau} d\tau.
$$
Then, the output is $y(t) = H(s)e^{st}$. Thus, $e^{st}$ is an eigenfunction of the LTI system, and $H(s)$ (which is the Laplace transform of $h(t)$) is the corresponding eigenvalue.

### 3.1.2 Discrete-Time Proof
Similarly, for a discrete-time LTI system with impulse response $h[n]$, if the input is $x[n] = z^n$, where $z$ is a complex number, the output $y[n]$ is given by the convolution sum:
$$
y[n] = \sum_{k=-\infty}^\infty h[k] x[n-k] = \sum_{k=-\infty}^\infty h[k] z^{n-k}.
$$
Rewriting this:
$$
y[n] = z^n \sum_{k=-\infty}^\infty h[k] z^{-k}.
$$
If the sum converges, we define:
$$
H(z) = \sum_{k=-\infty}^\infty h[k] z^{-k}.
$$
Then, the output is $y[n] = H(z)z^n$. Thus, $z^n$ is an eigenfunction of the discrete-time LTI system, and $H(z)$ (which is the Z-transform of $h[n]$) is the corresponding eigenvalue.

### 3.1.3 Decomposition of Signals
The eigenfunction property is powerful because if a general input signal can be decomposed into a linear combination of these eigenfunctions, then, by the superposition property of LTI systems, the output will be a linear combination of the corresponding scaled eigenfunctions. For instance, if a continuous-time input $x(t)$ can be written as:
$$
x(t) = \sum_k a_k e^{s_k t},
$$
then the output of an LTI system with transfer function $H(s)$ is:
$$
y(t) = \sum_k a_k H(s_k)e^{s_k t}.
$$
A similar relationship holds for discrete-time signals represented as a sum of $z_k^n$. This forms the basis of Fourier analysis, where periodic signals are decomposed into harmonically related complex exponentials $e^{ik\omega_0 t}$ (a special case of $e^{st}$ with $s=ik\omega_0$).

---
## 3.2 Fourier Series Representation of Continuous-Time Periodic Signals
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=217&selection=120,0,132,7| ]]

A continuous-time periodic signal $x(t)$ with fundamental period $T$ (and fundamental frequency $\omega_0 = 2\pi/T$) can often be represented as a linear combination of harmonically related complex exponentials:
$$
x(t) = \sum_{k=-\infty}^\infty a_k e^{ik \omega_0 t} = \sum_{k=-\infty}^\infty a_k e^{ik (2\pi/T)t}.
$$
This is the **complex exponential Fourier series representation** of $x(t)$. The terms $e^{ik\omega_0 t}$ are the harmonic components, and $a_k$ are the **Fourier series coefficients**.

### 3.2.1 Real Signals
If $x(t)$ is a real-valued signal, its Fourier series coefficients must satisfy the conjugate symmetry condition: $a_k^* = a_{-k}$. This allows the series to be written in alternative forms. Using $a_0$ (the DC component) and pairing terms for $k$ and $-k$:
$$
x(t) = a_0 + \sum_{k=1}^\infty (a_k e^{ik \omega_0 t} + a_{-k} e^{-ik \omega_0 t}) = a_0 + \sum_{k=1}^\infty (a_k e^{ik \omega_0 t} + a_k^* e^{-ik \omega_0 t}).
$$
If we write $a_k = A_k e^{i\theta_k}$ for $k \ge 1$ (where $A_k = |a_k|$ and $\theta_k = \arg[a_k]$), and $a_0$ is real if $x(t)$ is real, then:
$$
x(t) = a_0 + \sum_{k=1}^\infty 2 A_k \cos(k\omega_0 t + \theta_k).
$$
Alternatively, using $a_k = B_k + iC_k$ (for $k \ge 1$, $B_k = \mathfrak{Re}[a_k], C_k = \mathfrak{Im}[a_k]$), and noting $a_0$ is real:
$$
x(t) = a_0 + 2 \sum_{k=1}^\infty \left( B_k \cos(k\omega_0 t) - C_k \sin(k\omega_0 t) \right).
$$

### 3.2.2 Derivation of Fourier Coefficients
Assuming $x(t)$ has a Fourier series representation as given above, we can determine the coefficients $a_k$. Multiply both sides of the synthesis equation by $e^{-in\omega_0 t}$ (where $n$ is an integer) and integrate over one period $T$ (from any $t_0$ to $t_0+T$, commonly $0$ to $T$ or $-T/2$ to $T/2$):
$$
\int_T x(t)e^{-in \omega_0 t} dt = \int_T \sum_{k=-\infty}^\infty a_k e^{ik\omega_0 t} e^{-in\omega_0 t} dt.
$$
Interchanging the summation and integration (assuming convergence allows this):
$$
\int_T x(t)e^{-in \omega_0 t} dt = \sum_{k=-\infty}^\infty a_k \int_T e^{i(k-n)\omega_0 t} dt.
$$
The integral on the right-hand side exploits the orthogonality of complex exponentials over one period:
$$
\int_T e^{i(k-n)\omega_0 t} dt = \begin{cases} T, & \text{if } k = n, \\ 0, & \text{if } k \neq n. \end{cases}
$$
Thus, only the term where $k=n$ survives in the summation, yielding $T a_n$. Relabelling $n$ as $k$, the Fourier series coefficients are given by the analysis equation:
$$
a_k = \frac{1}{T} \int_T x(t) e^{-ik \omega_0 t} dt.
$$
The coefficient $a_0$ represents the average (DC) value of $x(t)$ over one period:
$$
a_0 = \frac{1}{T} \int_T x(t) dt.
$$

---
## 3.3 Convergence of the Fourier Series
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=226&selection=234,0,246,6| ]]

Although Joseph Fourier initially claimed that any periodic signal could be represented by a Fourier series, this is true only under certain conditions related to the "well-behavedness" of the signal.

### 3.3.1 Approximation and Error
The Fourier series represents $x(t)$ as an infinite sum. In practice, we often use a finite sum as an approximation:
$$
x_N(t) = \sum_{k=-N}^N a_k e^{ik \omega_0 t}.
$$
The approximation error is $e_N(t) = x(t) - x_N(t)$. One measure of this error over one period is the integrated squared error (error energy per period):
$$
E_N = \int_T |e_N(t)|^2 dt.
$$
It can be shown that the choice of coefficients $a_k$ given by the standard analysis formula minimises this mean square error $E_N$. If $E_N \to 0$ as $N \to \infty$, the series is said to converge in the mean-square sense.

### 3.3.2 Convergence Conditions (Dirichlet Conditions)
For a periodic signal $x(t)$, its Fourier series representation (the infinite sum) converges to $x(t)$ (pointwise, except at discontinuities) if $x(t)$ satisfies the Dirichlet conditions over any one period:
1.  $x(t)$ is **absolutely integrable** over one period: $\int_T |x(t)| dt < \infty$. (This implies that $x(t)$ has finite energy over one period if it is also bounded, $\int_T |x(t)|^2 dt < \infty$, which is a condition for mean-square convergence).
2.  $x(t)$ has a **finite number of maxima and minima** within any finite interval (bounded variation).
3.  $x(t)$ has a **finite number of discontinuities** within any finite interval, and each discontinuity must be finite.

If these conditions are met, the Fourier series converges to $x(t)$ at all points where $x(t)$ is continuous. At points of discontinuity, the Fourier series converges to the average of the values of $x(t)$ on either side of the discontinuity (the midpoint of the jump).

### 3.3.3 Practical Implications
Most periodic signals encountered in engineering and physics satisfy the Dirichlet conditions and thus have Fourier series representations. Even if $x(t)$ and its Fourier series representation (the infinite sum) differ at a finite number of isolated points (specifically, at discontinuities), their integrals over any interval are identical, and their total energy or power per period are identical. For many practical purposes, particularly in the analysis of LTI systems, these isolated differences are not significant.

---
## 3.4 Properties of the Continuous-Time Fourier Series
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=233&selection=18,0,28,6| ]]

If $x(t) \stackrel{FS}{\longleftrightarrow} a_k$ and $y(t) \stackrel{FS}{\longleftrightarrow} b_k$ (both periodic with period $T$ and fundamental frequency $\omega_0 = 2\pi/T$), several useful properties hold:

| Property                           | Periodic Signal $x(t), y(t)$                                     | Fourier Series Coefficients $a_k, b_k$                                                                                                |
| :--------------------------------- | :--------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| Linearity                          | $A x(t) + B y(t)$                                                | $A a_k + B b_k$                                                                                                                       |
| Time Shifting                      | $x(t - t_0)$                                                     | $a_k e^{-ik \omega_0 t_0}$                                                                                                            |
| Frequency Shifting                 | $e^{iM \omega_0 t} x(t)$ ($M$ integer)                           | $a_{k-M}$                                                                                                                             |
| Conjugation                        | $x^*(t)$                                                         | $a_{-k}^*$                                                                                                                            |
| Time Reversal                      | $x(-t)$                                                          | $a_{-k}$                                                                                                                              |
| Time Scaling                       | $x(\alpha t)$ ($\alpha > 0$, new period $T/\alpha$)              | $a_k$ (coefficients unchanged, fundamental frequency becomes $\alpha\omega_0$)                                                        |
| Periodic Convolution               | $\int_T x(\tau) y(t - \tau) d\tau$                               | $T a_k b_k$                                                                                                                           |
| Multiplication                     | $x(t) y(t)$                                                      | $\sum_{l = -\infty}^\infty a_l b_{k-l}$ (discrete convolution)                                                                        |
| Differentiation                    | $\frac{dx(t)}{dt}$                                               | $ik \omega_0 a_k$                                                                                                                     |
| Integration                        | $\int_{-\infty}^t x(\tau) d\tau$ (periodic if $a_0=0$)           | $\frac{1}{ik \omega_0} a_k$ for $k \neq 0$; DC component needs separate consideration (may be non-zero if $a_0 \neq 0$ for integral)  |
| Conjugate Symmetry for Real $x(t)$ | $x(t)$ is real                                                   | $a_k = a_{-k}^*$; $\mathfrak{Re}\left[a_k\right]$ is even, $\mathfrak{Im}\left[a_k\right]$ is odd; $a_k$ is even, $\arg[a_k]$ is odd. |
| For Real and Even $x(t)$           | $x(t)$ is real and even                                          | $a_k$ are real and even ($a_k = a_{-k}$)                                                                                              |
| For Real and Odd $x(t)$            | $x(t)$ is real and odd                                           | $a_k$ are purely imaginary and odd ($a_k = -a_{-k}$, $a_0=0$)                                                                         |
| Even-Odd Decomp. of Real $x(t)$    | $x_e(t) = \frac{x(t)+x(-t)}{2}$, $x_o(t) = \frac{x(t)-x(-t)}{2}$ | $x_e(t) \leftrightarrow \mathfrak{Re}\left[a_k\right]$; $x_o(t) \leftrightarrow i \mathfrak{Im}\left[a_k\right]$                      |
| Parseval's Relation                | $\frac{1}{T} \int_Tx(t)^2 dt$                                    | $\sum_{k=-\infty}^\infty a_k^2$                                                                                                       |

Note: For the Integration property, the indefinite integral is periodic only if $a_0=0$. If $a_0 \neq 0$, the integral contains a term $a_0 t$ which is not periodic. The Fourier coefficient for $k=0$ of the integral is generally undefined or needs special handling.

---
### Parseval's Relation for Continuous-Time Periodic Signals
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=236&selection=147,1,155,7| ]]

Parseval's relation for continuous-time periodic signals states that the average power of the signal is equal to the sum of the average powers of its individual harmonic components:
$$
\frac{1}{T} \int_T|x(t)|^2 dt = \sum_{k=-\infty}^{+\infty} |a_k|^2.
$$
The left-hand side is the average power of the periodic signal $x(t)$ over one period. The term $|a_k e^{ik\omega_0 t}|^2 = |a_k|^2$ represents the power in the $k$-th harmonic component (its average value over one period is $\frac{1}{T}\int_T |a_k|^2 dt = |a_k|^2$ if we consider the power definition of $\frac{1}{T}\int |f(t)|^2 dt$ for each component). Thus, Parseval's relation equates the total average power in a periodic signal to the sum of the average powers in all of its harmonic components.

---
## 3.5 Fourier Series Representation of Discrete-Time Periodic Signals
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=242&selection=202,0,214,7| ]]

A discrete-time signal $x[n]$ is periodic with period $N$ if $x[n]=x[n+N]$ for all integers $n$, where $N$ is a positive integer. The fundamental frequency is $\omega_0 = 2\pi/N$. The discrete-time Fourier series (DTFS) representation is a finite sum:
$$
x[n] = \sum_{k=\langle N \rangle} a_k e^{ik \omega_0 n} = \sum_{k=0}^{N-1} a_k e^{ik (2\pi/N)n},
$$
where the sum can be taken over any $N$ consecutive integers $k$. The Fourier series coefficients $a_k$ are given by:
$$
a_k = \frac{1}{N} \sum_{n=\langle N \rangle} x[n] e^{-ik \omega_0 n} = \frac{1}{N} \sum_{n=0}^{N-1} x[n] e^{-ik (2\pi/N)n}.
$$
Both the signal $x[n]$ and its DTFS coefficients $a_k$ are periodic with period $N$ (i.e., $x[n+N]=x[n]$ and $a_{k+N}=a_k$). There are only $N$ distinct coefficients $a_k$.

---
## 3.6 Properties of the Discrete-Time Fourier Series
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=252&selection=33,0,43,6| ]]

If $x[n] \stackrel{DTFS}{\longleftrightarrow} a_k$ and $y[n] \stackrel{DTFS}{\longleftrightarrow} b_k$ (both periodic with period $N$), several useful properties hold (indices $k$ for $a_k, b_k$ are modulo $N$):

|              Property              |                                                  Periodic Signal $x[n], y[n]$                                                   | Fourier Series Coefficients $a_k, b_k$                                                                                                                                                                                                             |
| :--------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|             Linearity              |                                                        $A x[n] + B y[n]$                                                        | $A a_k + B b_k$                                                                                                                                                                                                                                    |
|           Time Shifting            |                                                          $x[n - n_0]$                                                           | $a_k e^{-ik \omega_0 n_0} = a_k e^{-ik (2\pi/N) n_0}$                                                                                                                                                                                              |
|         Frequency Shifting         |                                             $e^{iM \omega_0 n} x[n]$ ($M$ integer)                                              | $a_{k-M}$                                                                                                                                                                                                                                          |
|            Conjugation             |                                                            $x^*[n]$                                                             | $a_{-k}^*$                                                                                                                                                                                                                                         |
|           Time Reversal            |                                                             $x[-n]$                                                             | $a_{-k}$                                                                                                                                                                                                                                           |
|    Time Expansion (Upsampling)     | $x_{(m)}[n]= \begin{cases}x[n/m], & \text{if } n \text{ is a multiple of } m \\ 0, & \text{otherwise}\end{cases}$ (Period $mN$) | $b_k = \frac{1}{m} a_{k'}$ where $k' = k \pmod N$. The sequence $b_k$ has $mN$ unique values: $b_k = \frac{1}{m}a_k$ if $a_k$ repeated $m$ times. More precisely, $b_k = \frac{1}{m}a_k$ for original $a_k$ if spectrum viewed from $0$ to $mN-1$. |
|        Periodic Convolution        |                                           $\sum_{r=\langle N \rangle} x[r] y[n - r]$                                            | $N a_k b_k$                                                                                                                                                                                                                                        |
|           Multiplication           |                                                           $x[n] y[n]$                                                           | $\sum_{l=\langle N \rangle} a_l b_{k-l}$ (circular convolution)                                                                                                                                                                                    |
|          First Difference          |                                                         $x[n] - x[n-1]$                                                         | $(1 - e^{-ik \omega_0}) a_k$                                                                                                                                                                                                                       |
|            Running Sum             |                                     $y[n] = \sum_{m=-\infty}^n x[m]$ (periodic if $a_0=0$)                                      | $b_k = \frac{1}{1 - e^{-ik \omega_0}} a_k$ for $k \not\equiv 0 \pmod N$; $b_0$ requires separate handling.                                                                                                                                         |
| Conjugate Symmetry for Real $x[n]$ |                                                         $x[n]$ is real                                                          | $a_k = a_{-k}^*$; $\mathfrak{Re}\left[a_k\right]$ is even, $\mathfrak{Im}\left[a_k\right]$ is odd (around $k=0, N/2$).                                                                                                                             |
|        Parseval's Relation         |                                         $\frac{1}{N} \sum_{n=\langle N \rangle}x[n]^2$                                          | $\sum_{k=\langle N \rangle}a_k^2$                                                                                                                                                                                                                  |

Note for Time Expansion: If $x[n]$ has period $N$ and coefficients $a_k$, the expanded signal $x_{(m)}[n]$ (with $m-1$ zeros inserted between samples of $x[n]$) has period $mN$. Its $mN$ DTFS coefficients $b_k$ are $b_k = (1/m)a_{k/m}$ if $k$ is a multiple of $m$, and $b_k=0$ otherwise. Or, simply, the $N$ coefficients $a_k$ are scaled by $1/m$ and "stretched" over $mN$ frequency bins by inserting zeros).

---
## 3.7 Fourier Series and LTI Systems
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=257&selection=275,0,285,7| ]]

If a periodic signal $x(t)$ with Fourier series coefficients $a_k$ is input to an LTI system with frequency response $H(i\omega)$, the output $y(t)$ is also periodic with the same period and has Fourier series coefficients $b_k$:
$$
y(t) = \sum_{k=-\infty}^\infty a_k H(ik\omega_0) e^{ik\omega_0 t}.
$$
So, the Fourier coefficients of the output are $b_k = a_k H(ik\omega_0)$. The system modifies the amplitude and phase of each harmonic component of the input. An analogous relationship holds for discrete-time LTI systems, where $b_k = a_k H(e^{ik\omega_0})$.

---
## 3.8 Filtering
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=262&selection=148,0,150,9| ]]

**Filtering** is the process of modifying the amplitudes (and possibly phases) of the frequency components of a signal. An LTI system acts as a filter. Common types of filters include:
- **Low-pass filter (LPF):** Passes low-frequency components (near $\omega=0$) and attenuates (reduces the amplitude of) higher-frequency components.
- **High-pass filter (HPF):** Passes high-frequency components and attenuates lower-frequency components.
- **Bandpass filter (BPF):** Passes frequency components within a specific band and attenuates components outside that band.

An ideal low-pass filter has a frequency response $H(i\omega)$ that is constant (typically 1) within its passband and zero outside:
$$
H_{\text{ideal LPF}}(i\omega) = \begin{cases} 1, & |\omega| \leq \omega_c, \\ 0, & |\omega| > \omega_c, \end{cases}
$$
where $\omega_c$ is the cutoff frequency. Ideal filters are not physically realisable but serve as useful conceptual models.
Ideal filters in continuous time and discrete time differ fundamentally because the frequency response $H(e^{i\omega})$ of a discrete-time filter is always periodic in $\omega$ with period $2\pi$, whereas $H(i\omega)$ for a continuous-time filter is not necessarily periodic.

Visual examples of ideal filter frequency responses:
- Continuous-time high-pass and bandpass filter:

![Attachments/Oppenheim,Willsky_Signals and Systems 18.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2018.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=269&rect=103,409,315,590| ]]

- Discrete-time low-pass, high-pass, and bandpass filter:

![Attachments/Oppenheim,Willsky_Signals and Systems 17.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2017.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=269&rect=67,38,318,298| ]]

---
## 3.9 Important Examples: Continuous-Time
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=270&selection=76,0,93,9| ]]

### 3.9.1 Simple RC Low-Pass Filter
Electrical circuits are commonly used to implement continuous-time filtering operations. One of the simplest examples is the first-order RC circuit shown below, where the input is $v_s(t)$ and the output is taken as the voltage across the capacitor, $v_c(t)$.

![Attachments/Oppenheim,Willsky_Signals and Systems 10.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2010.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=271&rect=149,482,297,597| ]]

The relationship between input and output is described by the linear constant-coefficient differential equation:
$$
RC \frac{dv_c(t)}{dt} + v_c(t) = v_s(t).
$$
Assuming initial rest, this system is LTI. Its frequency response $H(i\omega) = V_c(i\omega)/V_s(i\omega)$ can be found by taking the Fourier transform or by considering an input $v_s(t) = e^{i\omega t}$ and finding the output $v_c(t) = H(i\omega)e^{i\omega t}$:
$$
H(i\omega) = \frac{1}{1 + i\omega RC}.
$$
The magnitude and phase of $H(i\omega)$ are plotted below:

![Attachments/Oppenheim,Willsky_Signals and Systems 11.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2011.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=272&rect=104,316,435,599| ]]

For $\omega \approx 0$, $|H(i\omega)| \approx 1$, indicating that low frequencies pass with minimal attenuation. For higher $\omega$, $|H(i\omega)|$ decreases (as $1/(\omega RC)$ for $\omega RC \gg 1$), making this circuit a non-ideal low-pass filter. The cutoff frequency ($-3\text{dB}$ frequency) is $\omega_c = 1/(RC)$.
The impulse response and step response of the system are:
$$
h(t) = \frac{1}{RC} e^{-t/(RC)} u(t),
$$
$$
s(t) = \left(1 - e^{-t/(RC)}\right) u(t).
$$

![Attachments/Oppenheim,Willsky_Signals and Systems 12.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2012.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=273&rect=74,342,309,601| ]]

There is a trade-off between frequency-domain selectivity and time-domain behaviour. A larger $RC$ product (lower cutoff frequency) provides stronger low-pass filtering (attenuates high frequencies more) but results in a slower step response (longer rise time).

---
### 3.9.2 Simple RC High-Pass Filter
If we instead choose the resistor voltage $v_r(t)$ as the output in the same RC circuit, the system acts as a high-pass filter. The input-output relationship is $v_s(t) = v_r(t) + v_c(t)$. Since $v_r(t) = R i(t)$ and $i(t) = C dv_c(t)/dt = C (dv_s(t)/dt - dv_r(t)/dt)$, we get:
$$
RC \frac{dv_r(t)}{dt} + v_r(t) = RC \frac{dv_s(t)}{dt}.
$$
The frequency response $H_{HP}(i\omega) = V_r(i\omega)/V_s(i\omega)$ is:
$$
H_{HP}(i\omega) = \frac{i\omega RC}{1 + i\omega RC}.
$$
The magnitude and phase of $H_{HP}(i\omega)$ are shown below:

![Attachments/Oppenheim,Willsky_Signals and Systems 13.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2013.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=274&rect=128,319,467,604| ]]

This high-pass filter attenuates low frequencies (for $\omega \ll 1/(RC)$, $|H_{HP}(i\omega)| \approx \omega RC \to 0$) and allows high frequencies to pass (for $\omega \gg 1/(RC)$, $|H_{HP}(i\omega)| \approx 1$).
As with the low-pass filter, increasing $RC$ shifts the cutoff frequency lower but also affects the transient response. More complex filter designs using additional energy storage elements (inductors, more capacitors) can achieve sharper transitions between passbands and stopbands and offer greater flexibility in shaping the frequency response.

---
## 3.10 Important Examples: Discrete-Time Filters
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=275&selection=53,0,69,9| ]]

Discrete-time filters described by linear constant-coefficient difference equations are widely used in practice, particularly in digital signal processing. These filters are broadly categorised based on their impulse response duration:
1.  **Recursive filters (typically Infinite Impulse Response - IIR):** The output depends on past output values as well as past and present input values. Their impulse responses generally have infinite length.
2.  **Non-recursive filters (typically Finite Impulse Response - FIR):** The output depends only on past and present input values. Their impulse responses have finite length.

### 3.10.1 First-Order Recursive Discrete-Time Filters
A simple first-order recursive discrete-time filter is described by the difference equation:
$$
y[n] - a y[n-1] = x[n], \quad \text{or} \quad y[n] = a y[n-1] + x[n].
$$
Assuming causality and initial rest, the frequency response $H(e^{i\omega}) = Y(e^{i\omega})/X(e^{i\omega})$ is:
$$
H(e^{i\omega}) = \frac{1}{1 - a e^{-i\omega}}.
$$
For stability, we require $|a|<1$.
- For $0 < a < 1$, the system acts as a low-pass filter (magnifies DC and low frequencies).
- For $-1 < a < 0$, the system acts as a high-pass filter (magnifies high frequencies near $\omega=\pi$).

For $a = 0.6$, the magnitude and phase of $H(e^{i\omega})$ are shown below (low-pass characteristic):

![Attachments/Oppenheim,Willsky_Signals and Systems 14.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2014.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=277&rect=121,372,342,630| ]]

For $a = -0.6$, the magnitude and phase are as follows (high-pass characteristic):

![Attachments/Oppenheim,Willsky_Signals and Systems 15.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2015.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=277&rect=126,46,345,352| ]]

The impulse response and step response are (for $|a|<1$):
$$
h[n] = a^n u[n],
$$
$$
s[n] = \sum_{k=0}^n a^k u[n] = \frac{1 - a^{n+1}}{1 - a} u[n].
$$
Higher-order recursive filters can provide sharper filtering characteristics and more complex frequency responses.

### 3.10.2 Non-Recursive Discrete-Time Filters
A general non-recursive (FIR) difference equation is:
$$
y[n] = \sum_{k=M_1}^{M_2} b_k x[n-k].
$$
If $M_1 < 0$, the filter is non-causal. For a causal FIR filter, $M_1=0$, $y[n] = \sum_{k=0}^{M} b_k x[n-k]$.
This equation represents a weighted average of $x[n]$ values. A common example is the **moving-average filter**, which typically uses uniform weights $b_k = 1/(M_2-M_1+1)$. These filters smooth high-frequency variations in the input signal, effectively acting as low-pass filters.
For a causal moving-average filter of length $M+1$ (sum from $k=0$ to $M$) with weights $b_k = 1/(M+1)$, the frequency response is:
$$
H(e^{i\omega}) = \frac{1}{M+1} \sum_{k=0}^M e^{-ik\omega} = \frac{1}{M+1} \frac{1-e^{-i(M+1)\omega}}{1-e^{-i\omega}} = \frac{1}{M+1} e^{-iM\omega/2} \frac{\sin((M+1)\omega/2)}{\sin(\omega/2)}.
$$
The magnitude of $H(e^{i\omega})$ for a causal moving average filter of length $L=33$ and $L=65$ (where $L=M+1$) shows a main lobe at $\omega=0$ and sidelobes, with nulls at integer multiples of $2\pi/L$.

![Attachments/Oppenheim,Willsky_Signals and Systems 16.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2016.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=279&rect=89,179,455,466| ]]

---