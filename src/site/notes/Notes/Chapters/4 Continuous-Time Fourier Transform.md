---
{"dg-publish":true,"permalink":"/notes/chapters/4-continuous-time-fourier-transform/","hide":"true","updated":"2025-01-28T21:21:45.091+01:00"}
---

Jump back to chapter selection: [[Notes/Signals and Systems/Signals and Systems\|Notes/Signals and Systems/Signals and Systems]]

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
![Attachments/Notes/Chapters/4 Continuous-Time Fourier Transform/IMG-0128212144973.webp|700](/img/user/Attachments/Notes/Chapters/4%20Continuous-Time%20Fourier%20Transform/IMG-0128212144973.webp)
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=318&rect=123,434,423,595|•]]

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