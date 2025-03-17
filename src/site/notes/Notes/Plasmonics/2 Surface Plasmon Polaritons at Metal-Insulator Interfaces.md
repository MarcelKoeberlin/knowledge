---
{"dg-publish":true,"permalink":"/notes/plasmonics/2-surface-plasmon-polaritons-at-metal-insulator-interfaces/","hide":"true","updated":"2025-03-14T18:24:13.000+01:00"}
---

Jump back to ==[[Notes/Plasmonics/Plasmonics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Plasmonics/2 Surface Plasmon Polaritons at Metal-Insulator Interfaces#2.1 The Wave Equation\|2.1 The Wave Equation]]
- [[Notes/Plasmonics/2 Surface Plasmon Polaritons at Metal-Insulator Interfaces#2.2 Surface Plasmon Polaritons at a Single Interface\|2.2 Surface Plasmon Polaritons at a Single Interface]]
- [[Notes/Plasmonics/2 Surface Plasmon Polaritons at Metal-Insulator Interfaces#2.3 Multilayer Systems\|2.3 Multilayer Systems]]

---
# 2 Surface Plasmon Polaritons at Metal-Insulator Interfaces 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=39&selection=2,0,3,20|•]]

## 2.1 The Wave Equation

When an electromagnetic wave propagates in a material medium, the field polarises the medium and therefore excites a mechanical movement of charges. It follows that field and charges are coupled, and we call this coupled excitation a _polariton_. In the case of a metal, the field can couple to a longitudinal charge density wave that can be viewed as an acoustic wave in the electron gas. The resulting polariton is called _plasmon polariton_. 
Surface plasmon polaritons are electromagnetic excitations propagating at the interface between a dielectric and a conductor, confined in the perpendicular direction. These electromagnetic surface waves arise via the coupling of the electromagnetic fields to oscillations of the conductor’s electron plasma. To investigate the physical properties of surface plasmon polaritons (SPPs), we apply Maxwell’s equations to the flat interface between a conductor and a dielectric. 

Considering the absence of external charge and current densities, and further assuming a negligible variation of the dielectric profile $\varepsilon = \varepsilon(r)$, we find the central equation of electromagnetic wave theory:

$$
\nabla^2 \mathbf{E} - \frac{\varepsilon}{c^2} \frac{\partial^2 \mathbf{E}}{\partial t^2} = 0.
$$

To cast this equation in a form suitable for describing confined propagating waves, we proceed in two steps. First, we assume in general a harmonic time dependence $\mathbf{E}(\mathbf{r}, t) = \mathbf{E}(\mathbf{r}) e^{-i \omega t}$ of the electric field, yielding:

$$
\nabla^2 \mathbf{E} + k_0^2 \varepsilon \mathbf{E} = 0,
$$

where $k_0 = \frac{\omega}{c}$ is the wave vector of the propagating wave in vacuum. This equation is known as the Helmholtz equation.

Next, we define the propagation geometry. We assume for simplicity a one-dimensional problem, such that $\varepsilon$ depends only on one spatial coordinate. Specifically, the waves propagate along the $x$-direction of a Cartesian coordinate system, showing no spatial variation in the perpendicular, in-plane $y$-direction; therefore $\varepsilon = \varepsilon(z)$:

![Attachments/Notes/Plasmonics/2 Surface Plasmon Polaritons at Metal-Insulator Interfaces/Plasmonics - Fundamentals and Applications 4.webp|700](/img/user/Attachments/Notes/Plasmonics/2%20Surface%20Plasmon%20Polaritons%20at%20Metal-Insulator%20Interfaces/Plasmonics%20-%20Fundamentals%20and%20Applications%204.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=40&rect=114,111,346,193|•]]

Applied to electromagnetic surface problems, the plane $z=0$ coincides with the interface sustaining the propagating waves. The desired form of the wave equation is then:

$$
\frac{\partial^2 \mathbf{E}(z)}{\partial z^2} + \left(k_0^2 \varepsilon - \beta^2\right) \mathbf{E} = 0,
$$

where the complex parameter $\beta = k_x$ is called the propagation constant, derived from $\mathbf{E}(x, y, z) = \mathbf{E}(z) e^{i \beta x}$. This equation serves as the starting point for the general analysis of guided electromagnetic modes in waveguides. To use the wave equation for determining the spatial field profile and dispersion of propagating waves, we need explicit expressions for the different field components of $\mathbf{E}$ and $\mathbf{H}$. Using the curl equations, it can be shown that this system allows two sets of self-consistent solutions with different polarisation properties of the propagating waves:
1. The first set are the transverse magnetic (TM or p) modes, where only $E_x$, $E_z$, and $H_y$ are non-zero. 
2. The second set are the transverse electric (TE or s) modes, where only $H_x$, $H_z$, and $E_y$ are non-zero.

---
## 2.2 Surface Plasmon Polaritons at a Single Interface 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=43&selection=4,0,6,46|•]] [[Reading/Papers/Plasmonics/Theory of surface plasmons and surface-plasmon.pdf#page=9&selection=74,0,74,48|•]]

The simplest geometry sustaining SPPs is that of a single, flat interface between a dielectric, non-absorbing half-space ($z > 0$) with positive real dielectric constant $\varepsilon_2$ and an adjacent conducting half-space ($z < 0$) described via a dielectric function $\varepsilon(\omega)$. The requirement of metallic character implies that $\mathfrak{Re}(\varepsilon(\omega)) < 0$, which is fulfilled at frequencies below the bulk plasmon frequency $\omega_p$. We seek propagating wave solutions confined to the interface, i.e., with evanescent decay in the perpendicular $z$-direction.

![Attachments/Notes/Plasmonics/2 Surface Plasmon Polaritons at Metal-Insulator Interfaces/Plasmonics - Fundamentals and Applications 5.webp|700](/img/user/Attachments/Notes/Plasmonics/2%20Surface%20Plasmon%20Polaritons%20at%20Metal-Insulator%20Interfaces/Plasmonics%20-%20Fundamentals%20and%20Applications%205.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=43&rect=111,97,331,206|•]]

For **TM modes**, the equation

$$
\frac{k_2}{k_1} = -\frac{\varepsilon_2}{\varepsilon_1}
$$

must hold by continuity of the parallel components $H_y$ and $\varepsilon_i E_z$ at the interface. This is known as the ==**surface-plasmon condition**==. Note that from the boundary condition, it also follows continuity of the 2D wave vector. Confinement to the surface demands:

$$
\mathfrak{Re}(\varepsilon_1) < 0 \quad \text{if} \quad \varepsilon_2 > 0.
$$

Surface waves exist only at interfaces between materials with opposite signs of the real part of their dielectric permittivities, i.e., between a conductor and an insulator. One time-harmonic solution to the Maxwell equations is then
$$
\mathbf{E}(\omega)=A\left(\hat{\mathbf{x}}-\frac{k_x}{k_z} \hat{\mathbf{z}}\right) \exp \left[i\left(k_z z+k_x x\right)\right]
$$
with the surface plasmon polariton (SPP) dispersion relation

$$
k_x(\omega) \equiv k_{\mathrm{SPP}}(\omega)=\beta=\frac{\omega}{c} \sqrt{\frac{\varepsilon_2 \varepsilon_1(\omega)}{\varepsilon_2+\varepsilon_1(\omega)}}.
$$
This expression is valid for both real and complex $\varepsilon_1$, i.e., for conductors without and with attenuation. Note that $k_0 = \omega / c$. Further, we have
$$
k_z(\omega) =
\begin{cases} 
\frac{\omega}{c} \sqrt{ \frac{\varepsilon_2}{\varepsilon_2 + \varepsilon_1(\omega)} } &\text{for}\quad z > 0 \\[10pt]
\frac{\omega}{c} \sqrt{  \frac{\varepsilon_1(\omega)}{\varepsilon_2 + \varepsilon_1(\omega)} } & \text{for}\quad z < 0.
\end{cases}
$$
For **TE modes**, continuity of $E_y$ and $H_x$ at the interface leads to the condition (where $E_y, H_x, H_z \sim A_1$):

$$
A_1 (k_1 + k_2) = 0.
$$

Since confinement to the surface requires $\mathfrak{Re}(k_1) > 0$ and $\mathfrak{Re}(k_2) > 0$, this condition is only fulfilled if $A_1 = 0$, so that also $A_2 = A_1 = 0$. **Thus, no surface modes exist for TE polarisation. Surface plasmon polaritons only exist for TM polarisation.** Another way to see this is the following: Consider that the Lorentz force is given by
$$
\mathbf{F}=q\left(\mathbf{E}+\mathbf{v}\times\mathbf{B}\right).
$$
As becomes clear, the electric field $\mathbf{E}$ directly exerts a force on charges, causing them to oscillate. On the other hand, the magnetic field $\mathbf{B}$ only affects moving charges perpendicular to the charges velocity. Therefore, the magnetic field does not directly induce charge density oscillations. This then makes clear that the electric field must have a normal component of the electric field, since only then can it cause a charge oscillation. We are looking for a travelling wave with the magnetic field parallel to the surface - hence p-polarised light. 

The figure shows plots of the SPPs' dispersion relation for a metal with negligible damping described by the real Drude dielectric function for an interface between air ($\varepsilon_2 = 1$) and fused silica ($\varepsilon_2 = 2.25$). Due to their bound nature, the SPP excitations correspond to the part of the dispersion curves lying to the right of the respective light lines of air and silica. Radiation into the metal occurs in the transparency regime $\omega > \omega_p$ as mentioned earlier. Between the regime of bound and radiative modes, a frequency gap region with purely imaginary $\beta$ prohibiting propagation exists. The dashed line shows the imaginary part of $\beta$, while the solid line shows its real part.

![Attachments/Notes/Plasmonics/2 Surface Plasmon Polaritons at Metal-Insulator Interfaces/Plasmonics - Fundamentals and Applications 6.webp|700](/img/user/Attachments/Notes/Plasmonics/2%20Surface%20Plasmon%20Polaritons%20at%20Metal-Insulator%20Interfaces/Plasmonics%20-%20Fundamentals%20and%20Applications%206.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=45&rect=76,418,370,614|•]]

**For small wave vectors**, corresponding to [[Notes/Plasmonics/6 Electromagnetic Surface Modes at Low Frequencies#Surface Plasmon Polaritons at THz Frequencies\|low frequencies]] (mid-IR or lower), the SPP propagation constant is close to $k_0$ at the light line, and the wavelengths extend over many wavelengths into the dielectric space. In this regime, SPPs acquire the nature of a grazing-incidence light field, also known as Sommerfeld-Zenneck waves. 

**For large wave vectors**, the frequency of the SPPs approaches the characteristic surface plasmon frequency:

$$
\omega_{\mathrm{sp}} = \frac{\omega_{\mathrm{p}}}{\sqrt{1 + \varepsilon_2}}.
$$
Note that this is the solution to the equation $\varepsilon_1+\varepsilon_2=0.$ It is the ==**nonretarded surface-plasmon condition**==, e.g the surface-plasmon condition for $k_1=k_2=k$, and is valid as long as the phase velocity is much smaller than the speed of light. In the limit of negligible damping of the conduction electron oscillation, implying $\mathfrak{Im}\left(\varepsilon_1(\omega)\right) = 0$, the wave vector $\beta$ goes to infinity as the frequency approaches $\omega_{\mathrm{sp}}$, and the group velocity $v_{\mathrm{g}} \to 0$. The mode thus acquires an electrostatic character and is known as the ==**surface plasmon**==. This is because it can be obtained as a solution to the Laplace equation for a single interface geometry. It is wavelike in the $x$-direction and decays exponentially in the $z$-direction. We see that the surface plasmon is the limiting case of a SPP as $\beta\rightarrow\infty.$ 

The above discussions have assumed an ideal conductor with no damping. Excitations of the conduction electrons in real metals, however, suffer from both free-electron and interband damping. Therefore, $\varepsilon_1(\omega)$ is complex, and the SPP propagation constant $\beta$ is also complex. The traveling SPPs are damped with an energy attenuation length, also called the propagation length, given by:

$$
L = \frac{1}{2 \cdot \mathfrak{Im}(\beta)},
$$

typically between $10 \, \mu \text{m}$ and $100 \, \mu \text{m}$ in the visible regime, depending on the metal/dielectric configuration.

The next figure shows the dispersion relation of SPPs propagating at a silver/air and silver/silica interface. In comparison to the ideal case, the bound SPPs now approach a maximum, finite wave vector at the surface plasmon frequency of the system. This places a lower bound on both the wavelength $\lambda_{\text{sp}} = 2\pi / \mathfrak{Re}(\beta)$ of the surface plasmon and the amount of mode confinement perpendicular to the interface since the SPP fields in the dielectric fall off exponentially in $k_z$. The quasi-bound, leaky part of the dispersion between $\omega_p$ and $\omega_{\text{sp}}$ is now allowed compared to the case of an ideal conductor.

![Attachments/Notes/Plasmonics/2 Surface Plasmon Polaritons at Metal-Insulator Interfaces/Plasmonics - Fundamentals and Applications 7.webp|700](/img/user/Attachments/Notes/Plasmonics/2%20Surface%20Plasmon%20Polaritons%20at%20Metal-Insulator%20Interfaces/Plasmonics%20-%20Fundamentals%20and%20Applications%207.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=47&rect=78,421,367,609|•]]

There is generally a characteristic trade-off between localisation and loss in plasmonics. Field confinement below the diffraction limit of half the wavelength in the dielectric can be achieved close to $\omega_{\text{sp}}$. In the metal itself, the field falls off over distances on the order of $20 \, \text{nm}$ over a wide frequency range.

The next figure shows the spatial extension of the electromagnetic field associated with the surface-plasmon polariton:

![Attachments/Theory of surface plasmons and surface-plasmon.webp|700](/img/user/Attachments/Theory%20of%20surface%20plasmons%20and%20surface-plasmon.webp)[[Reading/Papers/Plasmonics/Theory of surface plasmons and surface-plasmon.pdf#page=12&rect=152,670,408,750|•]]

We obtain the surface-plasmon decay constant perpendicular to the surface:
$$
\kappa_i=k_0\sqrt\frac{-\varepsilon_i^2}{\varepsilon_1+\varepsilon_2}.
$$
Then, the attenuation length is the inverse of this decay constant. The attenuation length into the metal at long wavelengths $\beta\rightarrow0$ is given by the skin-depth. 

---
## 2.3 Multilayer Systems 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=48&selection=7,0,9,18|•]]

Let us now turn our attention to systems consisting of alternating conducting and dielectric thin films. Each single interface can sustain bound SPPs. When the separation between adjacent interfaces is comparable to or smaller than the decay length $\hat{z} = 1 / |k_z|$ of the interface mode, interaction between SPPs gives rise to coupled modes. 

Consider first a three-layer system:
1. The insulator/metal/insulator (**IMI**) heterostructure: A thin metallic layer (I) is sandwiched between two (infinitely) thick dielectric claddings (II, III).
2. The metal/insulator/metal (**MIM**) heterostructure: A thin dielectric core layer (I) is sandwiched between two metallic claddings (II, III).

![Attachments/Notes/Plasmonics/2 Surface Plasmon Polaritons at Metal-Insulator Interfaces/Plasmonics - Fundamentals and Applications 8.webp|700](/img/user/Attachments/Notes/Plasmonics/2%20Surface%20Plasmon%20Polaritons%20at%20Metal-Insulator%20Interfaces/Plasmonics%20-%20Fundamentals%20and%20Applications%208.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=48&rect=110,99,328,196|•]]

We are only interested in the lowest-order bound modes and thus start with a general description of TM modes that are non-oscillatory in the $z$-direction normal to the interface. We demand that the fields decay exponentially in the claddings (II) and (III). Note that for $a \to \infty$, this problem reduces to the case of two uncoupled SPPs at the respective interface.

Now consider the sub- and superstrates (II) and (III) share the same dielectric response $\varepsilon_2 = \varepsilon_3$ and thus $k_2 = k_3$. For the dispersion relation, we find a pair of equations:

$$
\begin{aligned}
\tanh k_1 a & = -\frac{k_2 \varepsilon_1}{k_1 \varepsilon_2}, &&
\coth k_1 a = -\frac{k_1 \varepsilon_2}{k_2 \varepsilon_1}.
\end{aligned}
$$

1. The first equation describes modes of odd vector parity: $E_x(z)$ is odd, while $H_y(z)$ and $E_z(z)$ are even functions.
2. The second describes modes of even vector parity: $E_x(z)$ is even, while $H_y(z)$ and $E_z(z)$ are odd.

For the **IMI geometry**, we have $\varepsilon_1 = \varepsilon(\omega)$ for the metal and $\varepsilon_2$ is positive and real for the insulating cladding. For example, consider the case of air/silver/air with two different thicknesses (50 nm in dashed black and 100 nm in dashed gray) of the silver film:

![Attachments/Notes/Plasmonics/2 Surface Plasmon Polaritons at Metal-Insulator Interfaces/Plasmonics - Fundamentals and Applications 9.webp|700](/img/user/Attachments/Notes/Plasmonics/2%20Surface%20Plasmon%20Polaritons%20at%20Metal-Insulator%20Interfaces/Plasmonics%20-%20Fundamentals%20and%20Applications%209.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=50&rect=91,119,345,290|•]]

For simplicity, the dielectric function of silver is approximated as a Drude metal with negligible damping, meaning $\varepsilon(\omega)$ is real so that $\mathfrak{Im}\left[\beta\right] = 0$. As shown, the odd modes have frequencies $\omega_{+}$ higher than the respective frequencies for a single-interface SPP, while the even modes have lower frequencies $\omega_{-}$. For large wave vectors $\beta$, achievable only if $\mathfrak{Im}\left[\varepsilon(\omega)\right] = 0$, the limiting frequencies are
$$
\begin{aligned}
\omega_{\pm} &= \frac{\omega_{\mathrm{p}}}{\sqrt{1 + \varepsilon_2}} \cdot\sqrt{1 \pm \frac{2 \varepsilon_2 e^{-2 \beta a}}{1 + \varepsilon_2}}.
\end{aligned}
$$
Odd modes have the interesting property that as the metal film thickness decreases, the confinement of the coupled SPP to the metal film decreases, evolving into a plane wave supported by the homogeneous dielectric environment. For real, absorptive metals described by a complex $\varepsilon(\omega)$, this implies a drastically increased SPP propagation length. These are known as _long-ranging SPPs_ and will be discussed in a later chapter. Even modes exhibit the opposite behavior: their confinement to the metal increases with decreasing metal film thickness, resulting in reduced propagation length.

In the **MIM geometry**, the most interesting mode is the fundamental odd mode of the system, which does not exhibit a cut-off for vanishing core layer thickness:

![Attachments/Notes/Plasmonics/2 Surface Plasmon Polaritons at Metal-Insulator Interfaces/Plasmonics - Fundamentals and Applications 10.webp|700](/img/user/Attachments/Notes/Plasmonics/2%20Surface%20Plasmon%20Polaritons%20at%20Metal-Insulator%20Interfaces/Plasmonics%20-%20Fundamentals%20and%20Applications%2010.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=52&rect=93,446,348,610|•]]

The dielectric function was taken as a complex fit, so the propagation constant $\beta$ does not go to infinity as the surface plasmon frequency is approached. Instead, it folds back and eventually crosses the light line, similar to SPPs at single interfaces. 

Large propagation constants can be achieved even for excitations well below $\omega_{\text{sp}}$, provided that the dielectric core is sufficiently thin. This indicates that localisation effects achievable near $\omega_{\text{sp}}$ for a single interface can also be attained for excitations in the infrared for MIM structures.

Note that this discussion was limited to the fundamental bound modes. In IMI structures, there are leaky modes, while in MIM structures, oscillatory modes can exist. Additionally, the coupling between SPPs at the core/cladding interface changes significantly if $\varepsilon_2 \neq \varepsilon_3$, prohibiting phase matching.

---