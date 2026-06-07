---
{"dg-publish":true,"permalink":"/notes/signals-and-systems/8-laplace-transform/","hide":"true","updated":"2026-06-07T20:07:00.271+02:00"}
---

Jump back to ==[[Notes/Signals and Systems/Signals and Systems#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Signals and Systems/8 Laplace Transform#8.1 Definition and Region of Convergence\|8.1 Definition and Region of Convergence]]
[[Notes/Signals and Systems/8 Laplace Transform#8.2 Poles, Zeros, and Inverse Transforms\|8.2 Poles, Zeros, and Inverse Transforms]]
[[Notes/Signals and Systems/8 Laplace Transform#8.3 Properties of the Laplace Transform\|8.3 Properties of the Laplace Transform]]
[[Notes/Signals and Systems/8 Laplace Transform#8.4 LTI Systems and System Functions\|8.4 LTI Systems and System Functions]]
[[Notes/Signals and Systems/8 Laplace Transform#8.5 Unilateral Laplace Transform\|8.5 Unilateral Laplace Transform]]

---
# 8 Laplace Transform
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim,Willsky_Signals%20and%20Systems.pdf)

The Fourier transform is ideal for stable LTI systems and finite-energy signals, but many important signals do not have Fourier transforms in the ordinary sense. The Laplace transform extends Fourier analysis by adding an exponential weighting factor. This makes it possible to describe growing and decaying signals, transient responses, unstable systems, and differential equations with initial conditions.

---
## 8.1 Definition and Region of Convergence
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim,Willsky_Signals%20and%20Systems.pdf)

The bilateral Laplace transform of a continuous-time signal $x(t)$ is
$$
X(s)=\int_{-\infty}^{\infty}x(t)e^{-st}\,dt,
$$
where
$$
s=\sigma+j\omega.
$$
The Fourier transform is obtained by restricting $s$ to the imaginary axis:
$$
X(j\omega)=X(s)\big|_{s=j\omega},
$$
but this is valid only if the imaginary axis lies in the region of convergence.

The region of convergence (ROC) is the set of $s$ values for which the integral converges. It is an essential part of the transform. The algebraic expression alone does not determine the time-domain signal.

For example,
$$
x(t)=e^{-at}u(t)
$$
has
$$
X(s)=\frac{1}{s+a},
\qquad \operatorname{Re}(s)>-a.
$$
The left-sided signal
$$
x(t)=-e^{-at}u(-t)
$$
has the same algebraic expression
$$
X(s)=\frac{1}{s+a},
$$
but the ROC is
$$
\operatorname{Re}(s)<-a.
$$
Thus the ROC distinguishes right-sided, left-sided, and two-sided signals.

For rational transforms, the ROC is a vertical strip or half-plane in the $s$-plane and never contains poles. If the signal is right-sided, the ROC lies to the right of the rightmost pole. If it is left-sided, the ROC lies to the left of the leftmost pole.

---
## 8.2 Poles, Zeros, and Inverse Transforms
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim,Willsky_Signals%20and%20Systems.pdf)

For rational transforms,
$$
X(s)=\frac{B(s)}{A(s)},
$$
the roots of $B(s)$ are zeros and the roots of $A(s)$ are poles. Poles determine the exponential modes in the time-domain signal. Zeros determine frequencies or exponential modes that are suppressed.

The inverse Laplace transform is often found by partial-fraction expansion. If
$$
X(s)=\frac{1}{(s+a)(s+b)},
$$
then
$$
X(s)=\frac{C_1}{s+a}+\frac{C_2}{s+b}.
$$
Each term maps to a known time-domain exponential, but the ROC determines whether each exponential is right-sided or left-sided.

The pole-zero plot also gives geometric intuition for the Fourier transform. If the imaginary axis is in the ROC, then
$$
X(j\omega)=X(s)\big|_{s=j\omega}.
$$
The magnitude is obtained by the product of distances from $j\omega$ to the zeros divided by the product of distances to the poles:
$$
|X(j\omega)|=
|K|
\frac{\prod_k |j\omega-z_k|}
{\prod_m |j\omega-p_m|}.
$$
Poles near the imaginary axis create peaks in the frequency response. Zeros near the imaginary axis create notches.

---
## 8.3 Properties of the Laplace Transform
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim,Willsky_Signals%20and%20Systems.pdf)

If
$$
x(t)\leftrightarrow X(s),
\qquad
y(t)\leftrightarrow Y(s),
$$
then the most important Laplace properties are:

| Property | Time domain | Laplace domain |
| :-- | :-- | :-- |
| Linearity | $ax(t)+by(t)$ | $aX(s)+bY(s)$ |
| Time shift | $x(t-t_0)$ | $e^{-st_0}X(s)$ |
| Exponential multiplication | $e^{s_0t}x(t)$ | $X(s-s_0)$ |
| Time scaling | $x(at)$ | $\frac{1}{|a|}X(s/a)$ |
| Convolution | $x(t)*y(t)$ | $X(s)Y(s)$ |
| Differentiation in time | $\frac{dx}{dt}$ | $sX(s)$, with impulse/initial-condition care |
| Multiplication by time | $tx(t)$ | $-\frac{dX(s)}{ds}$ |

For causal signals, the initial- and final-value theorems are often useful:
$$
x(0^+)=\lim_{s\to\infty}sX(s),
$$
and, if the required stability conditions are satisfied,
$$
\lim_{t\to\infty}x(t)=\lim_{s\to 0}sX(s).
$$
The final-value theorem is dangerous if the system has poles in the right half-plane or undamped oscillatory poles on the imaginary axis.

---
## 8.4 LTI Systems and System Functions
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim,Willsky_Signals%20and%20Systems.pdf)

For a continuous-time LTI system,
$$
y(t)=x(t)*h(t),
$$
so
$$
Y(s)=H(s)X(s).
$$
The Laplace transform of the impulse response,
$$
H(s)=\mathcal{L}\{h(t)\},
$$
is called the system function.

For a rational system function, causality and stability are read from the ROC:

- A rational LTI system is causal if its ROC is to the right of the rightmost pole.
- A rational LTI system is stable if its ROC contains the imaginary axis.
- A causal rational LTI system is stable if all poles are in the left half-plane.

Linear constant-coefficient differential equations lead naturally to rational system functions. If
$$
\sum_{k=0}^{N}a_k\frac{d^k y(t)}{dt^k}
=
\sum_{m=0}^{M}b_m\frac{d^m x(t)}{dt^m},
$$
and initial conditions are zero, then
$$
H(s)=\frac{Y(s)}{X(s)}
=
\frac{\sum_{m=0}^{M}b_m s^m}
{\sum_{k=0}^{N}a_k s^k}.
$$
The denominator roots are the natural modes of the system. The numerator roots shape which input components are transmitted or suppressed.

---
## 8.5 Unilateral Laplace Transform
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim,Willsky_Signals%20and%20Systems.pdf)

The unilateral Laplace transform is defined by
$$
X_+(s)=\int_{0^-}^{\infty}x(t)e^{-st}\,dt.
$$
It is mainly used for causal signals and differential equations with nonzero initial conditions.

For example,
$$
\mathcal{L}_+\left\{\frac{dx(t)}{dt}\right\}
=sX_+(s)-x(0^-).
$$
This explicitly includes the initial state. The unilateral transform therefore separates two effects:

- the input-driven response;
- the response caused by initial stored energy.

For system theory, the bilateral transform is cleaner because it directly characterises signals and systems through ROCs. For solving initial-value problems, the unilateral transform is often more convenient.
