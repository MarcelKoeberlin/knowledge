---
{"dg-publish":true,"permalink":"/notes/ultrafast-laser-physics/2-linear-pulse-propagation/","hide":"true","updated":"2025-06-08T18:45:12.000+02:00"}
---

Jump back to ==[[Notes/Ultrafast Laser Physics/Ultrafast Laser Physics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Ultrafast Laser Physics/2 Linear Pulse Propagation#2.1 Wave Equation in the Spectral Domain: Helmholtz Equation\|2.1 Wave Equation in the Spectral Domain: Helmholtz Equation]]
[[Notes/Ultrafast Laser Physics/2 Linear Pulse Propagation#2.2 Linear vs Nonlinear Wave Propagation\|2.2 Linear vs Nonlinear Wave Propagation]]
[[Notes/Ultrafast Laser Physics/2 Linear Pulse Propagation#2.3 Ultrafast Pulses\|2.3 Ultrafast Pulses]]
[[Notes/Ultrafast Laser Physics/2 Linear Pulse Propagation#2.4 Linear pulse Propagation in a Dispersive Material\|2.4 Linear pulse Propagation in a Dispersive Material]]

---
# 2 Linear Pulse Propagation

In [[Notes/Ultrafast Laser Physics/1 Plane Wave Propagation in Dispersive Media\|Chapter 1]] we have seen that a monochromatic plane wave extends infinitely in space and time. To obtain a limited wave packet in time (a pulse), different plane waves with different wavelengths need to be superposed:

![Attachments/UltraFastLasers_Keller 6.webp|700](/img/user/Attachments/UltraFastLasers_Keller%206.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=46&rect=262,415,385,604| ]]

In the visible spectrum, different wavelengths correspond to different colours. This has important implications: A laser pulse can never be single-coloured (monochromatic) and must differ from the monochromatic light of a continuous-wave (CW) laser. The more frequency components a pulse contains, the broader its spectrum is (by definition) and the shorter the pulse **can** be.

Before diving deeper into this topic, it is important to recall some orders of magnitude:

![Attachments/UltraFastLasers_Keller 7.webp|700](/img/user/Attachments/UltraFastLasers_Keller%207.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=46&rect=56,87,383,153| ]]

Our eyes can only distinguish movements on timescales longer/slower than about $100 \, \text{ms}$. Mechanical shutters determining the exposure time in photography are limited to about $1 \, \text{ms}$. Any movements occurring faster than that will smear out on a photograph and will result in a blurry image. However, using strobe photography, it is possible to achieve exposure times as short as $1 \, \mu\text{s}$. With strobe photography, short light flashes started to become important for time-resolved measurements. Lasers are relevant here because we can generate much shorter flashes of light with lasers than with electrically switched light bulbs.

Today we can generate pulses as short as a few femtoseconds in the visible and near-infrared wavelength regimes directly from a laser. This is much faster than any electronic switching speed. For instance, in the nanosecond region, we find typical computer switching elements, and the fastest commercial microwave sampling oscilloscopes have a time resolution of around one picosecond.

It is good practice to remember these orders of magnitude!

---
## 2.1 Wave Equation in the Spectral Domain: Helmholtz Equation
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=48&selection=29,0,32,8| ]]

We know that any function can be expanded in terms of a complete set of orthogonal functions. Examples of this are Fourier series and Fourier integrals. A Fourier transform decomposes an arbitrary function of time into its harmonic frequency components. The inverse Fourier transform does the opposite and constructs an arbitrary function of time as a superposition of harmonic functions of time with different frequencies:

![Attachments/UltraFastLasers_Keller 8.webp|700](/img/user/Attachments/UltraFastLasers_Keller%208.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=48&rect=69,109,369,136| ]]

This is a powerful tool for describing ultrashort pulses, since the harmonic components have the physical meaning of plane waves with different frequencies. A light pulse can be formed by a superposition of plane waves with different (possibly discrete) frequencies at a fixed position in space:

![Attachments/UltraFastLasers_Keller 9.webp|700](/img/user/Attachments/UltraFastLasers_Keller%209.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=49&rect=61,329,378,529| ]]

The more waves are superposed, the shorter the pulse can be. If these frequencies are discrete and equally spaced, the superposition is not just one pulse, but a periodic pulse train with period $T_{\text{rep}}=2\pi/\Delta\omega$, where $\Delta\omega$ is the constant frequency spacing in the example figure.

We will follow this convention for our Fourier transform $\mathcal{F}$ and its inverse $\mathcal{F}^{-1}$:
$$
\begin{aligned}
& E(z, \omega) \equiv \mathcal{F}\left[E(z, t)\right]=\int_{-\infty}^{\infty} E(z, t) e^{-i \omega t} dt, \\
& E(z, t)=\mathcal{F}^{-1}\left[E(z, \omega)\right]=\frac{1}{2 \pi} \int_{-\infty}^{\infty} E(z, \omega) e^{+i \omega t} d\omega,
\end{aligned}
$$
where we write the complex scalar electric field of an electromagnetic plane wave as:
$$
E(z, t)=E_0 e^{i(\omega t-k z)}.
$$
Regarding the constant $1/(2\pi)$, we have chosen an asymmetric Fourier transform convention. This choice is common, particularly when relating spectra measured as a function of frequency $f$ to angular frequency $\omega$. We will subsequently make use of some useful operator correspondences derived from these definitions:
$$
\mathcal{F}^{-1}\left\{i \omega E(z, \omega)\right\}=\frac{\partial}{\partial t} E(z, t).
$$
This leads to the abbreviated correspondence: $\frac{\partial}{\partial t} \leftrightarrow i\omega$, or $\omega \leftrightarrow -i \frac{\partial}{\partial t}$ when moving from frequency domain to time domain operations. For higher derivatives, we have:
$$
\omega \Longleftrightarrow -i \frac{\partial}{\partial t}, \quad \omega^2 \Longleftrightarrow \left(-i \frac{\partial}{\partial t}\right)^2 = -\frac{\partial^2}{\partial t^2}, \quad \omega^3 \Longleftrightarrow \left(-i \frac{\partial}{\partial t}\right)^3 = i \frac{\partial^3}{\partial t^3}.
$$

**Derivation**
We start with the wave equation including a polarisation term $\mathbf{P}$:
$$
\nabla^2 \mathbf{E}-\frac{1}{c^2} \frac{\partial^2}{\partial t^2} \mathbf{E}=\mu_0 \frac{\partial^2}{\partial t^2} \mathbf{P}.
$$
Considering propagation in one dimension ($z$) and using the relation for the second-order time derivative $\partial^2/\partial t^2 \leftrightarrow -\omega^2$, we transform the scalar version of this equation to the spectral domain as:
$$
\frac{\partial^2 E(z, \omega)}{\partial z^2}+\frac{\omega^2}{c^2} E(z, \omega)=-\mu_0 \omega^2 P(z, \omega).
$$
For a linear, isotropic medium, the polarisation in the frequency domain is $P(z, \omega)=\varepsilon_0 \chi(\omega) E(z, \omega)$. Using the relative permittivity $\varepsilon_r(\omega) = 1+\chi(\omega)$, we have $P(z, \omega)=\varepsilon_0 (\varepsilon_r(\omega)-1) E(z, \omega)$. Substituting this into the spectral wave equation and rearranging (using $c^2=1/(\varepsilon_0\mu_0)$) gives:
$$
\frac{\partial^2 E(z, \omega)}{\partial z^2}+\frac{\omega^2}{c^2}\varepsilon_r(\omega) E(z, \omega)=0.
$$
With the definition of the wave number in the medium $k_n(\omega)=\frac{\omega}{c} n(\omega)$ and $n(\omega)=\sqrt{\varepsilon_r(\omega)}$ (assuming non-magnetic media, $\mu_r=1$), we find the one-dimensional Helmholtz equation:
$$
\frac{\partial^2 E(z, \omega)}{\partial z^2}+\left[k_n(\omega)\right]^2 E(z, \omega)=0.
$$
This is the wave equation in the spectral domain for a dispersive linear medium with an arbitrary dispersion relation $n(\omega)$ (and $\mu_r=1$). It is easy to verify that its general solution is:
$$
E(z, \omega)=E_0^{+}(\omega) e^{-i k_n(\omega) z} + E_0^{-}(\omega) e^{+i k_n(\omega) z},
$$
which is analogous to the time-independent Schrödinger equation for a free particle. Hence, the discussion on laser pulse propagation also applies to the propagation of quantum mechanical wave packets.

---
## 2.2 Linear vs Nonlinear Wave Propagation
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=52&selection=80,0,82,40| ]]

In linear optics, the wave equation is linear, meaning that the electric and magnetic fields and their derivatives appear only to the first order. Therefore, the superposition principle is valid, such that linear combinations of individual solutions ($\mathbf{E}_i, \mathbf{H}_i$) are solutions as well:
$$
\mathbf{E}_{\text{total}}=\sum_i a_i \mathbf{E}_i\quad\text{and} \quad \mathbf{H}_{\text{total}}=\sum_i a_i \mathbf{H}_i.
$$
(Here we assume $a_i=b_i$ as $\mathbf{E}_i$ and $\mathbf{H}_i$ for a given mode are uniquely related).
Furthermore, the superposition principle is not generally valid for intensities:
$$
I_{\text{total}} \neq \sum_i I_i,
$$
since, for instance, $|\mathbf{E}_1+\mathbf{E}_2|^2 \neq |\mathbf{E}_1|^2+|\mathbf{E}_2|^2$ if there is interference. However, it will hold even for intensities if the electromagnetic fields do not satisfy the conditions for interference, for instance when they are polarised perpendicular to each other, or when two waves are fully incoherent.

### 2.2.1 Linear System Theory

This topic is covered briefly here to the extent required. For a more detailed treatment, I invite you to read my notes on [[Notes/Signals and Systems/Signals and Systems\|Signals and Systems]].

In a linear system, we can directly connect the input signal to the output signal by considering linearity:
$$
E_{\text{in}1} \xrightarrow{\text{linear system}} E_{\text{out}1} \quad \Longrightarrow \quad a E_{\text{in}1} \xrightarrow{\text{linear system}} a E_{\text{out}1},
$$
and the fact that the superposition principle is valid:
$$
\left.\begin{array}{l}
E_{\text{in}1} \xrightarrow{\text{linear system}} E_{\text{out}1} \\
E_{\text{in}2} \xrightarrow{\text{linear system}} E_{\text{out}2}
\end{array}\right\} \quad \Longrightarrow \quad E_{\text{in}1}+E_{\text{in}2} \xrightarrow{\text{linear system}} E_{\text{out}1}+E_{\text{out}2}.
$$
Examples include dispersive media (for field propagation), photodetectors (relating photocurrent output to incoming light power input, a linear power relationship), lens systems (for field transformations), and linear filters acting on stochastic processes. However, one must be careful: a photodetector's current output is typically linearly related to the input *intensity* (power), not directly to the input electric field for general linear field-to-field system theory.

In a linear system, we define the impulse response $h(t)$: If the input is an infinitely short pulse $\delta(t)$ (the Dirac delta function, called an _impulse_ in system theory), the output is the function $h(t)$. Knowing $h(t)$ is sufficient to find the output for _any_ input $\mathbf{E}_{\text{in}}(t)$:
$$
\mathbf{E}_{\text{out}}(t)=\int_{-\infty}^{\infty} h(t^{\prime}) \mathbf{E}_{\text{in}}(t-t^{\prime}) dt^{\prime} \equiv (h * \mathbf{E}_{\text{in}})(t).
$$
The symbol $*$ abbreviates convolution. In the spectral domain, the dynamics of a linear system are described by its transfer function $H(\omega)$ (sometimes denoted $h(\omega)$), which is the Fourier transform of $h(t)$. The linear system response in the spectral domain is then given by simple multiplication:
$$
\mathbf{E}_{\text{out}}(\omega)=H(\omega) \mathbf{E}_{\text{in}}(\omega).
$$
The power spectral density $P_E(\omega)$ of a signal $\mathbf{E}(t)$ is given by:
$$
P_E(\omega) \equiv|\mathbf{E}(\omega)|^2.
$$
Thus, $P_{\text{in}}(\omega)=|\mathbf{E}_{\text{in}}(\omega)|^2$ and $P_{\text{out}}(\omega)=|\mathbf{E}_{\text{out}}(\omega)|^2$.
Analogously, for the system, $S_H(\omega) \equiv|H(\omega)|^2$ is the squared magnitude of the transfer function.
For a linear system, the relationship between input and output power spectra is:
$$
P_{\text{out}}(\omega)=S_H(\omega) P_{\text{in}}(\omega).
$$
From these considerations, it becomes clear why calculations in the spectral domain are often preferred: the complicated convolution in the time domain becomes a simple multiplication in the frequency domain.

We can use the transfer function $H(\omega)= e^{-i k_0 L_d}$ (where $k_0=\omega/c$) for propagation over a distance $L_d$ in vacuum to find that the impulse response $h(t) = \delta(t - L_d/c)$. Then:
$$
\mathbf{E}_{\text{out}}(t)=\int_{-\infty}^{\infty} \delta\left(t^{\prime}-\frac{L_d}{c}\right) \mathbf{E}_{\text{in}}\left(t-t^{\prime}\right) dt^{\prime}=\mathbf{E}_{\text{in}}\left(t-\frac{L_d}{c}\right).
$$
This implies that an arbitrary pulse $\mathbf{E}_{\text{in}}(t)$ propagates in vacuum without changing its pulse shape, only experiencing a delay. This is no longer the case in a dispersive material, because the transfer function $H(\omega)= e^{-i k_n(\omega)L_d} = e^{-i \omega n(\omega)L_d/c}$ generally does not correspond to a simple time-shifted Dirac delta function for its impulse response $h(t)$ if $n(\omega)$ is not constant.
A crucial conclusion for linear, **lossless** dispersive media is that $|H(\omega)|^2 = \left|e^{-i k_n(\omega) L_d}\right|^2=1$ (since $k_n(\omega)$ is real for lossless media). Thus, $S_H(\omega)=1$. This means the *shape* of the pulse power spectrum, $P_E(\omega)$, never changes during linear propagation in such a medium ($P_{\text{out}}(\omega) = P_{\text{in}}(\omega)$). This is in stark contrast to nonlinear pulse propagation. Therefore, if the optical spectrum of a laser pulse changes in an experiment, it indicates the presence of some nonlinearity in the system.

---
## 2.3 Ultrafast Pulses
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=55&selection=76,0,78,16| ]]

A coherent light pulse forms a wave packet of photons and can be described as a superposition of plane waves with different frequencies and phases at a fixed position in space. The shortest possible pulse duration for a given spectral amplitude distribution is obtained when the spectral phase is flat (constant) or linear with frequency (see [[Notes/Ultrafast Laser Physics/2 Linear Pulse Propagation#2.3.2 Shortest Pulse Duration\|section 2.3.2]]). For a pulse observed at a fixed position, we find its temporal profile via the inverse Fourier transform:
$$
\mathbf{E}(t)=\frac{1}{2 \pi} \int_{-\infty}^{\infty} \mathbf{E}(\omega) e^{i \omega t} d\omega.
$$
The spectrum $\mathbf{E}(\omega)$ typically has a finite width $\Delta \omega_0$ (spectral bandwidth) centred around a carrier frequency $\omega_0$. For pulses significantly longer than one optical period ($T_0=2\pi/\omega_0$), we typically have $\omega_0 \gg \Delta \omega_0$. The exact shape and phase of $\mathbf{E}(\omega)$ determine the temporal shape of the light pulse $\mathbf{E}(t)$.

It is often useful to rewrite the prior equation by separating the carrier frequency. Replacing $\omega$ with $\omega_0+\Delta\omega$ (where $\Delta\omega = \omega-\omega_0$ is the frequency offset from the carrier) and integrating over $\Delta\omega$:
$$
\mathbf{E}(t)=\frac{1}{2 \pi} \int_{-\infty}^{\infty} \mathbf{E}(\omega_0+\Delta\omega) e^{i(\omega_0+\Delta\omega) t} d\Delta\omega = \frac{1}{2 \pi} e^{i \omega_0 t} \int_{-\infty}^{\infty} \mathbf{A}_{\text{spec}}(\Delta\omega) e^{i \Delta\omega t} d\Delta\omega.
$$
Here, $\mathbf{A}_{\text{spec}}(\Delta\omega) = \mathbf{E}(\omega_0+\Delta\omega)$ is the frequency-shifted (baseband) spectrum. This implies that the time-domain field can be written as:
$$
\mathbf{E}(t)=\mathbf{A}(t) e^{i \omega_0 t},
$$
where
$$
\mathbf{A}(t)=\frac{1}{2 \pi} \int_{-\infty}^{\infty} \mathbf{A}_{\text{spec}}(\Delta\omega) e^{i \Delta\omega t} d\Delta\omega
$$
is called the complex **pulse envelope**. It describes the (generally slower) variation of the pulse's amplitude and phase relative to the fast carrier oscillation $e^{i\omega_0 t}$.

![Attachments/UltraFastLasers_Keller 10.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2010.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=57&rect=186,510,386,604| ]]

### 2.3.1 Time-Bandwidth Product

In laser physics, the laser pulse duration $\tau_p$ is typically defined as the Full Width at Half Maximum (FWHM) of the time-dependent pulse intensity $I(t) \sim |\mathbf{E}(t)|^2 = |\mathbf{A}(t)|^2$. Analogously, the laser pulse spectral width $\Delta f_p$ is normally defined as the FWHM of the spectral intensity (or power spectral density) $|\mathbf{E}(\omega)|^2$ (or $|\mathbf{E}(f)|^2$).
The time-bandwidth product (TBP), $\Delta f_p \cdot \tau_p$, has a minimum theoretical value that depends on the pulse shape. Some values are summarised below:

|                                             | $I(t)$, where $x \equiv t / \tau_{\text{char}}$                                     | $\tau_{\mathrm{p}} / \tau_\text{char}$ | $\Delta f_{\mathrm{p}} \times \tau_{\mathrm{p}}$ |
| :------------------------------------------ | :---------------------------------------------------------------------------------- | :------------------------------------- | :----------------------------------------------- |
| Gaussian                                    | $I(t)=e^{-x^2}$                                                                     | $2 \sqrt{\ln 2}$                       | 0.4413                                           |
| Hyperbolic secant ($\operatorname{sech}^2$) | $I(t)=\operatorname{sech}^2 x$                                                      | 1.7627                                 | 0.3148                                           |
| Rectangle                                   | $I(t)=\begin{cases}1,&x\leq 1/2 \\0,&x>1/2\end{cases}$ (width $\tau_{\text{char}}$) | 1                                      | 0.8859                                           |
| Parabolic                                   | $I(t)= \begin{cases}1-x^2, &x\leq 1 \\ 0, &x>1\end{cases}$                          | $\sqrt{2}$                             | 0.7276                                           |
| Lorentzian                                  | $I(t)=\frac{1}{1+x^2}$                                                              | 2                                      | 0.2206                                           |
| Symmetric two-sided exponential             | $I(t)=e^{-2\|x\|}$                                                                  | $\ln 2$                                | 0.1420                                           |

We consider explicitly a _chirped_ Gaussian pulse. Its complex envelope can be written as:
$$
A(t) = A_0 \exp\left(-\Gamma t^2\right),
$$
so $E(t) = A_0 \exp(-\Gamma t^2) \exp(i\omega_0 t)$. Here, $\omega_0$ is the centre angular frequency and $\Gamma$ is the complex Gaussian parameter, defined by:
$$
\Gamma \equiv \Gamma_r - i\Gamma_i,
$$
where $\Gamma_r > 0$. The real part $\Gamma_r$ determines the pulse duration, and the imaginary part $\Gamma_i$ determines the linear chirp of the Gaussian pulse. The electric field is $E(t) = A_0 \exp(-\Gamma_r t^2) \exp(i(\omega_0 t + \Gamma_i t^2))$.
The next figure compares an unchirped pulse (top, $\Gamma_i=0$) and a chirped pulse (bottom, $\Gamma_i \neq 0$).

![Attachments/UltraFastLasers_Keller 11.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2011.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=59&rect=175,370,386,604| ]]

If a pulse is chirped, its instantaneous frequency is time-dependent. The total phase of the chirped Gaussian pulse is $\phi_{\text{total}}(t) = \omega_0 t+\Gamma_i t^2$. The instantaneous frequency is:
$$
\omega(t) \equiv \frac{d\phi_{\text{total}}(t)}{dt}=\omega_0+2 \Gamma_i t.
$$
This expression shows that the instantaneous frequency varies linearly with time if $\Gamma_i \neq 0$. The FWHM pulse duration $\tau_p$ is defined from the intensity $I(t) \sim |A(t)|^2 = |A_0|^2 \exp(-2\Gamma_r t^2)$. By setting $I(t_p/2) = I(0)/2$:
$$
\exp(-2\Gamma_r (t_p/2)^2) = 1/2 \implies -2\Gamma_r (t_p^2/4) = -\ln 2 \implies \tau_p^2 = \frac{4\ln 2}{2\Gamma_r}.
$$
So, the FWHM pulse duration $\tau_p$ is:
$$
\tau_p=\sqrt{\frac{2 \ln 2}{\Gamma_r}}.
$$
A light pulse that achieves its minimal time-bandwidth product is called **time-bandwidth limited**, or simply **transform-limited**. For a given spectral amplitude distribution, a transform-limited pulse has the shortest possible pulse duration. Any additional non-linear spectral phase (chirp) results in a longer pulse duration for the same spectral width.
If the spectrum is given as a function of wavelength $\lambda_0$ (centre) and spectral width $\Delta\lambda_p$, for all pulse shapes where the fractional bandwidth is small ($\Delta f_p \ll f_0$, or equivalently $\Delta\lambda_p \ll \lambda_0$), we find the relation:
$$
\frac{\Delta f_p}{f_0} \approx \frac{\Delta \lambda_p}{\lambda_0}.
$$

### 2.3.2 Shortest Pulse Duration

Continuous progress in ultrashort pulse generation has led to pulse durations below $6 \, \text{fs}$ in the visible and near-infrared spectral range directly from lasers, and even shorter pulses via external compression techniques. Such ultrashort pulses often exhibit broad and complex spectra that do not conform to ideal pulse shapes. In such cases, specifying the pulse duration by a simple FWHM value can be insufficient or misleading. A more general pulse width measure is the root-mean-square (rms) pulse duration:
$$
\tau_{\text{rms}}^2 = \frac{\int_{-\infty}^{\infty}(t-\langle t\rangle)^2 I(t) dt}{\int_{-\infty}^{\infty} I(t) dt} = \frac{\int_{-\infty}^{\infty}(t-\langle t\rangle)^2 |E(t)|^2 dt}{\int_{-\infty}^{\infty} |E(t)|^2 dt} \\
$$
where
$$
\langle t\rangle = \frac{\int_{-\infty}^{\infty} t I(t) dt}{\int_{-\infty}^{\infty} I(t) dt}
$$
is the temporal centre of gravity. It can be shown that, for a given power spectrum $|E(\omega)|^2$, the shortest rms pulse duration is obtained when the spectral phase $\Phi(\omega)$ is flat (constant) or at most linear with frequency ($\Phi(\omega) = \phi_0 + \phi_1 \omega$). A linear spectral phase only corresponds to a constant time shift of the pulse without affecting its duration.

---
## 2.4 Linear pulse Propagation in a Dispersive Material
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=62&selection=187,0,189,49| ]]

Before beginning this section, it is important to clarify that linear pulse propagation means that no intensity-dependent material properties (nonlinear optical effects like the [[Notes/Ultrafast Laser Physics/4 Nonlinear Pulse Propagation#4.1 Kerr Effect and Self-Phase Modulation\|Kerr effect]]) are considered. However, the refractive index $n(\omega)$ of the medium can have any arbitrary (potentially highly non-linear as a function of $\omega$) frequency dependence, leading to dispersion.

### 2.4.1 Slowly-Varying-Envelope Approximation

To examine the propagation of a pulse envelope $A(z,t)$ through a dispersive medium, it is useful to separate the fast optical carrier oscillation from the envelope dynamics. We write the electric field as:
$$
E(z, t)=A(z, t) e^{i\left[\omega_0 t-k_n(\omega_0) z\right]}.
$$
The Fourier transforms $E(z, \omega)$ and $A(z, \Delta\omega)$ (where $A(z,\Delta\omega)$ is the spectrum of $A(z,t)$ with respect to $t$, and $\Delta\omega = \omega-\omega_0$) satisfy the relation:
$$
E(z, \omega_0+\Delta\omega)=A(z, \Delta\omega) e^{-i k_n(\omega_0) z}.
$$
Now we introduce the **slowly-varying-envelope approximation (SVEA)**. This approximation states that the pulse envelope $A(z,t)$ changes slowly in space (over a distance $z$) and time (over a period $1/\omega_0$) compared to the optical carrier. Specifically for spatial variation, it assumes the envelope does not change much over a distance of one wavelength $\lambda_0/n(\omega_0)$:
$$
\left|\frac{\partial^2 A(z, \Delta\omega)}{\partial z^2}\right| \ll \left|2 k_n(\omega_0) \frac{\partial A(z, \Delta\omega)}{\partial z}\right|.
$$
With this, and starting from the Helmholtz equation for $E(z,\omega)$, one can derive a simpler first-order differential equation for the evolution of the envelope's spectrum $A(z,\Delta\omega)$:
$$
\frac{\partial}{\partial z} A(z, \Delta\omega)+i \Delta k_n(\Delta\omega) A(z, \Delta\omega)=0,
$$
where $\Delta k_n(\Delta\omega) = k_n(\omega_0+\Delta\omega) - k_n(\omega_0)$. The solution to this equation is:
$$
A(z, \Delta\omega)=A(0, \Delta\omega) e^{-i \Delta k_n(\Delta\omega) z}=A(0, \Delta\omega) e^{-i\left[k_n(\omega_0+\Delta\omega)-k_n(\omega_0)\right] z}.
$$
This equation shows that each spectral component $A(0,\Delta\omega)$ of the initial envelope accumulates a phase shift $e^{-i[k_n(\omega_0+\Delta\omega)-k_n(\omega_0)]z}$ as it propagates through the medium.

### 2.4.2 First and Second Order Dispersion

As stated before, an optical pulse is a superposition of monochromatic plane waves, where each spectral component propagates with its own phase velocity $v_p(\omega) = \omega/k_n(\omega)$. This frequency-dependent phase velocity (dispersion) leads to relative phase shifts between individual spectral components during propagation. Pulse broadening and distortion are primarily caused by the dispersion of the group velocity, not directly by the phase velocity dispersion.
The shorter a pulse (and thus the broader its spectrum $\Delta\omega$), the more pronounced the effects of dispersion become. Assuming the pulse bandwidth $\Delta\omega$ is small compared to the carrier frequency $\omega_0$ ($\Delta\omega \ll \omega_0$), we may expand the wave number $k_n(\omega)$ in a Taylor series around $\omega_0$:
$$
k_n(\omega) \approx k_n(\omega_0) + k_n^{\prime}(\omega_0)(\omega-\omega_0) + \frac{1}{2} k_n^{\prime \prime}(\omega_0)(\omega-\omega_0)^2 + \dots,
$$
where $\Delta\omega = \omega-\omega_0$.
$k_n^{\prime}(\omega_0) = \left.\frac{dk_n}{d\omega}\right|_{\omega_0}$ is the first-order dispersion coefficient (inverse group velocity).
$k_n^{\prime \prime}(\omega_0) = \left.\frac{d^2k_n}{d\omega^2}\right|_{\omega_0}$ is the second-order dispersion coefficient, often called Group Velocity Dispersion (GVD) parameter.
This expansion is typically valid in the optical region even for ultrashort pulses of several femtoseconds.

### 2.4.3 Phase Velocity and Group Velocity

For a Gaussian pulse, linear pulse propagation including up to second-order dispersion can often be solved analytically. The phase velocity is defined as:
$$
v_p(\omega_0) = \frac{\omega_0}{k_n(\omega_0)} = \frac{c}{n(\omega_0)}.
$$
The group velocity $v_g$ is defined as:
$$
v_g(\omega_0) = \left(\left.\frac{dk_n}{d\omega}\right|_{\omega_0}\right)^{-1} = \frac{1}{k_n^{\prime}(\omega_0)}.
$$
The phase velocity describes the propagation velocity of the carrier wave (surfaces of constant phase). The group velocity corresponds to the propagation velocity of the peak of the pulse envelope (under certain approximations).

![Attachments/UltraFastLasers_Keller 12.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2012.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=67&rect=234,504,385,605| ]]

In vacuum, $n(\omega)=1$, so $k_n(\omega)=\omega/c$, $k_n'(\omega)=1/c$, $k_n''(\omega)=0$. Thus $v_p=c$ and $v_g=c$.
The first-order dispersion $k_n'$ determines the overall temporal shift of the pulse, quantified by the group delay $T_g$ after propagating a distance $z$:
$$
T_g(z) = k_n^{\prime} z = \frac{z}{v_g}.
$$

### 2.4.4 Pulse Broadening

A pulse is **temporally** broadened (or compressed, depending on initial chirp and dispersion sign) by propagation through a dispersive medium. Remember that a linear system can**not** spectrally broaden or narrow the pulse; $|E(z,\omega)|^2$ remains unchanged if the medium is lossless.

![Attachments/UltraFastLasers_Keller 13.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2013.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=67&rect=60,125,378,191| ]]

This temporal reshaping can be seen by considering the FWHM pulse duration of an initially unchirped Gaussian pulse with initial duration $\tau_p(0)$ and complex parameter $\Gamma(0) = \Gamma_r(0)$. After propagating a distance $L_d$, the pulse acquires chirp and its new complex parameter is $\Gamma(L_d)$. The duration becomes:
$$
\tau_p(L_d)=\sqrt{\frac{2 \ln 2}{\mathfrak{Re}\left[\Gamma(L_d)\right]}}.
$$
The first-order dispersion term ($k_n'$) only causes a temporal shift (group delay) and does not contribute to pulse broadening. Only second-order dispersion ($k_n''$, GVD) and higher-order dispersion terms cause changes in pulse duration and shape for an initially unchirped pulse.
For an initially transform-limited Gaussian pulse of duration $\tau_p(0)$, after propagating a distance $L_d$ in a medium with GVD $k_n''$, the duration becomes:
$$
\frac{\tau_p(L_d)}{\tau_p(0)}=\sqrt{1+\left(\frac{k_n^{\prime \prime} L_d (4 \ln 2)}{\tau_p^2(0)}\right)^2} = \sqrt{1+\left(\frac{\text{GDD}}{\tau_p^2(0)/(2\ln 2)} \frac{2}{\tau_p(0)}\right)^2}.
$$
Here, GDD (Group Delay Dispersion) is $\frac{d^2\phi}{d\omega^2} = k_n'' L_d$. The formula shows that the shorter the original pulse $\tau_p(0)$ (meaning larger spectral bandwidth), the more it is stretched in time by a given amount of GDD. The next figure shows the pulse broadening factor for Gaussian pulses of different initial durations passing through a $1 \, \text{cm}$ thick fused silica lens.

![Attachments/UltraFastLasers_Keller 14.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2014.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=68&rect=73,444,363,611| ]]

**Strong Pulse Broadening Approximation**
The case of strong pulse broadening occurs when the second term under the square root is much larger than 1, which means the accumulated GDD is large compared to $\tau_p^2(0)/(4\ln 2)$. This is often stated as when the propagation distance $L_d$ is much greater than the "dispersion length" $L_D = \tau_p^2(0)/(4\ln 2|k_n''|)$. Equivalently:
$$
|\text{GDD}| = |k_n^{\prime \prime}| L_d \gg \frac{\tau_p^2(0)}{4\ln 2}.
$$
In this limit, assuming an unchirped initial Gaussian pulse of spectral FWHM $\Delta\omega_p = 4\ln 2 / \tau_p(0)$:
$$
\tau_p(L_d) \approx \frac{|k_n^{\prime \prime}| L_d (4 \ln 2)}{\tau_p(0)} = |\text{GDD}| \frac{4\ln 2}{\tau_p(0)} = |\text{GDD}| \Delta\omega_p.
$$
The effect of an unchirped pulse passing through a dispersive medium (with, say, positive $k_n''$) is schematically shown here:

![Attachments/UltraFastLasers_Keller 15.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2015.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=71&rect=74,121,366,254| ]]

The pulse becomes longer and acquires a linear chirp. For positive $k_n''$ (normal dispersion in typical glass for visible light), higher frequencies (blue) travel slower than lower frequencies (red). An initially unchirped pulse develops a positive chirp (red leading blue).
$$
\text{Normal dispersion (e.g. } k_n''>0): \quad v_g(\omega_{\text{blue}}) < v_g(\omega_{\text{red}}).
$$
The broadened pulse is chirped by the dispersion. However, as mentioned, the pulse power spectrum $|E(z,\omega)|^2$ does not change during linear propagation in a lossless medium:

![Attachments/UltraFastLasers_Keller 16.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2016.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=72&rect=55,465,384,608| ]]

Linear dispersive pulse broadening (for initially unchirped pulses) arises from second-order and higher-order dispersion. It is therefore the frequency dependence of the group velocity (related to $k_n''$) that is primarily responsible for this broadening, not the frequency dependence of the phase velocity itself.

This can be depicted as in the following figure. Consider that a short pulse can be thought of as a superposition of many longer sub-pulses, each with a slightly different centre wavelength/frequency. The superposition results in a short overall pulse because the electric fields in the wings of the sub-pulses interfere destructively:

![Attachments/UltraFastLasers_Keller 17.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2017.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=73&rect=55,415,326,606| ]]

Now observe what happens when this collection of sub-pulses passes through a dispersive medium:

![Attachments/UltraFastLasers_Keller 18.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2018.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=73&rect=54,111,386,302| ]]

Note that, in this conceptual picture, the individual sub-pulses (if they were narrow enough in spectrum not to experience significant GVD themselves) do not broaden significantly. Rather, the broadening of the resultant overall pulse comes from the fact that these sub-pulses, with their slightly different centre frequencies, travel at different group velocities through the dispersive medium. This differential group delay causes them to spread out in time, leading to broadening of the total pulse.

It is useful to know dispersion parameters as a function of both frequency $\omega$ and wavelength $\lambda$ (where $n' = dn/d\lambda$, $n''=d^2n/d\lambda^2$ etc.):

| Dispersion parameter                                       | Definition                                                                                                | Calculation from $n(\lambda)$                                                                                                |
| :--------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| Phase velocity $v_p$                                       | $\omega / k_n(\omega)$                                                                                    | $c/n(\lambda)$                                                                                                               |
| Group velocity $v_g$                                       | $(dk_n/d\omega)^{-1}$                                                                                     | $\frac{c}{n(\lambda) - \lambda n'(\lambda)}$                                                                                 |
| Group delay $T_g$ (per unit length $L_d$)                  | $k_n' = dk_n/d\omega = 1/v_g$                                                                             | $\frac{1}{c}(n(\lambda) - \lambda n'(\lambda))$                                                                               |
| GDD (Group Delay Dispersion, total over $L_d$)             | $k_n'' L_d = d^2(k_n L_d)/d\omega^2$                                                                      | $\frac{\lambda^3 L_d}{2\pi c^2} n''(\lambda)$ [units: $\text{fs}^2$]                                                        |
| Dispersion parameter $D_\lambda$ (GDD per unit length and $\Delta\lambda$) | $\frac{1}{L_d}\frac{dT_g}{d\lambda} = -\frac{2\pi c}{\lambda^2} k_n''$                             | $-\frac{\lambda}{c} n''(\lambda)$ [units: $\text{ps/(nm km)}$ or $\text{fs/(nm cm)}$]                                     |
| TOD (Third Order Dispersion, total over $L_d$)             | $k_n''' L_d = d^3(k_n L_d)/d\omega^3$                                                                     | $-\frac{\lambda^4 L_d}{(2\pi c)^2 c} (3n''(\lambda) + \lambda n'''(\lambda))$ [units: $\text{fs}^3$]                       |

Different units and definitions for GVD/GDD are used depending on the application.

### 2.4.5 Can a Pulse Propagate Faster than the Speed of Light in Vacuum?

The proof is skipped, but the group velocity $v_g$ can, under certain conditions (such as near an absorption resonance in a region of anomalous dispersion), be greater than the speed of light in vacuum $c$, or even negative. However, this is not a contradiction with the theory of relativity. No information or energy can be transmitted with superluminal velocity.
The argument that because a Gaussian pulse is analytical, its future is determined by its past, and thus its peak propagation does not represent signal velocity, is one perspective. More rigorously, the front velocity of any signal (the speed of its very first non-zero disturbance) cannot exceed $c$.
It is useful to define the group index $n_g$:
$$
n_g(\omega)=n(\omega)+\omega \frac{dn(\omega)}{d\omega} = n(\lambda) - \lambda \frac{dn(\lambda)}{d\lambda},
$$
such that $v_g(\omega) = c/n_g(\omega)$.

### 2.4.6 Higher Order Dispersion

While pulses with durations of $10-30 \, \text{fs}$ can be generated relatively straightforwardly, increasing difficulties arise for generating and propagating even shorter durations. For such extremely short pulses (few-cycle or single-cycle), higher-order dispersion terms beyond GVD (like third-order dispersion, TOD, related to $k_n'''$) become more important. To characterise their relative importance, dispersion lengths can be introduced:
$$
L_D = \frac{\tau_0^2}{|k_n''|}, \quad L_D^{\prime} = \frac{\tau_0^3}{|k_n'''|},
$$
where $\tau_0$ is a characteristic initial pulse duration (related to, but not necessarily equal to, $\tau_p(0)$ FWHM). Third-order dispersion significantly affects pulse propagation if $L_D'$ becomes comparable to or smaller than $L_D$, or comparable to the actual propagation length $z$. Similar arguments apply for even higher orders of dispersion.
The formula for pulse broadening for $z \gg L_D$ that includes TOD,
$$
\frac{\tau_\text{p}(z)}{\tau_\text{p}(0)} \approx z \sqrt{1+\frac{1}{L_D^2}+\frac{1}{4 L_D^{\prime 2}}}.
$$

---