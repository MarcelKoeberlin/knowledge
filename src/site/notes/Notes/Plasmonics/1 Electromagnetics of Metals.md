---
{"dg-publish":true,"permalink":"/notes/plasmonics/1-electromagnetics-of-metals/","hide":"true","updated":"2025-02-07T10:57:49.799+01:00"}
---

Jump back to ==[[Notes/Plasmonics/Plasmonics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Plasmonics/1 Electromagnetics of Metals#1.1 Maxwell's Equation of Macroscopic Electromagnetism\|1.1 Maxwell's Equation of Macroscopic Electromagnetism]]
- [[Notes/Plasmonics/1 Electromagnetics of Metals#1.2 Travelling-Wave Solution\|1.2 Travelling-Wave Solution]]
- [[Notes/Plasmonics/1 Electromagnetics of Metals#1.3 The Dielectric Function of the Free Electron Gas\|1.3 The Dielectric Function of the Free Electron Gas]]
- [[Notes/Plasmonics/1 Electromagnetics of Metals#1.4 The Dispersion of the Free Electron Gas and Volume Plasmons\|1.4 The Dispersion of the Free Electron Gas and Volume Plasmons]]
- [[Notes/Plasmonics/1 Electromagnetics of Metals#1.5 Real Metals and Interband Transitions\|1.5 Real Metals and Interband Transitions]]
- [[Notes/Plasmonics/1 Electromagnetics of Metals#1.6 The Energy of the Electromagnetic Field in Metals\|1.6 The Energy of the Electromagnetic Field in Metals]]

---
# 1 Electromagnetics of Metals 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=24&selection=2,0,2,26|•]]

The interaction of metals with electromagnetic waves can be understood in a classical framework based on Maxwell's equations. This holds true even for metallic nanostructures down to sizes on the order of a few nanometres, without the need to resort to quantum mechanics. This is because the high density of free carriers results in narrow spacings of the electron energy levels compared to the thermal excitation energy $k_B T$ at room temperature. It is well known that most metals are highly reflective up to some frequency in the visible range. They are thus traditionally used as cladding layers for constructing waveguides and resonators at microwave and far-infrared frequencies.

In this low-frequency regime, the _perfect conductor approximation_ of infinite or fixed finite conductivity is valid for most purposes since only a negligible fraction of the impinging electromagnetic waves penetrates the metal. However, at higher frequencies approaching the near-IR and visible spectrum, field penetration increases significantly. At UV frequencies, metals acquire a dielectric character and allow the propagation of electromagnetic waves, albeit with varying degrees of attenuation depending on the details of the electronic band structures. Alkali metals, such as sodium, have an almost free-electron-like response and thus exhibit ultraviolet transparency. Noble metals, such as gold and silver, exhibit strong absorption in this regime due to transitions between electronic bands.

---
## 1.1 Maxwell's Equation of Macroscopic Electromagnetism 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=25&selection=58,0,59,34|•]]

These dispersive properties can be described by a complex dielectric function $\varepsilon(\omega)$, which forms publish the basis of all phenomena discussed in this text. 

As a starting point, recall Maxwell's equations of macroscopic electromagnetism:
$$
\nabla \cdot \mathbf{D} = \rho_{\text{ext}}
$$
$$
\nabla \cdot \mathbf{B} = 0
$$
$$
\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}
$$
$$
\nabla \times \mathbf{H} = \mathbf{J}_{\text{ext}} + \frac{\partial \mathbf{D}}{\partial t}.
$$

These equations link the four macroscopic fields: 
1. The dielectric displacement $\mathbf{D}$, 
2. The electric field $\mathbf{E}$, 
3. The magnetic field $\mathbf{H}$, 
4. The magnetic induction (or magnetic flux density) $\mathbf{B}$ 

with the external charge and current densities $\rho_{\text{ext}}$ and $\mathbf{J}_{\text{ext}}$. The advantage of this phenomenological approach is that details of the fundamental interactions need not be taken into account since the rapidly varying microscopic fields are averaged over distances much larger than the underlying microstructure. 

We distinguish between external ($\rho_{\text{ext}}, \mathbf{J}_{\text{ext}}$) and internal ($\rho, \mathbf{J}$) charge and current densities, so that in total:

$$
\rho_{\text{tot}} = \rho_{\text{ext}} + \rho,
$$

and

$$
\mathbf{J}_{\text{tot}} = \mathbf{J}_{\text{ext}} + \mathbf{J}.
$$

The four macroscopic fields are further linked via the polarisation $\mathbf{P}$ and magnetization $\mathbf{M}$:
$$
\mathbf{D} = \varepsilon_0 \mathbf{E} + \mathbf{P},
$$
$$
\mathbf{H} = \frac{1}{\mu_0} \mathbf{B} - \mathbf{M},
$$
where $\varepsilon_0$ and $\mu_0$ are the electric permittivity and magnetic permeability of vacuum, respectively. Since we do not treat magnetic media, we will not consider the magnetic response represented by $\mathbf{M}$. Instead, we limit the description to polarisation effects. $\mathbf{P}$ describes the electric dipole moment per unit volume inside the material, caused by the alignment of microscopic dipoles with the electric field. It is related to the internal charge density via:

$$
\nabla \cdot \mathbf{P} = -\rho.
$$

Charge conservation ($\nabla \cdot \mathbf{J} = -\frac{\partial \rho}{\partial t}$) further requires that the internal charge and current densities are linked via:

$$
\mathbf{J} = \frac{\partial \mathbf{P}}{\partial t}.
$$

The great advantage of this approach is that the macroscopic electric field includes all polarisation effects: in other words, both the external and induced fields are absorbed into it. This can be shown by inserting (1.2a) into (1.1a), leading to:

$$
\nabla \cdot \mathbf{E} = \frac{\rho_{\text{tot}}}{\varepsilon_0}.
$$

Limiting ourselves to linear, isotropic, and nonmagnetic media, one can define the constitutive relations:
$$
\mathbf{D} = \varepsilon_0 \varepsilon \mathbf{E},
$$
$$
\mathbf{B} = \mu_0 \mu \mathbf{H}.
$$

Here, $\varepsilon$ is the dielectric constant or relative permittivity, and $\mu = 1$ is the relative permeability of the nonmagnetic medium. The linear relationship between $\mathbf{D}$ and $\mathbf{E}$ is often implicitly defined using the dielectric susceptibility $\chi$, which describes the linear relationship between $\mathbf{P}$ and $\mathbf{E}$ via:

$$
\begin{align}
\mathbf{P} = \varepsilon_0 \chi \mathbf{E} && \text{with} && \varepsilon = 1 + \chi.
\end{align}
$$

The last important constitutive linear relationship to mention is that between the internal current density $\mathbf{J}$ and the electric field $\mathbf{E}$, defined via the conductivity $\sigma$ as:

$$
\mathbf{J} = \sigma \mathbf{E}.
$$

It should be noted that the linear relations for $\mathbf{D}$ and $\mathbf{J}$ are only correct for linear media that do not exhibit temporal or spatial dispersion. The fundamental relation between relative permittivity (from now on called the dielectric function) and conductivity is:

$$
\varepsilon(k, \omega) = 1 + \frac{i\sigma(k, \omega)}{\varepsilon_0 \omega},
$$

for a given wave vector $k$. If the wavelength $\lambda$ is significantly longer than all characteristic dimensions (such as the unit cell size or the mean free path of the electrons), and considering the interaction of light with metals, this equation can be simplified to the limit of a spatially local response:

$$
\varepsilon(k = 0, \omega) = \varepsilon(\omega).
$$

In general, $\varepsilon(\omega) = \varepsilon_1(\omega) + i \varepsilon_2(\omega)$ and $\sigma(\omega) = \sigma_1(\omega) + i \sigma_2(\omega)$ are complex-valued functions of angular frequency $\omega$. At optical frequencies, $\varepsilon$ can be experimentally determined, for example, via reflectivity studies and the determination of the complex refractive index $\tilde{n}(\omega) = n(\omega) + i \kappa(\omega)$ of the medium, defined as:

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

$\kappa$ is called the extinction coefficient and determines the optical absorption of electromagnetic waves propagating through the medium. It is linked to the absorption coefficient $\alpha$ of Beer’s law (describing the exponential attenuation of the intensity of a beam propagating through the medium via $I(x) = I_0 e^{-\alpha x}$) by the relation:

$$
\alpha(\omega) = \frac{2\kappa(\omega)\omega}{c}.
$$

Therefore, the imaginary part $\varepsilon_2$ of the dielectric function determines the amount of absorption inside the medium. For $|\varepsilon_1| \gg |\varepsilon_2|$, the real part $n$ of the refractive index, which quantifies the lowering of the phase velocity of the propagating waves due to the polarisation of the material, is mainly determined by $\varepsilon_1$. The real part of $\sigma$ determines the amount of absorption, while the imaginary part contributes to $\varepsilon_1$ and therefore to the amount of polarisation.

---
## 1.2 Travelling-Wave Solution 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=29&selection=145,0,146,44|•]]

Lastly, let us consider travelling-wave solutions of Maxwell’s equations in the absence of external stimuli. We can differentiate two cases, depending on the polarisation direction of the electric field vector:

- **Transverse waves**, $\mathbf{K} \cdot \mathbf{E} = 0$, resulting in the generic dispersion relation:
  $$
  K^2 = \varepsilon(\mathbf{K}, \omega) \frac{\omega^2}{c^2}.
  $$

- **Longitudinal waves**:
  $$
  \varepsilon(\mathbf{K}, \omega) = 0,
  $$

This signifies that longitudinal collective oscillations can only occur at frequencies corresponding to zeros of $\varepsilon(\omega)$.

---
## 1.3 The Dielectric Function of the Free Electron Gas 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=30&selection=12,0,12,47|•]]

Over a wide frequency range, the optical properties of metals can be explained by a plasma model, where a gas of free electrons of number density $n$ moves against a fixed background of positive ion cores. For alkali metals, this range extends up to the ultraviolet, while for noble metals, interband transitions occur at visible frequencies. In the plasma model, details of the lattice potential and electron-electron interactions are not considered. Instead, one assumes that some aspects of the band structure are incorporated into the effective optical mass $m$ of each electron. 

The electrons oscillate in response to the applied electromagnetic field, and their motion is damped via collisions occurring with a characteristic collision frequency $\gamma = \frac{1}{\tau}$, where $\tau$ is known as the relaxation time of the free electron gas, typically on the order of $10^{-14} \, \text{s}$ at room temperature, corresponding to $\gamma = 100 \, \text{THz}$.

The equation of motion for an electron in the plasma sea subject to an external electric field $\mathbf{E}$ is:

$$
m\ddot{x} + m\gamma\dot{x} = -e\mathbf{E}.
$$

Assuming a harmonic time dependence $\mathbf{E}(t) = \mathbf{E}_0 e^{-i\omega t}$ of the driving field, a particular solution describing the oscillation of the electron is $x(t) = x_0 e^{-i\omega t}$. The complex amplitude $x_0$ incorporates any phase shifts between the driving field and the response via:

$$
x(t) = \frac{e}{m(\omega^2 + i\gamma \omega)} \mathbf{E}(t).
$$

The displaced electrons contribute to the macroscopic polarisation $\mathbf{P} = -nex$, explicitly given by:

$$
\mathbf{P} = -\frac{ne^2}{m(\omega^2 + i\gamma \omega)} \mathbf{E}.
$$

This leads to:

$$
\begin{align}
\varepsilon(\omega) = 1 - \frac{\omega_p^2}{\omega^2 + i\gamma \omega}, && \text{where} && \omega_p^2 = \frac{ne^2}{\varepsilon_0 m},
\end{align}
$$

where $\omega_p$ is the plasma frequency of the free electron gas. The real and imaginary components of this complex dielectric function $\varepsilon(\omega) = \varepsilon_1(\omega) + i \varepsilon_2(\omega)$ are given by:

$$
\begin{align}
\varepsilon_1(\omega) = 1 - \frac{\omega_p^2 \tau^2}{1 + \omega^2 \tau^2}, &&
\varepsilon_2(\omega) = \frac{\omega_p^2 \tau}{\omega (1 + \omega^2 \tau^2)},
\end{align}
$$

where $\gamma = \frac{1}{\tau}$.

**For large frequencies** close to $\omega_p$, the product $\omega \tau \gg 1$, leading to negligible damping. Here, $\varepsilon(\omega)$ is predominantly real, and:

$$
\varepsilon(\omega) = 1 - \frac{\omega_p^2}{\omega^2},
$$

can be taken as the dielectric function of the undamped free electron plasma. Note that in this frequency region, noble metals exhibit significant interband transitions, causing an increase in $\varepsilon_2$.

**For very low frequencies**, where $\omega \ll \tau^{-1}$, we find $\varepsilon_2 \gg \varepsilon_1$, and the real and imaginary parts of the complex refractive index are comparable in magnitude:

$$
n \approx \kappa = \sqrt{\frac{\varepsilon_2}{2}} = \sqrt{\frac{\tau \omega_p^2}{2\omega}}.
$$

In this region, metals are primarily absorbing, with an absorption coefficient:

$$
\alpha = \left( \frac{2\omega_p^2 \tau \omega}{c^2} \right)^{1/2}.
$$

By introducing the DC conductivity $\sigma_0$, this expression can be recast as:

$$
\alpha = \sqrt{2 \sigma_0 \omega \mu_0}.
$$

Applying Beer’s law of absorption implies that, at low frequencies, fields fall off inside the metal as $e^{-z/\delta}$, where $\delta$ is the skin depth:

$$
\delta = \frac{2}{\alpha} = \frac{c}{\kappa \omega} = \sqrt{\frac{2}{\sigma_0 \omega \mu_0}}.
$$

This description holds as long as the mean free path of the electrons satisfies the condition $l \ll \delta$. At room temperature, for typical metals, $l \approx 10$ nm and $\delta \approx 100$ nm, justifying the free-electron model. At low temperatures, however, the mean free path increases significantly, altering the penetration depth. This phenomenon is known as the **anomalous skin effect**.

Using $\sigma$ instead of $\varepsilon$ for describing the dielectric response of metals reveals that in the absorbing regime, $\sigma$ is predominantly real, and the free charge velocity responds in phase with the driving field. At DC, relaxation effects of free charges are described by the real DC-conductivity $\sigma_0$, while the response of bound charges is included in a dielectric constant $\varepsilon_B$.

**At higher frequencies** ($1 \leq \omega\tau \leq \omega_p \tau$), the complex refractive index becomes predominantly imaginary, resulting in a reflection coefficient $R \approx 1$, and $\sigma$ acquires a more complex character, blurring the boundary between free and bound charges.

For noble metals such as silver, gold, and copper, an extension to the free-electron model is required in the region $\omega > \omega_p$. Here, the response is dominated by free $s$ electrons, while the filled $d$ band near the Fermi surface contributes to a highly polarized environment. This residual polarisation due to the positive ion core background is described by adding the term $P_\infty = \varepsilon_0(\varepsilon_\infty - 1)\mathbf{E}$, where $\mathbf{P}$ represents only the polarisation due to free electrons. This effect is characterized by a dielectric constant $\varepsilon_\infty$ (usually $1 \leq \varepsilon_\infty \leq 10$), and the dielectric function becomes:

$$
\varepsilon(\omega) = \varepsilon_\infty - \frac{\omega_p^2}{\omega^2 + i\gamma \omega}.
$$

Comparing this description to the measured dielectric function of gold shows that the applicability of the free-electron model in the visible spectrum breaks down due to interband transitions:

![Attachments/Plasmonics - Fundamentals and Applications.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=33&rect=49,496,390,611|•]]

The dielectric function of the free electron plasma is closely related to the classical Drude model for the AC conductivity $\sigma(\omega)$ of metals:

$$
\sigma(\omega) = \frac{\sigma_0}{1 - i\omega\tau}.
$$

From this, we find:

$$
\varepsilon(\omega) = 1 + \frac{i\sigma(\omega)}{\varepsilon_0 \omega},
$$

recovering the general result. The dielectric function of the free electron gas is thus also referred to as the **Drude model** of the optical response of metals.

---
## 1.4 The Dispersion of the Free Electron Gas and Volume Plasmons 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=34&selection=41,0,42,8|•]]

Let us discuss the transparency regime $\omega > \omega_p$ of the free electron gas model. The dispersion of the [[Notes/Plasmonics/1 Electromagnetics of Metals#1.1.3 Travelling-Wave Solution\|travelling waves]] is:

$$
\omega^2 = \omega_p^2 + K^2c^2.
$$

This relation is plotted here:

![Attachments/Plasmonics - Fundamentals and Applications 1.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%201.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=34&rect=113,102,332,248|•]]

For frequencies below the plasma frequency, the propagation of transverse electromagnetic waves is forbidden inside the metal plasma. For larger frequencies, however, the plasma supports transverse waves propagating with a group velocity $v_g = d\omega/dK < c$. Noting that $\varepsilon(K=0, \omega_p) = 0$, the excitation must correspond to a collective longitudinal mode. At the plasma frequency, the electric field is a pure depolarisation field.

The physical significance of this excitation at the plasma frequency can be understood by considering the collective longitudinal oscillation of the conduction electron gas against the fixed positive background of the ion core in a plasma slab:

![Attachments/Plasmonics - Fundamentals and Applications 2.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%202.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=35&rect=106,535,328,614|•]]

A collective displacement of the electron cloud leads to a surface charge density at the slab boundaries. This establishes a homogeneous electric field inside the slab. Therefore, the displaced electrons experience a restoring force, and the plasma frequency is the natural frequency of a free oscillation of the electron sea. This assumes all electrons move in phase, meaning the plasma frequency corresponds to the oscillation frequency in the long-wavelength limit where $K = 0$. 

The quanta of these charge oscillations are called volume plasmons, to distinguish them from surface and localized plasmons. Due to the longitudinal nature of the excitation, volume plasmons do not couple to transverse electromagnetic waves and can only be excited by particle impact. Another consequence of this is that their decay occurs only via energy transfer to single electrons, a process known as Landau damping.

In addition to the in-phase oscillation at $\omega_p$, there exists a whole class of longitudinal oscillations at higher frequencies with finite wave vectors, for which $\varepsilon(K,\omega) = 0$ is fulfilled:

$$
\omega^2 = \omega_{\mathrm{p}}^2 + \frac{6 E_{\mathrm{F}} K^2}{5 m}.
$$

---
## 1.5 Real Metals and Interband Transitions 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=36&selection=53,0,53,37|•]]

As already mentioned, the dielectric function of the Drude model adequately describes the optical response of metals only for photons below the transition energy between electronic bands. For some noble metals, interband effects already occur around $1 \, \text{eV}$ ($\lambda \approx 1 \, \mu \mathrm{m}$), for example, for silver:

![Attachments/Plasmonics - Fundamentals and Applications 3.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%203.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=36&rect=52,99,394,215|•]]

The red dots are experimentally obtained results, while the line is a fit of the Drude model. Clearly, the model is not adequate to describe either the real or imaginary part of the dielectric function at high frequencies, and in the case of gold, its validity already breaks down close to the visible range.

---
## 1.6 The Energy of the Electromagnetic Field in Metals 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=37&selection=80,0,82,49|•]]

For a linear medium with no dispersion or losses, the total energy density of the electromagnetic field can be written as:

$$
u = \frac{1}{2} (\mathbf{E} \cdot \mathbf{D} + \mathbf{B} \cdot \mathbf{H}).
$$

This expression, together with the Poynting vector of energy flow $\mathbf{S} = \mathbf{E} \times \mathbf{H}$, enters into the conservation law:

$$
\frac{\partial u}{\partial t} + \nabla \cdot \mathbf{S} = -\mathbf{J} \cdot \mathbf{E},
$$

relating changes in electromagnetic energy density to energy flow and absorption inside the material.

However, since in metals the dielectric function is complex and frequency-dependent due to dispersion, the equation for the total energy density in this form does not apply. It can still hold if $u_{\mathrm{E}}$ is replaced by an effective electric energy density $u_{\mathrm{eff}}$, defined as:

$$
u_{\mathrm{eff}} = \frac{1}{2} \operatorname{Re}\left[\frac{d(\omega \varepsilon)}{d \omega}\right]_{\omega_0} \langle\mathbf{E}(\mathbf{r}, t) \cdot \mathbf{E}(\mathbf{r}, t)\rangle,
$$

where $\langle\mathbf{E}(\mathbf{r}, t) \cdot \mathbf{E}(\mathbf{r}, t)\rangle$ signifies field-averaging over one optical cycle, and $\omega_0$ is the frequency of interest. This expression is valid if $\mathbf{E}$ is only appreciable in a narrow frequency range around $\omega_0$, and the fields are slowly varying compared to a timescale $1 / \omega_0$. Furthermore, it is assumed that $\left|\varepsilon_2\right| \ll \left|\varepsilon_1\right|$, so that absorption is small.

The requirement of low absorption limits this equation to visible and near-infrared frequencies, but not to lower frequencies or the regime of interband effects where $\left|\varepsilon_2\right| > \left|\varepsilon_1\right|$. However, the electric field energy can also be determined by taking the electric polarisation explicitly into account. The obtained expression for the electric field energy of a material described by a free-electron-type dielectric function $\varepsilon = \varepsilon_1 + i \varepsilon_2$ is:

$$
u_{\mathrm{eff}} = \frac{\varepsilon_0}{4}\left(\varepsilon_1 + \frac{2 \omega \varepsilon_2}{\gamma}\right)|\mathbf{E}|^2,
$$

where an additional factor $1 / 2$ is included due to an implicit assumption of harmonic time dependence of the oscillating fields.

---