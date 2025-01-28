---
{"dg-publish":true,"permalink":"/notes/plasmonics/plasmonics/","updated":"2025-01-28T17:35:46.000+01:00"}
---

These notes primarily follow [Plasmonics: Fundamentals and Applications](https://link.springer.com/book/10.1007/0-387-37825-1) and [Plasmonics: From Basics to Advanced Topics](https://link.springer.com/book/10.1007/978-3-642-28079-5). My interest in this subject stems from its relevance to my current research, which we explore in the [Attoline](https://ulp.ethz.ch/research/attoline.html).

**Table of Contents**

- [[Notes/Plasmonics/Plasmonics#1 Electromagnetics of Metals\|1 Electromagnetics of Metals]]
- [[Notes/Plasmonics/Plasmonics#2 Surface Plasmon Polaritons at Metal/Insulator Interfaces\|2 Surface Plasmon Polaritons at Metal/Insulator Interfaces]]
- [[Notes/Plasmonics/Plasmonics#3 Excitation of Surface Plasmon Polaritons at Planar Interfaces\|3 Excitation of Surface Plasmon Polaritons at Planar Interfaces]]
- [[Notes/Plasmonics/Plasmonics#4 Imaging Surface Plasmon Polariton Propagation\|4 Imaging Surface Plasmon Polariton Propagation]]
- [[Notes/Plasmonics/Plasmonics#5 Localized Surface Plasmons\|5 Localized Surface Plasmons]]

---

Plasmonics forms a major part of the field of _nanophotonics_, which explores how electromagnetic fields can be confined over dimensions on the order of or smaller than the wavelength. It is based on interaction processes between electromagnetic radiation and conduction electrons at metallic interfaces or in small metallic nanostructures, leading to an enhanced optical near field of sub-wavelength dimensions. Research in this area demonstrates how unexpected behavior can occur when discontinuities or sub-wavelength structures are imposed. This field is firmly grounded in **classical** physics.

Roughly speaking, the field of plasmonics is 100 years old, yet it remains an active area of research. Four elements underlie current research in plasmonics:
1. The ready availability of state-of-the-art fabrication methods, particularly for implementing nanostructures.
2. The wealth of high-sensitivity optical characterization techniques.
3. The rapid advancement in computing power and speed, allowing for powerful numerical modeling tools.
4. The wide range of applications, from solar cells to high-resolution microscopy, drug design, and more.

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

![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162355715.webp|700](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162355715.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=33&rect=46,494,390,614|•]]

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

Let us discuss the transparency regime $\omega > \omega_p$ of the free electron gas model. The dispersion of the [[Notes/Plasmonics/Plasmonics#1.1.3 Travelling-Wave Solution\|travelling waves]] is:

$$
\omega^2 = \omega_p^2 + K^2c^2.
$$

This relation is plotted here:
![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162355797.webp|700](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162355797.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=34&rect=115,101,334,248|•]]

For frequencies below the plasma frequency, the propagation of transverse electromagnetic waves is forbidden inside the metal plasma. For larger frequencies, however, the plasma supports transverse waves propagating with a group velocity $v_g = d\omega/dK < c$. Noting that $\varepsilon(K=0, \omega_p) = 0$, the excitation must correspond to a collective longitudinal mode. At the plasma frequency, the electric field is a pure depolarisation field.

The physical significance of this excitation at the plasma frequency can be understood by considering the collective longitudinal oscillation of the conduction electron gas against the fixed positive background of the ion core in a plasma slab:
![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162355912.webp|700](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162355912.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=35&rect=103,535,333,620|•]]

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
![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356007.webp|700](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356007.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=36&rect=51,99,394,215|•]]

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
# 2 Surface Plasmon Polaritons at Metal/Insulator Interfaces 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=39&selection=2,0,3,20|•]]

## 2.1 The Wave Equation

Surface plasmon polaritons are electromagnetic excitations propagating at the interface between a dielectric and a conductor, confined in the perpendicular direction. These electromagnetic surface waves arise via the coupling of the electromagnetic fields to oscillations of the conductor’s electron plasma. To investigate the physical properties of surface plasmon polaritons (short: **SPPs**), we apply Maxwell’s equations (1.1) to the flat interface between a conductor and a dielectric. To present this discussion most clearly, it is advantageous to cast the equations into a general form applicable to the guiding of electromagnetic waves: the wave equation.

Considering the absence of external charge and current densities, and further assuming a negligible variation of the dielectric profile $\varepsilon = \varepsilon(r)$, we find the central equation of electromagnetic wave theory:

$$
\nabla^2 \mathbf{E} - \frac{\varepsilon}{c^2} \frac{\partial^2 \mathbf{E}}{\partial t^2} = 0.
$$

To cast this equation in a form suitable for describing confined propagating waves, we proceed in two steps. First, we assume in general a harmonic time dependence $\mathbf{E}(\mathbf{r}, t) = \mathbf{E}(\mathbf{r}) e^{-i \omega t}$ of the electric field, yielding:

$$
\nabla^2 \mathbf{E} + k_0^2 \varepsilon \mathbf{E} = 0,
$$

where $k_0 = \frac{\omega}{c}$ is the wave vector of the propagating wave in vacuum. This equation is known as the Helmholtz equation.

Next, we define the propagation geometry. We assume for simplicity a one-dimensional problem, i.e., $\varepsilon$ depends only on one spatial coordinate. Specifically, the waves propagate along the $x$-direction of a Cartesian coordinate system, showing no spatial variation in the perpendicular, in-plane $y$-direction; therefore $\varepsilon = \varepsilon(z)$:
![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356062.webp|700](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356062.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=40&rect=112,109,350,191|•]]

Applied to electromagnetic surface problems, the plane $z=0$ coincides with the interface sustaining the propagating waves. The desired form of the wave equation is then:

$$
\frac{\partial^2 \mathbf{E}(z)}{\partial z^2} + \left(k_0^2 \varepsilon - \beta^2\right) \mathbf{E} = 0,
$$

where the complex parameter $\beta = k_x$ is called the propagation constant, derived from $\mathbf{E}(x, y, z) = \mathbf{E}(z) e^{i \beta x}$. This equation serves as the starting point for the general analysis of guided electromagnetic modes in waveguides. To use the wave equation for determining the spatial field profile and dispersion of propagating waves, we need explicit expressions for the different field components of $\mathbf{E}$ and $\mathbf{H}$. Using the curl equations, it can be shown that this system allows two sets of self-consistent solutions with different polarisation properties of the propagating waves:
1. The first set are the transverse magnetic (TM or p) modes, where only $E_x$, $E_z$, and $H_y$ are non-zero. 
2. The second set are the transverse electric (TE or s) modes, where only $H_x$, $H_z$, and $E_y$ are non-zero.

---
## 2.2 Surface Plasmon Polaritons at a Single Interface 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=43&selection=4,0,6,46|•]]

The simplest geometry sustaining SPPs is that of a single, flat interface between a dielectric, non-absorbing half-space ($z > 0$) with positive real dielectric constant $\varepsilon_2$ and an adjacent conducting half-space ($z < 0$) described via a dielectric function $\varepsilon(\omega)$. The requirement of metallic character implies that $\mathfrak{Re}(\varepsilon(\omega)) < 0$, which is fulfilled at frequencies below the bulk plasmon frequency $\omega_p$. We seek propagating wave solutions confined to the interface, i.e., with evanescent decay in the perpendicular $z$-direction.

![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356161.webp|700](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356161.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=43&rect=109,95,336,207|•]]

For **TM modes**, the equation:

$$
\frac{k_2}{k_1} = -\frac{\varepsilon_2}{\varepsilon_1}
$$

must hold by continuity of $H_y$ and $\varepsilon_i E_z$ at the interface. Confinement to the surface demands:

$$
\mathfrak{Re}(\varepsilon_1) < 0 \quad \text{if} \quad \varepsilon_2 > 0.
$$

Surface waves exist only at interfaces between materials with opposite signs of the real part of their dielectric permittivities, i.e., between a conductor and an insulator. We then arrive at the dispersion relation of surface plasmon polaritons (SPPs) propagating at the interface between the two half-spaces:

$$
\beta = k_0 \sqrt{\frac{\varepsilon_1 \varepsilon_2}{\varepsilon_1 + \varepsilon_2}}.
$$

This expression is valid for both real and complex $\varepsilon_1$, i.e., for conductors without and with attenuation. Note that $k_0 = \omega / c$.

For **TE modes**, continuity of $E_y$ and $H_x$ at the interface leads to the condition (where $E_y, H_x, H_z \sim A_1$):

$$
A_1 (k_1 + k_2) = 0.
$$

Since confinement to the surface requires $\mathfrak{Re}(k_1) > 0$ and $\mathfrak{Re}(k_2) > 0$, this condition is only fulfilled if $A_1 = 0$, so that also $A_2 = A_1 = 0$. **Thus, no surface modes exist for TE polarisation. Surface plasmon polaritons only exist for TM polarisation.**

The figure shows plots of the SPPs' dispersion relation for a metal with negligible damping described by the real Drude dielectric function for an air ($\varepsilon_2 = 1$) and a fused silica ($\varepsilon_2 = 2.25$) interface. Due to their bound nature, the SPP excitations correspond to the part of the dispersion curves lying to the right of the respective light lines of air and silica. Radiation into the metal occurs in the transparency regime $\omega > \omega_p$ as mentioned earlier. Between the regime of bound and radiative modes, a frequency gap region with purely imaginary $\beta$ prohibiting propagation exists. The dashed line shows the imaginary part of $\beta$, while the solid line shows its real part.
![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356255.webp|700](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356255.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=45&rect=78,414,373,615|•]]

**For small wave vectors**, corresponding to low frequencies (mid-IR or lower), the SPP propagation constant is close to $k_0$ at the light line, and the wavelengths extend over many wavelengths into the dielectric space. In this regime, SPPs acquire the nature of a grazing-incidence light field, also known as Sommerfeld-Zenneck waves. 

**For large wave vectors**, the frequency of the SPPs approaches the characteristic surface plasmon frequency:

$$
\omega_{\mathrm{sp}} = \frac{\omega_{\mathrm{p}}}{\sqrt{1 + \varepsilon_2}}.
$$

In the limit of negligible damping of the conduction electron oscillation, implying $\mathfrak{Im}\left(\varepsilon_1(\omega)\right) = 0$, the wave vector $\beta$ goes to infinity as the frequency approaches $\omega_{\mathrm{sp}}$, and the group velocity $v_{\mathrm{g}} \to 0$. The mode thus acquires an electrostatic character and is known as the surface plasmon. This is because it can be obtained as a solution to the Laplace equation for a single interface geometry. It is wavelike in the $x$-direction and decays exponentially in the $z$-direction.

The above discussions have assumed an ideal conductor with no damping. Excitations of the conduction electrons in real metals, however, suffer from both free-electron and interband damping. Therefore, $\varepsilon_1(\omega)$ is complex, and the SPP propagation constant $\beta$ is also complex. The traveling SPPs are damped with an energy attenuation length, also called the propagation length, given by:

$$
L = \frac{1}{2 \cdot \mathfrak{Im}(\beta)},
$$

typically between $10 \, \mu \text{m}$ and $100 \, \mu \text{m}$ in the visible regime, depending on the metal/dielectric configuration.

The next figure shows the dispersion relation of SPPs propagating at a silver/air and silver/silica interface. In comparison to the ideal case, the bound SPPs now approach a maximum, finite wave vector at the surface plasmon frequency of the system. This places a lower bound on both the wavelength $\lambda_{\text{sp}} = 2\pi / \mathfrak{Re}(\beta)$ of the surface plasmon and the amount of mode confinement perpendicular to the interface since the SPP fields in the dielectric fall off exponentially in $k_z$. The quasibound, leaky part of the dispersion between $\omega_p$ and $\omega_{\text{sp}}$ is now allowed compared to the case of an ideal conductor.

![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356309.webp|700](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356309.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=47&rect=75,420,371,612|•]]

There is generally a characteristic trade-off between localization and loss in plasmonics. Field confinement below the diffraction limit of half the wavelength in the dielectric can be achieved close to $\omega_{\text{sp}}$. In the metal itself, the field falls off over distances on the order of $20 \, \text{nm}$ over a wide frequency range.

---
## 2.3 Multilayer Systems 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=48&selection=7,0,9,18|•]]

Let us now turn our attention to systems consisting of alternating conducting and dielectric thin films. Each single interface can sustain bound SPPs. When the separation between adjacent interfaces is comparable to or smaller than the decay length $\hat{z} = 1 / |k_z|$ of the interface mode, interaction between SPPs gives rise to coupled modes. 

Consider first a three-layer system:
1. The insulator/metal/insulator (**IMI**) heterostructure: A thin metallic layer (I) is sandwiched between two (infinitely) thick dielectric claddings (II, III).
2. The metal/insulator/metal (**MIM**) heterostructure: A thin dielectric core layer (I) is sandwiched between two metallic claddings (II, III).

![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356376.webp|700](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356376.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=48&rect=106,96,329,197|•]]

We are only interested in the lowest-order bound modes and thus start with a general description of TM modes that are non-oscillatory in the $z$-direction normal to the interface. We demand that the fields decay exponentially in the claddings (II) and (III). Note that for $a \to \infty$, this problem reduces to the case of two uncoupled SPPs at the respective interface.

Now consider the sub- and superstrates (II) and (III) share the same dielectric response $\varepsilon_2 = \varepsilon_3$ and thus $k_2 = k_3$. For the dispersion relation, we find a pair of equations:

$$
\begin{aligned}
\tanh k_1 a & = -\frac{k_2 \varepsilon_1}{k_1 \varepsilon_2}, &&
\tanh k_1 a = -\frac{k_1 \varepsilon_2}{k_2 \varepsilon_1}.
\end{aligned}
$$

1. The first equation describes modes of odd vector parity: $E_x(z)$ is odd, while $H_y(z)$ and $E_z(z)$ are even functions.
2. The second describes modes of even vector parity: $E_x(z)$ is even, while $H_y(z)$ and $E_z(z)$ are odd.

For the **IMI geometry**, we have $\varepsilon_1 = \varepsilon(\omega)$ for the metal and $\varepsilon_2$ is positive and real for the insulating cladding. For example, consider the case of air/silver/air with two different thicknesses (50 nm in dashed black and 100 nm in dashed gray) of the silver film:

![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356448.webp|700](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356448.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=50&rect=95,120,349,290|•]]

For simplicity, the dielectric function of silver is approximated as a Drude metal with negligible damping, meaning $\varepsilon(\omega)$ is real so that $\mathfrak{Im}(\beta) = 0$. As shown, the odd modes have frequencies $\omega_{+}$ higher than the respective frequencies for a single-interface SPP, while the even modes have lower frequencies $\omega_{-}$. For large wave vectors $\beta$, achievable only if $\mathfrak{Im}(\varepsilon(\omega)) = 0$, the limiting frequencies are:

$$
\begin{aligned}
\omega_{+} &= \frac{\omega_{\mathrm{p}}}{\sqrt{1 + \varepsilon_2}} \sqrt{1 + \frac{2 \varepsilon_2 e^{-2 \beta a}}{1 + \varepsilon_2}}, \\
\omega_{-} &= \frac{\omega_{\mathrm{p}}}{\sqrt{1 + \varepsilon_2}} \sqrt{1 - \frac{2 \varepsilon_2 e^{-2 \beta a}}{1 + \varepsilon_2}}.
\end{aligned}
$$

Odd modes have the interesting property that as the metal film thickness decreases, the confinement of the coupled SPP to the metal film decreases, evolving into a plane wave supported by the homogeneous dielectric environment. For real, absorptive metals described by a complex $\varepsilon(\omega)$, this implies a drastically increased SPP propagation length. These are known as _long-ranging SPPs_ and will be discussed in a later chapter. Even modes exhibit the opposite behavior: their confinement to the metal increases with decreasing metal film thickness, resulting in reduced propagation length.

In the **MIM geometry**, the most interesting mode is the fundamental odd mode of the system, which does not exhibit a cut-off for vanishing core layer thickness:

![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356528.webp|700](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356528.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=52&rect=94,444,345,610|•]]

The dielectric function was taken as a complex fit, so the propagation constant $\beta$ does not go to infinity as the surface plasmon frequency is approached. Instead, it folds back and eventually crosses the light line, similar to SPPs at single interfaces. 

Large propagation constants can be achieved even for excitations well below $\omega_{\text{sp}}$, provided that the dielectric core is sufficiently thin. This indicates that localization effects achievable near $\omega_{\text{sp}}$ for a single interface can also be attained for excitations in the infrared for MIM structures.

Note that this discussion was limited to the fundamental bound modes. In IMI structures, there are leaky modes, while in MIM structures, oscillatory modes can exist. Additionally, the coupling between SPPs at the core/cladding interface changes significantly if $\varepsilon_2 \neq \varepsilon_3$, prohibiting phase matching.

---
# 3 Excitation of Surface Plasmon Polaritons at Planar Interfaces 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=56&selection=2,0,3,31|•]]

Surface plasmon polaritons propagating at the flat interface between a conductor and a dielectric are essentially two-dimensional electromagnetic waves. Confinement is achieved since the propagation constant is greater than the wave vector in the dielectric, $\beta > k$, leading to decay on both sides of the interface. Therefore, excitation by three-dimensional light beams is not possible unless special techniques for phase-matching are employed. Alternatively, different geometries may be used.

---
## 3.1 Prism Coupling 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=59&selection=22,0,24,14|•]]

The projection along the interface of the momentum $k_x = k \sin\theta$ is smaller than the SPP propagation constant $\beta$ even at grazing incidence, prohibiting phase-matching. However, phase-matching can still be achieved in a three-layer system with different dielectric constants. Consider one of the materials to be air ($\varepsilon = 1$), such that the beam being reflected at the insulator-metal interface has an in-plane momentum of $k_x = k\sqrt{\varepsilon}\sin\theta$. The insulator in this case would be a prism. Two configurations are possible:

![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356593.webp|700](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356593.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=59&rect=89,106,346,186|•]]

This momentum is sufficient to excite SPPs at the interface between the metal and the lower-index dielectric, air in this case. In this way, SPPs propagating between the light lines of air and the higher-index dielectric (prism) can be excited. This excitation manifests as a minimum in the reflected beam intensity. Note that this phase-matching is impossible at the prism/metal interface since the respective SPP dispersion lies outside the prism light cone (there is no crossing of the curves):

![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356631.webp|700](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356631.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=60&rect=111,470,332,616|•]]

This coupling scheme is also known as **attenuated total internal reflection** and involves tunneling of the fields of the excitation beam to the metal/air interface. The two configurations are called the **Kretschmann method** (left) and the **Otto configuration** (right). 

SPPs excited via phase-matching with $\beta = k\sqrt{\varepsilon}\sin\theta$ are inherently leaky waves, meaning they lose energy not only due to absorption in the metal but also due to leakage radiation in the prism. The minimum in reflected intensity is due to destructive interference between this leakage radiation and the reflected part of the excitation beam. This minimum can be zero for an optimal metal film thickness. This is the case when the damping due to leakage equals the damping due to absorption (critical coupling):

$$
\Gamma_{\text{LR}} = \Gamma_{\text{abs}} = \mathfrak{Im}(\beta_0),
$$

where:

$$
\beta_0 = k_0\sqrt{\frac{\varepsilon_1\varepsilon_2}{\varepsilon_1 + \varepsilon_2}}.
$$

---
## 3.2 Grating Coupling 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=61&selection=149,0,151,16|•]]

Phase-matching can also be achieved by patterning the metal surface with a shallow grating of grooves or holes with lattice constant $a$. In the simple one-dimensional grating of grooves, phase-matching occurs whenever the condition:

$$
\beta = k\sin\theta \pm \nu g,
$$

is fulfilled, where $g = 2\pi/a$ is the reciprocal grating vector, and $\nu = 1, 2, 3, \dots$. The excitation of SPPs is again indicated by a reflection minimum.

![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356673.webp|700](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356673.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=61&rect=126,88,310,221|•]]

The reverse process is also possible: SPPs propagating along a surface modulated with a grating can couple to light and radiate. The grating need not be milled directly into the metal surface; it can also consist of dielectric material. By designing the grating shape, the propagation direction can be influenced, and even focusing can be achieved.

More generally, SPPs can also be excited on films with random surface roughness or manufactured localized scatterers. The phase-matching condition:

$$
\beta = k\sin\theta \pm \Delta k_x,
$$

with the momentum components $\Delta k_x$ provided by scattering, can also be fulfilled.

---
## 3.3 Excitation Using Highly Focused Optical Beams 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=64&selection=39,0,41,45|•]]

Another approach uses a microscopic objective of high numerical aperture, which ensures a large angular spread of the focused excitation beam, including angles $\theta > \theta_c$ greater than the critical angle of total internal reflection at a glass/air interface:

![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356721.webp|500](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356721.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=64&rect=112,117,331,239|•]]

In this way, wave vectors $k_x = \beta$ are available for phase-matching for SPPs at the metal/air interface at the corresponding angle:

$$
\theta_{\text{SPP}} = \arcsin\left(\frac{\beta}{nk_0}\right) > \theta_c.
$$

The excited SPPs will radiate back into the glass substrate as leakage radiation at an angle $\theta_{\text{SPP}} > \theta_c$. The traced path of the excited SPPs for s- and p-polarisation is shown below:

![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356766.webp|500](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356766.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=65&rect=143,528,291,613|•]]

As shown earlier, the second image (s-polarisation) has no trace since there are no surface plasmon polaritons for this polarisation.

---
# 4 Imaging Surface Plasmon Polariton Propagation 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=70&selection=2,0,3,21&color=important|•]]

While the successful excitation of surface plasmon polaritons (SPPs) using optical techniques can be deduced from a decrease in reflectivity, visualizing the propagation of SPPs away from their excitation region is highly desirable. This visualization allows the determination of the propagation length $L$ and provides insights into the out-of-plane confinement, enabling the assessment of $\hat{z}$, the extent to which the fields penetrate into the dielectric side of the interface.

---
## 4.1 Near-Field Microscopy 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=70&selection=43,0,45,21|•]]

Using near-field optical microscopy in collection mode, also called photon scanning tunneling microscopy, allows for the investigation of SPP propagation with sub-wavelength resolution. A sharp tip is brought close to the surface under study. The tip collects photons by coupling the near field above the surface to propagating modes inside a tapered optical fiber. The resolution of this technique is limited by the size of the tip's aperture, which can reach dimensions of only 50 nm or even less. To study the confinement and propagation of SPPs using this scheme, the tip has to be brought within a distance $\hat{z}$ of the surface. For silver and gold films, this typically requires a gap of about 100 nm.

![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356878.webp|700](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162356878.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=71&rect=141,119,291,249|•]]

To avoid interference with the detection scheme, optical excitation of SPPs usually takes place via prism coupling or tightly focused beams. In figure (a), the near-field image of the uncoated prism face is shown, and in (b), the image at an angle greater than the critical angle is presented. The exponentially decaying tail is due to SPP propagation away from the excitation region.

![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162357016.webp|700](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162357016.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=72&rect=101,507,344,612|•]]

---
## 4.2 Fluorescence Imaging 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=74&selection=4,0,6,20|•]]

Instead of locally collecting the optical near field of SPPs using an apertured fiber tip, emitters such as quantum dots can be directly placed in the tail of the SPP field. If the frequency of the propagating SPP lies within the spectral absorption range of the emitter, excitation via SPPs is possible. The intensity of the emitted fluorescence radiation is proportional to the local field intensity at the emitter's position. Therefore, SPP propagation can be mapped by coating the surface with a dielectric film doped with emitters. An example of this is shown for (a) a silver nanoparticle and (b) a silver nanowire.

![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162357150.webp|700](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162357150.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=75&rect=127,127,311,349|•]]

---
## 4.3 Leakage Radiation 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=76&selection=4,0,6,17|•]]

The dispersion curve of SPPs excited at the metal/air interface lies outside the light cone, and the mode does not suffer radiation loss into the air region—assuming a perfectly flat interface with negligible roughness. However, energy can be lost into a supporting substrate with a higher index $n_s$, which occurs at all points on the dispersion curve that lie to the left of the substrate's light line $k_s = n_s\omega/c$. This condition ensures leakage radiation of the SPP into the substrate:
$$
k_0b < \beta < k_0n_s
$$
This provides a second loss channel, in addition to the inherent absorptive losses.

![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162357264.webp|700](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162357264.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=76&rect=111,111,332,257|•]]

Apart from observing SPP propagation, this technique can also directly visualize the SPP dispersion relation. The SPPs at the air interface were excited by a focused light beam, using scattering from random surface roughness for phase-matching. Leakage radiation into the silica substrate was imaged using a CCD camera. Image (a) shows a flat film where the radiation is emitted within a cone at the surface plasmon angle $\theta_{SPP}$, defined by $n_sk_0\sin\theta_{SPP} = \beta$, which intersects the plane of the CCD in a circular pattern.

![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162357377.webp|700](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162357377.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=78&rect=93,131,353,336|•]]

For light of varying frequencies, the resulting wave vector can be determined by computing the SPP angle of leakage radiation. This allows access to the complex dispersion relation of a structured metal surface.

---
## 4.4 Scattered Light Imaging 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=79&selection=63,0,65,23|•]]

The propagation of SPPs at a metal/air interface can often be imaged by collecting the light lost to radiation due to scattering at random surface protrusions. Scattering at these surface irregularities allows SPPs with wave vector $\beta$ larger than $k_0$ to acquire a momentum component $\Delta k_x$, which can lower $\beta$ into the air light cone region, leading to coupling to the radiation continuum and thus photon emission. For increasingly flat films with good surface quality, the amount of scattering is reduced, making detailed determinations, such as the propagation length, more difficult. This technique also enables the determination of the dispersion relation of SPPs on modulated surfaces.

---
# 5 Localized Surface Plasmons 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=82&selection=2,0,2,26|•]]

The second fundamental excitation in plasmonics is the so-called localized surface plasmons. In contrast to the propagating SPPs already discussed, these are non-propagating excitations of the conduction electrons coupled to the electromagnetic field.

---
## 5.1 Normal Modes of Sub-Wavelength Metal Particles 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=83&selection=10,0,12,46|•]]

The interaction of a particle of size $d$ with light of wavelength $\lambda$ can be analyzed using the simple _quasi-static approximation_, provided that $d \ll \lambda$. In this case, the phase of the field is practically constant over the particle volume, reducing the problem to the interaction of a particle with an electrostatic field. The harmonic time dependence can then be added to the solution once the field distributions are known. 

Consider the most convenient geometry for analytical treatment: a homogeneous, isotropic sphere of radius $a$ located at the origin in a uniform, static electric field $\textbf{E} = E_0\hat{\textbf{z}}$. The surrounding medium is isotropic and non-absorbing with dielectric constant $\varepsilon_m$. For simplicity, assume that the dielectric response is a simple complex number $\varepsilon$.

![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162357482.webp|700](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162357482.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=83&rect=110,88,332,200|•]]

In this electrostatic approach, the interest lies in solving the Laplace equation for the potential: 
$$
\nabla^2\Phi = 0.
$$
From this, the electric field can be calculated as $\textbf{E} = -\nabla\Phi$. The general solution is of the form 
$$
\Phi(r, \theta) = \sum_{l=0}^{\infty}\left[A_l r^l + B_l r^{-(l+1)}\right] P_l(\cos \theta),
$$
where $P_l(\cos \theta)$ are the Legendre polynomials of order $l$, and $\theta$ is the angle between the position vector $\mathbf{r}$ at point P and the z-axis. Enforcing boundary conditions, the solution for the potential inside and outside the sphere is obtained as:
$$
\begin{aligned}
\Phi_{\text{in}} & = -\frac{3 \varepsilon_m}{\varepsilon + 2 \varepsilon_m} E_0 r \cos \theta, \\
\Phi_{\text{out}} & = -E_0 r \cos \theta + \frac{\varepsilon - \varepsilon_m}{\varepsilon + 2 \varepsilon_m} E_0 a^3 \frac{\cos \theta}{r^2}.
\end{aligned}
$$

The second equation, $\Phi_{\text{out}}$, describes the superposition of the applied field and that of a dipole located at the particle center. By introducing the dipole moment $\mathbf{p}$, it can be rewritten as:
$$
\begin{aligned}
\Phi_{\text{out}} & = -E_0 r \cos \theta + \frac{\mathbf{p} \cdot \mathbf{r}}{4 \pi \varepsilon_0 \varepsilon_m r^3}, \\
\mathbf{p} & = 4 \pi \varepsilon_0 \varepsilon_m a^3 \frac{\varepsilon - \varepsilon_m}{\varepsilon + 2 \varepsilon_m} \mathbf{E}_0.
\end{aligned}
$$

The applied field induces a dipole moment inside the sphere with magnitude proportional to $\left|\mathbf{E}_0\right|$. By introducing the polarizability $\alpha$, defined as $\mathbf{p} = \varepsilon_0 \varepsilon_m \alpha \mathbf{E}_0$, the polarizability becomes:
$$
\alpha = 4 \pi a^3 \frac{\varepsilon - \varepsilon_m}{\varepsilon + 2 \varepsilon_m}.
$$

This is the main result of this section: the complex polarizability of a small sphere of sub-wavelength diameter in an electrostatic potential. Assuming a Drude form for the dielectric response of silver, we find:

![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162357585.webp|700](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162357585.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=85&rect=46,109,392,225|•]]

The polarizability experiences a resonant enhancement under the condition that $\varepsilon + 2\varepsilon_m$ is minimized. For a slowly varying $\mathfrak{Im}(\varepsilon)$, this reduces to:
$$
\mathfrak{Re}(\varepsilon(\omega)) = -2\varepsilon_m.
$$
This is known as the Fröhlich condition, and the associated mode is the _dipole surface plasmon_. For our problem, this criterion is met at $\omega_0 = \omega_p / \sqrt{3}$. The resonance strongly depends on the dielectric environment, with a red-shift as $\varepsilon_m$ increases. By calculating the electric field as $\textbf{E} = -\nabla\Phi$, the resonant $\alpha$ implies a resonant enhancement of both the internal and dipolar ($E_{\text{out}}$) fields. This enhancement is the foundation for many promising applications of plasmonics.

For a small sphere ($a \ll \lambda$), its representation as an ideal dipole remains valid in the quasi-static regime, allowing for time-varying fields but neglecting spatial retardation effects over the particle volume. Under plane-wave illumination:
$$
\textbf{E}(\textbf{r}, t) = E_0 e^{-i\omega t},
$$
the fields induce an oscillating dipole moment:
$$
p(t) = \varepsilon_0 \varepsilon_m \alpha E_0 e^{-i\omega t}.
$$
The radiation of this dipole leads to scattering of the plane wave by the sphere, represented as radiation by a point dipole. Resonantly enhanced polarizability $\alpha$ also increases the efficiency of light scattering and absorption by the nanoparticle. The cross sections for scattering and absorption scale as:
$$
\begin{aligned}
C_{\text{sca}} & \sim a^6, \\
C_{\text{abs}} & \sim a^3.
\end{aligned}
$$

Thus, absorption dominates over scattering for smaller particles. The explicit expression for the extinction cross-section in the quasi-static limit is:
$$
C_{\text{ext}} = C_{\text{abs}} + C_{\text{sca}} = 9 \frac{\omega}{c} \varepsilon_m^{3/2} V \frac{\varepsilon_2}{\left[\varepsilon_1 + 2\varepsilon_m\right]^2 + \varepsilon_2^2}.
$$

This is illustrated for a silver sphere:

![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162357650.webp|700](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162357650.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=88&rect=109,449,320,604|•]]

Despite assuming a spherical shape, this special case describes the basic physics of localized surface plasmon resonances well. For ellipsoidal particles with semi-axes:
$$
a_1 \leq a_2 \leq a_3,
$$
spheroidal nanoparticles exhibit two spectrally separated plasmon resonances, corresponding to conduction electron oscillations along their major or minor axes. Oscillations along the major axis exhibit significant red-shifts compared to a sphere. _Mie Theory_ provides a complete theory for the scattering and absorption of electromagnetic radiation by a sphere.


>[!DANGER] Work in Progress from here on...


---
## 5.2 Beyond the Quasi-Static Approximation and Plasmon Lifetime 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=90&selection=49,0,52,8|•]]

We now consider two regimes beyond the quasi-static approximation:
1. Larger particles, where retardation effects become significant.
2. Very small particles ($a < 10$ nm), where particle dimensions are smaller than the mean free path of oscillating electrons.

For larger particles, the breakdown of the quasi-static approximation arises from the size parameter:
$$
x = \frac{\pi a}{\lambda_0}.
$$
Expanding the first TM mode of Mie theory for a sphere of volume $V$ yields:
$$
\alpha_{\text{Sphere}} = \frac{1 - \frac{1}{10}\left(\varepsilon + \varepsilon_m\right)x^2 + O(x^4)}{\frac{1}{3} + \frac{\varepsilon_m}{\varepsilon - \varepsilon_m} - \frac{1}{30}\left(\varepsilon + 10 \varepsilon_m\right)x^2 - i\frac{4 \pi^2 \varepsilon_m^{3/2} V}{3\lambda_0^3} + O(x^4)} V.
$$

The quadratic terms in $x$ account for retardation effects and shift the plasmon resonance to lower energies. This red-shift can be intuitively understood as the increasing distance between charges at opposite particle interfaces reduces the restoring force, lowering the resonance frequency. Interband transitions also decrease as the resonance moves away from the interband transition edge. [[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=91&selection=40,15,50,4|•]]





>[!info] This content is from the second book mentioned in the beginning of this document. However, after working through it, I realised that I do not like the writing style and structure at all, so I switched to the first book, which is the content thus far.

---
# 6 Wood's Anomalies
[[Reading/Books/Plasmonics/Plasmonics - From Basics to Advanced Topics.pdf#page=53&selection=1,0,1,26|•]]

Although the notion of surface plasmon polaritons (SPPs) appeared long afterwards, their generation was described at the very beginning of the 20th century. In 1902, Wood observed the spectra obtained using an optical grating of a continuous light source produced by an incandescent lamp (a filament is heated until it glows). He found that, under certain conditions, the drop maximum to minimum occurred within a range of wavelengths smaller than the distance between the sodium lines. Wood found narrow bright and dark lines in various spectra obtained from different conditions of incidence. However, these lines were only present for p-polarised light, so that the magnetic field is parallel to the grating grooves. The theory of gratings was in an early stage, thus the term 'anomaly'.
Rayleigh proposed tat an anomaly in a given spectrum occurs at the wavelength for which a scattered wave emerges tangentially to the grating surface. The grating formula,
$$\sin(\theta_n) = \sin(\theta) + \frac{n\lambda}{d}$$
with $\theta$ the angle of incidence, $\theta_n$ the angle of diffraction, and $d$ is the groove period turned out to be a great tool to predict the Wood's anomalies. This formula allows one to calculate the diffraction angle of any scattered order $n$ given the right parameters. 
The 'passing-off' (as Rayleigh termed it), occurs when $\sin(\theta_n)=\pm 1$, such that the wavelengths generating this passing-off are:
$$\frac{n\lambda}{d} = -\sin(\theta) \pm 1, \quad n = \pm 1, \pm 2, \pm 3, \ldots$$
At normal incidence, uniform illumination was observed. With an incidence on the other side of the normal, two lines separated and they were very brilliant up to a certain wavelength, before the intensity suddenly dropped to zero.  
However, the Rayleigh prediction is unable to explain some vital experimental results, which come mainly from the fact that the grating equation is a purely geometric one. Fano distinguished two kinds of anomalies:
- A sharp/Rayleigh anomaly: An edge of intensity appears along the spectrum at sharply defined wavelengths governed by the grating formula using the Rayleigh conjecture. 
- A diffuse anomaly: It extends for a wavelength interval from the first one (the edge) to the red, and “consists generally of a minimum and a maximum of intensity (one dark band and one bright band).
He explained that the Rayleigh conjecture predicts the location of the sharp anomaly, while Wood observed the diffuse anomaly. Further he explained the diffuse anomaly by 'a forced resonance', related to the 'leaky waves supportable by the grating'. 

The theory of Wood’s anomalies described in this chapter is based on electromagnetics. In other words, it starts from the macroscopic properties of metals through electromagnetic parameters like permittivity and permeability and never takes into account their microscopic structure
# 7 Propagation of Surface Plasmon Polaritons on a Metallic Surface
## 7.1 Flat Surface
[[Reading/Books/Plasmonics/Plasmonics - From Basics to Advanced Topics.pdf#page=60&selection=10,0,10,30|•]]

In a scattering problem, an object is illuminated by an incident electromagnetic wave, and one is interested in the total field at any point in space. This total field consists of the known incident field and the scattered field generated by the object. This chapter treats the scattering on a metallic half-plane:
![Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162357698.webp|700](/img/user/Attachments/Notes/Plasmonics/Plasmonics/IMG-0128162357698.webp)[[Reading/Books/Plasmonics/Plasmonics - From Basics to Advanced Topics.pdf#page=61&rect=165,478,388,612|•]]
An incident plane wave propagating in a lossless dielectric material of optical index $\nu_1=\sqrt{\varepsilon_1}$, where $\varepsilon_1$  is the relative permittivity, illuminates a non-magnetic metallic half-plane of complex index $\nu_2=\sqrt{\varepsilon_2}$. An incident field $\mathbf{F}^{\mathbf{i}}$ with unit amplitude can be written in the form:

$$\begin{align*}
\mathbf{F}^{\mathbf{i}}=F^i \hat{\mathbf{z}}=\exp \left(i k_1(\alpha x-\beta y)\right) \hat{\mathbf{z}}
\end{align*}$$
with $\hat{\mathbf{z}}$ being the unit vector of the $z$-axis (orthogonal to the $x y$ plane), $k_1=k \nu_1=\frac{2 \pi \nu_1}{\lambda}$ being the wavenumber in the dielectric material and 
$$\begin{align*}
\begin{gathered}
F^i=\left\{\begin{array}{l}
\text { incident electric field } E^i \text { for s-polarized light, } \\
\text { incident magnetic field } H^i \text { for p-polarized light, }
\end{array}\right. \\
\alpha=\sin (\theta), \quad \beta=\cos (\theta)
\end{gathered}
\end{align*}$$

with $\theta$ being the angle of incidence, $\alpha$ and $\beta$ being called normalized propagation constants of the wave in the following. It can be shown that the projections on the $z$-axis of the reflected and transmitted fields $F^r$ and $F^t$ can be written as:

$$F_r = r \exp \left( i k_1 \left( \alpha x + i \beta y \right) \right)$$
$$F_t = t \exp \left( i k_1 \left( \alpha x - i \gamma y \right) \right)$$
$$\gamma = \sqrt{\nu^2 - \alpha^2}, \quad \nu = \frac{\nu_2}{\nu_1}$$
{ #eq-reflected-transmitted-field}


If the metal is replaced by a lossless dielectric material, the choice of determination of $\gamma$ is clear: The transmitted wave must propagate downwards to satisfy a radiation condition, thus the real value of  must be positive.  
The assumption that $\nu$ is purely imaginary, i.e., $\nu = i \nu''$ is close to the actual values of indices of metals in the visible region, and leads to 
$$
\gamma = \sqrt{-\nu''^2 - \alpha^2} = \pm i \sqrt{\nu''^2 + \alpha^2}.
$$
Since the field must decrease in modulus as $y \to -\infty$, the imaginary part must be positive. Thus, to adopt a determination of $\gamma$ which applies to any material, the authorized region of the complex plane of $\gamma$ must include both half-lines defined by $\text{Im} (\gamma) = 0, \text{Re} (\gamma) > 0$ and $\text{Re} (\gamma) = 0, \text{Im} (\gamma) > 0$.  
In reality, the index of metals is neither real nor purely imaginary, but its real and imaginary parts are always positive. Thus, a natural way to adopt a general determination for $\gamma$ is to choose in the complex plane a half-plane containing both the positive real axis (choice of $\nu$ for a lossless dielectric material) and the positive imaginary axis (choice of $\nu$ for a purely imaginary index).  
In the following, we will determine $\gamma$ from:  
$$
\text{Re} \{\gamma\} + \text{Im} \{\gamma\} > 0.$$
Eventually, this leads to the Fresnel coefficients for p-polarised light,
$$ r = \frac{\beta / \varepsilon_1 - \gamma / \varepsilon_2}{\beta / \varepsilon_1 + \gamma / \varepsilon_2}, \quad t = \frac{2 \beta / \varepsilon_1}{\beta / \varepsilon_1 + \gamma / \varepsilon_2}, $$
which allows to solve the problem of scattering on a flat interface.
## 7.2 Guiding by a Flat Surface: The Surface Plasmon Polariton
[[Reading/Books/Plasmonics/Plasmonics - From Basics to Advanced Topics.pdf#page=62&selection=180,0,180,45|•]]

We want to know whether a surface wave can propagate at the surface of the metal. Classically, a guided wave is a wave propagating along the x-axis and satisfies a radiation condition at infinity:
 - For $y → +\infty$, the field must propagate upwards or vanish,  
 - For $y → −\infty$, the field must propagate downwards or vanish.

In addition to these conditions, the total field in the guided wave must satisfy the Maxwell equations and boundary conditions at the interface. The field above the interface contains the incident wave, which does not satisfy the radiation condition since it propagates towards the interface. In other words, a guided wave corresponds to a problem of scattering in which the incident field does not exist. At first glance, such a guided wave should not exist. Indeed, in the scattering problem, the incident energy is shared between the scattered field and the losses inside the metal. On the other hand, in the problem of guiding, there is no incident energy at all, and of course the existence of a field generates losses in the metal. Thus it seems that such a wave cannot satisfy the energy balance. This remark is quite correct as far as the propagation constant of the guided wave is real. 
Considering the expressions of the reflected and transmitted [[Notes/Plasmonics/Plasmonics#^eq-reflected-transmitted-field\|waves]], the propagation constant $k_1\alpha$ is real since it is imposed by the incident plane wave. This requirement does not hold in guiding, and it can be conjectured that a surface wave may propagate along the x-axis with an exponentially decreasing amplitude, due to the losses in the metal. The consequence: The imaginary part of the propagation constant must be positive, if its real part is positive. 
Therefore, the search for a surface wave leads to the search for a solution of the field in a scattering problem, but without an incident wave (or the 'homogeneous solution to the Maxwell equations).
This leads to several solutions:

- If $\nu = +1$, it means the metal has been replaced by the same dielectric material as above the interface.
- If $\nu=-1$, the solution is unrealistic for non-magnetic materials.

The conclusion is that, for s-polarised light, the propagation on a flat metal surface of a guided wave is impossible. Regarding p-polarised light, the solution is 
$$\alpha=\tilde{\alpha}^\text{plane}=\pm \nu/\sqrt{1+\nu^2},$$
where the tilde indicates a surface wave, and the plane superscript indicates that the interface is a plane. The two opposite values for $\alpha$ represent the constants of propagation of two waves propagating in opposite directions. This kind of wave is called surface plasmon (polariton). In normalised form, the magnetic field $H$ is given as

$$
H = 
\begin{cases} 
\exp \left( i k_1 \left( \tilde{\alpha}_{\text{plane}} x + \tilde{\beta}_{\text{plane}} y \right) \right), & \text{in the dielectric}, \\
\exp \left( i k_1 \left( \tilde{\alpha}_{\text{plane}} x - \tilde{\gamma}_{\text{plane}} y \right) \right), & \text{in the metal}.
\end{cases}
$$
The real part of $\tilde{\alpha}_{\text{plane}}$ is slightly greater than unity, while its imaginary part is very small. This is a general result for metals in the visible and infrared regions, explaining why SPPs cannot be excited by a plane wave.  
![[Attachments/Notes/Plasmonics/IMG-0122174557-5.webp\|700]]![[Attachments/Notes/Plasmonics/IMG-0122174557-6.webp\|700]][[Reading/Books/Plasmonics/Plasmonics - From Basics to Advanced Topics.pdf#page=65&rect=50,454,392,493|•]]

The propagation constant on the $x$-axis of a plane wave is equal to $k_1 \sin(\theta)$ (circle), which is always smaller than $k_1$ in modulus. In contrast, the real part of $k_1 \tilde{\alpha}_{\text{plane}}$ is larger. Since the surface is flat, a plane wave cannot excite a field with a significantly different propagation constant and, hence, cannot excite the SPP.
## 7.3 SPP and Brewster Effect
[[Reading/Books/Plasmonics/Plasmonics - From Basics to Advanced Topics.pdf#page=65&selection=236,0,236,23|•]]


---
<?xml version="1.0" encoding="UTF-8" standalone="no"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="200" height="800px" viewBox="0 0 1024 1024" class="icon" version="1.1" id="svg6" sodipodi:docname="tree-svgrepo-com.svg" inkscape:version="1.2.2 (b0a8486541, 2022-12-01)">  <defs id="defs10">    <linearGradient inkscape:collect="always" id="linearGradient1672">      <stop style="stop-color:#824522;stop-opacity:1;" offset="0" id="stop1668"/>      <stop style="stop-color:#c46d00;stop-opacity:1;" offset="1" id="stop1670"/>    </linearGradient>    <linearGradient inkscape:collect="always" id="linearGradient882">      <stop style="stop-color:#ffe400;stop-opacity:1;" offset="0" id="stop878"/>      <stop style="stop-color:#ff6d00;stop-opacity:1;" offset="1" id="stop880"/>    </linearGradient>    <linearGradient inkscape:collect="always" xlink:href="#linearGradient882" id="linearGradient884" x1="128.59801" y1="205.97394" x2="869.52509" y2="404.38843" gradientUnits="userSpaceOnUse"/>    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1672" id="linearGradient1674" x1="536.1637" y1="568.41846" x2="536.1637" y2="978.35699" gradientUnits="userSpaceOnUse"/>  </defs>  <sodipodi:namedview id="namedview8" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" showgrid="false" inkscape:zoom="1.07" inkscape:cx="400.46729" inkscape:cy="400" inkscape:window-width="1920" inkscape:window-height="1052" inkscape:window-x="960" inkscape:window-y="0" inkscape:window-maximized="1" inkscape:current-layer="svg6"/>  <path d="M220.046 177.591c3.094 12.374 3.094 17.015 12.374 27.069 4.64 5.414 10.054 10.054 23.975 14.694 20.108 6.187 27.069-5.414 30.162-9.281l7.734 1.547c3.094 1.547 5.414 3.094 5.414 3.094l0.773-3.867-5.414-0.773c-3.867-1.547-6.96-3.094-6.96-3.094s4.64-15.468-6.187-27.842c-26.295-29.389-68.832-12.374-69.605-10.827l5.414 3.094 2.32 6.187zM564.203 285.866c-1.547 0.773 2.32 4.64 0 10.827-0.773 3.094-4.64 6.96-6.96 9.281-16.241 14.694-23.975 19.335-30.936 42.536-3.867 12.374-6.96 23.975-1.547 48.723 7.734 35.576 31.709 37.123 40.216 37.896 1.547 0 3.867 6.96 4.64 12.374 0.773 6.187 0 11.601 0 11.601s3.094 3.867 6.187-2.32c0-0.773-2.32-6.187-3.094-9.281-0.773-6.96-0.773-13.148-0.773-13.148s27.069-6.187 36.349-33.256c22.428-64.965-40.216-116.782-44.083-115.235zM461.343 171.404c1.547 0 3.867 6.96 4.64 12.374 0.773 6.187 0 11.601 0 11.601s3.094 3.867 6.187-2.32c0-0.773-2.32-6.187-3.094-9.281-0.773-6.96-0.773-13.148-0.773-13.148s27.069-5.414 37.123-33.256c21.655-65.738-40.99-117.555-44.083-116.008-1.547 0.773 2.32 4.64 0 10.827-0.773 3.094-4.64 6.96-6.96 9.281-16.241 14.694-23.975 19.335-30.936 42.536-3.867 12.374-6.96 23.975-1.547 48.723 6.96 36.349 30.936 37.123 39.443 38.669zM868.145 361.658c-0.773-0.773-3.094 3.867-8.507 4.64l-10.054-1.547c-18.561-6.187-25.522-10.054-46.403-5.414-10.827 2.32-21.655 5.414-37.896 19.335-24.748 20.881-14.694 40.216-12.374 47.177 0.773 1.547-3.867 6.187-7.734 8.507-4.64 3.867-8.507 4.64-8.507 4.64s-1.547 4.64 3.867 3.867l6.187-6.187c4.64-3.867 10.054-6.187 10.054-6.187s16.241 18.561 40.99 13.921c60.324-10.827 73.472-80.432 70.378-82.753zM495.372 175.271c-3.867 7.734-6.96 16.241-6.187 33.256 1.547 25.522 18.561 28.615 23.975 30.162 0.773 0 1.547 5.414 1.547 9.281 0 4.64-1.547 7.734-1.547 7.734s1.547 3.094 4.64-0.773l-1.547-6.96c0-4.64 0.773-9.281 0.773-9.281s19.335-1.547 28.615-19.335c21.655-43.31-16.241-84.299-18.561-84.299-0.773 0 0.773 3.094-0.773 7.734l-6.187 5.414c-12.374 9.281-17.788 12.374-24.748 27.069zM640.769 226.315l-3.867 7.734c1.547 5.414 4.64 2.32 4.64 2.32s0-4.64 1.547-10.054c1.547-4.64 3.867-10.054 5.414-10.054 6.96 0 28.615 2.32 40.216-27.842 7.734-20.881 6.187-31.709 4.64-42.536-3.094-20.881-9.281-26.295-21.655-40.99l-4.64-8.507c-0.773-6.187 3.094-9.281 1.547-10.054-3.094-1.547-64.191 34.802-53.364 94.353 4.64 25.522 27.842 34.029 27.842 34.029s-0.773 5.414-2.32 11.601zM381.684 553.458c-4.64-2.32-9.281-6.187-9.281-7.734 1.547-6.96 8.507-27.842-19.335-44.857-18.561-11.601-29.389-13.148-40.216-13.921-20.881-1.547-27.069 3.094-44.857 12.374l-10.054 3.094c-6.187-0.773-8.507-4.64-9.281-3.867-2.32 2.32 20.881 69.605 81.206 71.925 25.522 0.773 38.669-20.108 38.669-20.108s5.414 1.547 10.827 4.64l6.96 5.414c6.187 0 3.867-3.867 3.867-3.867s-3.867-0.773-8.507-3.094zM783.846 337.683c14.694-11.601 19.335-19.335 23.202-28.615 6.96-16.241 5.414-22.428 3.094-39.443v-8.507c2.32-4.64 6.187-5.414 5.414-6.187-1.547-2.32-61.871-3.867-81.206 44.083-8.507 20.108 4.64 37.123 4.64 37.123s-3.094 3.867-6.96 6.96l-6.187 3.867c-1.547 4.64 2.32 3.867 2.32 3.867s2.32-3.094 5.414-6.187l8.507-4.64c5.414 2.32 20.108 13.921 41.763-2.32zM497.692 459.878s1.547 3.094 3.094 7.734l0.773 6.187 3.867-0.773s-1.547-2.32-3.094-6.187l-0.773-7.734c3.867-2.32 17.015-9.281 11.601-30.936-3.867-14.694-8.507-20.108-13.921-25.522-10.054-10.054-14.694-10.827-27.842-14.694l-6.187-3.094-3.094-6.187c-2.32 0-22.428 44.083 6.96 72.699 12.374 12.374 28.615 8.507 28.615 8.507zM210.765 302.88c16.241 6.96 29.389-3.094 29.389-3.094l5.414 5.414 3.094 5.414c3.867 1.547 3.094-1.547 3.094-1.547l-5.414-4.64-3.867-6.96c2.32-3.867 11.601-15.468-0.773-32.482-8.507-11.601-15.468-15.468-22.428-18.561-13.148-6.187-17.788-4.64-30.936-3.094l-6.96-0.773c-2.32-1.547-3.094-4.64-3.867-4.64-2.32 1.547-3.867 49.497 33.256 64.965zM260.262 464.518s4.64 1.547 8.507 3.867l5.414 4.64c4.64 0 3.094-3.094 3.094-3.094s-3.867-0.773-7.734-2.32c-3.867-1.547-7.734-4.64-6.96-6.187 0.773-5.414 6.187-22.428-15.468-35.576-14.694-9.281-23.975-10.054-32.482-10.827-17.015-0.773-21.655 3.094-36.349 10.054l-7.734 2.32c-4.64 0-6.96-3.867-7.734-3.094-1.547 2.32 17.015 56.457 66.511 57.231 20.881-0.773 30.936-17.015 30.936-17.015zM373.176 195.379c-12.374-7.734-17.015-6.96-30.162-6.96l-6.96-1.547c-3.094-2.32-3.094-5.414-4.64-5.414-2.32 0.773-10.054 47.95 25.522 68.832 14.694 8.507 29.389 0.773 29.389 0.773s3.094 3.094 4.64 6.187l2.32 5.414c3.867 1.547 3.094-1.547 3.094-1.547l-3.867-4.64-3.094-7.734c3.094-3.867 13.921-13.921 3.094-32.482-6.96-13.148-13.148-17.015-19.335-20.881zM511.613 502.414l-5.414-4.64c-1.547-3.867 0-6.187-1.547-6.187-2.32 0-32.482 37.123-11.601 71.925 8.507 14.694 25.522 14.694 25.522 14.694l1.547 7.734-0.773 6.187c2.32 3.094 3.867 0.773 3.867 0.773l-1.547-6.187c0-3.094 0-7.734 0.773-7.734 4.64-1.547 18.561-5.414 18.561-27.069 0-14.694-3.094-21.655-6.96-27.842-6.187-13.148-10.827-15.468-22.428-21.655zM568.844 263.437s-0.773 3.867-2.32 7.734l-3.867 4.64c0.773 3.867 3.094 2.32 3.094 2.32s0-3.094 1.547-6.187l4.64-6.187c4.64 0.773 18.561 3.867 29.389-15.468 6.96-13.148 6.96-20.108 6.96-27.842 0-13.921-3.867-18.561-10.827-29.389l-2.32-6.187c0-3.867 2.32-5.414 1.547-6.187-1.547-1.547-45.63 17.788-43.31 58.778 0.773 16.241 15.468 23.975 15.468 23.975zM647.729 354.697s-0.773 3.867-3.094 7.734l-3.867 4.64c0 3.867 3.094 2.32 3.094 2.32s0.773-3.094 2.32-6.187l4.64-6.187c4.64 0.773 18.561 4.64 29.389-14.694 6.96-13.148 7.734-20.108 7.734-27.842 0-13.921-3.094-18.561-10.054-29.389l-2.32-6.187c0-3.867 3.094-5.414 2.32-6.187-1.547-1.547-46.403 16.241-45.63 57.231 1.547 16.241 15.468 24.748 15.468 24.748zM378.59 309.067l-3.094-6.187c-2.32 0-19.335 44.857 11.601 71.925 13.148 11.601 28.615 6.187 28.615 6.187s2.32 3.094 3.867 6.96l1.547 6.187 3.867-0.773s-2.32-2.32-3.094-6.187l-1.547-7.734c3.867-3.094 16.241-10.827 9.281-31.709-4.64-13.921-10.054-19.335-15.468-24.748-10.054-10.054-15.468-10.054-28.615-13.148l-6.96-0.773zM266.449 411.928c5.414 11.601 11.601 22.428 32.482 36.349 30.162 20.881 48.723 4.64 54.911 0 1.547-0.773 7.734 2.32 11.601 6.187 4.64 3.867 7.734 8.507 7.734 8.507s5.414 0.773 3.094-5.414l-8.507-4.64c-5.414-3.867-10.054-9.281-10.054-9.281s15.468-23.202 3.094-49.497c-28.615-62.644-109.048-56.457-111.368-53.364-0.773 1.547 4.64 2.32 7.734 7.734 1.547 3.094 1.547 7.734 1.547 11.601-1.547 21.655-3.094 30.162 7.734 51.817zM340.694 280.452c-14.694-44.083-70.378-45.63-71.925-43.31-0.773 0.773 3.094 1.547 4.64 6.187v7.734c-2.32 14.694-4.64 20.108 0.773 35.576 3.094 7.734 6.187 15.468 19.335 27.069 18.561 16.241 32.482 6.96 37.123 3.867l7.734 4.64 4.64 6.187s3.867 0.773 2.32-3.867l-5.414-3.867c-3.094-3.094-6.187-6.96-6.187-6.96s13.148-14.694 6.96-33.256zM761.417 170.631c-0.773 0-0.773 3.094-3.867 6.187l-7.734 2.32c-14.694 2.32-20.881 2.32-33.256 12.374-6.96 5.414-13.148 10.827-19.335 27.069-9.281 23.202 3.867 32.482 8.507 36.349 0.773 0.773-0.773 5.414-2.32 8.507-1.547 3.867-4.64 6.187-4.64 6.187s0 3.867 3.867 0.773l1.547-6.187c2.32-4.64 4.64-7.734 4.64-7.734s18.561 7.734 34.029-4.64c38.669-27.842 21.655-80.432 18.561-81.206zM324.453 127.321c2.32 8.507 4.64 16.241 16.241 28.615 17.015 17.788 31.709 9.281 36.349 7.734l6.96 5.414 3.867 6.187s3.094 1.547 2.32-3.094l-5.414-4.64c-3.094-3.867-5.414-7.734-5.414-7.734s14.694-13.921 10.054-33.256c-10.827-45.63-65.738-51.817-67.285-49.497-0.773 0.773 3.094 2.32 3.867 6.187l-0.773 7.734c-2.32 15.468-4.64 20.881-0.773 36.349zM213.085 388.726c0.773-0.773 5.414 0.773 8.507 2.32 3.867 1.547 6.187 4.64 6.187 4.64s3.867 0 0.773-3.867l-6.187-2.32-7.734-4.64s7.734-18.561-3.867-34.029c-27.842-37.896-80.432-22.428-81.206-19.335 0 0.773 3.094 0.773 6.187 3.867l2.32 7.734c1.547 14.694 1.547 20.881 11.601 33.256 5.414 6.96 10.827 13.148 26.295 19.335 23.202 10.054 33.256-3.094 37.123-6.96zM501.559 305.2c-1.547-17.015-6.187-23.975-10.827-30.936-9.281-13.148-14.694-15.468-28.615-21.655l-6.187-4.64c-2.32-3.867-0.773-6.96-2.32-6.96-2.32 0-34.029 45.63-6.187 83.526 11.601 16.241 31.709 13.921 31.709 13.921s1.547 3.867 2.32 8.507v6.96c3.094 3.867 3.867 0 3.867 0s-1.547-3.094-2.32-6.96c-0.773-3.867-0.773-8.507 0.773-9.281 4.64-2.32 20.108-7.734 17.788-32.482zM405.659 420.435c-0.773 0.773 2.32 3.094 1.547 7.734l-3.094 6.96c-8.507 12.374-13.148 16.241-13.921 32.482-0.773 8.507-0.773 17.015 6.187 32.482 10.054 22.428 26.295 19.335 31.709 19.335 0.773 0 3.867 3.867 4.64 7.734 1.547 3.867 1.547 7.734 1.547 7.734s3.094 2.32 3.867-2.32l-3.094-6.187c-1.547-4.64-2.32-8.507-2.32-8.507s17.788-7.734 20.108-27.842c5.414-47.177-44.857-71.152-47.177-69.605zM694.906 370.165l-3.867 6.96-6.96 3.094c-14.694 3.094-20.108 3.867-32.482 15.468-6.187 6.187-11.601 12.374-17.015 27.842-6.96 23.975 6.96 32.482 11.601 35.576 0.773 0.773 0 5.414-1.547 9.281s-3.867 6.96-3.867 6.96 0.773 3.867 3.867 0.773l1.547-6.96c1.547-4.64 3.867-8.507 3.867-8.507s19.335 6.187 33.256-7.734c35.576-31.709 14.694-82.753 11.601-82.753zM575.804 133.508c0.773 0 1.547 5.414 1.547 9.281s-1.547 7.734-1.547 7.734 1.547 3.094 3.867-0.773l-0.773-6.96c0-4.64 1.547-9.281 1.547-9.281s20.108 0 30.162-17.015c23.975-40.216-10.827-82.753-13.921-82.753-0.773 0 0.773 3.094-1.547 7.734l-6.187 4.64c-13.148 7.734-18.561 10.054-26.295 23.975-3.867 7.734-7.734 14.694-7.734 31.709 0 26.295 15.468 30.162 20.881 31.709z" fill="#148d13" id="path2" style="fill-opacity:1;fill:url(#linearGradient884);stroke:#fffefe;stroke-opacity:1;stroke-width:1.92;stroke-dasharray:none"/>  <path d="M650.050 620.743c-155.451 192.574-73.472 341.838-46.403 352.665 3.094 1.547-122.969 4.64-121.422 3.867 58.778-35.576-64.191-318.636-87.393-367.36-9.281-19.335 9.281 2.32 43.31-10.827 27.069-10.827 19.335-40.99 35.576-34.029 12.374 5.414-3.867 50.27 21.655 91.26 4.64 7.734 71.925 9.281 73.472-129.156 0.773-62.644 28.615 6.96 55.684 17.788s35.576 6.96 91.26-69.605c5.414-9.281 47.177 5.414-65.738 145.397z" fill="#824522" id="path4" style="stroke-width:1.92;stroke-dasharray:none;stroke:#ffffff;stroke-opacity:1;fill-opacity:1;fill:url(#linearGradient1674)"/></svg>