---
{"dg-publish":true,"permalink":"/notes/signals-and-systems/5-discrete-time-fourier-transform/","hide":"true","updated":"2025-05-29T15:32:54.709+02:00"}
---

Jump back to ==[[Notes/Signals and Systems/Signals and Systems#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Signals and Systems/5 Discrete-Time Fourier Transform#5.1 Represenation of Aperiodic Signals: The Discrete-Time Fourier Transform\|5.1 Represenation of Aperiodic Signals: The Discrete-Time Fourier Transform]]
- [[Notes/Signals and Systems/5 Discrete-Time Fourier Transform#5.2 The Fourier Transform for Periodic Signals\|5.2 The Fourier Transform for Periodic Signals]]
- [[Notes/Signals and Systems/5 Discrete-Time Fourier Transform#5.3 Properties of the Discrete-Time Fourier Transform\|5.3 Properties of the Discrete-Time Fourier Transform]]
- [[Notes/Signals and Systems/5 Discrete-Time Fourier Transform#5.4 Duality Between the Discrete-Time and Continuous-Time Fourier Transform\|5.4 Duality Between the Discrete-Time and Continuous-Time Fourier Transform]]

---
# 5 Discrete-Time Fourier Transform
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=389&selection=2,0,8,9|•]]

---
## 5.1 Representation of Aperiodic Signals: The Discrete-Time Fourier Transform
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=390&selection=24,0,40,9|•]]

Consider a general sequence $x[n]$ of finite duration, such that $x[n] = 0$ outside the range $[N_1, N_2]$. From this aperiodic signal, construct a periodic signal $\tilde{x}[n]$ for which the original $x[n]$ is one period:

![Attachments/Oppenheim,Willsky_Signals and Systems 20.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2020.webp)
![Attachments/Oppenheim,Willsky_Signals and Systems 21.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2021.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=390&rect=141,92,456,171|•]]

As we increase the period $N$, the two signals remain identical over a longer interval. In the limit as $N \to \infty$, we obtain $\tilde{x}[n] = x[n]$ for all $n$. Using this representation and taking the limit, we derive

$$
x[n] = \frac{1}{2\pi} \int_{2\pi} X\left(e^{i\omega}\right) e^{i\omega n} d\omega, \quad \text{where} \quad X\left(e^{i\omega}\right) = \sum_{n=-\infty}^{+\infty} x[n] e^{-i\omega n}.
$$

The function $X(e^{i\omega})$ is periodic in $\omega$ with period $2\pi$, meaning the integral can be evaluated over _any_ interval of length $2\pi$. This defines the discrete-time Fourier transform (DTFT) pair, where $X(e^{i\omega})$ is often called the _spectrum_ of $x[n]$.

Compared to the [[Notes/Signals and Systems/4 Continuous-Time Fourier Transform\|continuous-time Fourier transform]], the discrete-time spectrum is periodic, and the integral is taken over a finite interval. This periodicity arises because discrete-time exponentials differing by multiples of $2\pi$ are identical.

A key consequence of this periodicity is that low-frequency signals correspond to values of $\omega$ near $0$ or $2\pi$, where the signal varies slowly. High-frequency signals correspond to values of $\omega$ near odd multiples of $\pi$, where the signal varies more rapidly. This behaviour is illustrated below:

![Attachments/Oppenheim,Willsky_Signals and Systems 22.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2022.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=393&rect=90,213,452,508|•]]

### 5.1.1 Convergence Issues of the Discrete-Time Fourier Transform

The previous derivation assumed that $x[n]$ has finite duration, but the DTFT pair also holds for many signals of infinite duration. To ensure convergence of the infinite summation in $X(e^{i\omega})$, we require that $x[n]$ satisfies at least one of the following conditions:

$$
\sum_{n=-\infty}^{+\infty} |x[n]| < \infty \quad \text{or} \quad \sum_{n=-\infty}^{+\infty} |x[n]|^2 < \infty.
$$

These conditions are analogous to those for the continuous-time Fourier transform. Notably, the inverse transform integral always converges since it is taken over a finite interval.

---
## 5.2 The Fourier Transform for Periodic Signals
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=398&selection=160,0,170,7|•]]

As in the continuous-time case, the DTFT can be extended to periodic signals by interpreting the transform of a periodic sequence as an impulse train in the frequency domain. Consider

$$
x[n] = e^{i\omega_0 n}.
$$

In continuous time, the Fourier transform of $e^{i\omega_0 t}$ is an impulse at $\omega = \omega_0$. By analogy, we expect a similar result in discrete time, but with additional impulses at integer multiples of $2\pi$ due to periodicity:

$$
X\left(e^{i\omega}\right) = \sum_{l=-\infty}^{+\infty} 2\pi \delta\left(\omega - \omega_0 - 2\pi l\right).
$$

This is illustrated in the following figure:

![Attachments/Oppenheim,Willsky_Signals and Systems 23.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2023.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=400&rect=47,401,342,491|•]]

Since any interval of length $2\pi$ contains exactly one impulse, we can write

$$
\frac{1}{2\pi} \int_{2\pi} X\left(e^{i\omega}\right) e^{i\omega n} d\omega = e^{i(\omega_0 + 2\pi r)n} = e^{i\omega_0 n}.
$$

Now, consider a periodic sequence $x[n]$ with period $N$ and Fourier series representation

$$
x[n] = \sum_{k=\langle N \rangle} a_k e^{i k(2\pi/N) n}.
$$

Its Fourier transform is then given by

$$
X\left(e^{i\omega}\right) = \sum_{k=-\infty}^{+\infty} 2\pi a_k \delta\left(\omega - \frac{2\pi k}{N}\right),
$$

which shows that the DTFT of a periodic signal consists of impulses positioned at the Fourier series coefficients.

---
## 5.3 Properties of the Discrete-Time Fourier Transform
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=403&selection=94,0,106,9|•]]

Similar to the continuous-time Fourier transform, the DTFT satisfies several useful properties:

|                  Property                   |                                                               Aperiodic Signal                                                               |                                                                                                                                                                                                                                         Fourier Transform                                                                                                                                                                                                                                         |
| :-----------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                             |                                            $\left.\begin{array}{l}x[n] \\ y[n]\end{array}\right.$                                            |                                                                                                                                                      $\left.\begin{array}{l}X\left(e^{i \omega}\right) \\ Y\left(e^{i \omega}\right)\end{array}\right\} \begin{aligned} & \text { periodic with } \\ & \text { period } 2 \pi\end{aligned}$                                                                                                                                                       |
|                **Linearity**                |                                                               $a x[n]+b y[n]$                                                                |                                                                                                                                                                                                                    $a X\left(e^{i \omega}\right)+b Y\left(e^{i \omega}\right)$                                                                                                                                                                                                                    |
|              **Time Shifting**              |                                                            $x\left[n-n_0\right]$                                                             |                                                                                                                                                                                                                          $e^{-i \omega n_0} X\left(e^{i \omega}\right)$                                                                                                                                                                                                                           |
|           **Frequency Shifting**            |                                                           $e^{i \omega_0 n} x[n]$                                                            |                                                                                                                                                                                                                         $X\left(e^{i\left(\omega-\omega_0\right)}\right)$                                                                                                                                                                                                                         |
|               **Conjugation**               |                                                                   $x^*[n]$                                                                   |                                                                                                                                                                                                                                  $X^*\left(e^{-i \omega}\right)$                                                                                                                                                                                                                                  |
|              **Time Reversal**              |                                                                   $x[-n]$                                                                    |                                                                                                                                                                                                                                   $X\left(e^{-i \omega}\right)$                                                                                                                                                                                                                                   |
|             **Time Expansion**              | $x_{(k)}[n]= \begin{cases}x[n / k], & \text { if } n=\text { multiple of } k \\ 0, & \text { if } n \neq \text { multiple of } k\end{cases}$ |                                                                                                                                                                                                                                  $X\left(e^{i k \omega}\right)$                                                                                                                                                                                                                                   |
|               **Convolution**               |                                                                $x[n] * y[n]$                                                                 |                                                                                                                                                                                                                      $X\left(e^{i \omega}\right) Y\left(e^{i \omega}\right)$                                                                                                                                                                                                                      |
|             **Multiplication**              |                                                                 $x[n] y[n]$                                                                  |                                                                                                                                                                                               $\frac{1}{2 \pi} \int_{2 \pi} X\left(e^{i\theta}\right) Y\left(e^{i(\omega-\theta)}\right) d \theta$                                                                                                                                                                                                |
|          **Differencing in Time**           |                                                                $x[n]-x[n-1]$                                                                 |                                                                                                                                                                                                                     $\left(1-e^{-i \omega}\right) X\left(e^{i \omega}\right)$                                                                                                                                                                                                                     |
|              **Accumulation**               |                                                          $\sum_{k=-\infty}^n x[k]$                                                           |                                                                                                                                                                                                                      $\frac{1}{1-e^{-i \omega}} X\left(e^{i \omega}\right)$                                                                                                                                                                                                                       |
|                                             |                                                                                                                                              |                                                                                                                                                                                                          $+\pi X\left(e^{i 0}\right) \sum_{k=-\infty}^{+\infty} \delta(\omega-2 \pi k)$                                                                                                                                                                                                           |
|      **Differentiation in Frequency**       |                                                                   $n x[n]$                                                                   |                                                                                                                                                                                                           $\begin{aligned} i\frac{d X\left(e^{i \omega}\right)}{d \omega}\end{aligned}$                                                                                                                                                                                                           |
|   **Conjugate Symmetry for Real Signals**   |                                                                 $x[n]$ real                                                                  | $\left\{\begin{array}{l}X\left(e^{i \omega}\right)=X^*\left(e^{-i \omega}\right) \\ \mathfrak{Re}\left[X\left(e^{i \omega}\right)\right]=\mathfrak{Re}\left[X\left(e^{-i \omega}\right)\right] \\ \mathfrak{Im}\left[X\left(e^{i \omega}\right)\right]=-\mathfrak{Im}\left[X\left(e^{-i \omega}\right)\right] \\ \left\|X\left(e^{i \omega}\right)\right\|=\left\|X\left(e^{-i \omega}\right)\right\| \\ \angle X\left(e^{i \omega}\right)=-\angle X\left(e^{-i \omega}\right)\end{array}\right.$ |
|     **Symmetry for Real, Even Signals**     |                                                             $x[n]$ real an even                                                              |                                                                                                                                                                                                                            $X\left(e^{i \omega}\right)$ real and even                                                                                                                                                                                                                             |
|     **Symmetry for Real, Odd Signals**      |                                                             $x[n]$ real and odd                                                              |                                                                                                                                                                                                                       $X\left(e^{i \omega}\right)$ purely imaginary and odd                                                                                                                                                                                                                       |
| **Even-odd Decomposition of Real Signals**  |   $\begin{array}{ll}x_e[n]=\mathcal{E}[x[n]] & {(x[n] \text { real })} \\x_{o}[n]=\mathcal{O}[x[n]] & {(x[n] \text { real })}\end{array}$    |                                                                                                                                                                          $\begin{aligned}& \mathfrak{Re}\left[X\left(e^{i \omega}\right)\right] \\& i \mathfrak{Im}\left[X\left(e^{i \omega}\right)\right]\end{aligned}$                                                                                                                                                                          |
| **Parseval's Ration for Aperiodic Signals** |           $\sum_{n=-\infty}^{+\infty}\|x[n]\|^2=\frac{1}{2 \pi} \int_{2 \pi}\left\|X\left(e^{i \omega}\right)\right\|^2 d \omega$            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

---
### 5.3.1 Parseval's Relation
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=411&selection=152,0,156,8|•]]

For a signal $x[n]$ with Fourier transform $X(e^{i\omega})$, Parseval's relation states

$$
\sum_{n=-\infty}^{+\infty} |x[n]|^2 = \frac{1}{2\pi} \int_{2\pi} \left|X\left(e^{i\omega}\right)\right|^2 d\omega.
$$

This expresses the total energy of the signal in terms of its frequency-domain representation. The function $|X(e^{i\omega})|^2$ is called the _energy-density spectrum_, analogous to the continuous-time case.

---
## 5.4 Duality Between the Discrete-Time and Continuous-Time Fourier Transform
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=426&selection=8,0,21,30|•]]

A notable duality exists involving the Discrete-Time Fourier Transform (DTFT) and the Continuous-Time Fourier Series (CTFS). Specifically, the mathematical form of the DTFT analysis equation (summation over discrete time yielding a continuous, periodic function of frequency) is analogous to the CTFS synthesis equation (summation over discrete frequencies yielding a continuous, periodic function of time), and vice-versa for their respective counterparts, when variables are appropriately interchanged.

![Attachments/Oppenheim,Willsky_Signals and Systems 24.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2024.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=427&rect=45,117,493,263|•]]

---