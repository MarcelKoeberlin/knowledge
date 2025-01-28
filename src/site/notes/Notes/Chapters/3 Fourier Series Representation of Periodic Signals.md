---
{"dg-publish":true,"permalink":"/notes/chapters/3-fourier-series-representation-of-periodic-signals/","hide":"true","updated":"2025-01-28T17:49:19.000+01:00"}
---

Jump back to chapter selection: [[Notes/Signals and Systems/Signals and Systems\|Notes/Signals and Systems/Signals and Systems]]

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
1. **Finite power**: