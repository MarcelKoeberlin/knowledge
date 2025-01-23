---
{"dg-publish":true,"permalink":"/notes/plasmonics/","updated":"2025-01-23T15:18:23.000+01:00"}
---

These notes are following mainly along [Plasmonics: Fundamentals and Applications](https://link.springer.com/book/10.1007/0-387-37825-1)and [Plasmonics: From Basics to Advanced Topics](https://link.springer.com/book/10.1007/978-3-642-28079-5).

---

Plasmonics forms a major part of the field of _nanophotonics_, which explores how electromagnetic fields can be confined over dimensions on the order of or smaller than the wavelength. It is based on interaction processes between electromagnetic radiation and conduction electrons at metallic interfaces or in small metallic nanostructures, leading to an enhanced optical near field of sub-wavelength dimensions. Research in this area demonstrates how unexpected behavior can occur when discontinuities or sub-wavelength structures are imposed. This field is firmly grounded in **classical** physics.

Roughly speaking, the field of plasmonics is 100 years old, yet it remains an active area of research. Four elements underlie current research in plasmonics:
1. The ready availability of state-of-the-art fabrication methods, particularly for implementing nanostructures.
2. The wealth of high-sensitivity optical characterization techniques.
3. The rapid advancement in computing power and speed, allowing for powerful numerical modeling tools.
4. The wide range of applications, from solar cells to high-resolution microscopy, drug design, and more.

# 1 Fundamentals of Plasmonics
## 1.1 Electromagnetics of Metals [[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=24&selection=2,0,2,26|•]]

### 1.1.1 Introduction
The interaction of metals with electromagnetic waves can be understood in a classical framework based on Maxwell's equations. This holds true even for metallic nanostructures down to sizes on the order of a few nanometers, without the need to resort to quantum mechanics. This is because the high density of free carriers results in narrow spacings of the electron energy levels compared to the thermal excitation energy $k_B T$ at room temperature. It is well known that most metals are highly reflective up to some frequency in the visible range. They are thus traditionally used as cladding layers for constructing waveguides and resonators at microwave and far-infrared frequencies.

In this low-frequency regime, the _perfect conductor approximation_ of infinite or fixed finite conductivity is valid for most purposes since only a negligible fraction of the impinging electromagnetic waves penetrates the metal. However, at higher frequencies approaching the near-IR and visible spectrum, field penetration increases significantly. At UV frequencies, metals acquire a dielectric character and allow the propagation of electromagnetic waves, albeit with varying degrees of attenuation depending on the details of the electronic band structures. Alkali metals, such as sodium, have an almost free-electron-like response and thus exhibit ultraviolet transparency. Noble metals, such as gold and silver, exhibit strong absorption in this regime due to transitions between electronic bands.

### 1.1.2 Maxwell's Equation of Macroscopic Electromagnetism [[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=25&selection=58,0,59,34|•]]

These dispersive properties can be described by a complex dielectric function $\varepsilon(\omega)$, which forms the basis of all phenomena discussed in this text. 

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

### 1.1.3 Travelling-Wave Solution [[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=29&selection=145,0,146,44|•]]

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

### 1.1.4 The Dielectric Function of the Free Electron Gas [[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=30&selection=12,0,12,47|•]]

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

![Attachments/Notes/Plasmonics/IMG-0123151822.webp|700](/img/user/Attachments/Notes/Plasmonics/IMG-0123151822.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=33&rect=46,494,390,614|•]]

The dielectric function of the free electron plasma is closely related to the classical Drude model for the AC conductivity $\sigma(\omega)$ of metals:

$$
\sigma(\omega) = \frac{\sigma_0}{1 - i\omega\tau}.
$$

From this, we find:

$$
\varepsilon(\omega) = 1 + \frac{i\sigma(\omega)}{\varepsilon_0 \omega},
$$

recovering the general result. The dielectric function of the free electron gas is thus also referred to as the **Drude model** of the optical response of metals.

### 1.1.5 The Dispersion of the Free Electron Gas and Volume Plasmons [[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=34&selection=41,0,42,8|•]]

Let us discuss the transparency regime $\omega > \omega_p$ of the free electron gas model. The dispersion of the [[Notes/Plasmonics#1.1.3 Travelling-Wave Solution\|travelling waves]] is:

$$
\omega^2 = \omega_p^2 + K^2c^2.
$$

This relation is plotted here:
![Attachments/Notes/Plasmonics/IMG-0123151823.webp|700](/img/user/Attachments/Notes/Plasmonics/IMG-0123151823.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=34&rect=115,101,334,248|•]]

For frequencies below the plasma frequency, the propagation of transverse electromagnetic waves is forbidden inside the metal plasma. For larger frequencies, however, the plasma supports transverse waves propagating with a group velocity $v_g = d\omega/dK < c$. Noting that $\varepsilon(K=0, \omega_p) = 0$, the excitation must correspond to a collective longitudinal mode. At the plasma frequency, the electric field is a pure depolarisation field.

The physical significance of this excitation at the plasma frequency can be understood by considering the collective longitudinal oscillation of the conduction electron gas against the fixed positive background of the ion core in a plasma slab:
![Attachments/Notes/Plasmonics/IMG-0123151823-1.webp|700](/img/user/Attachments/Notes/Plasmonics/IMG-0123151823-1.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=35&rect=103,535,333,620|•]]

A collective displacement of the electron cloud leads to a surface charge density at the slab boundaries. This establishes a homogeneous electric field inside the slab. Therefore, the displaced electrons experience a restoring force, and the plasma frequency is the natural frequency of a free oscillation of the electron sea. This assumes all electrons move in phase, meaning the plasma frequency corresponds to the oscillation frequency in the long-wavelength limit where $K = 0$. 

The quanta of these charge oscillations are called volume plasmons, to distinguish them from surface and localized plasmons. Due to the longitudinal nature of the excitation, volume plasmons do not couple to transverse electromagnetic waves and can only be excited by particle impact. Another consequence of this is that their decay occurs only via energy transfer to single electrons, a process known as Landau damping.

In addition to the in-phase oscillation at $\omega_p$, there exists a whole class of longitudinal oscillations at higher frequencies with finite wave vectors, for which $\varepsilon(K,\omega) = 0$ is fulfilled:

$$
\omega^2 = \omega_{\mathrm{p}}^2 + \frac{6 E_{\mathrm{F}} K^2}{5 m}.
$$

### 1.1.6 Real Metals and Interband Transitions [[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=36&selection=53,0,53,37|•]]

As already mentioned, the dielectric function of the Drude model adequately describes the optical response of metals only for photons below the transition energy between electronic bands. For some noble metals, interband effects already occur around $1 \, \text{eV}$ ($\lambda \approx 1 \, \mu \mathrm{m}$), for example, for silver:
![Attachments/Notes/Plasmonics/IMG-0123151823-2.webp|700](/img/user/Attachments/Notes/Plasmonics/IMG-0123151823-2.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=36&rect=51,99,394,215|•]]

The red dots are experimentally obtained results, while the line is a fit of the Drude model. Clearly, the model is not adequate to describe either the real or imaginary part of the dielectric function at high frequencies, and in the case of gold, its validity already breaks down close to the visible range.

### 1.1.7 The Energy of the Electromagnetic Field in Metals [[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=37&selection=80,0,82,49|•]]

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

## 1.2 Surface Plasmon Polaritons at Metal/Insulator Interfaces [[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=39&selection=2,0,3,20|•]]

### 1.2.1 The Wave Equation

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
![Attachments/Notes/Plasmonics/IMG-0123151823-3.webp|700](/img/user/Attachments/Notes/Plasmonics/IMG-0123151823-3.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=40&rect=112,109,350,191|•]]

Applied to electromagnetic surface problems, the plane $z=0$ coincides with the interface sustaining the propagating waves. The desired form of the wave equation is then:

$$
\frac{\partial^2 \mathbf{E}(z)}{\partial z^2} + \left(k_0^2 \varepsilon - \beta^2\right) \mathbf{E} = 0,
$$

where the complex parameter $\beta = k_x$ is called the propagation constant, derived from $\mathbf{E}(x, y, z) = \mathbf{E}(z) e^{i \beta x}$. This equation serves as the starting point for the general analysis of guided electromagnetic modes in waveguides. To use the wave equation for determining the spatial field profile and dispersion of propagating waves, we need explicit expressions for the different field components of $\mathbf{E}$ and $\mathbf{H}$. Using the curl equations, it can be shown that this system allows two sets of self-consistent solutions with different polarisation properties of the propagating waves:
1. The first set are the transverse magnetic (TM or p) modes, where only $E_x$, $E_z$, and $H_y$ are non-zero. 
2. The second set are the transverse electric (TE or s) modes, where only $H_x$, $H_z$, and $E_y$ are non-zero.

### 1.2.2 Surface Plasmon Polaritons at a Single Interface [[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=43&selection=4,0,6,46|•]]

The simplest geometry sustaining SPPs is that of a single, flat interface between a dielectric, non-absorbing half-space ($z > 0$) with positive real dielectric constant $\varepsilon_2$ and an adjacent conducting half-space ($z < 0$) described via a dielectric function $\varepsilon(\omega)$. The requirement of metallic character implies that $\mathfrak{R}(\varepsilon(\omega)) < 0$, which is fulfilled at frequencies below the bulk plasmon frequency $\omega_p$. We seek propagating wave solutions confined to the interface, i.e., with evanescent decay in the perpendicular $z$-direction.

![Attachments/Notes/Plasmonics/IMG-0123151823-4.webp|700](/img/user/Attachments/Notes/Plasmonics/IMG-0123151823-4.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=43&rect=109,95,336,207|•]]

For **TM modes**, the equation:

$$
\frac{k_2}{k_1} = -\frac{\varepsilon_2}{\varepsilon_1}
$$

must hold by continuity of $H_y$ and $\varepsilon_i E_z$ at the interface. Confinement to the surface demands:

$$
\mathfrak{R}(\varepsilon_1) < 0 \quad \text{if} \quad \varepsilon_2 > 0.
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

Since confinement to the surface requires $\mathfrak{R}(k_1) > 0$ and $\mathfrak{R}(k_2) > 0$, this condition is only fulfilled if $A_1 = 0$, so that also $A_2 = A_1 = 0$. **Thus, no surface modes exist for TE polarisation. Surface plasmon polaritons only exist for TM polarisation.**

The figure shows plots of the SPPs' dispersion relation for a metal with negligible damping described by the real Drude dielectric function for an air ($\varepsilon_2 = 1$) and a fused silica ($\varepsilon_2 = 2.25$) interface. Due to their bound nature, the SPP excitations correspond to the part of the dispersion curves lying to the right of the respective light lines of air and silica. Radiation into the metal occurs in the transparency regime $\omega > \omega_p$ as mentioned earlier. Between the regime of bound and radiative modes, a frequency gap region with purely imaginary $\beta$ prohibiting propagation exists. The dashed line shows the imaginary part of $\beta$, while the solid line shows its real part.
![Attachments/Notes/Plasmonics/IMG-0123151823-5.webp|700](/img/user/Attachments/Notes/Plasmonics/IMG-0123151823-5.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=45&rect=78,414,373,615|•]]

**For small wave vectors**, corresponding to low frequencies (mid-IR or lower), the SPP propagation constant is close to $k_0$ at the light line, and the wavelengths extend over many wavelengths into the dielectric space. In this regime, SPPs acquire the nature of a grazing-incidence light field, also known as Sommerfeld-Zenneck waves. 

**For large wave vectors**, the frequency of the SPPs approaches the characteristic surface plasmon frequency:

$$
\omega_{\mathrm{sp}} = \frac{\omega_{\mathrm{p}}}{\sqrt{1 + \varepsilon_2}}.
$$

In the limit of negligible damping of the conduction electron oscillation, implying $\mathfrak{I}\left(\varepsilon_1(\omega)\right) = 0$, the wave vector $\beta$ goes to infinity as the frequency approaches $\omega_{\mathrm{sp}}$, and the group velocity $v_{\mathrm{g}} \to 0$. The mode thus acquires an electrostatic character and is known as the surface plasmon. This is because it can be obtained as a solution to the Laplace equation for a single interface geometry. It is wavelike in the $x$-direction and decays exponentially in the $z$-direction.

The above discussions have assumed an ideal conductor with no damping. Excitations of the conduction electrons in real metals, however, suffer from both free-electron and interband damping. Therefore, $\varepsilon_1(\omega)$ is complex, and the SPP propagation constant $\beta$ is also complex. The traveling SPPs are damped with an energy attenuation length, also called the propagation length, given by:

$$
L = \frac{1}{2 \cdot \mathfrak{I}(\beta)},
$$

typically between $10 \, \mu \text{m}$ and $100 \, \mu \text{m}$ in the visible regime, depending on the metal/dielectric configuration.

The next figure shows the dispersion relation of SPPs propagating at a silver/air and silver/silica interface. In comparison to the ideal case, the bound SPPs now approach a maximum, finite wave vector at the surface plasmon frequency of the system. This places a lower bound on both the wavelength $\lambda_{\text{sp}} = 2\pi / \mathfrak{R}(\beta)$ of the surface plasmon and the amount of mode confinement perpendicular to the interface since the SPP fields in the dielectric fall off exponentially in $k_z$. The quasibound, leaky part of the dispersion between $\omega_p$ and $\omega_{\text{sp}}$ is now allowed compared to the case of an ideal conductor.

![Attachments/Notes/Plasmonics/IMG-0123151823-6.webp|700](/img/user/Attachments/Notes/Plasmonics/IMG-0123151823-6.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=47&rect=75,420,371,612|•]]

There is generally a characteristic trade-off between localization and loss in plasmonics. Field confinement below the diffraction limit of half the wavelength in the dielectric can be achieved close to $\omega_{\text{sp}}$. In the metal itself, the field falls off over distances on the order of $20 \, \text{nm}$ over a wide frequency range.

### 1.2.3 Multilayer Systems [[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=48&selection=7,0,9,18|•]]

Let us now turn our attention to systems consisting of alternating conducting and dielectric thin films. Each single interface can sustain bound SPPs. When the separation between adjacent interfaces is comparable to or smaller than the decay length $\hat{z} = 1 / |k_z|$ of the interface mode, interaction between SPPs gives rise to coupled modes. 

Consider first a three-layer system:
1. The insulator/metal/insulator (**IMI**) heterostructure: A thin metallic layer (I) is sandwiched between two (infinitely) thick dielectric claddings (II, III).
2. The metal/insulator/metal (**MIM**) heterostructure: A thin dielectric core layer (I) is sandwiched between two metallic claddings (II, III).

![Attachments/Notes/Plasmonics/IMG-0123151823-7.webp|700](/img/user/Attachments/Notes/Plasmonics/IMG-0123151823-7.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=48&rect=106,96,329,197|•]]

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

![Attachments/Notes/Plasmonics/IMG-0123151823-8.webp|700](/img/user/Attachments/Notes/Plasmonics/IMG-0123151823-8.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=50&rect=95,120,349,290|•]]

For simplicity, the dielectric function of silver is approximated as a Drude metal with negligible damping, meaning $\varepsilon(\omega)$ is real so that $\mathfrak{I}(\beta) = 0$. As shown, the odd modes have frequencies $\omega_{+}$ higher than the respective frequencies for a single-interface SPP, while the even modes have lower frequencies $\omega_{-}$. For large wave vectors $\beta$, achievable only if $\mathfrak{I}(\varepsilon(\omega)) = 0$, the limiting frequencies are:

$$
\begin{aligned}
\omega_{+} &= \frac{\omega_{\mathrm{p}}}{\sqrt{1 + \varepsilon_2}} \sqrt{1 + \frac{2 \varepsilon_2 e^{-2 \beta a}}{1 + \varepsilon_2}}, \\
\omega_{-} &= \frac{\omega_{\mathrm{p}}}{\sqrt{1 + \varepsilon_2}} \sqrt{1 - \frac{2 \varepsilon_2 e^{-2 \beta a}}{1 + \varepsilon_2}}.
\end{aligned}
$$

Odd modes have the interesting property that as the metal film thickness decreases, the confinement of the coupled SPP to the metal film decreases, evolving into a plane wave supported by the homogeneous dielectric environment. For real, absorptive metals described by a complex $\varepsilon(\omega)$, this implies a drastically increased SPP propagation length. These are known as _long-ranging SPPs_ and will be discussed in a later chapter. Even modes exhibit the opposite behavior: their confinement to the metal increases with decreasing metal film thickness, resulting in reduced propagation length.

In the **MIM geometry**, the most interesting mode is the fundamental odd mode of the system, which does not exhibit a cut-off for vanishing core layer thickness:

![Attachments/Notes/Plasmonics/IMG-0123151823-9.webp|700](/img/user/Attachments/Notes/Plasmonics/IMG-0123151823-9.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=52&rect=94,444,345,610|•]]

The dielectric function was taken as a complex fit, so the propagation constant $\beta$ does not go to infinity as the surface plasmon frequency is approached. Instead, it folds back and eventually crosses the light line, similar to SPPs at single interfaces. 

Large propagation constants can be achieved even for excitations well below $\omega_{\text{sp}}$, provided that the dielectric core is sufficiently thin. This indicates that localization effects achievable near $\omega_{\text{sp}}$ for a single interface can also be attained for excitations in the infrared for MIM structures.

Note that this discussion was limited to the fundamental bound modes. In IMI structures, there are leaky modes, while in MIM structures, oscillatory modes can exist. Additionally, the coupling between SPPs at the core/cladding interface changes significantly if $\varepsilon_2 \neq \varepsilon_3$, prohibiting phase matching.

## 1.3 Excitation of Surface Plasmon Polaritons at Planar Interfaces [[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=56&selection=2,0,3,31|•]]

Surface plasmon polaritons propagating at the flat interface between a conductor and a dielectric are essentially two-dimensional electromagnetic waves. Confinement is achieved since the propagation constant is greater than the wave vector in the dielectric, $\beta > k$, leading to decay on both sides of the interface. Therefore, excitation by three-dimensional light beams is not possible unless special techniques for phase-matching are employed. Alternatively, different geometries may be used.

### 1.3.1 Prism Coupling [[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=59&selection=22,0,24,14|•]]

The projection along the interface of the momentum $k_x = k \sin\theta$ is smaller than the SPP propagation constant $\beta$ even at grazing incidence, prohibiting phase-matching. However, phase-matching can still be achieved in a three-layer system with different dielectric constants. Consider one of the materials to be air ($\varepsilon = 1$), such that the beam being reflected at the insulator-metal interface has an in-plane momentum of $k_x = k\sqrt{\varepsilon}\sin\theta$. The insulator in this case would be a prism. Two configurations are possible:

![Attachments/Notes/Plasmonics/IMG-0123151823-10.webp|700](/img/user/Attachments/Notes/Plasmonics/IMG-0123151823-10.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=59&rect=89,106,346,186|•]]

This momentum is sufficient to excite SPPs at the interface between the metal and the lower-index dielectric, air in this case. In this way, SPPs propagating between the light lines of air and the higher-index dielectric (prism) can be excited. This excitation manifests as a minimum in the reflected beam intensity. Note that this phase-matching is impossible at the prism/metal interface since the respective SPP dispersion lies outside the prism light cone (there is no crossing of the curves):

![Attachments/Notes/Plasmonics/IMG-0123151823-11.webp|700](/img/user/Attachments/Notes/Plasmonics/IMG-0123151823-11.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=60&rect=111,470,332,616|•]]

This coupling scheme is also known as **attenuated total internal reflection** and involves tunneling of the fields of the excitation beam to the metal/air interface. The two configurations are called the **Kretschmann method** (left) and the **Otto configuration** (right). 

SPPs excited via phase-matching with $\beta = k\sqrt{\varepsilon}\sin\theta$ are inherently leaky waves, meaning they lose energy not only due to absorption in the metal but also due to leakage radiation in the prism. The minimum in reflected intensity is due to destructive interference between this leakage radiation and the reflected part of the excitation beam. This minimum can be zero for an optimal metal film thickness. This is the case when the damping due to leakage equals the damping due to absorption (critical coupling):

$$
\Gamma_{\text{LR}} = \Gamma_{\text{abs}} = \mathfrak{I}(\beta_0),
$$

where:

$$
\beta_0 = k_0\sqrt{\frac{\varepsilon_1\varepsilon_2}{\varepsilon_1 + \varepsilon_2}}.
$$

### 1.3.2 Grating Coupling [[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=61&selection=149,0,151,16|•]]

Phase-matching can also be achieved by patterning the metal surface with a shallow grating of grooves or holes with lattice constant $a$. In the simple one-dimensional grating of grooves, phase-matching occurs whenever the condition:

$$
\beta = k\sin\theta \pm \nu g,
$$

is fulfilled, where $g = 2\pi/a$ is the reciprocal grating vector, and $\nu = 1, 2, 3, \dots$. The excitation of SPPs is again indicated by a reflection minimum.

![Attachments/Notes/Plasmonics/IMG-0123151823-12.webp|700](/img/user/Attachments/Notes/Plasmonics/IMG-0123151823-12.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=61&rect=126,88,310,221|•]]

The reverse process is also possible: SPPs propagating along a surface modulated with a grating can couple to light and radiate. The grating need not be milled directly into the metal surface; it can also consist of dielectric material. By designing the grating shape, the propagation direction can be influenced, and even focusing can be achieved.

More generally, SPPs can also be excited on films with random surface roughness or manufactured localized scatterers. The phase-matching condition:

$$
\beta = k\sin\theta \pm \Delta k_x,
$$

with the momentum components $\Delta k_x$ provided by scattering, can also be fulfilled.

### 1.3.3 Excitation Using Highly Focused Optical Beams [[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=64&selection=39,0,41,45|•]]

Another approach uses a microscopic objective of high numerical aperture, which ensures a large angular spread of the focused excitation beam, including angles $\theta > \theta_c$ greater than the critical angle of total internal reflection at a glass/air interface:

![Attachments/Notes/Plasmonics/IMG-0123151823-13.webp|500](/img/user/Attachments/Notes/Plasmonics/IMG-0123151823-13.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=64&rect=112,117,331,239|•]]

In this way, wave vectors $k_x = \beta$ are available for phase-matching for SPPs at the metal/air interface at the corresponding angle:

$$
\theta_{\text{SPP}} = \arcsin\left(\frac{\beta}{nk_0}\right) > \theta_c.
$$

The excited SPPs will radiate back into the glass substrate as leakage radiation at an angle $\theta_{\text{SPP}} > \theta_c$. The traced path of the excited SPPs for s- and p-polarisation is shown below:

![Attachments/Notes/Plasmonics/IMG-0123151823-14.webp|500](/img/user/Attachments/Notes/Plasmonics/IMG-0123151823-14.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=65&rect=143,528,291,613|•]]

As shown earlier, the second image (s-polarisation) has no trace since there are no surface plasmon polaritons for this polarisation.

>[!DANGER] Work in Progress from here on...


## 1.4 Imaging Surface Plasmon Polariton Propagation [[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=70&selection=2,0,3,21&color=important|•]]




















>[!DANGER] From another book


# 2 Surface Plasmon Polaritons on Metallic Surfaces
## 2.1 Wood's Anomalies
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
## 2.2 Propagation of Surface Plasmon Polaritons on a Metallic Surface
### 2.2.1 Flat Surface
[[Reading/Books/Plasmonics/Plasmonics - From Basics to Advanced Topics.pdf#page=60&selection=10,0,10,30|•]]

In a scattering problem, an object is illuminated by an incident electromagnetic wave, and one is interested in the total field at any point in space. This total field consists of the known incident field and the scattered field generated by the object. This chapter treats the scattering on a metallic half-plane:
![Attachments/Notes/Plasmonics/IMG-0123151823-15.webp|700](/img/user/Attachments/Notes/Plasmonics/IMG-0123151823-15.webp)[[Reading/Books/Plasmonics/Plasmonics - From Basics to Advanced Topics.pdf#page=61&rect=165,478,388,612|•]]
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
### 2.2.2 Guiding by a Flat Surface: The Surface Plasmon Polariton
[[Reading/Books/Plasmonics/Plasmonics - From Basics to Advanced Topics.pdf#page=62&selection=180,0,180,45|•]]

We want to know whether a surface wave can propagate at the surface of the metal. Classically, a guided wave is a wave propagating along the x-axis and satisfies a radiation condition at infinity:
 - For $y → +\infty$, the field must propagate upwards or vanish,  
 - For $y → −\infty$, the field must propagate downwards or vanish.

In addition to these conditions, the total field in the guided wave must satisfy the Maxwell equations and boundary conditions at the interface. The field above the interface contains the incident wave, which does not satisfy the radiation condition since it propagates towards the interface. In other words, a guided wave corresponds to a problem of scattering in which the incident field does not exist. At first glance, such a guided wave should not exist. Indeed, in the scattering problem, the incident energy is shared between the scattered field and the losses inside the metal. On the other hand, in the problem of guiding, there is no incident energy at all, and of course the existence of a field generates losses in the metal. Thus it seems that such a wave cannot satisfy the energy balance. This remark is quite correct as far as the propagation constant of the guided wave is real. 
Considering the expressions of the reflected and transmitted [[Notes/Plasmonics#^eq-reflected-transmitted-field\|waves]], the propagation constant $k_1\alpha$ is real since it is imposed by the incident plane wave. This requirement does not hold in guiding, and it can be conjectured that a surface wave may propagate along the x-axis with an exponentially decreasing amplitude, due to the losses in the metal. The consequence: The imaginary part of the propagation constant must be positive, if its real part is positive. 
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
### 2.2.3 SPP and Brewster Effect
[[Reading/Books/Plasmonics/Plasmonics - From Basics to Advanced Topics.pdf#page=65&selection=236,0,236,23|•]]


