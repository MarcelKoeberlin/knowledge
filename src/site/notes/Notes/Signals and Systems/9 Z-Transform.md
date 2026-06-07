---
{"dg-publish":true,"permalink":"/notes/signals-and-systems/9-z-transform/","hide":"true","updated":"2026-06-07T00:00:00.000+02:00"}
---

Jump back to ==[[Notes/Signals and Systems/Signals and Systems#Table of Contents|chapter selection]]==.

---
**Table of Contents**

[[Notes/Signals and Systems/9 Z-Transform#9.1 Definition and Region of Convergence|9.1 Definition and Region of Convergence]]
[[Notes/Signals and Systems/9 Z-Transform#9.2 Poles, Zeros, and the Unit Circle|9.2 Poles, Zeros, and the Unit Circle]]
[[Notes/Signals and Systems/9 Z-Transform#9.3 Properties and Inverse z-Transform|9.3 Properties and Inverse z-Transform]]
[[Notes/Signals and Systems/9 Z-Transform#9.4 LTI Systems and Difference Equations|9.4 LTI Systems and Difference Equations]]
[[Notes/Signals and Systems/9 Z-Transform#9.5 Unilateral z-Transform|9.5 Unilateral z-Transform]]

---
# 9 Z-Transform
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim%2CWillsky_Signals%20and%20Systems.pdf#page=772) [ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Discrete-Time%20Signal%20Processing%20Oppenheimer.pdf#page=128)

The z-transform is the discrete-time analogue of the Laplace transform. It extends the DTFT by evaluating a sequence against complex exponentials with arbitrary radius, not only unit magnitude. This makes it the natural tool for discrete-time system functions, recursive filters, stability, causality, and difference equations.

---
## 9.1 Definition and Region of Convergence
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim%2CWillsky_Signals%20and%20Systems.pdf#page=772)

The bilateral z-transform of a sequence $x[n]$ is
$$
X(z)=\sum_{n=-\infty}^{\infty}x[n]z^{-n}.
$$
Writing
$$
z=re^{j\omega},
$$
we see that the z-transform is a Fourier transform of the exponentially weighted sequence $x[n]r^{-n}$:
$$
X(re^{j\omega})
=\sum_{n=-\infty}^{\infty}x[n]r^{-n}e^{-j\omega n}.
$$
The DTFT is obtained on the unit circle:
$$
X(e^{j\omega})=X(z)\big|_{z=e^{j\omega}},
$$
provided the unit circle is in the ROC.

The ROC is the set of $z$ values for which the sum converges. As with the Laplace transform, the same algebraic expression can correspond to different signals depending on the ROC.

For example,
$$
x[n]=a^n u[n]
$$
has
$$
X(z)=\frac{1}{1-az^{-1}},
\qquad |z|>|a|.
$$
The left-sided sequence
$$
x[n]=-a^n u[-n-1]
$$
has the same algebraic expression but ROC
$$
|z|<|a|.
$$

---
## 9.2 Poles, Zeros, and the Unit Circle
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim%2CWillsky_Signals%20and%20Systems.pdf#page=779)

For rational transforms,
$$
X(z)=\frac{B(z)}{A(z)},
$$
zeros are roots of $B(z)$ and poles are roots of $A(z)$. The ROC is an annular region in the z-plane and cannot include poles.

The unit circle plays the role of the Fourier axis. If the ROC includes $|z|=1$, the DTFT exists and is
$$
X(e^{j\omega})=X(z)\big|_{z=e^{j\omega}}.
$$
The magnitude on the unit circle can be evaluated geometrically:
$$
|X(e^{j\omega})|
=|K|
\frac{\prod_k |e^{j\omega}-z_k|}
{\prod_m |e^{j\omega}-p_m|}.
$$
Zeros close to the unit circle suppress nearby frequencies. Poles close to the unit circle enhance nearby frequencies. The pole angle controls the resonant frequency; the pole radius controls the decay time.

This is why digital filters are often designed by placing poles and zeros. A notch filter places zeros on or near the unit circle at the unwanted frequency. A resonator places poles close to the unit circle at the desired frequency, while keeping them inside for stability.

---
## 9.3 Properties and Inverse z-Transform
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim%2CWillsky_Signals%20and%20Systems.pdf#page=798)

Important z-transform properties include:

| Property | Time domain | z-domain |
| :-- | :-- | :-- |
| Linearity | $ax[n]+by[n]$ | $aX(z)+bY(z)$ |
| Time shift | $x[n-n_0]$ | $z^{-n_0}X(z)$ |
| Exponential multiplication | $a^n x[n]$ | $X(z/a)$ |
| Time reversal | $x[-n]$ | $X(z^{-1})$ |
| Convolution | $x[n]*y[n]$ | $X(z)Y(z)$ |
| Multiplication by $n$ | $nx[n]$ | $-z\frac{dX(z)}{dz}$ |

The inverse z-transform can be found by several methods:

- inspection against known transform pairs;
- partial-fraction expansion;
- power-series expansion in $z^{-1}$ or $z$;
- contour integration, which is the most general but rarely the quickest for engineering calculations.

For rational transforms, partial fractions are usually the most useful. A term of the form
$$
\frac{1}{1-az^{-1}}
$$
maps to $a^n u[n]$ if the ROC is $|z|>|a|$, and to $-a^n u[-n-1]$ if the ROC is $|z|<|a|$.

---
## 9.4 LTI Systems and Difference Equations
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim%2CWillsky_Signals%20and%20Systems.pdf#page=805) [ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Discrete-Time%20Signal%20Processing%20Oppenheimer.pdf#page=160)

For a discrete-time LTI system,
$$
y[n]=x[n]*h[n],
$$
so
$$
Y(z)=H(z)X(z).
$$
The z-transform of the impulse response,
$$
H(z)=\mathcal{Z}\{h[n]\},
$$
is the system function.

For rational systems:

- causality means the ROC is outside the outermost pole;
- stability means the ROC contains the unit circle;
- a causal rational system is stable if all poles lie inside the unit circle.

A linear constant-coefficient difference equation
$$
y[n]+\sum_{k=1}^{N}a_k y[n-k]
=\sum_{m=0}^{M}b_m x[n-m]
$$
has system function
$$
H(z)=
\frac{\sum_{m=0}^{M}b_m z^{-m}}
{1+\sum_{k=1}^{N}a_k z^{-k}},
$$
assuming zero initial conditions. This is the standard form of an IIR digital filter.

If the denominator is $1$, the system is FIR:
$$
H(z)=\sum_{m=0}^{M}b_m z^{-m}.
$$
FIR systems have only zeros, except for possible poles at the origin depending on representation. IIR systems use feedback and generally have nontrivial poles.

---
## 9.5 Unilateral z-Transform
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim%2CWillsky_Signals%20and%20Systems.pdf#page=820)

The unilateral z-transform is
$$
X_+(z)=\sum_{n=0}^{\infty}x[n]z^{-n}.
$$
It is useful for causal difference equations with initial conditions. For example,
$$
\mathcal{Z}_+\{x[n-1]\}=z^{-1}X_+(z)+x[-1].
$$
The extra term carries the initial condition.

As with the Laplace transform, the bilateral transform is the cleaner tool for system characterisation and ROC reasoning, while the unilateral transform is convenient for solving initial-value problems.
