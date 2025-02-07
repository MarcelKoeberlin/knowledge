---
{"dg-publish":true,"permalink":"/notes/ultrafast-laser-physics/2-linear-pulse-propagation/","hide":"true","updated":"2025-02-07T12:03:52.000+01:00"}
---

Jump back to ==[[Notes/Ultrafast Laser Physics/Ultrafast Laser Physics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Ultrafast Laser Physics/2 Linear Pulse Propagation#2.1 Wave Equation in the Spectral Domain: Helmholtz Equation\|2.1 Wave Equation in the Spectral Domain: Helmholtz Equation]]
- [[Notes/Ultrafast Laser Physics/2 Linear Pulse Propagation#2.2 Linear vs Nonlinear Wave Propagation\|2.2 Linear vs Nonlinear Wave Propagation]]
- [[Notes/Ultrafast Laser Physics/2 Linear Pulse Propagation#2.3 Ultrafast Pulses\|2.3 Ultrafast Pulses]]
- [[Notes/Ultrafast Laser Physics/2 Linear Pulse Propagation#2.4 Linear pulse Propagation in a Dispersive Material\|2.4 Linear pulse Propagation in a Dispersive Material]]

---
# 2 Linear Pulse Propagation

In [[Notes/Ultrafast Laser Physics/1 Plane Wave Propagation in Dispersive Media\|Chapter 1]] we have seen that a monochromatic plane wave extends infinitely in space and time. To obtain a limited wave packet in time (a pulse), different plane waves with different wavelengths need to be overlapped:

![Attachments/UltraFastLasers_Keller 6.webp|700](/img/user/Attachments/UltraFastLasers_Keller%206.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=46&rect=262,415,385,604|•]]

In the visible spectrum, different wavelengths correspond to different colours. This has important implications: A laser pulse can never be single-coloured, and must differ from the monochromatic light of a continuous-wave (CW) laser. The more frequency components a pulse contains, the broader is spectrum is (by definition) and the shorter the pulse **can** be. 

Before diving deeper into this topic, it is important to recall some orders of magnitude:

![Attachments/UltraFastLasers_Keller 7.webp|700](/img/user/Attachments/UltraFastLasers_Keller%207.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=46&rect=56,87,383,153|•]]

Our eyes can only distinguish movements on timescales longer/slower than about 100 ms. Mechanical shutters determining the exposure time in photography are limited to about 1 ms. Any movements occurring faster than that will smear out on the photo and will result in a blurry image. However, using strobe photography, it is possible to achieve exposure times as short as $1$  $\mu$s. With strobe photography, short light flashes started to become important for time resolved measurements. Lasers are relevant here because we can generate much shorter flashes of light with lasers than with electrically switched light bulbs. 

Today we can generate pulses as short as a few femtoseconds in the visible and near-infrared wavelength regimes directly from a laser. This is much faster than any electronic switching speed. For example, in the nanosecond region, we find the typical computer switching elements and the fastest commercial microwave sampling scope have a time resolution of around a picosecond.

It is good practice to remember those orders of magnitude!

---
## 2.1 Wave Equation in the Spectral Domain: Helmholtz Equation
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=48&selection=29,0,32,8|•]]

We know that every function can be expanded in terms of a complete set of orthogonal functions. An example of this are the Fourier series and Fourier integral. A Fourier transform decomposes any arbitrary function of time into its harmonic frequency components. The inverse Fourier transform does the opposite, and decomposes an arbitrary function of time as a superposition of harmonic functions of time with different frequencies:

![Attachments/UltraFastLasers_Keller 8.webp|700](/img/user/Attachments/UltraFastLasers_Keller%208.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=48&rect=69,109,369,136|•]]

This is a powerful tool to describe ultrashort pulses, since the harmonic components have the physical meaning of plane waves with different frequencies. A light pulse is formed by a superposition of plane waves with different discrete frequencies at a fixed position in space:

![Attachments/UltraFastLasers_Keller 9.webp|700](/img/user/Attachments/UltraFastLasers_Keller%209.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=49&rect=61,329,378,529|•]]

The more waves are overlapped, the shorter the pulse can be. Due to these discrete frequencies, the superposition is not just one pulse, but a periodic pulse train with period $T_{rep}=2\pi/\Delta\omega$, where $\Delta\omega$ is the constant frequency spacing of the example figure. 

We will follow the following convention for our Fourier transform $\mathcal{F}$ and its inverse $\mathcal{F}^{-1}$:
$$
\begin{aligned}
& \tilde{E}(z, \omega) \equiv F\{E(z, t)\}=\int E(z, t) \mathrm{e}^{-\mathrm{i} \omega t} \mathrm{~d} t \\
& E(z, t)=F^{-1}\{\tilde{E}(z, \omega)\}=\frac{1}{2 \pi} \int \tilde{E}(z, \omega) \mathrm{e}^{+\mathrm{i} \omega t} \mathrm{~d} \omega,
\end{aligned}
$$
where we write the complex scalar electric field of an electromagnetic plane wave as
$$
E(z, t)=E_0 \mathrm{e}^{\mathrm{i}(\omega t-k z)}.
$$

Regarding the constant $1/2\pi$, we have have chosen an asymmetric Fourier transform, because we measure the spectrum of a laser pulse as a function of frequency $f$ and not the angular frequency $\omega$. Therefore, this factor will cancel out. We will in the following make use of some useful relations:

$$
\begin{aligned}
&\mathcal{F}^{-1}\{\mathrm{i} \omega \tilde{E}(z, \omega)\}=\frac{\partial}{\partial t} E(z, t),\quad\text{abbreviated as} \quad\omega \Leftrightarrow-\mathrm{i} \frac{\partial}{\partial t} .
\end{aligned}
$$

For the higher derivatives, we have:

$$
\omega \Longleftrightarrow-\mathrm{i} \frac{\partial}{\partial t}, \quad \omega^2 \Longleftrightarrow-\frac{\partial^2}{\partial t^2}=\left(-\mathrm{i} \frac{\partial}{\partial t}\right)^2, \quad \omega^3 \Longleftrightarrow \mathrm{i} \frac{\partial^3}{\partial t^3}=\left(-\mathrm{i} \frac{\partial}{\partial t}\right)^3.
$$

**Derivation**
We start with the wave equation
$$
\Delta \mathbf{E}-\frac{1}{c^2} \frac{\partial^2}{\partial t^2} \mathbf{E}=\mu_0 \frac{\partial^2}{\partial t^2} \mathbf{P},
$$
and use the relation for the second-order derivate, to transform the equation to the spectral domain as 

$$
\frac{\partial^2 \tilde{E}(z, \omega)}{\partial z^2}+\frac{\omega^2}{c^2} \tilde{E}(z, \omega)=-\mu_0 \omega^2 \tilde{P}(z, \omega).
$$
We consider propagation along the z-axis. It then follows that 

$$
\tilde{P}(z, \omega)=\chi(\omega) \varepsilon_0 \tilde{E}(z, \omega)=[\varepsilon(\omega)-1] \varepsilon_0 \tilde{E}(z, \omega),
$$

and

$$
k_n(\omega)=\frac{\omega}{c} n(\omega) .
$$
With this then, we find the one-dimensional Helmholtz equation

$$
\frac{\partial^2 \tilde{E}(z, \omega)}{\partial z^2}+\left[k_n(\omega)\right]^2 \tilde{E}(z, \omega)=0.
$$
It is the wave equation in the spectral domain for a dispersive linear medium with an arbitrary dispersion relation $n(\omega)$ and $\mu=1$. It is easy to verify that the solution is

$$
\tilde{E}(z, \omega)=\tilde{E}_0^{+}(\omega) \mathrm{e}^{-\mathrm{i} k_n(\omega) z}+\tilde{E}_0^{-}(\omega) \mathrm{e}^{\mathrm{i} k_n(\omega) z},
$$
which is analogous to the time-independent Schrödinger equation for a free particle. Hence, the discussion on laser pulse propagation also applies to any quantum mechanical wave packet. 

---
## 2.2 Linear vs Nonlinear Wave Propagation
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=52&selection=80,0,82,40|•]]

In linear optics, the wave equation is linear meaning that the electric and magnetic fields and their derivatives only appear to first order. Therefore, the superposition principle is valid, such that linear combinations of solutions $E_i$ and $H_i$ are solutions as well:

$$
E_{\mathrm{tot}}=\sum_i a_i E_i, \quad H_{\mathrm{tot}}=\sum_i b_i H_i
$$
However, the superposition principle is not generally valid for intensities:

$$
I_{\mathrm{tot}} \neq \sum_i I_i,
$$
since $\left(E_1+E_2\right)^2 \neq E_1^2+E_2^2$. However, it will hold even for intensities if the EM fields do not satisfy the conditions for interference, for example when they are polarised perpendicular to each other, or when two waves are fully incoherent.

### 2.2.1 Linear System Theory

The book covers this topic only very briefly, since it is not of highest importance in this field. However, I invite you to read my notes on [[Notes/Signals and Systems/Signals and Systems\|Signals and Systems]], which also covers this topic in detail. 

In a linear system, we can directly connect the input signal to the output signal by considering their linearity,
$$
E_{\text {in } 1} \xrightarrow{\text { linear system }} E_{\text {out }1}  \Longrightarrow a E_{\text {in }1}  \xrightarrow{\text { linear system }} a E_{\text {out } 1},
$$
and the fact that the superposition principle is valid: 

$$
\left.\begin{array}{l}
E_{\text {in 1 }} \xrightarrow{\text { linear system }} E_{\text {out 1 }} \\
E_{\text {in } 2} \xrightarrow{\text { linear system }} E_{\text {out } 2}\\

\end{array}\right\} \quad \Longrightarrow E_{\text {in 1 }}+E_{\text {in 2 }} \xrightarrow{\text { linear system }} E_{\text {out 1 }}+E_{\text {out } 2} .
$$

Examples are dispersive media, photodetectors, which relates the photocurrent (output) to the incoming light power (input), lens systems and stochastic processes. 

In a linear system, we define the impulse response $h(t)$: If the output to an infinitely short pulse $\delta$ (called _impulse_ in system theory) produces as output the function $h(t)$, we have enough information to find the output for _any_ input:

$$
E_{\mathrm{out}}(t)=\int h\left(t^{\prime}\right) E_{\mathrm{in}}\left(t-t^{\prime}\right) \mathrm{d} t^{\prime} \equiv h(t) * E_{\mathrm{in}}(t)
$$
The symbol * abbreviates convolution. In the spectral domain, the dynamics of a linear system are described by the transfer function $\tilde{h}(\omega)$, which is the Fourier transform of $h(t)$. In the spectral domain, the linear system response is then given by a simple multiplication:

$$
\tilde{E}_{\text {out }}(\omega)=\tilde{h}(\omega) \tilde{E}_{\text {in }}(\omega)
$$

The power spectral density $P(\omega)$ of $E(t)$ is given by

$$
P(\omega) \equiv|\tilde{E}(\omega)|^2 \quad \Longrightarrow \quad P_{\text {in }}(\omega)=\left|\tilde{E}_{\text {in }}(\omega)\right|^2, \quad P_{\text {out }}(\omega)=\left|\tilde{E}_{\text {out }}(\omega)\right|^2,
$$
and analogously for the power spectral density $S(\omega)$ of the impulse response $h(t)$ :

$$
S(\omega) \equiv|\tilde{h}(\omega)|^2.
$$
For a linear system, the much easier relation in the spectral domain is valid once again:

$$
P_{\text {out }}(\omega)=S(\omega) P_{\text {in }}(\omega).
$$
From these considerations, it becomes clear why we want to calculate in the spectral domain. The complicated convolution in time domain becomes a simple multiplication in spectral domain. 

We can use the system function $\tilde{h}(\omega)=e^{-i\omega L_d/c}$ in vacuum to find that 
$$
E_{\mathrm{out}}(t)=\int \delta\left(t^{\prime}-\frac{L_{\mathrm{d}}}{c}\right) E_{\mathrm{in}}\left(t-t^{\prime}\right) \mathrm{d} t^{\prime}=E_{\mathrm{in}}\left(t-\frac{L_{\mathrm{d}}}{c}\right),
$$
which implies that an arbitrary pulse $E_{in}$ can propagate in vacuum without changing its pulse shape. This is no longer the case in a dispersive material, because the impulse response  $\tilde{h}(\omega)=e^{-i\omega n(\omega)L_d/c}$ no longer results in a Dirac delta function for $h(t)$.
The last conclusion that we want to make about linear systems is that the power spectral density is unity:
$$
S(\omega)=\left|\mathrm{e}^{-\mathrm{i} k_n L_{\mathrm{d}}}\right|^2=1
$$
in a dispersive medium. Thus, the pulse power spectrum never changes during linear propagation in a dispersive medium. It is important to remember that this is in contrast to nonlinear pulse propagation. Therefore, if the optical spectrum of a laser pulse changes in the lab, we know that there must be some non-linearity in our system. 

---
## 2.3 Ultrafast Pulses
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=55&selection=76,0,78,16|•]]

A coherent light pulse forms a photon wave packet, and can be described by a superposition of plane waves with different frequencies and phases at a fixed position in space. The shortest pulse for a given spectrum is obtained for a constant phase (see later). For a pulse observed at fixed position, we find
$$
E(t)=\frac{1}{2 \pi} \int \tilde{E}(\omega) \mathrm{e}^{\mathrm{i} \omega t} \mathrm{~d} \omega.
$$
The spectrum typically has a finite width $\Delta \omega_0$ and centre frequency $\omega_0$, with typically $\omega_0 \gg \Delta \omega_0$ for pulse durations that are significantly longer than one optical period. The exact shape and phase of the spectrum determines the shape of the light pulse.

It is useful to rewrite the prior equation, by replacing $\omega$ by $\omega_0+\Delta \omega$ and carrying out the integral over $\Delta \omega$ :

$$
E(t)=\frac{1}{2 \pi} \int \tilde{E}\left(\omega_0+\Delta \omega\right) \mathrm{e}^{\mathrm{i}\left(\omega_0+\Delta \omega\right) t} \mathrm{~d} \Delta \omega=\frac{1}{2 \pi} \mathrm{e}^{\mathrm{i} \omega_0 t} \int \tilde{A}(\Delta \omega) \mathrm{e}^{\mathrm{i} \Delta \omega t} \mathrm{~d} \Delta \omega .
$$
Then $\tilde{A}(\Delta \omega)$ is the frequency-shifted spectrum:

$$
\tilde{A}(\Delta \omega)=\tilde{E}\left(\omega_0+\Delta \omega\right) \text {. }
$$
This then implies that 

$$
E(t)=A(t) \mathrm{e}^{\mathrm{i} \omega_0 t},
$$
where 
$$
A(t)=\frac{1}{2 \pi} \int \tilde{A}(\Delta \omega) \mathrm{e}^{\mathrm{i} \Delta \omega t} \mathrm{~d} \Delta \omega
$$
is called the pulse envelope:

![Attachments/UltraFastLasers_Keller 10.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2010.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=57&rect=186,510,386,604|•]]

### 2.3.1 Time-Bandwidth Product

The laser pulse duration $\tau_{\mathrm{p}}$ in laser physics is typically defined by the full width at half maximum (FWHM) of the time-dependent pulse intensity. Analogously, the laser pulse spectral width $\Delta f_{\mathrm{p}}$ in laser physics is normally defined by the FWHM of the spectral intensity. Next, some values of the time-bandwidth products $\Delta f_{\mathrm{p}} \times \tau_{\mathrm{p}}$ are summarised for some common pulse shapes:

|                                       |                                $I(t)(x \equiv t / \tau)$                                 | $\tau_{\mathrm{p}} / \tau$ | $\Delta f_{\mathrm{p}} \times \tau_{\mathrm{p}}$ |
| :-----------------------------------: | :--------------------------------------------------------------------------------------: | :------------------------: | :----------------------------------------------: |
|             **Gaussian**              |                                 $I(t)=\mathrm{e}^{-x^2}$                                 |      $2 \sqrt{\ln 2}$      |                     $0.4413$                     |
| **Hyperbolic secant (soliton pulse)** |                              $I(t)=\operatorname{sech}^2 x$                              |          $1.7627$          |                     $0.3148$                     |
|             **Rectangle**             | $I(t)=\left\{\begin{array}{l}1,\|t\| \leq \tau / 2 \\0,\|t\|>\tau / 2\end{array}\right.$ |             1              |                     $0.8859$                     |
|             **Parabolic**             |       $I(t)= \begin{cases}1-x^2, & \|t\| \leq \tau \\ 0, & \|t\|>\tau\end{cases}$        |         $\sqrt{2}$         |                     $0.7276$                     |
|            **Lorentzian**             |                                  $I(t)=\frac{1}{1+x^2}$                                  |            $2$             |                     $0.2206$                     |
|   **Symmetric two-sided exponent**    |                               $I(t)=\mathrm{e}^{-2\|x\|}$                                |          $\ln 2$           |                     $0.1420$                     |

We consider explicitly a _chirped_ Gaussian pulse:
$$
E(t)=A(t) \exp \left(\mathrm{i} \omega_0 t\right)=\exp \left(-\Gamma t^2\right) \exp \left(\mathrm{i} \omega_0 t\right)
$$
Here, $\omega_0$ is the centre angular frequency and $\Gamma$ is the complex Gauss parameter, defined by

$$
\Gamma \equiv \Gamma_1-\mathrm{i} \Gamma_2.
$$
The real part $\Gamma_1$ determines the pulse length, and the imaginary part $\Gamma_2$ determines the chirp of the Gaussian pulse. The next figure compares an unchirped (top) and chirped (bottom) pulse:

![Attachments/UltraFastLasers_Keller 11.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2011.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=59&rect=175,370,386,604|•]]

If a pulse is chirped, its instantaneous frequency is time dependent. From the consideration before, we find the total phase to be 

$$
\phi_{\mathrm{tot}}(t) \equiv \omega_0 t+\Gamma_2 t^2,
$$
such that the instantaneous frequency is 

$$
\omega(t) \equiv \frac{\mathrm{d} \phi_{\mathrm{tot}}(t)}{\mathrm{d} t}=\omega_0+2 \Gamma_2 t.
$$
From this expression we can see that the instantaneous frequency will only vary with time for $\Gamma_2 \neq 0$. The pulse length $\tau_{\mathrm{p}}$ of the laser pulse is defined by the FWHM of the intensity $I(t)$ :
$$
I(t) \propto|E(t)|^2=\exp \left(-2 \Gamma_1 t^2\right)=\exp \left[-(4 \ln 2)\left(\frac{t}{\tau_{\mathrm{p}}}\right)^2\right]
$$
From this, we can find the pulse length $\tau_p$ as 
$$
\tau_{\mathrm{p}}=\sqrt{\frac{2 \ln 2}{\Gamma_1}}.
$$

A light pulse corresponding to its minimal time-bandwidth product is called time-bandwidth limited, or simply transform limited. For a given spectrum, a transform-limited pulse has the shortest possible pulse duration for a given spectral width and given pulse shape. Any additional chirp in the spectrum then results in a longer pulse duration. 
If the spectrum is given as a function of wavelength, for all pulse shapes and if $\Delta \nu_{\mathrm{p}} \ll \nu$, we find
$$
\frac{\Delta \nu_{\mathrm{p}}}{v}=\frac{\Delta \lambda_{\mathrm{p}}}{\lambda}.
$$

### 2.3.2 Shortest Pulse Duration



Continuous progress in the field of ultrashort pulse generation has led to pulse durations below 6 fs in the visible and near-infrared spectral range. Such ultrashort pulse durations have been independently generated using different techniques. All these pulses exhibit broad and complex spectra which do not agree with an ideal pulse shape as discussed so far. In such cases it becomes increasingly questionable to simply specify the pulse duration by an FWHM value. A more appropriate pulse width measurement is given by an rms pulse duration:

$$
\begin{gathered}
\tau_{\mathrm{rms}}^2=\left\langle(t-\langle t\rangle)^2\right\rangle=\int_{-\infty}^{\infty}(t-\langle t\rangle)^2 I(t) dt \\
\tau_{\mathrm{rms}}^2=\int_{-\infty}^{\infty}|(t-\langle t\rangle) E(t)|^2 dt
\end{gathered}
$$
whence $\langle t\rangle$ corresponds to the 'centre of gravity' of the temporal pulse profile. It can be shown that, for a given power spectrum $|\tilde{E}(\omega)|^2$, the shortest rms pulse duration is obtained with a linear spectral phase $\varphi(\omega)$. In this case, the spectral phase $\varphi(\omega)$ only consists of a constant and a linear term.

---
## 2.4 Linear pulse Propagation in a Dispersive Material
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=62&selection=187,0,189,49|•]]

Before beginning this chapter, it is important to clarify that linear pulse propagation means that no intensity-dependent material properties are considered, however the refractive index can have any nonlinear frequency dependence. 

### 2.4.1 Slowly-Varying-Envelope Approximation

To examine the propagation of a pulse, it is useful to first separate the fast oscillation of the complex electric field, and the dynamics of the fields' envelope $A(t)$:
$$
E(z, t)=A(z, t) \mathrm{e}^{\mathrm{i}\left[\omega_0 t-k_n\left(\omega_0\right) z\right]}.
$$
The Fourier transforms $\tilde{E}(z, \omega)$ and $\tilde{A}(z, \Delta \omega)$ satisfy the relation

$$
\tilde{E}\left(z, \omega_0+\Delta \omega\right)=\tilde{A}(z, \Delta \omega) \mathrm{e}^{-\mathrm{i} k_n\left(\omega_0\right) z},
$$
where $\Delta \omega \equiv \omega-\omega_0.$ 
Now we introduce the slowly-varying-envelope approximation (SVEA), which states that the envelope does not change much over the distance of a wavelength $\lambda_0/n$:
$$
\left|\frac{\partial^2 \tilde{A}}{\partial z^2}\right| \ll\left|k_n\left(\omega_0\right) \frac{\partial \tilde{A}}{\partial z}\right|.
$$
With this and the wave equation in spectral domain, we find 
$$
\frac{\partial}{\partial z} \tilde{A}(z, \Delta \omega)+\mathrm{i} \Delta k_n \tilde{A}(z, \Delta \omega)=0.
$$
The solution of this equation reads
$$
\tilde{A}(z, \Delta \omega)=\tilde{A}(0, \Delta \omega) \mathrm{e}^{-\mathrm{i} \Delta k_n z}=\tilde{A}(0, \Delta \omega) \mathrm{e}^{-\mathrm{i}\left[k_n\left(\omega_0+\Delta \omega\right)-k_n\left(\omega_0\right)\right] z}.
$$

### 2.4.2 First and Second Order Dispersion

As stated before, an optical pulse is a superposition of monochromatic plane waves, where each part of the spectrum has its own phase velocity. This leads to phase shifts between individual spectral components during propagation. Note that pulse broadening is caused by the dispersion of the group velocity and not of the phase velocity, which will be shown in the following.
The shorter a pulse, the broader its spectrum, and the stronger the effects of dispersion become. Assuming that $\Delta\omega\ll \omega_0$, we may expand the wave number up to second order around the carrier frequency:

$$
k_n(\omega) \approx k_n\left(\omega_0\right)+k_n^{\prime} \Delta \omega+\frac{1}{2} k_n^{\prime \prime} \Delta \omega^2.
$$
This is satisfied in the optical region even for ultrashort pulses. We call $k^\prime_n=dk_n/d\omega$ the first order dispersion, and $k^{\prime\prime}_n=d^2k_n/d\omega^2$ the second order dispersion. 

### 2.4.3 Phase Velocity and Group Velocity

For a Gaussian pulse, linear pulse propagation can be solved analytically up to second order, due to the fact that the Fourier transform of a Gaussian is Gaussian. This allows us to find the phase velocity as

$$
v_{\mathrm{p}}\left(\omega_0\right) \equiv c_n=\left.\frac{\omega}{k_n}\right|_{\omega=\omega_0},
$$
and $v_{\mathrm{g}}$ is the group velocity as

$$
v_{\mathrm{g}}\left(\omega_0\right) \equiv \frac{1}{k_n^{\prime}\left(\omega_0\right)}=\frac{1}{\left.\frac{\mathrm{~d} k_n}{\mathrm{~d} \omega}\right|_{\omega=\omega_0}}=\left.\frac{\mathrm{d} \omega}{\mathrm{~d} k_n}\right|_{\omega=\omega_0}.
$$
The phase velocity describes the propagation velocity of the carrier wave with frequency $\omega_0$. The group velocity corresponds to the propagation velocity of the envelope of the pulse:

![Attachments/UltraFastLasers_Keller 12.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2012.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=67&rect=234,504,385,605|•]]

In vacuum, both velocities are equal. The first-order dispersion determines the temporal shift of the pulse and is called group delay, given by
$$
T_{\mathrm{g}} \equiv \frac{z}{v_{\mathrm{g}}}=k_n^{\prime} z.
$$

### 2.4.4 Pulse Broadening

A pulse is **temporally** broadened by propagation through a dispersive medium. Note that we know that it can not be spectrally broadened in a linear system. 

![Attachments/UltraFastLasers_Keller 13.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2013.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=67&rect=60,125,378,191|•]]

This can also be seen by considering the FWHM pulse duration of a Gaussian pulse (derivation has been skipped):
$$
\tau_{\mathrm{p}}\left(L_{\mathrm{d}}\right)=\sqrt{\frac{2 \ln 2}{\operatorname{Re}\left[\Gamma\left(L_{\mathrm{d}}\right)\right]}},
$$
where it becomes clear that linear dispersion alone does not contribute to pulse broadening, but only second and higher order dispersion. We may also derive that 
$$
\frac{\tau_{\mathrm{p}}\left(L_{\mathrm{d}}\right)}{\tau_{\mathrm{p}}(0)}=\sqrt{1+\frac{\left(4 \ln 2 k_n^{\prime \prime} L_{\mathrm{d}}\right)^2}{\tau_{\mathrm{p}}^4(0)}}=\sqrt{1+\left(\frac{4 \ln 2 \frac{\mathrm{~d}^2 \phi}{\mathrm{~d} \omega^2}}{\tau_{\mathrm{p}}^2(0)}\right)^2},
$$
where $\phi=k_nL_d$ is the accumulated phase shift of a plane wave in a dispersive medium of thickness $L_d$. The shorter the original pulse, the more the pulse is stretched in time by the dispersive medium. The next figure shows the pulse broadening factor of Gaussian pulses for different initial pulse durations passing through a 1 cm thick fused quartz lens. 

![Attachments/UltraFastLasers_Keller 14.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2014.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=68&rect=73,444,363,611|•]]

**Strong Pulse Broadening Approximation**

The case of strong pulse broadening is given when

$$
\frac{\mathrm{d}^2 \phi}{\mathrm{~d} \omega^2} \gg \tau_{\mathrm{p}}^2(0).
$$

This allows us to greatly simplify prior results. Assuming an unchirped initial pulse, we obtain:

$$
\frac{\mathrm{d}^2 \phi}{\mathrm{~d} \omega^2} \gg \tau_{\mathrm{p}}^2(0) \Longrightarrow \tau_{\mathrm{p}}\left(L_{\mathrm{d}}\right) \approx \frac{\mathrm{d}^2 \phi}{\mathrm{~d} \omega^2} \Delta \omega_{\mathrm{p}}.
$$

The effect of an unchirped pulse passing through a dispersive medium is schematically shown here:

![Attachments/UltraFastLasers_Keller 15.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2015.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=71&rect=74,121,366,254|•]]

The pulse becomes longer and chirped, which means that the spectral components with longer wavelengths propagate faster than the low wavelength components:
$$
\lambda_1>\lambda_2 \Rightarrow v_{\mathrm{g}}\left(\lambda_1\right)>v_{\mathrm{g}}\left(\lambda_2\right) .
$$
The broadened pulse is chirped by the dispersion. However, as mentioned earlier already, it is important that the pulse spectrum does not change during propagation:

![Attachments/UltraFastLasers_Keller 16.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2016.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=72&rect=55,465,384,608|•]]

Linear dispersive pulse broadening only occurs for second and higher order dispersion. It is therefore not the frequency-dependent different in phase velocity but the group velocity that is relevant. 

This can be depicted as in the following figure. Consider in spectral and time domain that one can split a short pulse into longer sub-pulses with slightly shifted centre wavelengths. Superposition of the longer sub-pulses results in a shorter pulse, because the electric fields in the shoulders of the sub-pulse interfere destructively:

![Attachments/UltraFastLasers_Keller 17.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2017.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=73&rect=55,415,326,606|•]]

Now observe what happens when they pass through a dispersive medium:

![Attachments/UltraFastLasers_Keller 18.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2018.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=73&rect=54,111,386,302|•]]

Note, that in the spectral and time domain, the individual pulses have not broadened. Rather, the pulse broadening of the resultant pulse comes from the shifted wavelength of the sub-pulses in the time domain after dispersion. The different group delay then leads to pulse broadening.

It is worth to know dispersion as a function of both frequency and wavelength:

| Dispersion parameter                                                                             | Definition                                                                                                                                 | Calculation from $n(\lambda)$                                                                                    |
| :----------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| Phase velocity $v_{\mathrm{p}}$                                                                  | $\omega / k_n$                                                                                                                             | $c_n=c / n$                                                                                                      |
| Group velocity $v_{\mathrm{g}}$                                                                  | $\frac{\mathrm{d} \omega}{\mathrm{d} k_n}=\left(\frac{\mathrm{d} k_n}{\mathrm{~d} \omega}\right)^{-1}$                                     | $\frac{c}{n} \frac{1}{1-\frac{n^{\prime}}{n} \lambda}$                                                           |
| Group delay $T_{\mathrm{g}}$ (first order dispersion)                                            | $\frac{\mathrm{d} \phi}{\mathrm{d} \omega}=L_{\mathrm{d}} \frac{\mathrm{d} k_n}{\mathrm{~d} \omega}=\frac{L_{\mathrm{d}}}{v_{\mathrm{g}}}$ | $\frac{n L_{\mathrm{d}}}{c}\left(1-\frac{n^{\prime}}{n} \lambda\right)$                                          |
| Group delay dispersion $\mathrm{d} T_{\mathrm{g}} / \mathrm{d} \omega$ (second order dispersion) | $\frac{\mathrm{d}^2 \phi}{\mathrm{~d} \omega^2}$                                                                                           | $\frac{\lambda^3 L_{\mathrm{d}}}{2 \pi c^2 }n^{\prime \prime}[\mathrm{fs}^2]$                                    |
| $\frac{\mathrm{d} T_{\mathrm{g}}}{\mathrm{d} \lambda}$                                           | $\mathrm{d} \lambda=-\frac{\lambda^2}{2 \pi c} \mathrm{~d} \omega$                                                                         | $-\frac{\lambda L_{\mathrm{d}}}{c} n^{\prime \prime}[\mathrm{fs} / \mathrm{nm}]$                                 |
| Third order dispersion                                                                           | $\frac{\mathrm{d}^3 \phi}{\mathrm{~d} \omega^3}$                                                                                           | $-\frac{\lambda^4 L_{\mathrm{d}}}{4 \pi^2 c^3}\left(3 n^{\prime \prime}+\lambda n^{\prime \prime \prime}\right)$ |

What may be confusing at first is that for GDD, different units are used depending on the application. 
$$
\begin{gathered}
\mathrm{GVD}: \frac{\mathrm{d} v_{\mathrm{g}}}{\mathrm{~d} \omega} \\
\text { GDD }: \frac{\mathrm{d} T_{\mathrm{g}}}{\mathrm{~d} \omega}=\frac{\mathrm{d}^2 \phi}{\mathrm{~d} \omega^2} \quad\left[\mathrm{fs}^2\right], \\
\text { GDD }: \frac{\mathrm{d} T_{\mathrm{g}}}{\mathrm{~d} \lambda}\quad\left[\frac{\mathrm{fs}}{\mathrm{~nm}}\right]
\\\mathrm{GDD}: \frac{\mathrm{d}^2 k_n}{\mathrm{~d} \omega^2} \quad\left[\frac{\mathrm{ps}^2}{\mathrm{~km}}\right] .
\end{gathered}
$$

### 2.4.5 Can a Pulse Propagate Faster than the Speed of Light in Vacuum?

The proof is skipped, but the group velocity can in fact be faster than the speed of light in vacuum. However, this is no contradiction with the theory of relativity. No information can be transmitted with superluminal velocity: Since a Gaussian pulse is analytical, the information about that Gaussian pulse already exists at all times everywhere in space, and it can already be completely reconstructed everywhere in space by Taylor series expansion. During propagation, only the pulse maximum is shifted. 
It is useful to calculate a group index as 
$$
n_{\mathrm{g}}=n+\omega \frac{\mathrm{d} n}{\mathrm{~d} \omega},
$$
which is defined as
$$
v_g(\omega)\equiv\frac{c}{n_g}.
$$

### 2.4.6 Higher Order Dispersion

While pulses with a length of 10-30 fs can be generated straightforwardly, increasing difficulties arise for shorter durations. Therefore, knowledge of higher order dispersion becomes more important. To characterise higher order dispersion, it can be useful to introduce the dispersion lengths:
$$
L_{\mathrm{D}} \equiv \frac{\tau^2}{\left|k_n^{\prime \prime}\right|}, \quad L_{\mathrm{D}}^{\prime} \equiv \frac{\tau^3}{\left|k_n^{\prime \prime \prime}\right|},
$$
where $k_n^{\prime \prime}=\partial^2 k_n / \partial \omega^2$ and $k_n^{\prime \prime \prime}=\partial^3 k_n / \partial \omega^3$. In most cases, third order dispersion is negligible compared to the second order, e.g. the higher order terms in the Taylor expansion in $k_n(\omega)$ can be neglected. Third order dispersion only plays a role if $L_{\mathrm{D}}^{\prime} \leq L_{\mathrm{D}}$ or if $L_{\mathrm{D}}^{\prime}$ becomes comparable to $L_{\mathrm{D}}$. Similar arguments apply for even higher order dispersion. 
For $z \gg L_{\mathrm{D}}$ the following approximation is valid for a Gaussian pulse:

$$
\frac{\tau_{\mathrm{p}}(z)}{\tau_{\mathrm{p}}(0)} \approx z \sqrt{1+\frac{1}{L_{\mathrm{D}}^2}+\frac{1}{4 L_{\mathrm{D}}^{\prime 2}}}.
$$

---