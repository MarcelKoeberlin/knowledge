---
{"dg-publish":true,"permalink":"/notes/ultrafast-laser-physics/1-plane-wave-propagation-in-dispersive-media/","hide":"true","updated":"2025-02-02T13:45:59.070+01:00"}
---

Jump back to [[Notes/Ultrafast Laser Physics/Ultrafast Laser Physics#Table of Contents\|chapter selection]].

---
**Table of Contents**

- [[Notes/Ultrafast Laser Physics/1 Plane Wave Propagation in Dispersive Media#1.1 Maxwell Equations\|1.1 Maxwell Equations]]
- [[Notes/Ultrafast Laser Physics/1 Plane Wave Propagation in Dispersive Media#1.2 Material Equations\|1.2 Material Equations]]
- [[Notes/Ultrafast Laser Physics/1 Plane Wave Propagation in Dispersive Media#1.3 Wave Equation with Refractive Index\|1.3 Wave Equation with Refractive Index]]
- [[Notes/Ultrafast Laser Physics/1 Plane Wave Propagation in Dispersive Media#1.4 TEM Wave and Impedance\|1.4 TEM Wave and Impedance]]
- [[Notes/Ultrafast Laser Physics/1 Plane Wave Propagation in Dispersive Media#1.5 Polarisation\|1.5 Polarisation]]
- [[Notes/Ultrafast Laser Physics/1 Plane Wave Propagation in Dispersive Media#1.6 Energy Density, Poynting Vector, and Intensity\|1.6 Energy Density, Poynting Vector, and Intensity]]
- [[Notes/Ultrafast Laser Physics/1 Plane Wave Propagation in Dispersive Media#1.7 Dispersion\|1.7 Dispersion]]
- [[Notes/Ultrafast Laser Physics/1 Plane Wave Propagation in Dispersive Media#1.8 Sellmeier Equation in the Visible and Near-Infrared\|1.8 Sellmeier Equation in the Visible and Near-Infrared]]

---
# 1 Plane Wave Propagation in Dispersive Media

## 1.1 Maxwell Equations
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=21&selection=3,0,5,31|•]]

In this chapter, the Maxwell equations will be discussed in SI units,which is important because it incorporates the influence of bound charges and bound current into the displacement field $D$ and the magnetising field $H$. Then, the equations only depend on the free charge density $\rho_{free}$, and the free current density $j_{free}$. Free could mean electrons in the conduction band of a metal or a semiconductor, in contrast to the core or bonding electrons. The Maxwell Equations in matter are then

$$
\begin{aligned}
\operatorname{rot} \mathbf{H} & =\mathrm{j}_{\text {free }}+\frac{\partial}{\partial t} \mathbf{D}, \\
\operatorname{rot} \mathbf{E} & =-\frac{\partial}{\partial t} \mathbf{B}, \\
\operatorname{div} \mathbf{D} & =\rho_{\text {free }}, \\
\operatorname{div} \mathbf{B} & =0 .
\end{aligned}
$$

---
## 1.2 Material Equations
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=22&selection=6,0,8,18|•]]

The material equations describe how bound charges behave under influence of an electromagnetic (EM) wave, driven by the Coulomb or Lorentz force. As long as the force is not too large, the response of each atom or molecule can be described by a harmonic oscillator, where a negative charge oscillates with respect to the positively charged core. Under the influence of an electron-magnetic wave, the electron is brought to forced oscillations induced by the incident EM wave. In the linear regime, the oscillating electron then emits radiation with the same frequency, but generally a different frequency-dependent phase. Therefore, a superposition of the incident wave and the phase-shifted wave emitted by the electrons is formed. In the visible and near-infrared spectrum, this superposition of waves propagates more slowly through a transparent medium than the original incident wave.

We will treat the medium as continuum, which is a good approximation as long the wavelength under consideration is long compared to atomic dimensions. The interaction of a material with bound electrons is described by the following material equations:

$$
\mathbf{D}=\varepsilon_0 \mathbf{E}+\mathbf{P},
$$
where $\mathbf{P}$ is the induced electric polarisation of the material, caused by the deflection of the bound electrons relative to the lattice ion, satisfying

$$
\operatorname{div} \mathbf{P}=-\rho_{\mathrm{bound}}
$$
This allows obtaining the Maxwell equation
$$
\operatorname{div} \mathbf{E}=\rho / \epsilon_0\quad\text{with the total charge density}\quad \rho=\rho_{free}+\rho_{bound}.
$$
For small electric fields, as in linear optics, the instantaneous polarisation is directly proportional to the applied electric field

$$
\mathbf{P}(t)=\chi \varepsilon_0 \mathbf{E}(t),
$$
where $\chi$ is the electric susceptibility. If $\chi$ is frequency dependent, the simple proportionality is only valid in the frequency domain, so that
$$
\tilde{\mathbf{P}}(\omega)=\chi(\omega) \varepsilon_0 \tilde{\mathbf{E}}(\omega)
$$
where the polarisation and the electric field are no longer in phase, such that $\chi$ takes on a complex value. 
The material equation for the magnetic field is 
$$
\mathbf{H}=\frac{1}{\mu_0} \mathbf{B}-\mathbf{M}
$$
with $\mathbf{M}$ the induced magnetisation field of the material. Using Maxwell's equation

$$
\operatorname{rot} \mathbf{B}=\mu_0\left(\mathbf{j}+\epsilon_0 \frac{\partial}{\partial t} \mathbf{E}\right)
$$

with the total current density $\mathbf{j}=\mathbf{j}_{free} +\mathbf{j}_{bound}$, the magnetisation $\mathbf{M}$ is then given by

$$
\text { rot } \mathbf{M}=\mathbf{j}_{\text {bound }}-\frac{\partial}{\partial t} \mathbf{P}
$$
For small fields, we can again assume that the magnetic polarisation is directly proportional to the applied magnetic field:

$$
\mathbf{M}=\chi_{\mathrm{m}} \frac{1}{\mu_0} \mathbf{B}
$$
where $\chi_{\mathrm{m}}$ is the magnetic susceptibility. In linear optics it is useful to introduce the dielectric constant $\epsilon$ and the magnetic permeability $\mu$. These are defined by

$$
\begin{aligned}
\mathbf{D} & \equiv \varepsilon \varepsilon_0 \mathbf{E} \\
\mathbf{H} & \equiv \frac{1}{\mu \mu_0} \mathbf{B},
\end{aligned}
$$
This further implies that
$$
\begin{aligned}
\chi & =\varepsilon-1 \\
\chi_{\mathrm{m}} & =\mu-1
\end{aligned}
$$
We additionally define a refractive index $n$ as

$$
n \equiv \sqrt{\varepsilon \mu}.
$$
For the remainder of these notes, we will dielectric materials, e.g. materials that can be polarised by an applied electric field. Then, we may neglect magnetic interaction, since they are much weaker than the electric interaction at optical frequencies. We do this mathematically by setting $\mu\approx 1.$ 

---
## 1.3 Wave Equation with Refractive Index
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=24&selection=56,0,58,35|•]]

The wave equation in a material with bound electrons, is a direct consequence of the Maxwell equations, where we additionally assume no free charges, such that
$$
\operatorname{div}\textbf{D}=\rho_{free}=0.
$$
The effect of the bound electrons was already considered through $\textbf{D}.$ For a homogeneous material, the relative permittivity is constant in real space. We end up with the wave equation for a homogeneous (and isotropic, non-magnetic) dielectric material without free charges and electric currents:
$$
\Delta \mathbf{E}-\frac{1}{c^2} \frac{\partial^2}{\partial t^2} \mathbf{E}=\mu_0 \frac{\partial^2}{\partial t^2} \mathbf{P}
$$
where $c$ is the speed of light in vacuum given by

$$
c=\frac{1}{\sqrt{\varepsilon_0 \mu_0}}=3 \times 10^8 \frac{\mathrm{~m}}{\mathrm{~s}}.
$$
This is the relevant wave equation for dielectric dispersive materials, for which the induced polarisation depends on frequency, and the electric susceptibility is complex. Without polarisation, the solution to wave equation in vacuum is an electromagnetic wave propagating with the speed of light in vacuum. 
If the material is further free of dispersion, such that $\chi(\omega)=\chi$, we may simplify it even further to
$$
\Delta \mathbf{E}-\frac{1}{v_{\mathrm{p}}^2} \frac{\partial^2}{\partial t^2} \mathbf{E}=0.
$$
The solutions of this wave equation in a linear dielectric medium with constant susceptibility are therefore electromagnetic waves travelling with the phase velocity
$$
v_p=\frac{c}{n}\equiv c_n.
$$

The macroscopic change in the phase velocity of a plane EM wave in a material is given by the refractive index $n$, which is determined by the material’s atomic structure.
Nonlinear optical processes such as frequency doubling may also be included in the source term of the wave equation: For high field intensities, the material equations become nonlinear because of the anharmonic binding potential. The nonlinear polarisation in the perturbation regime is usually expanded in a Taylor series as a function of the field $\mathbf{E}$ :

$$
P_{i, \mathrm{NL}}=\varepsilon_0 \chi_{i j k}^{(2)} E_j E_k+\varepsilon_0 \chi_{i j k l}^{(3)} E_j E_k E_l+\varepsilon_0 \chi_{i j k l m}^{(4)} E_j E_k E_l E_{\mathrm{m}}+\cdots,
$$
through which the wave equation generalises to

$$
\Delta \mathbf{E}-\frac{1}{c^2} \frac{\partial^2}{\partial t^2} \mathbf{E}=\mu_0 \frac{\partial^2}{\partial t^2} \mathbf{P}_{\mathrm{L}}+\mu_0 \frac{\partial^2}{\partial t^2} \mathbf{P}_{\mathrm{NL}}
$$
where $\mathbf{P}_L$ only contains the linear part of the polarisation. Similar wave equations may be obtained for the magnetic field, however they have the exact same form, e.g. replacing the electric with the magnetic field. Still, it is important to remember that both fields are necessary for the propagation of an electromagnetic wave.

### 1.3.1 Solutions to the Wave Equation: The Plane Wave

The plane monochromatic wave is an important special solution of the wave equation, and we will soon see that _every_ wave can be expanded in terms of them. Consider the real solution of a plane wave travelling in the positive z-direcition

$$
\mathbf{E}(z, t)=\left|\mathbf{E}_0^{+}\right| \cos (\omega t-k z+\varphi),
$$
where $\mathbf{E}_0^{+}=\left|\mathbf{E}_0^{+}\right| \mathrm{e}^{\mathrm{i} \varphi}$ is the complex amplitude. We use the plus sign here because the wave propagates in the positive $z$-direction. In the following we will very often omit the plus or minus sign for the amplitude. The period $T$ is defined through 
$$ 
T=\frac{2\pi}{\omega}=1/f.$$
The next figure shows a plane wave for a constant position as function of time (left), and for a constant time as a function of position:

![Attachments/UltraFastLasers_Keller.webp|700](/img/user/Attachments/UltraFastLasers_Keller.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=27&rect=55,104,383,221|•]]

The period is in time domain the $T$, and the wavelength $\lambda$ in real space vacuum, where the optical frequency does not change. This is a direct consequence of the Maxwell equations, however is not proven here. The speed of light changes in a dispersive medium from $c$ to $c_n$. The same way, the wavelength in vacuum changes:
$$
\lambda \longrightarrow\lambda_n=c_nT=\frac{\lambda}{n}.
$$
This is schematically shown in the next figure:

![Attachments/UltraFastLasers_Keller 1.webp|700](/img/user/Attachments/UltraFastLasers_Keller%201.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=28&rect=232,514,382,606|•]]

Note that nothing prevents us from adopting a complex notation for the solution of the wave equation. It is often much easier to work with the complex notation (assuming $\phi=90^\circ$):
$$
\mathbf{E}(z, t)=\mathbf{E}_0^{+} \mathrm{e}^{\mathrm{i}(\omega t-k z)}.
$$
This comes from the fact, that the wave equation is linear, and therefore any superposition of solutions is also a solution. However, both expressions are valid and equivalent. 
Next, there is a summary for the relevant quantities and their behaviour in vacuum and in a dielectric medium:

| Vacuum                    | Dispersive medium                                          |
| :------------------------ | :--------------------------------------------------------- |
| $v$                       | $v$                                                        |
| $T=1 / v, \omega=2 \pi v$ | $T=1 / f, \omega=2 \pi v$                                  |
| $v_{\mathrm{p}}=c$        | $v_{\mathrm{p}}=c_n=c / n$                                 |
| $k=\frac{\omega}{c}$      | $k_n=\frac{\omega}{v_{\mathrm{p}}}=\frac{\omega}{c} n=k n$ |
| $k=\frac{2 \pi}{\lambda}$ | $k_n=\frac{2 \pi}{\lambda_n}=k n$                          |
| $\lambda$                 | $\lambda_n=\frac{\lambda}{n}$                              |
|                           |                                                            |

---
## 1.4 TEM Wave and Impedance
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=30&selection=197,0,199,22|•]]

Very importantly, the Maxwell equations imply that
$$
\mathbf{E} \perp \mathbf{H}, \quad \mathbf{k} \perp \mathbf{E}, \quad \mathbf{k} \perp \mathbf{H}.
$$
This wave is called a transverse electromagnetic (TEM) wave, because both electric and magnetic field are perpendicular to the wave vector. For a plane harmonic wave, the fields are in phase:

![Attachments/UltraFastLasers_Keller 2.webp|700](/img/user/Attachments/UltraFastLasers_Keller%202.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=31&rect=103,144,336,259|•]]

Further, they imply that

$$
H_0^{ \pm}= \pm \frac{1}{Z} E_0^{ \pm},
$$
where $Z$ is the impedance, defined by

$$
\begin{aligned}
& \text { in vacuum:} \quad Z \equiv Z_0 \equiv \sqrt{\frac{\mu_0}{\varepsilon_0}} =\mu_0c\\
& \text { in a dispersive medium:} \quad Z \equiv \sqrt{\frac{\mu \mu_0}{\varepsilon \varepsilon_0}} = \frac{Z_0}{n}=\mu\mu_0c_n=\mu_0c_n.
\end{aligned}
$$
Note that we assumed $\mu=1$ here. $Z_0$ is also called the characteristic vacuum impedance, and is a natural constant like the speed of light . 

---
## 1.5 Polarisation
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=33&selection=341,0,343,12|•]]

So far, the electromagnetic wave discussed was linearly polarised, meaning that the electric field oscillates in one fixed direction, a likewise for the magnetic field. The direction in which the electric field oscillates is called the polarisation direction. Mathematically, a linearly polarised wave (figure a) in x direction has the form
$$
\mathbf{E}=\left(\begin{array}{c}
E_0 \\
0 \\
0
\end{array}\right) \mathrm{e}^{\mathrm{i}\left(\omega t-k_n z\right)}.
$$

The superposition of two linearly polarised waves with a phase difference $\Delta\varphi$ and polarisation perpendicular to each other generally results in an elliptically polarised plane wave (figure b):
$$
\mathbf{E}=\left(\begin{array}{c}
E_1 \\
E_2 \mathrm{e}^{\mathrm{i} \Delta \varphi} \\
0
\end{array}\right) \mathrm{e}^{\mathrm{i}\left(\omega t-k_n z\right)}.
$$
A special case is for no phase difference, in this case we retrieve a linearly polarised plane wave with polarisation direction in xy-direction. Another special case is for the of $\pm\pi/2$ phase difference. In that case, the wave is called circularly polarised (figure c), where the polarisation vector moves around a circle with frequency $\omega$: 

![Attachments/UltraFastLasers_Keller 3.webp|700](/img/user/Attachments/UltraFastLasers_Keller%203.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=34&rect=56,292,383,604|•]]

## 1.6 Energy Density, Poynting Vector, and Intensity
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=35&selection=124,0,126,46|•]]

For optically isotropic materials, both the Poynting vector and the wave number vector are perpendicular to the wave fronts. It is then easy to derive the following properties

| Energy density (instantaneous) | $w=\frac{1}{2}(\mathbf{E} \cdot \mathbf{D}+\mathbf{H} \cdot \mathbf{B})=\frac{1}{2} \varepsilon \varepsilon_0 \mathbf{E}^2+\frac{1}{2} \mu \mu_0 \mathbf{H}^2$ |
| :--- | :--- |
| Poynting vector (instantaneous) | $\mathbf{S}=\mathbf{E} \times \mathbf{H}$ (for real fields) |
| Poynting vector (averaged over time) | $\overline{\mathbf{S}}=\frac{1}{2} \operatorname{Re}\left(\mathbf{E}_0 \times \mathbf{H}_0^*\right)$ (for complex fields) |
| Intensity | $I=\|\overline{\mathbf{S}}\|=c_n \bar{w}$ |

For the special case of a monochromatic plane wave, we find

| Magnetic field | $\mathbf{H}(\mathbf{r}, t)=\frac{\mathbf{k}_0}{Z} \times \mathbf{E}(\mathbf{r}, t), \mathbf{k}_0 \equiv \frac{\mathbf{k}}{\|\mathbf{k}\|}$ |
| :--- | :--- |
| Energy density (averaged over time) | $\bar{w}=\frac{1}{2} \varepsilon \varepsilon_0\left\|\mathbf{E}_0\right\|^2$ |
| Poynting vector (instantaneous) | $\mathbf{S}(\mathbf{r}, t)=\frac{1}{Z} \mathbf{E}^2 \mathbf{k}_0, \mathbf{k}_0 \equiv \frac{\mathbf{k}}{\|\mathbf{k}\|}$ |
| Poynting vector (averaged over time) | $\overline{\mathbf{S}}=\frac{1}{2 Z}\left\|\mathbf{E}_0\right\|^2 \mathbf{k}_0, \mathbf{k}_0 \equiv \frac{\mathbf{k}}{\|\mathbf{k}\|}$ |
| Intensity | $I=\frac{1}{2 Z}\left\|\mathbf{E}_0\right\|^2=\frac{1}{2} Z\left\|\mathbf{H}_0\right\|^2$ |


---
## 1.7 Dispersion
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=36&selection=187,0,189,10|•]]

The fact that the refractive index is frequency dependent implies that the wave vector $k_n=\omega/cn(\omega)$ is no longer directly proportional to the frequency as it is in vacuum. This frequency dependence is called dispersion. It is very important to know $n(\omega)$, as can be seen in some examples:

![Attachments/UltraFastLasers_Keller 4.webp|700](/img/user/Attachments/UltraFastLasers_Keller%204.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=36&rect=57,103,382,184|•]]

---
## 1.8 Sellmeier Equation in the Visible and Near-Infrared
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=37&selection=86,0,88,51|•]]

In many cases, we will discuss transparent dielectric materials, so with negligible absorption. Glass, for example, is transparent in the visible spectrum, but absorbs in the UV and IR spectral regions. The range in which a material is transparent is called the spectral window, and usually materials exhibit normal/positive dispersion $\frac{d^2n}{d\omega^2}>0$ in this region:

![Attachments/UltraFastLasers_Keller 5.webp|700](/img/user/Attachments/UltraFastLasers_Keller%205.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=38&rect=136,147,303,340|•]]

Far away from absorption, the dispersion may be described by the Sellmeier equations. In this region, the frequency dependent absorption coefficient $\alpha(\omega)$ can be replaced by an infinitely sharp absorption line at $\omega_0$ given by a delta function. We need to use the Kramers-Kronig relations:
$$
\chi_{\mathrm{r}}(\omega)=\frac{2}{\pi} \int_0^{\infty} \frac{\omega^{\prime} \chi_{\mathrm{i}}\left(\omega^{\prime}\right)}{\omega^{\prime 2}-\omega^2} \mathrm{~d} \omega^{\prime}\quad\text{and} \quad \chi_{\mathrm{i}}(\omega)=\frac{2}{\pi} \int_0^{\infty} \frac{\omega^{\prime} \chi_{\mathrm{r}}\left(\omega^{\prime}\right)}{\omega^2-\omega^{\prime 2}} \mathrm{~d} \omega^{\prime}.
$$
The real part of the complex susceptibility $\chi_{\mathrm{r}}$ determines the refractive index and the imaginary part $\chi_i$ determines the absorption of the medium. This simplifies to 
$$
n^2=1+\frac{A \lambda^2}{\lambda^2-\lambda_0^2},
$$
where $A$ is a constant. Extending it more absorption lines, It can be extended to more absorption lines by inserting

$$
\alpha(\omega)=\delta\left(\omega-\omega_1\right)+\delta\left(\omega-\omega_2\right)+\cdots
$$

Very often, we will therefore not have a single constant in the Sellmeier equation, but multiple, as is the case for fused silica:
$$
n^2=1+\frac{A \lambda^2}{\lambda^2-\lambda_1^2}+\frac{B \lambda^2}{\lambda^2-\lambda_2^2}+\frac{C \lambda^2}{\lambda^2-\lambda_3^2}.
$$

---