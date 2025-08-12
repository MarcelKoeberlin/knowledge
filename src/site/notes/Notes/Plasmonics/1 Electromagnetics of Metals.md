---
{"dg-publish":true,"permalink":"/notes/plasmonics/1-electromagnetics-of-metals/","hide":"true","updated":"2025-06-04T15:33:55.626+02:00"}
---

Jump back to ==[[Notes/Plasmonics/Plasmonics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[#1.1 Maxwell's Equation of Macroscopic Electromagnetism|1.1 Maxwell's Equation of Macroscopic Electromagnetism]]
[[#1.2 Travelling-Wave Solution|1.2 Travelling-Wave Solution]]
[[#1.3 The Dispersion of the Free Electron Gas and Volume Plasmons|1.3 The Dispersion of the Free Electron Gas and Volume Plasmons]]
[[#1.4 Real Metals and Interband Transitions|1.4 Real Metals and Interband Transitions]]
[[#1.5 The Energy of the Electromagnetic Field in Metals|1.5 The Energy of the Electromagnetic Field in Metals]]

---
# 1 Electromagnetics of Metals 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=24&selection=2,0,2,26| ]]

The interaction of metals with electromagnetic waves can be understood in a classical framework based on Maxwell's equations. This holds true even for metallic nanostructures down to sizes on the order of a few nanometres, without the need to resort to quantum mechanics. This is because the high density of free carriers results in narrow spacings of the electron energy levels compared to the thermal excitation energy $k_B T$ at room temperature. This explains why a classical models such as the Drude model or the Maxwell equations are sufficient. It is well known that most metals are highly reflective up to some frequency in the visible range. They are thus traditionally used as cladding layers for constructing waveguides and resonators at microwave and far-infrared frequencies.

In this low-frequency regime, the _perfect conductor approximation_ of infinite or fixed finite conductivity is valid for most purposes since only a negligible fraction of the impinging electromagnetic waves penetrates the metal. However, at higher frequencies approaching the near-IR and visible spectrum, field penetration increases significantly. At UV frequencies, metals acquire a dielectric character and allow the propagation of electromagnetic waves, albeit with varying degrees of attenuation depending on the details of the electronic band structures. Alkali metals, such as sodium, have an almost free-electron-like response and thus exhibit ultraviolet transparency. Noble metals, such as gold and silver, exhibit strong absorption in this regime due to transitions between electronic bands.

---
## 1.1 Maxwell's Equation of Macroscopic Electromagnetism 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=25&selection=58,0,59,34| ]]

These dispersive properties can be described by a complex dielectric function $\varepsilon(\omega)$, which forms the basis of all phenomena discussed.

As a starting point, recall Maxwell's equations of macroscopic electromagnetism:
$$
\nabla \cdot \mathbf{D} = \rho_{\text{f}}
$$
$$
\nabla \cdot \mathbf{B} = 0
$$
$$
\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}
$$
$$
\nabla \times \mathbf{H} = \mathbf{J}_{\text{f}} + \frac{\partial \mathbf{D}}{\partial t}.
$$

These equations link the four macroscopic fields: 
1. The dielectric displacement $\mathbf{D}$, 
2. The electric field $\mathbf{E}$, 
3. The magnetic field $\mathbf{H}$, 
4. The magnetic induction (or magnetic flux density) $\mathbf{B}$ 

with the free charge and current densities $\rho_{\text{f}}$ and $\mathbf{J}_{\text{f}}$. The advantage of this phenomenological approach is that details of the fundamental interactions need not be taken into account since the rapidly varying microscopic fields are averaged over distances much larger than the underlying microstructure. 

We distinguish between free ($\rho_{\text{f}}, \mathbf{J}_{\text{f}}$) and bound ($\rho_\text{b}, \mathbf{J}_\text{b}$) charge and current densities, so that in total:

$$
\rho = \rho_{\text{f}} + \rho_\text{b},
$$

and

$$
\mathbf{J} = \mathbf{J}_{\text{f}} + \mathbf{J}_\text{b}.
$$

The four macroscopic fields are further linked via the polarisation $\mathbf{P}$ and magnetisation $\mathbf{M}$:
$$
\mathbf{D} = \varepsilon_0 \mathbf{E} + \mathbf{P},
$$
$$
\mathbf{H} = \frac{1}{\mu_0} \mathbf{B} - \mathbf{M},
$$
where $\varepsilon_0$ and $\mu_0$ are the electric permittivity and magnetic permeability of vacuum, respectively. Since we do not treat magnetic media, we will not consider the magnetic response represented by $\mathbf{M}$. Instead, we limit the description to polarisation effects. $\mathbf{P}$ describes the electric dipole moment per unit volume inside the material, caused by the alignment of microscopic dipoles with the electric field. It is related to the bound charge density via:

$$
\nabla \cdot \mathbf{P} = -\rho_\text{b}.
$$

Charge conservation ($\nabla \cdot \mathbf{J} = -\frac{\partial \rho}{\partial t}$) further requires that the bound charge and current densities are linked via:

$$
\mathbf{J}_\text{b} = \frac{\partial \mathbf{P}}{\partial t}.
$$

The great advantage of this approach is that the macroscopic electric field includes all polarisation effects: in other words, both the external and induced fields are absorbed into it:

$$
\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}.
$$
Limiting ourselves to linear, isotropic, and nonmagnetic media, one can define the constitutive relations:
$$
\mathbf{D} =  \varepsilon \mathbf{E},
$$
$$
\mathbf{B} = \mu \mathbf{H}.
$$

Here, $\varepsilon$ is the dielectric constant or relative permittivity, and $\mu = 1$ is the relative permeability of the nonmagnetic medium. The linear relationship between $\mathbf{D}$ and $\mathbf{E}$ is often implicitly defined using the dielectric susceptibility $\chi$, which describes the linear relationship between $\mathbf{P}$ and $\mathbf{E}$ via:

$$
\begin{align}
\mathbf{P} = \varepsilon_0 \chi \mathbf{E} && \text{with} && \varepsilon_r = 1 + \chi.
\end{align}
$$
The last important constitutive linear relationship to mention is that between the free current density $\mathbf{J}$ and the electric field $\mathbf{E}$, defined via the conductivity $\sigma$ as:

$$
\mathbf{J} = \sigma \mathbf{E}.
$$

It should be noted that the linear relations for $\mathbf{D}$ and $\mathbf{J}$ are only correct for linear media that do not exhibit spatial dispersion. For media with temporal dispersion, these relations are still linear, however only in frequency-space. The fundamental relation between relative permittivity (from now on called the dielectric function) and conductivity is:
$$
\varepsilon_r(k, \omega) = 1 + \frac{i\sigma(k, \omega)}{\varepsilon_0 \omega},
$$
for a given wave vector $k$. From now, we will write $\varepsilon,$ but actually mean the relative permittivity $\varepsilon_r.$ If the wavelength $\lambda$ is significantly longer than all characteristic dimensions (such as the unit cell size or the mean free path of the electrons), and considering the interaction of light with metals, this equation can be simplified to the limit of a spatially local response, $\varepsilon(k = 0, \omega) = \varepsilon(\omega).$ In general, 
$$
\varepsilon(\omega) = \varepsilon_1(\omega) + i \varepsilon_2(\omega),$$
and 
$$\sigma(\omega) = \sigma_1(\omega) + i \sigma_2(\omega)$$
are complex-valued functions of angular frequency $\omega$. At optical frequencies, $\varepsilon$ can be experimentally determined, for example, via reflectivity studies and the determination of the complex refractive index $\tilde{n}(\omega) = n(\omega) + i \kappa(\omega)$ of the medium, defined as:
$$
\tilde{n} = \sqrt{\varepsilon}.
$$
Explicitly, this leads to the components of the dielectric function:
$$
\begin{align}
\varepsilon_1 = n^2 - \kappa^2, &&
\varepsilon_2 = 2n\kappa, \\
n^2 = \frac{\varepsilon_1}{2} + \frac{1}{2} \sqrt{\varepsilon_1^2 + \varepsilon_2^2}, &&
\kappa = \frac{\varepsilon_2}{2n}.
\end{align}
$$
Here, $\kappa$ is called the extinction coefficient and determines the optical absorption of electromagnetic waves propagating through the medium. It is linked to the absorption coefficient $\alpha$ of Beer’s law (describing the exponential attenuation of the intensity of a beam propagating through the medium via $I(x) = I_0 e^{-\alpha x}$) by the relation:

$$
\alpha(\omega) = \frac{2\kappa(\omega)\omega}{c}.
$$

Therefore, the imaginary part $\varepsilon_2$ of the dielectric function determines the amount of absorption inside the medium. For $|\varepsilon_1| \gg |\varepsilon_2|$, the real part $n$ of the refractive index, which quantifies the lowering of the phase velocity of the propagating waves due to the polarisation of the material, is mainly determined by $\varepsilon_1$. The real part of $\sigma$ determines the amount of absorption, while the imaginary part contributes to $\varepsilon_1$ and therefore to the amount of polarisation.

---
## 1.2 Travelling-Wave Solution 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=29&selection=145,0,146,44| ]] [[Reading/Books/Plasmonics/Plasmonics - From Basics to Advanced Topics.pdf#page=122&selection=16,0,16,41| ]]

When studying the propagation of wave in vacuum, the focus is always on transverse waves, as longitudinal solutions do not exist . This is no longer the case in a medium. Plasmons are longitudinal solutions of the Maxwell equations. By considering the propagation of coupled mechanical and electromagnetic waves, the electromagnetic solution has an electric parallel to the wavevector. More generally, this solution is a longitudinal solution with
$$
\nabla\times\mathbf{E}=0. 
$$
Therefore, such an equation is fully described by 
$$
\nabla\cdot\mathbf{D}=0.
$$
Let us examine the existence of a longitudinal solution of Maxwells equation without invoking a specific model of the medium. We will only assume, as always, a linear, homogeneous and isotropic medium, such that we can use the dielectric function:
$$
\mathbf{D}(\mathbf{K},\omega)=\varepsilon(\mathbf{K},\omega)\mathbf{E}(\mathbf{K},\omega).
$$
Note that the frequency dependence of the dielectric function is called dispersion, while its dependence on the wavevector is called spatial dispersion. By considering the relation in real space, and invoking the zero divergence of the displacement field, we find that we can differentiate two cases:

- **Longitudinal waves**: Seeking a non-zero longitudinal electric field, we impose $\mathbf{K}\cdot\mathbf{E}(\mathbf{K},\omega)\neq 0.$ This then leads to 
	$$  \varepsilon(\mathbf{K}, \omega) = 0,$$
	which can be further simplified to $\varepsilon(\omega)=0$ for a local medium. This signifies that longitudinal collective oscillations can only occur at frequencies corresponding to zeros of $\varepsilon(\omega)$. Indeed, one such solution is $\omega=\omega_p$ in the case of a non-lossy Drude model. Keep in mind, neglecting the $\mathbf{K}$-dependence typically holds well for $K\ll\omega_p/k_F.$ The Drude model is inherently a local model, that makes this assumption.

- **Transverse waves**, $\mathbf{K} \cdot \mathbf{E} = 0$, resulting in the generic dispersion relation:
	$$  K^2 = \varepsilon(\mathbf{K}, \omega) \frac{\omega^2}{c^2}.$$

---
## 1.3 The Dispersion of the Free Electron Gas and Volume Plasmons 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=34&selection=41,0,42,8| ]]

Let us discuss the transparency regime $\omega > \omega_p$ of the free electron gas model. For that, consider the [[Notes/2025 Quantum Electronics/2 Propagation in Dispersive Media#2.1.1 Drude-Lorentz model\|Lorentz-Drude model]]. The dispersion of the [[#1.2 Travelling-Wave Solution|travelling waves]] is:

$$
\omega^2 = \omega_p^2 + K^2c^2.
$$
This relation is plotted here:

![Attachments/Plasmonics - Fundamentals and Applications 1.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%201.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=34&rect=113,102,332,248| ]]

For frequencies below the plasma frequency, the propagation of transverse electromagnetic waves is forbidden inside the metal plasma. For larger frequencies, however, the plasma supports transverse waves propagating with a group velocity $v_g = d\omega/dK < c$. Noting that $\varepsilon(K=0, \omega_p) = 0$, the excitation must correspond to a collective longitudinal mode. At the plasma frequency, the electric field is a pure depolarisation field.

The physical significance of this excitation at the plasma frequency can be understood by considering the collective longitudinal oscillation of the conduction electron gas against the fixed positive background of the ion core in a plasma slab:

![Attachments/Plasmonics - Fundamentals and Applications 2.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%202.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=35&rect=106,535,328,614| ]]

A collective displacement of the electron cloud leads to a surface charge density at the slab boundaries. This establishes a homogeneous electric field inside the slab. Therefore, the displaced electrons experience a restoring force, and the plasma frequency is the natural frequency of a free oscillation of the electron sea. This assumes all electrons move in phase, meaning the plasma frequency corresponds to the oscillation frequency in the long-wavelength limit where $K = 0$. 

The quanta of these charge oscillations are called volume plasmons, to distinguish them from surface and localised plasmons. Due to the longitudinal nature of the excitation, volume plasmons do not couple to transverse electromagnetic waves and can only be excited by particle impact. Another consequence of this is that their decay occurs mainly via energy transfer to single electrons in collisionless plasmas, a process known as Landau damping.

In addition to the in-phase oscillation at $\omega_p$, there exists a whole class of longitudinal oscillations at higher frequencies with finite wave vectors, for which $\varepsilon(K,\omega) = 0$ is fulfilled:

$$
\omega^2 = \omega_{\mathrm{p}}^2 + \frac{6 E_{\mathrm{F}} K^2}{5 m}.
$$

---
## 1.4 Real Metals and Interband Transitions 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=36&selection=53,0,53,37| ]]

As already mentioned, the dielectric function of the Drude model adequately describes the optical response of metals only for photons below the transition energy between electronic bands. For some noble metals, interband effects already occur around $1$ eV ($\lambda \approx 1 \, \mu \mathrm{m}$). In silver for example, the interband absorption edge is around $3.8$ eV:

![Attachments/Plasmonics - Fundamentals and Applications 3.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%203.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=36&rect=52,99,394,215| ]]

The red dots are experimentally obtained results, while the line is a fit of the Drude model. Clearly, the model is not adequate to describe either the real or imaginary part of the dielectric function at high frequencies, and in the case of gold, its validity already breaks down close to the visible range.

---
## 1.5 The Energy of the Electromagnetic Field in Metals
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=37&selection=80,0,82,49| ]]

For a linear medium with no dispersion or losses, the total energy density of the electromagnetic field can be written as:

$$
u = \frac{1}{2} (\mathbf{E} \cdot \mathbf{D} + \mathbf{B} \cdot \mathbf{H}).
$$

This expression, together with the Poynting vector of energy flow $\mathbf{S} = \mathbf{E} \times \mathbf{H}$, enters into the conservation law ([[Notes/2025 Quantum Electronics/1 Electromagnetic Theory of Light#1.8 Poynting Vector and Poynting's Theorem\|Poynting's theorem]]):

$$
\frac{\partial u}{\partial t} + \nabla \cdot \mathbf{S} = -\mathbf{J} \cdot \mathbf{E},
$$

relating changes in electromagnetic energy density to energy flow and Ohmic losses (work done by the field on free charges) inside the material.

However, in metals, the dielectric function $\varepsilon_r(\omega)$ is complex and strongly frequency-dependent due to dispersion and absorption. Consequently, the simple expression for the total energy density $u$ in the form above does not directly apply. For dispersive media, the energy stored in the electric field is not solely determined by the instantaneous field strength but also depends on the history of the field, or equivalently, on the frequency response of the material.

A more general expression for the time-averaged electric energy density in a dispersive, low-loss medium, when the electric field $\mathbf{E}(\mathbf{r},t)$ is appreciable only in a narrow frequency range around a central frequency $\omega_0$ and varies slowly compared to a timescale $1/\omega_0$, is given by:

$$
u_{\mathrm{eff}} = \frac{\varepsilon_0}{4} \frac{d(\omega \varepsilon_{1})}{d\omega}\Big|_{\omega_0} |\mathbf{E}(\mathbf{r})|^2,
$$

where $\varepsilon_{1}(\omega) = \mathfrak{Re}[\varepsilon_r(\omega)]$, and $|\mathbf{E}(\mathbf{r})|^2$ represents the square of the peak amplitude of the time-harmonic electric field (so if $\mathbf{E}(\mathbf{r},t) = \mathfrak{Re}[\mathbf{E}(\mathbf{r})e^{i\omega_0 t}]$, then $|\mathbf{E}(\mathbf{r})|^2$ is the peak amplitude squared). The requirement of low absorption (so $|\varepsilon_{2}| \ll |\varepsilon_{1}|$, where $\varepsilon_{2} = \mathfrak{Im}[\varepsilon_r(\omega)]$) limits the applicability of this specific form, for example, to visible and near-infrared frequencies for some metals, but not necessarily to lower frequencies or within regions of strong interband absorption where $|\varepsilon_{2}|$ can be comparable to or greater than $|\varepsilon_{1}|$.

However, the electric field energy can also be determined by explicitly considering the electric polarisation. For a material described by a free-electron-type (Drude model) dielectric function $\varepsilon_r(\omega) = \varepsilon_{1}(\omega) + i\varepsilon_{2}(\omega),$ the time-averaged effective electric energy density is given by:

$$
u_{\mathrm{eff}} = \frac{\varepsilon_0}{4}\left(\varepsilon_{1} + \frac{2 \omega \varepsilon_{2}}{\gamma}\right)|\mathbf{E}(\mathbf{r})|^2,
$$

where $\gamma$ is the damping rate from the Drude model. The factor of $1/4$ (rather than $1/2$) arises from time-averaging a harmonically oscillating field and using the peak amplitude squared $|\mathbf{E}(\mathbf{r})|^2$. It can be shown that for negligible losses (so small $\varepsilon_{2}$ or $\gamma \to 0$), this expression reduces, as expected, to the previous general form for low-loss dispersive media for time-harmonic fields. 

---