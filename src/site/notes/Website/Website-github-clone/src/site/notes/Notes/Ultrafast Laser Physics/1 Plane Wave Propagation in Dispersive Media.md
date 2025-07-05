---
{"dg-publish":true,"permalink":"/website/website-github-clone/src/site/notes/notes/ultrafast-laser-physics/1-plane-wave-propagation-in-dispersive-media/","updated":"2025-07-03T20:20:02.071+02:00"}
---


Jump back to ==[[Notes/Ultrafast Laser Physics/Ultrafast Laser Physics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Ultrafast Laser Physics/1 Plane Wave Propagation in Dispersive Media#1.1 Maxwell Equations\|1.1 Maxwell Equations]]
[[Notes/Ultrafast Laser Physics/1 Plane Wave Propagation in Dispersive Media#1.2 Material Equations\|1.2 Material Equations]]
[[Notes/Ultrafast Laser Physics/1 Plane Wave Propagation in Dispersive Media#1.3 Wave Equation with Refractive Index\|1.3 Wave Equation with Refractive Index]]
[[Notes/Ultrafast Laser Physics/1 Plane Wave Propagation in Dispersive Media#1.4 TEM Wave and Impedance\|1.4 TEM Wave and Impedance]]
[[Notes/Ultrafast Laser Physics/1 Plane Wave Propagation in Dispersive Media#1.5 Polarisation\|1.5 Polarisation]]
[[Notes/Ultrafast Laser Physics/1 Plane Wave Propagation in Dispersive Media#1.6 Energy Density, Poynting Vector, and Intensity\|1.6 Energy Density, Poynting Vector, and Intensity]]
[[Notes/Ultrafast Laser Physics/1 Plane Wave Propagation in Dispersive Media#1.7 Dispersion\|1.7 Dispersion]]
[[Notes/Ultrafast Laser Physics/1 Plane Wave Propagation in Dispersive Media#1.8 Sellmeier Equation in the Visible and Near-Infrared\|1.8 Sellmeier Equation in the Visible and Near-Infrared]]

---
# 1 Plane Wave Propagation in Dispersive Media

We will now begin with the description of the simplest type of electromagnetic field: the plane wave, and we will consider its propagation in a dispersive medium. For this, we require Maxwell's equations. Note however, that we will not derive them here, as it is assumed the reader is already somewhat familiar with them. The following two sections on the [[Notes/Ultrafast Laser Physics/1 Plane Wave Propagation in Dispersive Media#1.1 Maxwell Equations\|Maxwell equations]] and the [[Notes/Ultrafast Laser Physics/1 Plane Wave Propagation in Dispersive Media#1.2 Material Equations\|material equations]] are also treated in a similar way in my [[Notes/2025 Quantum Electronics/1 Electromagnetic Theory of Light#1.2 Maxwell's Equations in a Medium\|quantum electronics notes]].
## 1.1 Maxwell Equations
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=21&selection=3,0,5,31| ]]

In this chapter, Maxwell's equations will be discussed in SI units. This formulation is important because it incorporates the influence of bound charges and bound currents into the displacement field $\mathbf{D}$ and the magnetising field $\mathbf{H}$. Then, the source terms in the equations only depend on the free charge density $\rho_{\text{f}}$, and the free current density $\mathbf{j}_{\text{f}}$. Free charges/currents could, for instance, be electrons in the conduction band of a metal or a semiconductor, in contrast to the core or bonding electrons which are considered bound. The macroscopic Maxwell's Equations in matter are then:

$$
\begin{aligned}
\nabla\cdot \mathbf{D} & =\rho_{\text{f}}, \\
\nabla\cdot \mathbf{B} & =0,\\
\nabla\times \mathbf{H} & =\mathbf{j}_{\text{f}}+\frac{\partial}{\partial t} \mathbf{D}, \\
\nabla\times \mathbf{E} & =-\frac{\partial}{\partial t} \mathbf{B}.
\end{aligned}
$$

---
## 1.2 Material Equations
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=22&selection=6,0,8,18| ]]

The material equations describe how bound charges within a material respond to an electromagnetic (EM) wave, driven by the Coulomb or Lorentz force. As long as the applied fields are not excessively large, the response of each atom or molecule can often be modelled as a harmonic oscillator, where a negatively charged electron cloud oscillates with respect to the positively charged core. Under the influence of an electromagnetic wave, the electrons are set into forced oscillations induced by the incident EM wave. In the linear regime, these oscillating electrons then emit secondary radiation at the same frequency as the incident wave, but generally with a frequency-dependent phase difference. Therefore, the field propagating in the medium is a superposition of the incident wave and the phase-shifted waves emitted by the electrons. In the visible and near-infrared spectrum for transparent media, this superposition of waves typically propagates more slowly than the original incident wave would in vacuum.

We will treat the medium as a continuum, which is a good approximation as long as the wavelength under consideration is long compared to atomic dimensions. The interaction of a material containing bound electrons with an electric field is described by the material equation for the electric displacement $\mathbf{D}$:
$$
\mathbf{D}=\varepsilon_0 \mathbf{E}+\mathbf{P},
$$
where $\mathbf{P}$ is the induced electric polarisation of the material (electric dipole moment per unit volume), caused by the displacement of bound charges relative to their equilibrium positions. The polarisation is related to the bound charge density $\rho_{\mathrm{b}}$ via:
$$
\nabla\cdot \mathbf{P}=-\rho_{\mathrm{b}}.
$$
Using this and Gauss's law for $\mathbf{D}$ ($\nabla\cdot\mathbf{D}=\rho_{\text{f}}$), we can also write Gauss's law for $\mathbf{E}$ as:
$$
\nabla\cdot \mathbf{E}=\frac{\rho_{\text{total}}}{\varepsilon_0}\quad\text{with}\quad \rho_{\text{total}}=\rho_{\text{f}}+\rho_{\text{b}}.
$$
For small electric fields, as in linear optics, the instantaneous polarisation is often directly proportional to the applied electric field in non-dispersive media:
$$
\mathbf{P}(t)=\varepsilon_0 \chi_e \mathbf{E}(t),
$$
where $\chi_e$ is the electric susceptibility (a scalar for isotropic media). If $\chi_e$ is frequency dependent (i.e., the medium is dispersive), this simple proportionality is valid in the frequency domain:
$$
\mathbf{P}(\omega)=\varepsilon_0 \chi_e(\omega) \mathbf{E}(\omega).
$$
In this case, the polarisation $\mathbf{P}(\omega)$ and the electric field $\mathbf{E}(\omega)$ are generally not in phase, meaning that $\chi_e(\omega)$ is a complex quantity.

The material equation for the magnetic field $\mathbf{H}$ is:
$$
\mathbf{H}=\frac{1}{\mu_0} \mathbf{B}-\mathbf{M},
$$
with $\mathbf{M}$ being the induced magnetisation field of the material (magnetic dipole moment per unit volume). The total current density $\mathbf{j}_{\text{total}}=\mathbf{j}_{\text{f}} +\mathbf{j}_{\text{b}}$ is related to the microscopic Ampère-Maxwell law $\nabla\times \mathbf{B}=\mu_0\left(\mathbf{j}_{\text{total}}+\varepsilon_0 \frac{\partial}{\partial t} \mathbf{E}\right)$. The bound current density $\mathbf{j}_{\text{b}}$ can be expressed in terms of $\mathbf{P}$ and $\mathbf{M}$ as $\mathbf{j}_{\text{b}} = \partial\mathbf{P}/\partial t + \nabla\times\mathbf{M}$.
For small fields in linear magnetic media, the magnetisation is proportional to the magnetic field $\mathbf{H}$:
$$
\mathbf{M}=\chi_m \mathbf{H},
$$
where $\chi_m$ is the magnetic susceptibility. In linear optics, it is useful to introduce the relative permittivity $\varepsilon_r$ (dielectric constant) and the relative magnetic permeability $\mu_r$. These are defined by the constitutive relations:
$$
\begin{aligned}
\mathbf{D} & =\varepsilon_0\varepsilon_r\mathbf{E} = \varepsilon_{\text{abs}} \mathbf{E}, \\
\mathbf{B} & =\mu_0\mu_r\mathbf{H} = \mu_{\text{abs}} \mathbf{H}.
\end{aligned}
$$
Here $\varepsilon_{\text{abs}}$ and $\mu_{\text{abs}}$ are the absolute permittivity and permeability of the medium. This implies:
$$
\begin{aligned}
\chi_e & =\varepsilon_r-1,\\
\chi_m & =\mu_r-1 \quad (\text{when } \mathbf{M}=\chi_m\mathbf{H}).
\end{aligned}
$$
We additionally define the refractive index $n$ as:
$$
n \equiv \sqrt{\varepsilon_r \mu_r}.
$$
For the remainder of these notes, we will primarily consider dielectric materials, that is, materials that can be polarised by an applied electric field but are generally non-magnetic at optical frequencies. Thus, we may neglect magnetic interactions by setting $\mu_r\approx 1$ (so $\chi_m \approx 0$ and $\mathbf{M} \approx 0$).

---
## 1.3 Wave Equation with Refractive Index
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=24&selection=56,0,58,35| ]]

The wave equation in a material with bound electrons is a direct consequence of Maxwell's equations. We assume no free charges ($\rho_{\text{f}}=0$) and no free currents ($\mathbf{j}_{\text{f}}=0$), so $\nabla\cdot\mathbf{D}=0$. The effect of the bound electrons is incorporated through the polarisation $\mathbf{P}$ (and thus through $\mathbf{D}=\varepsilon_0\mathbf{E}+\mathbf{P}$). For a homogeneous, isotropic, linear, non-magnetic medium, the wave equation for the electric field $\mathbf{E}$ can be written as:
$$
\nabla^2 \mathbf{E}-\frac{1}{c^2} \frac{\partial^2}{\partial t^2} \mathbf{E}=\mu_0 \frac{\partial^2}{\partial t^2} \mathbf{P},
$$
where $c$ is the speed of light in vacuum, given by:
$$
c=\frac{1}{\sqrt{\varepsilon_0 \mu_0}} \approx 3 \times 10^8 \, \text{m s}^{-1}.
$$
This is the relevant wave equation for dielectric dispersive materials, for which the induced polarisation $\mathbf{P}(\omega) = \varepsilon_0 \chi_e(\omega) \mathbf{E}(\omega)$ depends on frequency, and the electric susceptibility $\chi_e(\omega)$ is complex. Without polarisation ($\mathbf{P}=0$), the equation reduces to the wave equation in vacuum, whose solutions are electromagnetic waves propagating at speed $c$.
If the material is further assumed to be non-dispersive (so $\chi_e(\omega)=\chi_e$ is a constant, real value, and $\mathbf{P}(t) = \varepsilon_0\chi_e\mathbf{E}(t)$), we may simplify the wave equation. Using $\mathbf{D}=\varepsilon_0(1+\chi_e)\mathbf{E} = \varepsilon_0\varepsilon_r\mathbf{E}$, and for non-magnetic media $\mathbf{B}=\mu_0\mathbf{H}$, the wave equation becomes:
$$
\nabla^2 \mathbf{E}-\frac{\varepsilon_r}{c^2} \frac{\partial^2}{\partial t^2} \mathbf{E}=0, \quad \text{or} \quad \nabla^2 \mathbf{E}-\frac{1}{v_{\mathrm{p}}^2} \frac{\partial^2}{\partial t^2} \mathbf{E}=0.
$$
The solutions of this wave equation in such a linear, homogeneous, isotropic, non-dispersive dielectric medium are electromagnetic waves travelling with the phase velocity:
$$
v_\mathrm{p}=\frac{c}{\sqrt{\varepsilon_r}} = \frac{c}{n}.
$$
Here, $n=\sqrt{\varepsilon_r}$ is the refractive index (since $\mu_r=1$). The macroscopic change in the phase velocity of a plane EM wave in a material is thus given by its refractive index $n$, which is determined by the material’s atomic structure and its response to the EM field.

Nonlinear optical processes, such as frequency doubling, may also be included as source terms in the wave equation. For high field intensities, the material response becomes nonlinear, primarily because the atomic binding potential is anharmonic. The nonlinear polarisation $\mathbf{P}_{\mathrm{NL}}$ in the perturbative regime is usually expanded in a Taylor series as a function of the field components $E_j, E_k, \dots$:
$$
P_{i, \mathrm{NL}}=\varepsilon_0 \sum_{jk}\chi_{ijk}^{(2)} E_j E_k+\varepsilon_0 \sum_{jkl}\chi_{ijkl}^{(3)} E_j E_k E_l+\dots,
$$
through which the wave equation generalises to:
$$
\nabla^2 \mathbf{E}-\frac{1}{c^2} \frac{\partial^2}{\partial t^2} \mathbf{E}=\mu_0 \frac{\partial^2}{\partial t^2} (\mathbf{P}_{\mathrm{L}}+\mathbf{P}_{\mathrm{NL}}),
$$
where $\mathbf{P}_L = \varepsilon_0 \chi_e^{(1)}\mathbf{E}$ contains only the linear part of the polarisation. Similar wave equations may be obtained for the magnetic field; however, they often take an analogous form. It is important to remember that both electric and magnetic fields are essential for the propagation of an electromagnetic wave. Nonlinear effects with more focus on magnetism are discussed more extensively in my notes on [[Notes/Crystal Optics in Intense Light Fields/5 Nonlinear Optics#5 Nonlinear Optics\|crystal optics]], with a greater theoretical focus on their description.

### 1.3.1 Solutions to the Wave Equation: The Plane Wave

The monochromatic plane wave is an important special solution of the linear wave equation. We will see that _any_ wave solution can be expressed as a superposition (integral) of such plane waves. Consider the real form of a plane wave travelling in the positive $z$-direction:
$$
\mathbf{E}(z, t)=\left|\mathbf{E}_0^{+}\right| \cos(\omega t-k z+\varphi),
$$
where $\mathbf{E}_0^{+}=\left|\mathbf{E}_0^{+}\right| e^{i \varphi}$ is the complex amplitude vector (phasor) of the wave propagating in the $+z$ direction. In the following, we will often omit the superscript $+$ or $-$ for the amplitude if the direction is clear from context. The period $T$ is defined through:
$$
T=\frac{2\pi}{\omega}=\frac{1}{f}.
$$
The next figure shows a plane wave for a constant position as a function of time (left), and for a constant time as a function of position (right):

![Attachments/UltraFastLasers_Keller.webp|700](/img/user/Attachments/UltraFastLasers_Keller.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=27&rect=55,104,383,221| ]]

The period in the time domain is $T$. The wavelength in vacuum is $\lambda_0 = cT$. The optical frequency $f$ (or $\omega$) does not change when light enters a linear medium from vacuum. This is a direct consequence of the boundary conditions at the interface. Since the phase velocity changes in a dispersive medium from $c$ to $v_p = c/n$, the wavelength also changes:
$$
\lambda_n = v_p T = \frac{c}{n}T = \frac{\lambda_0}{n}.
$$
This is schematically shown in the next figure:

![Attachments/UltraFastLasers_Keller 1.webp|700](/img/user/Attachments/UltraFastLasers_Keller%201.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=28&rect=232,514,382,606| ]]

It is often much easier to work with the complex notation for the plane wave:
$$
\mathbf{E}(z, t)=\tilde{\mathbf{E}}_0^{+} e^{i(\omega t-k z)},
$$
where $\tilde{\mathbf{E}}_0^{+}$ is the complex amplitude vector, including any initial phase. The physical field is understood to be the real part of this complex expression. This is permissible because the wave equation is linear, and therefore any superposition of solutions (including real and imaginary parts of a complex solution) is also a solution.

Next, there is a summary of relevant quantities and their behaviour in vacuum and in a dielectric medium (with refractive index $n$, assuming $\mu_r=1$):

| Quantity       | Vacuum                    | Dispersive medium ($n(\omega)$)                                       |
| :------------- | :------------------------ | :------------------------------------------------------------------- |
| Frequency      | $f$                       | $f$                                                                  |
| Period         | $T=1/f, \omega=2 \pi f$   | $T=1/f, \omega=2 \pi f$                                              |
| Phase Velocity | $v_{\mathrm{p}}=c$        | $v_{\mathrm{p}}(\omega)=c/n(\omega) \equiv c_n(\omega)$              |
| Wave number    | $k_0=\omega/c$            | $k(\omega)=n(\omega)\omega/c = n(\omega)k_0$                          |
| Wave number    | $k_0=2 \pi/\lambda_0$     | $k(\omega)=2 \pi/\lambda_n(\omega) = n(\omega)2\pi/\lambda_0$          |
| Wavelength     | $\lambda_0$               | $\lambda_n(\omega)=\lambda_0/n(\omega)$                              |

---
## 1.4 TEM Wave and Impedance
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=30&selection=197,0,199,22| ]]

Very importantly, for plane waves in isotropic media, Maxwell's equations imply that the field vectors and the wavevector are mutually orthogonal:
$$
\mathbf{E} \perp \mathbf{H}, \quad \mathbf{k} \perp \mathbf{E}, \quad \mathbf{k} \perp \mathbf{H}.
$$
Such a wave is called a transverse electromagnetic (TEM) wave because both the electric and magnetic fields are transverse (perpendicular) to the direction of wave propagation $\mathbf{k}$. For a plane harmonic wave in a lossless medium, the fields $\mathbf{E}$ and $\mathbf{H}$ are in phase:

![Attachments/UltraFastLasers_Keller 2.webp|700](/img/user/Attachments/UltraFastLasers_Keller%202.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=31&rect=103,144,336,259| ]]

Further, their amplitudes are related by the wave impedance $Z$ of the medium. For a plane wave $\mathbf{E}(\mathbf{r},t) = \mathbf{E}_0 e^{i(\mathbf{k}\cdot\mathbf{r}-\omega t)}$, the magnetic field is $\mathbf{H}(\mathbf{r},t) = \frac{1}{Z} (\hat{\mathbf{k}} \times \mathbf{E}(\mathbf{r},t))$, where $\hat{\mathbf{k}}=\mathbf{k}/|\mathbf{k}|$. This means $|\mathbf{H}_0| = |\mathbf{E}_0|/Z$. The impedance $Z$ is defined by:
- In vacuum: $\quad Z_0 \equiv \sqrt{\frac{\mu_0}{\varepsilon_0}} = \mu_0 c \approx 377 \, \Omega$.
- In a non-magnetic ($\mu_r=1$) dispersive medium: $\quad Z(\omega) = \sqrt{\frac{\mu_0}{\varepsilon_0\varepsilon_r(\omega)}} = \frac{Z_0}{\sqrt{\varepsilon_r(\omega)}} = \frac{Z_0}{n(\omega)}$.
If $n(\omega)$ is complex, $Z(\omega)$ will also be complex, implying a phase shift between $\mathbf{E}$ and $\mathbf{H}$ in lossy media.

---
## 1.5 Polarisation
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=33&selection=341,0,343,12| ]]

So far, the electromagnetic wave discussed was implicitly linearly polarised, meaning that the electric field vector oscillates along one fixed direction in the plane perpendicular to $\mathbf{k}$. The direction in which the electric field oscillates is called the polarisation direction. Mathematically, a linearly polarised plane wave propagating along $z$ (figure a), polarised along the $x$-direction, has the form:
$$
\mathbf{E}(z,t)=\hat{\mathbf{x}} E_0 e^{i(\omega t-k_n z)}.
$$
The superposition of two linearly polarised waves with a phase difference $\Delta\varphi$ and orthogonal polarisation directions generally results in an elliptically polarised plane wave (figure b). For instance, if one component is along $\hat{\mathbf{x}}$ and the other along $\hat{\mathbf{y}}$:
$$
\mathbf{E}(z,t)=\left(\hat{\mathbf{x}} E_1 + \hat{\mathbf{y}} E_2 e^{i \Delta \varphi}\right) e^{i(\omega t-k_n z)}.
$$
A special case is when $\Delta\varphi=0$ or $\Delta\varphi=\pi$; in this case, the wave remains linearly polarised, with its polarisation direction generally tilted in the $xy$-plane. Another special case occurs when $E_1=E_2$ and the phase difference is $\Delta\varphi = \pm\pi/2$. In that case, the wave is called circularly polarised (figure c), where the tip of the electric field vector traces out a circle in the $xy$-plane at frequency $\omega$.

![Attachments/UltraFastLasers_Keller 3.webp|700](/img/user/Attachments/UltraFastLasers_Keller%203.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=34&rect=56,292,383,604| ]]

## 1.6 Energy Density, Poynting Vector, and Intensity
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=35&selection=124,0,126,46| ]]

For optically isotropic materials, both the Poynting vector (direction of energy flow) and the wave vector $\mathbf{k}$ (direction of phase propagation) are parallel and perpendicular to the wavefronts for plane waves. The following energy-related quantities are important:

- Energy density (instantaneous, for linear media):
    $$w(t) = \frac{1}{2}(\mathbf{E}(t) \cdot \mathbf{D}(t) + \mathbf{H}(t) \cdot \mathbf{B}(t)) = \frac{1}{2} \varepsilon_{\text{abs}} |\mathbf{E}(t)|^2 + \frac{1}{2} \mu_{\text{abs}} |\mathbf{H}(t)|^2.$$
    (using real fields $\mathbf{E}(t), \mathbf{H}(t)$ and absolute permittivities/permeabilities).
- Poynting vector (instantaneous, for real fields):
    $$\mathbf{S}(t) = \mathbf{E}(t) \times \mathbf{H}(t).$$
- Poynting vector (time-averaged, for complex field amplitudes $\tilde{\mathbf{E}}_0, \tilde{\mathbf{H}}_0$ such that physical field is $\mathfrak{Re}[\tilde{\mathbf{E}}_0 e^{i\omega t}]$):
    $$\langle\mathbf{S}\rangle = \frac{1}{2} \mathfrak{Re}\left[\tilde{\mathbf{E}}_0 \times \tilde{\mathbf{H}}_0^*\right].$$
- Intensity:
    $$I = |\langle\mathbf{S}\rangle|.$$
	For a plane wave in an isotropic, lossless medium, $\langle w \rangle = \varepsilon_{\text{abs}} \langle |\mathbf{E}(t)|^2 \rangle$. The relation $I = v_p \langle w \rangle$ holds.

For the special case of a monochromatic plane wave $\mathbf{E}(\mathbf{r}, t)=\mathfrak{Re}\left[\tilde{\mathbf{E}}_0 e^{i(\mathbf{k} \cdot \mathbf{r}-\omega t)}\right]$:
- Magnetic field (complex amplitude):
    $$\tilde{\mathbf{H}}_0 = \frac{1}{Z}\left(\hat{\mathbf{k}} \times \tilde{\mathbf{E}}_0\right).$$
- Energy density (time-averaged, assuming non-magnetic, lossless medium with real $n$ and $\varepsilon_r$):
    $$\langle w \rangle = \frac{1}{2} \varepsilon_0 \varepsilon_r \frac{|\tilde{\mathbf{E}}_0|^2}{2} + \frac{1}{2} \mu_0 \frac{|\tilde{\mathbf{H}}_0|^2}{2} = \frac{1}{2} \varepsilon_0 \varepsilon_r \frac{|\tilde{\mathbf{E}}_0|^2}{2},$$
    assuming that electric and magnetic energies are equal. 
- Poynting vector (instantaneous):
    $$\mathbf{S}(\mathbf{r}, t) = \frac{1}{Z} |\mathfrak{Re}\left[\tilde{\mathbf{E}}_0 e^{i(\mathbf{k} \cdot \mathbf{r}-\omega t)}\right]|^2 \hat{\mathbf{k}}.$$
- Poynting vector (time-averaged):
    $$\langle\mathbf{S}\rangle = \frac{1}{2Z} |\tilde{\mathbf{E}}_0|^2 \hat{\mathbf{k}}.$$
- Intensity:
    $$I = \frac{1}{2Z} |\tilde{\mathbf{E}}_0|^2 = \frac{1}{2} \sqrt{\frac{\varepsilon_0\varepsilon_r}{\mu_0\mu_r}} |\tilde{\mathbf{E}}_0|^2 = \frac{1}{2} c \varepsilon_0 n |\tilde{\mathbf{E}}_0|^2 \quad (\text{for } \mu_r=1).$$

---
## 1.7 Dispersion
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=36&selection=187,0,189,10| ]]

The fact that the refractive index $n(\omega)$ is frequency dependent implies that the wave number $k(\omega)=n(\omega)\omega/c$ is no longer directly proportional to the frequency $\omega$, as it is in vacuum (where $k_0=\omega/c$). This frequency dependence of $n(\omega)$ (and thus of $k(\omega)$ and $v_p(\omega)$) is called **dispersion**. For more details, see [[Notes/2025 Quantum Electronics/2 Propagation in Dispersive Media#2.1 Origin of Dispersion\|here]]. It is very important to know $n(\omega)$ to describe pulse propagation, as can be seen in examples of how different materials affect light:

![Attachments/UltraFastLasers_Keller 4.webp|700](/img/user/Attachments/UltraFastLasers_Keller%204.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=36&rect=57,103,382,184| ]]

---
## 1.8 Sellmeier Equation in the Visible and Near-Infrared
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=37&selection=86,0,88,51| ]]

In many cases, we will discuss transparent dielectric materials, meaning materials with negligible absorption in the spectral region of interest. Glass, for instance, is transparent in the visible spectrum but absorbs strongly in the ultraviolet (UV) and parts of the infrared (IR) spectral regions. The range in which a material is transparent is called its spectral window. Usually, within this window and away from absorption bands, materials exhibit **normal dispersion**, where the refractive index $n'(\omega) = \mathfrak{Re}\left[n(\omega)\right]$ increases with frequency ($\frac{dn'}{d\omega}>0$), or equivalently, decreases with wavelength ($\frac{dn'}{d\lambda_0}<0$).

![Attachments/UltraFastLasers_Keller 5.webp|700](/img/user/Attachments/UltraFastLasers_Keller%205.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=38&rect=136,147,303,340| ]]

Far away from absorption resonances, the dispersion of the real part of the refractive index can often be accurately described by the Sellmeier equation. This equation can be derived from a classical oscillator model (like the Lorentz model) by considering the contributions of multiple absorption resonances at frequencies $\omega_j$. If these resonances are narrow, their contribution to the real part of the susceptibility $\chi_r(\omega)$ (and thus to $n^2(\omega) = 1+\chi_r(\omega)$ for non-magnetic media) can be approximated. The Kramers-Kronig relations connect the real part $\chi_r(\omega)$ and imaginary part $\chi_i(\omega)$ of the susceptibility:
$$
\chi_r(\omega)=\frac{1}{\pi}  \mathcal{P} \int_{-\infty}^{\infty} \frac{\chi_i(\omega')}{\omega'-\omega} d\omega' = \frac{2}{\pi}  \mathcal{P} \int_0^{\infty} \frac{\omega' \chi_i(\omega')}{\omega'^2-\omega^2} d\omega',
$$
$$
\chi_i(\omega)=-\frac{1}{\pi}  \mathcal{P} \int_{-\infty}^{\infty} \frac{\chi_r(\omega')}{\omega'-\omega} d\omega' = -\frac{2\omega}{\pi}  \mathcal{P} \int_0^{\infty} \frac{\chi_r(\omega')}{\omega'^2-\omega^2} d\omega'.
$$
Here, $\mathcal{P}$ denotes the Cauchy Principal Value. Assuming sharp absorption lines (delta functions for $\chi_i(\omega)$ at resonance frequencies $\omega_j$ or wavelengths $\lambda_j$), the Sellmeier equation for $n^2(\lambda_0)$ takes the form:
$$
n^2(\lambda_0)=1+\sum_j \frac{A_j \lambda_0^2}{\lambda_0^2-\lambda_j^2},
$$
where $\lambda_0$ is the vacuum wavelength, $A_j$ are constants related to the strength and density of the $j$-th oscillator, and $\lambda_j$ are the resonance wavelengths. For fused silica, a common form is:
$$
n^2(\lambda_0)=1+\frac{B_1 \lambda_0^2}{\lambda_0^2-C_1}+\frac{B_2 \lambda_0^2}{\lambda_0^2-C_2}+\frac{B_3 \lambda_0^2}{\lambda_0^2-C_3},
$$
where $B_j$ and $C_j (= \lambda_j^2)$ are empirically determined Sellmeier coefficients.

---