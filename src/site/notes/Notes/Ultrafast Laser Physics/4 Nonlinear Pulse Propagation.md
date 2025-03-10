---
{"dg-publish":true,"permalink":"/notes/ultrafast-laser-physics/4-nonlinear-pulse-propagation/","hide":"true","updated":"2025-02-12T22:08:49.000+01:00"}
---

Jump back to ==[[Notes/Ultrafast Laser Physics/Ultrafast Laser Physics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Ultrafast Laser Physics/4 Nonlinear Pulse Propagation#4.1 Kerr Effect and Self-Phase Modulation (SPM)\|4.1 Kerr Effect and Self-Phase Modulation (SPM)]]
- [[Notes/Ultrafast Laser Physics/4 Nonlinear Pulse Propagation#4.2 Self-Focusing and Filamentation\|4.2 Self-Focusing and Filamentation]]
- [[Notes/Ultrafast Laser Physics/4 Nonlinear Pulse Propagation#4.3 Solitons - Nonlinear Schrödinger Equation (NSE)\|4.3 Solitons - Nonlinear Schrödinger Equation (NSE)]]
- [[Notes/Ultrafast Laser Physics/4 Nonlinear Pulse Propagation#4.4 Self-Steepening\|4.4 Self-Steepening]]
- [[Notes/Ultrafast Laser Physics/4 Nonlinear Pulse Propagation#4.5 Nonlinear Propagation in a Saturable Absorber or Saturable Amplifier\|4.5 Nonlinear Propagation in a Saturable Absorber or Saturable Amplifier]]

---
# 4 Nonlinear Pulse Propagation

This chapter discusses nonlinear pulse propagation as far as it is relevant to ultrafast lasers.

---
## 4.1 Kerr Effect and Self-Phase Modulation (SPM)
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=150&selection=8,0,10,27|•]]

The intensity-dependent refractive index is given by  
$$
n(I) = n + n_2 I,
$$
where $n$ is the refractive index, $n_2$ is the nonlinear refractive index, and $I$ is the intensity. This is known as the optical Kerr effect. The value of $n_2$ is typically of the order of $10^{-16}$ cm$^2$/W for many solid-state materials in the near-IR. Since this is approximately three orders of magnitude higher than the nonlinear refractive index of air, $n_2$ can usually be neglected in air. However, at high intensities and within ultrafast laser cavities, it becomes significant and cannot be ignored.

For a laser beam with a constant beam area, and thus a constant peak intensity, propagating through a Kerr medium of length $L_{\mathrm{K}}$, the nonlinear phase shift is given by  
$$
\varphi(t) = -k n(I) L_{\mathrm{K}} = -k \left[n + n_2 I(t) \right] L_{\mathrm{K}}.
$$
The nonlinear phase shift can be rewritten as  
$$
\varphi_2(t) = -k n_2 I(t) L_{\mathrm{K}} = -k n_2 L_{\mathrm{K}} |A(t)|^2 \equiv -\delta |A(t)|^2,
$$
where $|A(t)|$ is the amplitude of the pulse envelope, normalised such that $|A(t)| = I(t)$, and $\delta$ is the self-phase modulation (SPM) coefficient, defined as  
$$
\delta \equiv k n_2 L_{\mathrm{K}}.
$$

Thus, the electric field evolves as  
$$
E\left(L_{\mathrm{K}}, t\right) = A(0, t) \exp \left[\mathrm{i} \omega_0 t + \mathrm{i} \varphi(t)\right]  
= A(0, t) \exp \left[\mathrm{i} \omega_0 t - \mathrm{i} k_n\left(\omega_0\right) L_{\mathrm{K}} - \mathrm{i} \delta |A(t)|^2\right].
$$
For small SPM, we linearise this expression:  
$$
A\left(L_{\mathrm{K}}, t\right) = \mathrm{e}^{-\mathrm{i} \delta |A|^2} A(0, t) \mathrm{e}^{-\mathrm{i} k_n\left(\omega_0\right) L_{\mathrm{K}}}  
\overset{\delta |A|^2 \ll 1}{\approx} \left[1 - \mathrm{i} \delta |A(t)|^2 \right] A(0, t) \mathrm{e}^{-\mathrm{i} k_n\left(\omega_0\right) L_{\mathrm{K}}}.
$$
SPM broadens the pulse spectrum because the instantaneous frequency shift is given by  
$$
\omega_2(t) = \frac{\mathrm{d} \varphi_2(t)}{\mathrm{d} t} = -\delta \frac{\mathrm{d} I(t)}{\mathrm{d} t}.
$$
At the leading edge of the pulse, where $\mathrm{d} I(t) / \mathrm{d} t > 0$, the frequency decreases, i.e. $\omega_2(t) < 0$. At the trailing edge, where $\mathrm{d} I(t) / \mathrm{d} t < 0$, the frequency increases, i.e. $\omega_2(t) > 0$:

![Attachments/UltraFastLasers_Keller 43.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2043.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=153&rect=117,423,321,609|•]]

SPM-induced spectral broadening leads to an oscillatory structure in the spectrum:

![Attachments/UltraFastLasers_Keller 44.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2044.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=153&rect=81,221,358,343|•]]

The number of oscillation peaks depends on the maximum nonlinear phase shift $\varphi_{2, \max }$:  
$$
\left|\varphi_{2, \max }\right| = k n_2 I_{\mathrm{p}} L_{\mathrm{K}} \approx \left(M - \frac{1}{2} \right) \pi,
$$
where $I_{\mathrm{p}}$ is the peak intensity and $M$ is the number of peaks in the SPM-broadened spectrum.  

---
### 4.1.1 Pulse Compression
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=152&selection=401,0,404,32|•]]

Spectral broadening induced by SPM can be utilised to compress transform-limited pulses. The simplest case is an optical fibre, where the spectral broadening occurs:

![Attachments/UltraFastLasers_Keller 45.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2045.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=154&rect=55,506,383,608|•]]

After spectral broadening of a transform-limited pulse (in a medium with positive dispersion), a grating compressor can shorten the pulse in time (introducing negative dispersion). Note that SPM introduces a chirp that is only linear in the central region of the pulse. Only this part can be compensated by the grating compressor. The remaining energy, which cannot be compressed, results in a pulse width that is broader than the minimum expected from the spectral broadening ratio, and introduces longer wings in the pulse. This degrades the quality of the compressed pulse.

---
## 4.2 Self-Focusing and Filamentation
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=168&selection=12,0,14,42|•]]

Due to the Kerr effect, a laser beam induces a focusing lens effect:

![Attachments/UltraFastLasers_Keller 46.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2046.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=168&rect=186,64,387,234|•]]

For a sufficiently thin Kerr medium of length $L_{\mathrm{K}}$, the beam radius $w$ can be assumed constant, and the beam profile can be approximated as  
$$
I(x, y) = I_{\mathrm{p}} \exp \left(-2 \frac{x^2 + y^2}{w^2}\right)  
\stackrel{\left(x^2 + y^2\right) \ll w^2}{\longrightarrow} I_{\mathrm{p}}\left(1 - 2 \frac{x^2 + y^2}{w^2}\right),
$$
where $I_{\mathrm{p}}$ is the peak intensity. This results in a parabolic refractive index variation,  
$$
n(x, y) = n + n_2 I(x, y) \approx n_{\mathrm{p}} - 2 \Delta n_{\mathrm{p}} \frac{x^2 + y^2}{w^2},
$$
where $\Delta n_{\mathrm{p}} = n_2 I_{\mathrm{p}}$ and $n_{\mathrm{p}} = n + \Delta n_{\mathrm{p}}$. This corresponds to a focusing lens with focal length  
$$
f = a \frac{w^2}{4 \Delta n_{\mathrm{p}} L_{\mathrm{K}}},
$$
where $a$ is a scaling factor accounting for higher-order phase profile components neglected in the parabolic expansion.

To avoid material damage due to self-focusing, the so-called B-integral should remain below 3 to 5:  
$$
B \equiv \frac{2 \pi}{\lambda} \int_0^L n_2 I(z) \mathrm{d} z.
$$
**Filament Formation**

Kerr focusing increases the local optical refractive index with pulse intensity, while self-induced ionisation decreases it. These two effects may therefore balance out, creating a filament. There is a critical power associated with strong self-focusing that ultimately results in material damage or multi-photon ionisation in gases, which then counteracts the self-focusing:

![Attachments/UltraFastLasers_Keller 47.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2047.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=171&rect=86,457,353,608|•]]

This is the basic mechanism for filament formation: Above a critical power, the Kerr effect becomes so strong that self-focusing dominates. This would cause the beam to collapse; however, as the peak intensity increases, multi-photon ionisation of the gas occurs, which counteracts the effective focusing lens induced by the Kerr effect. The free carriers (e.g. plasma) provide an effective defocusing lens. This leads to a balance, resulting in filamentation, where the beam maintains a narrow diameter. The high intensity broadens the spectrum via self-phase modulation (SPM) to such an extent that white light is emitted by the filaments, transforming an infrared laser into a 'white-light laser'. The critical power can be approximated as  
$$
P_{\mathrm{cr}}=\alpha \frac{\lambda_0^2}{4 \pi n_0 n_2}=1.896 \frac{\lambda_0^2}{4 \pi n_0 n_2},
$$
where $n_0=n(\lambda_0)$ with $\lambda_0$ being the central wavelength.  
In gases, before beam collapse occurs, the intensity increases to a level where multi-photon ionisation takes place. Beam collapse is therefore prevented by multi-photon absorption and the defocusing effect of the plasma.  

---
## 4.3 Solitons - Nonlinear Schrödinger Equation (NSE)
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=173&selection=6,0,8,8|•]]

A wave packet propagating through a linear medium will disperse, as discussed in [[Notes/Ultrafast Laser Physics/2 Linear Pulse Propagation\|chapter 2]]. This is a linear effect. However, if the propagation velocity of the wave in the medium also depends on the intensity, these two effects may cancel each other out for certain pulse shapes known as solitons. The propagation of **optical** solitons is described by the NSE.  

Solitons are extremely important (as will become evident multiple times in these notes) for the generation and propagation of ultrashort electromagnetic pulses. Consequently, they have been extensively studied for applications in optical communication, laser physics, and quantum optics.  

Solitons are pulses for which the effects of SPM and negative group-delay dispersion (GDD) cancel: A pulse can propagate without broadening in a dispersive medium. If the system dynamics also allow for soliton collisions, these pulses remain unchanged except for position and phase shifts. Due to these collision properties, solitons exhibit some particle-like characteristics.  

### **Derivation**  

First, consider the equation of motion for the envelope $\tilde{A}(z,\Delta\omega)$ in a dispersive medium within the slowly-varying envelope approximation:  
$$
\tilde{A}\left(L_{\mathrm{d}}, \Delta \omega\right)=\mathrm{e}^{-\mathrm{i}\left[k_n\left(\omega_0+\Delta \omega\right)-k_n\left(\omega_0\right)\right] L_{\mathrm{d}}} \tilde{A}(0, \Delta \omega),
$$
where $L_{\mathrm{d}}$ is the length of the dispersive material. The dispersion can be expanded as  
$$
k_n(\omega) \approx k_n\left(\omega_0\right)+k_n^{\prime} \Delta \omega+\frac{1}{2} k_n^{\prime \prime} \Delta \omega^2,
$$
where the first- and second-order dispersion terms are  
$$
k_n^{\prime}=\left.\frac{\partial k_n}{\partial \omega}\right|_{\omega_0}, \quad k_n^{\prime \prime}=\left.\frac{\partial^2 k_n}{\partial \omega^2}\right|_{\omega_0}.
$$
Substituting this expansion yields  
$$
\tilde{A}\left(L_{\mathrm{d}}, \Delta \omega\right)=\exp \left[-\mathrm{i}\left(k_n^{\prime} \Delta \omega+\frac{1}{2} k_n^{\prime \prime} \Delta \omega^2\right) L_{\mathrm{d}}\right] \tilde{A}(0, \Delta \omega).
$$  

For the first derivative $k_n^\prime$, we consider the case where $k_n^\prime\Delta\omega L_d\ll 1$, allowing us to linearise the term:  
$$
A\left(L_{\mathrm{d}}, t\right) \approx\left(1-k_n^{\prime} L_{\mathrm{d}} \frac{\partial}{\partial t}\right) A(0, t), \quad \text{for } k_n^{\prime} \Delta \omega L_{\mathrm{d}} \ll 1.
$$
Thus, the temporal shift is determined by the group delay:  
$$
T_{\mathrm{g}}=k_n^{\prime} L_{\mathrm{d}}=\frac{L_{\mathrm{d}}}{v_{\mathrm{g}}}.
$$  

For the second derivative $k_n^{\prime\prime}$, we consider the case where $k_n^{\prime \prime} \Delta \omega^2 L_{\mathrm{d}} \ll 1$, yielding  
$$
\begin{aligned} 
A\left(L_{\mathrm{d}}, t\right) & \approx\left(1-k_n^{\prime} L_{\mathrm{d}} \frac{\partial}{\partial t}\right)\left(1+\frac{\mathrm{i}}{2} k_n^{\prime \prime} L_{\mathrm{d}} \frac{\partial^2}{\partial t^2}\right) A(0, t) \\  
& \equiv\left(1-k_n^{\prime} L_{\mathrm{d}} \frac{\partial}{\partial t}\right)\left(1+\mathrm{i} D \frac{\partial^2}{\partial t^2}\right) A(0, t),
\end{aligned}
$$
where the dispersion parameter is defined as  
$$
D\equiv\frac{1}{2}k_n^{\prime\prime}L_d.
$$
It describes the curvature of the dispersion curve $n(\omega)$. The relation to GDD is given by  
$$
\text{GDD}=2D.
$$
Neglecting the first derivative, we obtain:  
$$
A\left(L_{\mathrm{d}}, t\right) \approx\left(1+\mathrm{i} \frac{1}{2} k_n^{\prime \prime} L_{\mathrm{d}} \frac{\partial^2}{\partial t^2}\right) A(0, t) \equiv\left(1+\mathrm{i} D \frac{\partial^2}{\partial t^2}\right) A(0, t), \quad \text{for } k_n^{\prime \prime} \Delta \omega^2 L_{\mathrm{d}} \ll 1.
$$  

Using the slowly-varying envelope approximation (SVEA), we neglect the cross-term including both temporal derivatives:  
$$
\frac{\partial}{\partial z} A(z, t)+\frac{1}{v_{\mathrm{g}}} \frac{\partial}{\partial t} A(z, t)=\mathrm{i} \frac{k_n^{\prime \prime}}{2} \frac{\partial^2}{\partial t^2} A(z, t).
$$
Introducing a retarded time frame, we now consider only the temporal evolution of the envelope, observing the pulse in its co-moving frame:  
$$
t^{\prime}=t-\frac{z}{v_{\mathrm{g}}}.
$$

Therefore, with this retarded time, we obtain

$$
\frac{\partial}{\partial z} A\left(z, t^{\prime}\right)=\mathrm{i} \frac{k_n^{\prime \prime}}{2} \frac{\partial^2}{\partial t^{\prime 2}} A\left(z, t^{\prime}\right).
$$
If we also want to consider SPM, we can, by analogy with the dispersion, use the linearised SPM operator ($1-i\delta|A(t)|^2$):
$$
\begin{aligned}
\frac{\partial}{\partial z} A(z, t) & =\lim _{L_{\mathrm{d}} \rightarrow 0} \frac{A\left(L_{\mathrm{d}}, t\right)-A(0, t)}{L_{\mathrm{d}}} \\
& \approx-k_n^{\prime} \frac{\partial}{\partial t} A(z, t)+\mathrm{i} \frac{1}{2} k_n^{\prime \prime} \frac{\partial^2}{\partial t^2} A(z, t)-\mathrm{i} k n_2|A(t)|^2 A(z, t).
\end{aligned}
$$
With these at hand, we find the ==nonlinear Schrödinger equation==:
$$
\frac{\partial}{\partial z} A\left(z, t^{\prime}\right)=\mathrm{i} \frac{k_n^{\prime \prime}}{2} \frac{\partial^2}{\partial t^{\prime 2}} A\left(z, t^{\prime}\right)-\mathrm{i} k n_2\left|A\left(z, t^{\prime}\right)\right|^2 A\left(z, t^{\prime}\right) .
$$
Because we assumed that the nonlinear refractive index $n_2$ is not frequency-dependent, we can simply add the effect of the intensity-dependent refractive index in the temporal domain. This means that the variation of $n_2$ depends instantaneously on the intensity of the pulse envelope. Note also that higher than second order terms are neglected in this equation. 

### 4.3.1 Solution of the NSE: The Fundamental Soliton

1. $\mathbf{k}_n^{\prime \prime} \neq 0$ and $\mathbf{n}_2=0:$ GDD but no SPM. This reduces the problem to linear pulse propagation, such that an originally bandwidth-limited pulse is temporally broadened for positive as well as negative GDD, while the spectral width does not change. However, the phase of the spectrum changes.
2. $\mathbf{k}_{n}^{\prime \prime}=0$ and $\mathbf{n}_{\mathbf{2}} \neq 0:$ No GDD but SPM. A bandwidth-limited pulse will propagate with unchanged intensity in the time domain, but its spectrum will be broadened through SPM.
3. $\mathbf{k}_{n}^{\prime \prime}>0$ and $\mathbf{n}_2>0:$ Positive GDD and positive SPM. Positive SPM will produce a spectral broadening that generates lower frequencies (red) in the leading edge, and higher frequencies (blue) in the trailing edge of the pulse (red before blue). Positive dispersion makes red faster than blue, meaning that red components in the pulse travels with higher group velocity than the blue components. Therefore, red components at the leading edge will shift even further ahead, while blue components at the trailing edge will be delayed even further. Thus, an originally bandwidth-broadened pulse will be strongly broadened.
4. $\mathbf{k}_n^{\prime \prime}<0$ and $\mathbf{n}_2>0:$ Negative GDD and positive SPM. The negative dispersion will reduce and ideally even compensate for the chirp produced by SPM. This means that a balance between SPM and GDD can cause a situation in which a pulse can propagate unchanged in the temporal and spectral domain: A soliton forms.

These cases are shown in the next four figures, where the last figure shows the propagation of a soliton: 

![Attachments/UltraFastLasers_Keller 48.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2048.webp)
![Attachments/UltraFastLasers_Keller 49.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2049.webp)
![Attachments/UltraFastLasers_Keller 50.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2050.webp)
![Attachments/UltraFastLasers_Keller 51.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2051.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=179&rect=59,496,379,615|•]]

Note that the NSE shows that solitons must exist and the soliton is a steady-state solution. This solution is 
$$
A_{\mathrm{S}}\left(z, t^{\prime}\right)=A_0 \operatorname{sech}\left(\frac{t^{\prime}}{\tau}\right) \mathrm{e}^{-\mathrm{i} \phi_0(z)},
$$
where the FWHM pulse duration is given by 
$$
\tau_p=1.7627\tau,
$$
and the time-bandwidth product is
$$
\Delta f_p\tau_p=0.3148.
$$
We further obtain

$$
\phi_0(z)=\frac{|D|}{\tau^2}=\frac{1}{2} \delta I_{\mathrm{p}}=\frac{\delta F_{\mathrm{p}}}{4 \tau}=\frac{k n_2 F_{\mathrm{p}}}{4 \tau} z,
$$
where $z$ is the propagation distance, $\delta=kn_2z$ is the SPM coefficient and $I_p$ is the peak intensity, while the pulse fluence (or pulse energy density) is given by
$$
F_p=\frac{E_p}{A_\text{eff}}=2I_p\tau.
$$
Here, $E_p$ is the pulse energy and $A_\text{eff}$ is the area of the beam profile. 
The pulse duration of a soliton can be calculated as
$$ 
\tau_p\sim\frac{|k_n^{\prime\prime}|}{kn_2F_p}.
$$
Because both the dispersion and SPM parameter scale with the length of the material. the pulse duration becomes independent on the material length. This again means that the solution pulse duration is independent of the material length, and is not broadened during propagation through a dispersive material. 

The fact that higher-order terms are neglected means that the GDD does not depend on the choice of the carrier frequency. Only the group velocity, with which the pulse propagates, depends on the carrier frequency. Thus, for negative GDD, a solution with a higher carrier frequency moves faster, such that a blue soliton is faster than a red soliton. 
This property allows two solitons to collide, by placing a low carrier frequency soliton in front of a high carrier frequency soliton. Both pulses emerge undamaged from the collision, however we can see that the faster pulse is shifted ahead temporally by the interaction. It can also be shown that the respective phases of the pulses change during the collision. 

### 4.3.2 Solution of the NSE: Higher-Order Solitons

Additional solutions to the NSE include higher-order solitons, which are wave fields composed of multiple fundamental solitons. The superposition of two solitary pulses results in a second-order soliton; however, this is not a simple linear superposition of two first-order solitons. Unlike the fundamental soliton, a higher-order soliton undergoes periodic changes in both the temporal and spectral domains during propagation:

![Attachments/UltraFastLasers_Keller 52.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2052.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=182&rect=52,261,386,408|•]]

The soliton period $z_0$ is defined as the propagation distance after which the soliton phase change reaches $\pi / 4$:

$$
\phi_0\left(z=z_0\right)=\frac{\pi}{4} \Longrightarrow z_0=\frac{\pi}{2} \frac{\tau^2}{\left|k_n^{\prime \prime}\right|}.
$$

After half of the soliton period, an initially bandwidth-limited pulse evolves into a second-order soliton with a minimal pulse duration and small shoulders. The pulse then regains its original shape after a full soliton period. Therefore, if the fibre length is chosen to be exactly half of this period, it effectively functions as a simple soliton pulse compressor. Over a longer propagation distance, the portion of the initial pulse energy not utilised in the soliton manifests as a weak continuous background radiation, known as the continuum.  

### 4.3.3 Optical Communication with Solitons
Skipped for now [[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=183&selection=41,0,43,35|•]]

### 4.3.4 Periodic Perturbations of Solitons

Periodic perturbations of solitons are significant not only in optical communications but also in short-pulsed lasers. In optical communication, solitons require periodic amplification after propagating a certain distance, causing fluctuations in the average power. Similarly, in lasers, soliton pulses experience repeated perturbations due to gain and loss mechanisms (as discussed in later chapters).

Consider a periodic perturbation with period $z_a$:

$$
\mathrm{i} \xi \sum_{m=-\infty}^{\infty} \delta\left(z-m z_{\mathrm{a}}\right) A\left(z, t^{\prime}\right),
$$

where the perturbation coefficient satisfies $\xi\ll 1$. The NSE then becomes:

$$
\frac{\partial}{\partial z} A\left(z, t^{\prime}\right)=\mathrm{i} \frac{k_n^{\prime \prime}}{2} \frac{\partial^2}{\partial t^{\prime 2}} A\left(z, t^{\prime}\right)-\mathrm{i} k n_2\left|A\left(z, t^{\prime}\right)\right|^2 A\left(z, t^{\prime}\right)+\mathrm{i} \xi \sum_{m=-\infty}^{\infty} \delta\left(z-m z_{\mathrm{a}}\right) A\left(z, t^{\prime}\right).
$$

We assume the Ansatz:

$$
A\left(z, t^{\prime}\right)=A_{\mathrm{s}}\left(z, t^{\prime}\right)+u\left(z, t^{\prime}\right),
$$

where $A_s$ is the unperturbed $\operatorname{sech}^2$ soliton. It can be shown that the solution takes the form:

$$
\tilde{u}(z, \omega)=\sum_{m=-\infty}^{\infty} \frac{\frac{1}{z_{\mathrm{a}}} \xi A_0 \pi \tau \operatorname{sech}\left(\frac{\pi}{2} \tau \omega\right)}{m k_{\mathrm{a}}-\frac{\left|k_n^{\prime \prime}\right|}{2}\left(\frac{1}{\tau^2}+\omega^2\right)} \mathrm{e}^{\mathrm{i}\left(m k_{\mathrm{a}}-\left|k_n^{\prime \prime}\right| / 2 \tau^2\right) z}.
$$

For $\xi\ll1$, the perturbation remains negligibly small compared to the soliton. Furthermore, the dynamics of $u(z,t^\prime)$ are no longer influenced by self-phase modulation (SPM) due to the perturbation’s low intensity. As a result, SPM cannot compensate for dispersion, causing the perturbation’s pulse duration to broaden rapidly (a crucial effect in passive mode-locking).

However, a resonance condition can invalidate this approximation, as indicated by the denominator of the expression above. Resonance effects arise when:

$$
|\tilde{u}(z, \omega)| \ll\left|\tilde{A}_{\mathrm{s}}(z, \omega)\right| \Longleftrightarrow z_{\mathrm{a}} \ll 8 z_0.
$$

This implies that if the periodic perturbations are spaced with a period $z_{\mathrm{a}} \ll 8 z_0$, no resonance effects will occur, and the perturbation can be treated as continuous. Since $z_0 \propto \tau^2$, shorter pulses require correspondingly shorter perturbation periods.  

---
## 4.4 Self-Steepening
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=191&selection=384,0,386,15|•]]

For ultrashort pulses with durations below 100 fs, higher-order dispersion and nonlinear effects must be considered. This necessitates modifying the NSE to account for these effects. The spectral width of such pulses approaches the carrier frequency, rendering several standard approximations questionable. Additionally, the spectrum of these pulses is sufficiently broad ($\leq 1$ THz) for stimulated Raman scattering (Raman gain) to transfer energy from high-frequency components to lower frequencies. Consequently, the pulse spectrum experiences a redshift during propagation, a phenomenon known as the self-frequency shift. Incorporating the delayed nonlinear response leads to the equation:

$$
\begin{aligned}
& \frac{\partial A\left(z, t^{\prime}\right)}{\partial z}-\frac{\mathrm{i}}{2} k_n^{\prime \prime} \frac{\partial^2 A\left(z, t^{\prime}\right)}{\partial t^{\prime 2}}-\frac{1}{6} k_n^{\prime \prime \prime} \frac{\partial^3 A\left(z, t^{\prime}\right)}{\partial t^{\prime 3}} \\
=&-\mathrm{i} \gamma\left[\left|A\left(z, t^{\prime}\right)\right|^2 A\left(z, t^{\prime}\right)-\frac{\mathrm{i}}{\omega_0} \frac{\partial}{\partial t^{\prime}}\left[\left|A\left(z, t^{\prime}\right)\right|^2 A\left(z, t^{\prime}\right)\right]\right. \\
&\left.-T_{\mathrm{R}} A\left(z, t^{\prime}\right) \frac{\partial\left|A\left(z, t^{\prime}\right)\right|^2}{\partial t^{\prime}}\right].
\end{aligned}
$$

Here, $\gamma$ is the nonlinearity coefficient, and $T_R$ is related to the slope of the Raman gain. This equation is sometimes referred to as the generalised nonlinear Schrödinger equation. 

Self-steepening is an important higher-order nonlinear effect arising from the intensity dependence of the group velocity. It introduces asymmetry into SPM-broadened spectra, leading to characteristic distortions.  

### 4.4.1 Optical Shock Front

Consider first the case without dispersion, i.e. $k_n^{\prime\prime}=k_n^{\prime\prime\prime}=0$, in which the equation can be solved analytically. However, we do not provide the explicit solution here, as we are more concerned with the qualitative explanation. The trailing edge of the pulse becomes increasingly steeper with propagation distance $z$. Physically, the intensity-dependent group velocity causes the peak to move faster than the wings:

![Attachments/UltraFastLasers_Keller 53.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2053.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=195&rect=126,474,311,609|•]]

This eventually leads to the formation of an optical shock. This occurs when the intensity drop at the trailing edge of the pulse becomes abrupt. The figure illustrates that SPM-induced spectral broadening is more pronounced on the blue side than on the red side. This asymmetry arises for two reasons. Firstly, the pulse shape itself is asymmetric. Secondly, the steeper trailing edge of the pulse induces greater spectral broadening on the blue side, as SPM generates blue components near the trailing edge. Self-steepening further stretches the blue portion in frequency. Consequently, the amplitude of the high-frequency peaks decreases, as the same energy is distributed over a broader spectral range.

A critical shock distance is associated with this effect. For a 1 ps pulse, this distance is approximately 100 km. However, for a pulse shorter than 100 fs, it becomes less than 1 m. In practice, however, an optical shock never fully develops due to dispersion. As the pulse edge steepens, dispersive effects become increasingly significant and cannot be neglected.

---
## 4.5 Nonlinear Propagation in a Saturable Absorber or Saturable Amplifier
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=197&selection=67,0,70,18|•]]

For now, this chapter is somewhat isolated, but later it will become clear that the concepts discussed here are fundamental for understanding subsequent chapters, particularly passive mode-locking.

Let us consider a homogeneously broadened solid-state laser medium, which can be described by a two-level atomic system. The rate equations for such a system yield a saturable gain. The nonlinear gain coefficient for the amplitude is given by
$$
g=\frac{g_0}{1+I/I_{sat}},
$$
where $g_0$ is the small-signal gain, and $I_{sat}$ is the saturation intensity:
$$
I_{sat}=\frac{\hbar\omega}{\sigma\tau_L}.
$$
Here, $\sigma$ is the gain cross-section, and $\tau_L$ is the excited-state lifetime of the atoms. The gain cross-section is related to the amplitude gain coefficient per unit length by $g(z)=N/V \cdot \sigma$.

### 4.5.1 Saturable Absorber

All non-inverted atoms contribute in the form of a saturable absorber, a material whose absorption decreases with increasing light intensity. While many materials exhibit this behaviour, it is typically only significant at very high optical intensities. For laser pulse generation, we require saturable absorbers that exhibit this effect at intensities typical within laser cavities. The key parameters of such a material are:

5. The wavelength range over which it absorbs.
6. The dynamic response time, i.e. how fast it recovers.
7. The saturation intensity and fluence, i.e. the intensity or pulse energy required for saturation.

![Attachments/UltraFastLasers_Keller 54.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2054.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=198&rect=128,482,312,608|•]]

For the simplest case of a two-level atomic system, the amplitude absorption coefficient is given by
$$
\alpha=\frac{\alpha_0}{1+I/I_{sat}}.
$$
Here, $\alpha_0$ is the unsaturated absorption coefficient, also referred to as the small-signal absorption coefficient for the amplitude. This equation makes it evident that a saturable absorber exhibits high absorption at low light intensities but low absorption at high light intensities. When the absorber is exposed to sufficiently high intensity, it is said to be saturated. Since the stimulated transition probabilities between states 1 and 2 are identical in both directions, the saturation intensity of an absorber is the same as that of an amplifier based on the same material.

### 4.5.2 Nonlinear Pulse Propagation in a Saturable Absorber or Amplifier

Since absorption is intensity-dependent, pulse propagation in a saturable absorber becomes nonlinear. First, consider a continuous-wave (CW) beam. It can be shown that the transmission $T$ through a medium of thickness $d$ follows
$$
\ln T+\frac{I_{\mathrm{in}}}{I_{\mathrm{sat}}}(T-1)=-2 \alpha_0 d.
$$
For the case $I_{\mathrm{in}} \ll I_{\mathrm{sat}}$, this simplifies to
$$
T\left(I_{\mathrm{in}} / I_{\mathrm{sat}} \approx 0\right)=\mathrm{e}^{-2 \alpha_0 d}.
$$
This behaviour is illustrated in the following figure:

![Attachments/UltraFastLasers_Keller 55.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2055.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=202&rect=201,494,386,605|•]]

If absorption or amplification were purely linear, such that $\alpha$ and $g$ were independent of intensity, then the pulse shape would remain unchanged during propagation, provided that the absorber or amplifier bandwidth was much broader than the spectral width of the pulse. However, since we are considering nonlinear effects, the pulse shape does change. For example, in a saturable amplifier, the leading edge of a pulse will experience greater gain saturation than the trailing edge, resulting in asymmetric amplification. This effect will be explored in greater detail later. In addition to modifying the pulse envelope, nonlinear propagation also affects the spectrum. Through the Kramers-Kronig relations, any intensity-dependent absorption or amplification is accompanied by an intensity-dependent refractive index.

---