---
{"dg-publish":true,"permalink":"/notes/crystal-optics-in-intense-light-fields/6-experimental-methods-of-nonlinear-optics/","hide":"true","updated":"2025-06-04T15:33:55.000+02:00"}
---

Jump back to ==[[Notes/Crystal Optics in Intense Light Fields/Crystal Optics in Intense Light Fields#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[#6.1 Lasers|6.1 Lasers]]
[[#6.2 Frequency Tuning|6.2 Frequency Tuning]]
[[#6.3 Phase-Sensitive SHG|6.3 Phase-Sensitive SHG]]

---
# 6 Experimental Methods of Nonlinear Optics
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Notes.pdf#page=56| ]] [[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=83&selection=0,0,1,6| ]]

As already mentioned in the [[Notes/Crystal Optics in Intense Light Fields/5 Nonlinear Optics\|previous chapter]], observing nonlinear effects requires high intensity fields. This, in turn, requires high intensity light sources to compensate for the difference in the first and second order susceptibility $\chi^{(1)}$ and $\chi^{(2)},$ the respective susceptibility tensors in the Taylor expansion of $P_i(\omega).$ In the following, three light sources are compared regarding their intensity:

| Light source | Peak intensity                                      |
| :----------- | ---------------------------------------------------: |
| Sun          | $0.1 \mathrm{~W} / \mathrm{cm}^2$                    |
| Arc lamp     | $100 \mathrm{~kW} / \mathrm{cm}^2$                   |
| Pulsed laser | $10^6 \ldots 10^{13} \mathrm{~W} / \mathrm{cm}^2$ |

---
## 6.1 Lasers
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=83&selection=3,0,3,10| ]]

As becomes clear from the previous table, the laser is the clear winner for use in nonlinear effects. Additionally, it offers high [[Notes/2025 Quantum Electronics/4 Coherence and Interference#4.2 Coherence Function\|coherence]], a well-defined and narrow [[Notes/2025 Quantum Electronics/8 Laser Fundamentals#8.2.1 Transition Width\|spectral band]], as well as a well-defined [[Notes/2025 Quantum Electronics/8 Laser Fundamentals#8.1 Fundamental Light-Matter Interaction\|polarisation state]]. These are important and desirable properties when designing an experiment. Two common light sources used in nonlinear optics are neodymium-doped yttrium aluminium garnet lasers (Nd:YAG laser) or titanium-sapphire lasers (Ti:Sa laser). Some output parameters are presented in the next table:

| Laser  | $\lambda$          | $\Delta t$        | Repetition rate | Energy                | Application                             |
| :----: | :----------------: | :---------------: | :-------------: | :-------------------: | :--------------------------------------: |
| Nd:YAG | $1064 \mathrm{~nm}$ | $5 \mathrm{~ns}$  | $10-100 \mathrm{~Hz}$ | $10-100 \mathrm{~mJ}$ | Transmission experiments on bulk samples |
| Ti:Sa  | $800 \mathrm{~nm}$  | $100 \mathrm{~fs}$ | $1 \mathrm{~kHz}$     | $1-10 \mathrm{~mJ}$   | Reflection setups                        |

---
## 6.2 Frequency Tuning
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=84&selection=78,0,78,20| ]]

A laser initially only emits at its own characteristic, well-defined frequency governed by the lasing transition. However, for experimental purposes, it is often required for the frequency to be tunable to some degree. This can be done by exploiting nonlinear processes; commonly used methods include parametric conversion and harmonic generation.

**Parametric Conversion**

Parametric conversion is a process in which an intense beam of light (the pump beam) is sent into a nonlinear crystal, emitting two beams at lower frequencies. These are usually labelled as the signal beam $S$ and the idler beam $I.$ One can think of the pump photons being 'split' into pairs of photons, conserving energy and momentum. These conservation laws lead to two conditions:

$$
\begin{aligned}
\mathrm{Energy~conservation:}&
\begin{cases}
\hbar \omega_{p} & =\hbar \omega_{S}+\hbar \omega_{I} \\
\omega_{p} & =\omega_{S}+\omega_{I}
\end{cases}\\
\mathrm{Momentum~conservation~(collinear):}&
\begin{cases}
\mathbf{k}_{p} & =\mathbf{k}_{S}+\mathbf{k}_{I} \\
n_{p} \omega_{p} & =n_{S} \omega_{S}+n_{I} \omega_{I}
\end{cases}
\end{aligned}
$$
Since the refractive indices change with the orientation of the crystal relative to the light propagation direction and polarisation ([[Notes/2025 Quantum Electronics/9 Polarisation Optics#9.3 Anisotropic Materials\|birefringence]]), the crystal alignment is used for continuous frequency tuning.

**Harmonic Generation**

Harmonic generation is the process of generating higher harmonics ($2\omega, 3\omega,\ldots$) of the fundamental frequency $\omega$ in nonlinear crystals. Furthermore, difference frequency generation may also be used via $\omega_{1}, \omega_{2} \rightarrow \omega_{1}-\omega_{2}.$

Both methods combined may then be applied to the two laser systems introduced above. As an example, consider third-harmonic generation (THG) from an Nd:YAG laser ($1064\mathrm{~nm}$), so $1064\mathrm{~nm}\stackrel{\mathrm{THG}}{\longrightarrow}355\mathrm{~nm}.$ Parametric down-conversion then allows continuous access to two ranges: $400 \ldots 710 \mathrm{~nm}$ and $710 \ldots 3000 \mathrm{~nm}$. Similarly, a titanium-sapphire laser system may reach the range $210 \ldots 20^{\prime}000 \mathrm{~nm}$ via parametric conversion and multistep frequency mixing. Typical conversion efficiencies reach $20-30 \%$ in a common material such as BBO ($\beta-\mathrm{BaB}_{2} \mathrm{O}_{4}$).

---
## 6.3 Phase-Sensitive SHG
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=85&selection=25,0,25,23| ]]

In a standard SHG experiment, the signal is measured as an intensity (for example, via a photodiode), such that all phase information is lost:
$$
\mathbf{P}_{\mathrm{SHG}}=\varepsilon_{0} \chi^{(2)} \mathbf{E} \mathbf{E} \quad \implies \quad I_{\mathrm{SHG}} \sim|\mathbf{P}_{\mathrm{SHG}}|^{2}.
$$
Then, consider as an example again the [[Notes/Crystal Optics in Intense Light Fields/5 Nonlinear Optics#5.3 Magnetic SHG in Chromium(III)-Oxide ($\mathrm{Cr_2O_3}$)\|spin-reversal domains]] discussed earlier. Here, the time-reversal operator $\hat{T}$ transforms two $180^{\circ}$ domains into one another:
$$
\hat{T}(\mathrm{domain}+) = (\mathrm{domain}-).
$$
Applying this operator to the polarisation then results in
$$
\hat{T} \mathbf{P}(2 \omega) \sim \hat{T} \chi_{\mathrm{NL}}^{e} \stackrel{!}{=}-\chi_{\mathrm{NL}}^{e} \sim-\mathbf{P}(2 \omega).
$$
This then reveals that the polarisation generated in the two domains differs by a phase of $-1=e^{i \pi}$. This corresponds to a $\pi$ phase shift in the polarisation vector. However, as already mentioned, this phase information is lost when measuring only the intensity. Thus, in order to resolve the different domains, it is not enough to extract the intensity information alone; one additionally has to measure the phase information. An interference measurement with a reference wave (such as in [[Notes/2025 Quantum Electronics/5 Fourier Optics#5.7 Holography\|holography]]) allows the full information to be obtained:
$$
\begin{aligned}
& I_{\mathrm{SHG}}^{\mathrm{total}}(\mathrm{domain}+) \sim\left|\mathbf{P}_{\mathrm{SHG}}^{+}(2 \omega)+\mathbf{P}_{\mathrm{ref}}(2 \omega)\right|^2=\left|\mathbf{P}_{+}+\mathbf{P}_{\mathrm{ref}}\right|^2,\\
& I_{\mathrm{SHG}}^{\mathrm{total}}(\mathrm{domain}-) \sim\left|\mathbf{P}_{\mathrm{SHG}}^{-}(2 \omega)+\mathbf{P}_{\mathrm{ref}}(2 \omega)\right|^2=\left|-\mathbf{P}_{+}+\mathbf{P}_{\mathrm{ref}}\right|^2.
\end{aligned}
$$
The only reason the antiferromagnetic domains could be observed in $\mathrm{Cr_2O_3}$ using SHG is that this material intrinsically provides an i-type reference wave via the magnetic dipole (MD-SHG) contribution. Very often, however, no intrinsic reference is present, and a reference needs to be generated externally. By passing the fundamental beam through a quartz plate (or another suitable material) after it has passed through the sample, the fundamental wave generates an SHG reference wave. Interference then allows the extraction of phase as well as amplitude of the signal from the sample. The experiment is schematically depicted in the following figure:

![Attachments/Script (Unofficial) 12.webp|700](/img/user/Attachments/Script%20(Unofficial)%2012.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=85&rect=117,656,414,762| ]]

Such a setup requires the reference crystal (and the sample) to be transparent at both the fundamental and the harmonic frequency, and the reference crystal additionally has to have a high conversion efficiency. Optical quartz plates usually fulfil these requirements while being available at good quality.

The experiment has two degrees of freedom to adjust:
- the relative phase $\phi_{S}-\phi_{\text {ref }} \equiv \phi_{\text {rel }}$ between sample and reference beam,
- the relative amplitudes, for instance, the ratio $A_{S}/A_{\text {ref }}$.

In general, the relative phase should be adjusted such that $\phi_{\text {rel }}=0$ or $\phi_{\text {rel }}=\pi$ (corresponding to $0^{\circ}$ or $180^{\circ}$), for constructive or destructive interference, respectively. The amplitudes should then be chosen to be equal, $A_{\text {ref }}=A_{S} \equiv A$, such that the contrast is maximal:
$$
I_{\mathrm{SHG}}^{\mathrm{min}}=0 \quad \text{ and } \quad I_{\mathrm{SHG}}^{\mathrm{max}}=|2 A|^{2} = 4A^2.
$$
Usually, the phase is continuously adjusted by a Soleil-Babinet compensator. The alignment of the reference crystal is chosen such that the polarisation of the reference beam is orthogonal to the signal beam, and the Soleil-Babinet compensator is aligned such that these two polarisations coincide with its ordinary and extraordinary axes. The birefringence of the compensator then allows tuning of the relative phase. Finally, a linear polariser is used to adjust the relative amplitudes. By rotating the polariser, the projection of one amplitude onto the other is varied. The following figure shows the projection of the magnetic signal onto the reference signal. By adjusting the rotation of the polariser, the relative amplitude may be adjusted:

![Attachments/Script (Unofficial) 13.webp|700](/img/user/Attachments/Script%20(Unofficial)%2013.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=86&rect=241,345,414,453| ]]

As became clear, a phase-sensitive SHG measurement requires good interference. Therefore, divergence and propagation effects like beam broadening between the sample and reference crystal can lead to the loss of spatial coherence. Temporal coherence, indicated by the [[Notes/2025 Quantum Electronics/4 Coherence and Interference#4.3 Coherence Time and Coherence Length\|coherence time and length]], is related to the spectral width of the light. For a given spectral lineshape, the product of spectral width $\Delta f$ and coherence time $\tau_c$ is approximately constant. For instance, for a Gaussian spectrum, $\Delta f \cdot \tau_c \approx 0.441$ (using FWHM definitions).

The interference signal intensity can be written as
$$
I(\varphi)=I_{\mathrm{sig}}+I_{\mathrm{ref}}+2 \alpha \sqrt{I_{\mathrm{sig}} I_{\mathrm{ref}}} \cos \varphi,
$$
where $I_{\mathrm{sig}}$ is the intensity from the sample SHG, $I_{\mathrm{ref}}$ is the reference SHG intensity, $\varphi$ is the relative phase between the two beams, and $\alpha$ is the degree of coherence (or fringe visibility). For perfect coherence, $\alpha=1$. The degree of coherence $\alpha$ can be expressed using the normalised auto-correlation function $\Gamma_{11}(\tau)$ and the spectral density $\sigma(\nu)$:
$$
\alpha(\tau)=\frac{\Gamma_{11}(\tau)}{\Gamma_{11}(0)}=\frac{\int_{0}^{\infty} \sigma(\nu) e^{-2 \pi i \nu \tau} \mathrm{~d} \nu}{\int_{0}^{\infty} \sigma(\nu) \mathrm{d} \nu}= \begin{cases}e^{-\frac{\tau^{2}}{2 \tau_c^{2}}} & \text{Gauss (field)} \\ e^{-\frac{\sqrt{2} |\tau|}{\tau_c}} & \text{Lorentz (field)} \end{cases}
$$
where $\tau$ is the delay between the interfering beams and $\tau_c$ is the coherence time.

This translates into a fringe contrast $C$:
$$
C=\frac{I_{\mathrm{max}}-I_{\mathrm{min}}}{I_{\mathrm{max}}+I_{\mathrm{min}}}=\alpha \frac{2 \sqrt{I_{\mathrm{sig}} I_{\mathrm{ref}}}}{I_{\mathrm{sig}}+I_{\mathrm{ref}}},
$$
where $I_{\max }=\max [I(\varphi)]$ and $I_{\min }=\min [I(\varphi)]$. This yields:
$$
C \begin{cases}=\alpha & \text{if } I_{\mathrm{sig}}=I_{\mathrm{ref}} \\ <\alpha & \text{otherwise }\end{cases}
$$
However, loss in contrast is not only due to the loss of temporal coherence but also because the spatial overlap and wavefront matching of the sample and reference beams may not be perfect due to propagation effects. Achromatic beam imaging, as shown in the following figure, can help to overcome problems of spatial decoherence:

![Attachments/Script (Unofficial) 14.webp|700](/img/user/Attachments/Script%20(Unofficial)%2014.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=89&rect=101,612,430,711| ]]

Spatial decoherence due to effects like beam broadening can be mitigated by careful optical design, for instance using appropriate imaging optics like a spherical mirror. Temporal decoherence is minimised by using narrowband light sources with a correspondingly large coherence time.

---