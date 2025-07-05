---
{"dg-publish":true,"permalink":"/website/website-github-clone/src/site/notes/notes/plasmonics/2-surface-plasmon-polaritons-at-metal-insulator-interfaces/","updated":"2025-07-03T20:20:02.059+02:00"}
---


Jump back to ==[[Notes/Plasmonics/Plasmonics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Plasmonics/2 Surface Plasmon Polaritons at Metal-Insulator Interfaces#2.1 The Wave Equation\|2.1 The Wave Equation]]
[[Notes/Plasmonics/2 Surface Plasmon Polaritons at Metal-Insulator Interfaces#2.2 Surface Plasmon Polaritons at a Single Interface\|2.2 Surface Plasmon Polaritons at a Single Interface]]
[[Notes/Plasmonics/2 Surface Plasmon Polaritons at Metal-Insulator Interfaces#2.3 Multilayer Systems\|2.3 Multilayer Systems]]

---
# 2 Surface Plasmon Polaritons at Metal-Insulator Interfaces
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=39&selection=2,0,3,20| ]]

## 2.1 The Wave Equation

When an electromagnetic wave propagates in a material medium, the field polarises the medium and therefore excites a mechanical movement of charges. It follows that field and charges are coupled, and we call this coupled excitation a _polariton_. In the case of a metal, the field can couple to a longitudinal charge density wave that can be viewed as an acoustic wave in the electron gas. The resulting polariton is called a _plasmon polariton_.
Surface plasmon polaritons (SPPs) are electromagnetic excitations propagating at the interface between a dielectric and a conductor, confined in the perpendicular direction. These electromagnetic surface waves arise via the coupling of the electromagnetic fields to oscillations of the conductor’s electron plasma. To investigate the physical properties of SPPs, we apply Maxwell’s equations to the flat interface between a conductor and a dielectric.

Considering the absence of external charge and current densities ($\rho_f=0, \mathbf{J}_f=0$), and further assuming a negligible variation of the permeability (using $\mu_0$ for non-magnetic media), the wave equation for the electric field in a medium with dielectric function $\varepsilon_r(\mathbf{r},\omega)$ (which we will denote as $\varepsilon(\mathbf{r},\omega)$ for simplicity, remembering it's the relative permittivity) can be derived from Maxwell's curl equations:
$$
\nabla \times (\nabla \times \mathbf{E}) + \frac{1}{c^2} \frac{\partial^2 (\varepsilon \mathbf{E})}{\partial t^2} = 0.
$$
For a homogeneous medium where $\varepsilon$ is not a function of position, and using $\nabla \times (\nabla \times \mathbf{E}) = \nabla(\nabla \cdot \mathbf{E}) - \nabla^2 \mathbf{E}$, and $\nabla \cdot (\varepsilon \mathbf{E}) = \varepsilon \nabla \cdot \mathbf{E} = 0$ (assuming homogeneous $\varepsilon$ and no free charges leading to $\nabla \cdot \mathbf{E}=0$ for transverse waves, or that $\varepsilon$ is spatially constant for general case), this simplifies to:
$$
\nabla^2 \mathbf{E} - \frac{\varepsilon}{c^2} \frac{\partial^2 \mathbf{E}}{\partial t^2} = 0.
$$

To cast this equation in a form suitable for describing confined propagating waves, we proceed in two steps. First, we assume a harmonic time dependence $\mathbf{E}(\mathbf{r}, t) = \mathbf{E}(\mathbf{r}) e^{-i \omega t}$ of the electric field, yielding:

$$
\nabla^2 \mathbf{E}(\mathbf{r}) + k_0^2 \varepsilon(\mathbf{r},\omega) \mathbf{E}(\mathbf{r}) = 0,
$$

where $k_0 = \frac{\omega}{c}$ is the wave number of the propagating wave in vacuum. This equation is known as the Helmholtz equation.

Next, we define the propagation geometry. We assume for simplicity a one-dimensional problem for the dielectric profile, such that $\varepsilon$ depends only on one spatial coordinate, $z$. Specifically, the waves propagate along the $x$-direction of a Cartesian coordinate system and show no spatial variation in the perpendicular, in-plane $y$-direction ($\partial/\partial y = 0$); therefore $\varepsilon = \varepsilon(z)$:

![Attachments/Notes/Plasmonics/2 Surface Plasmon Polaritons at Metal-Insulator Interfaces/Plasmonics - Fundamentals and Applications 4.webp|700](/img/user/Attachments/Notes/Plasmonics/2%20Surface%20Plasmon%20Polaritons%20at%20Metal-Insulator%20Interfaces/Plasmonics%20-%20Fundamentals%20and%20Applications%204.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=40&rect=114,111,346,193| ]]

Applied to electromagnetic surface problems, the plane $z=0$ coincides with the interface sustaining the propagating waves. We look for solutions of the form $\mathbf{E}(x, y, z) = \mathbf{E}(z) e^{i \beta x}$. Substituting this into the Helmholtz equation, and noting that $\partial^2/\partial x^2 \rightarrow -\beta^2$ and $\partial^2/\partial y^2 \rightarrow 0$, we obtain:

$$
\frac{\partial^2 \mathbf{E}(z)}{\partial z^2} + \left(k_0^2 \varepsilon(z) - \beta^2\right) \mathbf{E}(z) = 0,
$$

where the complex parameter $\beta = k_x$ is called the propagation constant. This equation serves as the starting point for the general analysis of guided electromagnetic modes. To use this wave equation for determining the spatial field profile and dispersion of propagating waves, we need explicit expressions for the different field components of $\mathbf{E}$ and $\mathbf{H}$. Using Maxwell's curl equations, it can be shown that this system allows two sets of self-consistent solutions with different polarisation properties of the propagating waves:
1. The first set are the transverse magnetic (TM or p) modes, for which $H_x = H_z = E_y = 0$, so only $E_x$, $E_z$, and $H_y$ are non-zero.
2. The second set are the transverse electric (TE or s) modes, for which $E_x = E_z = H_y = 0$, so only $H_x$, $H_z$, and $E_y$ are non-zero.

---
## 2.2 Surface Plasmon Polaritons at a Single Interface
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=43&selection=4,0,6,46| ]] [[Reading/Papers/Plasmonics/Theory of surface plasmons and surface-plasmon.pdf#page=9&selection=74,0,74,48| ]]

The simplest geometry sustaining SPPs is that of a single, flat interface at $z=0$ between a dielectric, non-absorbing half-space ($z > 0$) with a positive real dielectric constant $\varepsilon_2$, and an adjacent conducting half-space ($z < 0$) described by a complex dielectric function $\varepsilon_1(\omega)$. The requirement of metallic character implies that $\mathfrak{Re}\{\varepsilon_1(\omega)\} < 0$, which is fulfilled at frequencies below the bulk plasma frequency $\omega_p$. We seek propagating wave solutions confined to the interface, so those with evanescent decay in the perpendicular $z$-direction.

![Attachments/Notes/Plasmonics/2 Surface Plasmon Polaritons at Metal-Insulator Interfaces/Plasmonics - Fundamentals and Applications 5.webp|700](/img/user/Attachments/Notes/Plasmonics/2%20Surface%20Plasmon%20Polaritons%20at%20Metal-Insulator%20Interfaces/Plasmonics%20-%20Fundamentals%20and%20Applications%205.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=43&rect=111,97,331,206| ]]

Let the fields in medium $j$ (where $j=1$ for $z<0$ and $j=2$ for $z>0$) vary as $e^{i(\beta x - \omega t)}$. For confinement, the fields must decay away from the interface. We define decay constants $\kappa_j$ such that $\operatorname{Re}\{\kappa_j\} > 0$:
- For $z<0$ (metal, medium 1): $\mathbf{E}_1(z) = \mathbf{E}_{01} e^{\kappa_1 z}$
- For $z>0$ (dielectric, medium 2): $\mathbf{E}_2(z) = \mathbf{E}_{02} e^{-\kappa_2 z}$

The decay constants $\kappa_j$ (often denoted $k_{zj}$ in other contexts, but chosen here as real positive for pure decay) are related to the propagation constant $\beta$ and the material properties by:
$$
\kappa_j^2 = \beta^2 - k_0^2 \varepsilon_j(\omega).
$$

For **TM modes** (components $E_x, E_z, H_y$), applying boundary conditions (continuity of tangential $E_x$ and tangential $H_y$) at $z=0$ leads to the dispersion relation for SPPs. Equivalently, continuity of $E_x$ and $D_z = \varepsilon_0 \varepsilon_j E_z$ can be used. The condition derived from these is:
$$
\frac{\kappa_1}{\varepsilon_1(\omega)} + \frac{\kappa_2}{\varepsilon_2} = 0.
$$
This is known as the ==surface-plasmon condition==. Since $\kappa_1$ and $\kappa_2$ must both be positive real numbers for a bound surface wave, this condition can only be satisfied if $\varepsilon_1(\omega)$ and $\varepsilon_2$ have opposite signs. Typically, $\varepsilon_2 > 0$ (dielectric), so we require $\mathfrak{Re}\{\varepsilon_1(\omega)\} < -\varepsilon_2 \frac{\kappa_1}{\kappa_2} < 0$. For a simple interface, this generally means $\mathfrak{Re}\{\varepsilon_1(\omega)\} < 0$.
Surface waves exist only at interfaces between materials with opposite signs of the real part of their dielectric permittivities (so conductor and insulator).

The SPP dispersion relation, expressing the in-plane propagation constant $\beta$ (often denoted $k_x$ or $k_{\text{SPP}}$) as a function of frequency, is found by substituting $\kappa_j^2 = \beta^2 - k_0^2 \varepsilon_j$ into the surface-plasmon condition:
$$
\beta(\omega) \equiv k_{\mathrm{SPP}}(\omega) = \frac{\omega}{c} \sqrt{\frac{\varepsilon_1(\omega) \varepsilon_2}{\varepsilon_1(\omega) + \varepsilon_2}}.
$$
This expression is valid for both real and complex $\varepsilon_1(\omega)$. The decay constants are then:
$$
\kappa_1(\omega) = \frac{\omega}{c} \sqrt{\frac{-\varepsilon_1(\omega)^2}{\varepsilon_1(\omega) + \varepsilon_2}} \quad \text{and} \quad \kappa_2(\omega) = \frac{\omega}{c} \sqrt{\frac{-\varepsilon_2^2}{\varepsilon_1(\omega) + \varepsilon_2}}.
$$
For these to represent decaying fields, $\mathfrak{Re}\{\kappa_1\} > 0$ and $\mathfrak{Re}\{\kappa_2\} > 0$ must hold.

For **TE modes** (components $E_y, H_x, H_z$), continuity of $E_y$ and $H_x$ at the interface leads to the condition:
$$
\kappa_1 + \kappa_2 = 0.
$$
Since confinement to the surface requires $\mathfrak{Re}\{\kappa_1\} > 0$ and $\mathfrak{Re}\{\kappa_2\} > 0$, this condition cannot be satisfied unless the fields are identically zero. **Thus, no surface modes exist for TE polarisation at a simple planar interface between isotropic media. Surface plasmon polaritons only exist for TM polarisation.**

A qualitative argument for this is based on the Lorentz force $\mathbf{F}=q\left(\mathbf{E}+\mathbf{v}\times\mathbf{B}\right)$. The electric field $\mathbf{E}$ directly exerts a force on charges, causing them to oscillate. The magnetic field $\mathbf{B}$ only affects moving charges perpendicular to their velocity. For a surface charge oscillation (charges moving predominantly in the plane, creating out-of-plane density variations), an electric field component normal to the surface is necessary to drive this charge accumulation. This normal electric field component is characteristic of TM waves, not TE waves (where $\mathbf{E}$ is purely tangential to the interface and perpendicular to the propagation direction).

The figure below shows plots of the SPP dispersion relation for a metal (for example silver) with negligible damping (real Drude dielectric function $\varepsilon_1(\omega) = 1 - \omega_p^2/\omega^2$) interfaced with air ($\varepsilon_2 = 1$) and, for comparison, with fused silica ($\varepsilon_2 = 2.25$). Due to their bound nature, the SPP excitations correspond to the part of the dispersion curves lying to the right of the respective light lines ($\beta = k_0\sqrt{\varepsilon_2}$) of the dielectric media. Radiation into the metal occurs in its transparency regime $\omega > \omega_p$. Between the regime of bound and radiative modes, a frequency gap region with purely imaginary $\beta$ (prohibiting propagation) can exist for some parameter ranges (not typically for the simple Drude/dielectric interface).

![Attachments/Notes/Plasmonics/2 Surface Plasmon Polaritons at Metal-Insulator Interfaces/Plasmonics - Fundamentals and Applications 6.webp|700](/img/user/Attachments/Notes/Plasmonics/2%20Surface%20Plasmon%20Polaritons%20at%20Metal-Insulator%20Interfaces/Plasmonics%20-%20Fundamentals%20and%20Applications%206.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=45&rect=76,418,370,614| ]]

**For small wave vectors** (low frequencies, so mid-IR or lower), the SPP propagation constant $\beta$ is close to $k_0\sqrt{\varepsilon_2}$ (the light line in the dielectric), and the fields extend many wavelengths into the dielectric. In this regime, SPPs acquire the nature of a grazing-incidence light field, also known as Sommerfeld-Zenneck waves.

**For large wave vectors**, the frequency of the SPPs approaches the characteristic surface plasmon frequency $\omega_{\mathrm{sp}}$:
$$
\omega_{\mathrm{sp}} = \frac{\omega_{\mathrm{p}}}{\sqrt{1 + \varepsilon_2}}.
$$
This is derived from the ==nonretarded surface-plasmon condition== $\varepsilon_1(\omega) + \varepsilon_2 = 0$, valid when the phase velocity $\omega/\beta$ is much smaller than $c/\sqrt{\varepsilon_2}$ (meaning $\beta \gg k_0\sqrt{\varepsilon_2}$). In the limit of negligible damping ($\mathfrak{Im}\{\varepsilon_1(\omega)\} \to 0$), the wave vector $\beta \to \infty$ as $\omega \to \omega_{\mathrm{sp}}$, and the group velocity $v_{\mathrm{g}} = d\omega/d\beta \to 0$. The mode then acquires an electrostatic character and is known as the ==surface plasmon==. It is a solution to Laplace's equation for the single interface geometry, wavelike in the $x$-direction and decaying exponentially in the $z$-direction. The surface plasmon is the limiting case of an SPP as $\beta\rightarrow\infty$.

The above discussions often assume an ideal conductor with no damping. Excitations of conduction electrons in real metals, however, suffer from damping (both free-electron scattering and interband transitions if applicable). Therefore, $\varepsilon_1(\omega)$ is complex, and the SPP propagation constant $\beta$ is also complex. The travelling SPPs are damped with a propagation length $L$ (energy attenuation length is $L/2$ if $L$ is defined for field amplitude) given by:
$$
L = \frac{1}{2 \operatorname{Im}\{\beta\}},
$$
typically between $10 \, \mu \text{m}$ and $100 \, \mu \text{m}$ in the visible regime for noble metals.

The next figure shows the dispersion relation of SPPs propagating at a silver/air and silver/silica interface, including damping. In comparison to the ideal case, the bound SPPs now approach a maximum, finite wave vector near the surface plasmon frequency. This "bending back" of the dispersion curve places a lower bound on the SPP wavelength $\lambda_{\text{SPP}} = 2\pi / \operatorname{Re}\{\beta\}$ and limits the degree of mode confinement. The quasi-bound, leaky part of the dispersion (where SPPs can radiate into the dielectric if $\operatorname{Re}\{\beta\} < k_0\sqrt{\varepsilon_2}$) may also be considered.

![Attachments/Notes/Plasmonics/2 Surface Plasmon Polaritons at Metal-Insulator Interfaces/Plasmonics - Fundamentals and Applications 7.webp|700](/img/user/Attachments/Notes/Plasmonics/2%20Surface%20Plasmon%20Polaritons%20at%20Metal-Insulator%20Interfaces/Plasmonics%20-%20Fundamentals%20and%20Applications%207.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=47&rect=78,421,367,609| ]]

There is generally a characteristic trade-off between field localisation and propagation losses in plasmonics. Strong field confinement (small spatial extent perpendicular to the interface) is typically achieved near $\omega_{\mathrm{sp}}$, but this often coincides with higher losses (shorter propagation length $L$). In the metal itself, the field typically decays over distances on the order of the skin depth (roughly $20-50 \, \text{nm}$ for noble metals in the visible range).

The spatial extension of the electromagnetic field associated with the surface-plasmon polariton is depicted below:

![Attachments/Theory of surface plasmons and surface-plasmon.webp|700](/img/user/Attachments/Theory%20of%20surface%20plasmons%20and%20surface-plasmon.webp)[[Reading/Papers/Plasmonics/Theory of surface plasmons and surface-plasmon.pdf#page=12&rect=152,670,408,750| ]]

The attenuation length into each medium $j$ (perpendicular to the surface) is $1/\operatorname{Re}\{\kappa_j\}.$ For example, at frequencies far from $\omega_{sp}$ (long SPP wavelength limit, $\beta \approx k_0\sqrt{\varepsilon_2}$), the decay length into the dielectric can be very large, while the decay length into the metal is related to the skin depth.

---
## 2.3 Multilayer Systems
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=48&selection=7,0,9,18| ]]

Let us now turn our attention to systems consisting of alternating conducting and dielectric thin films. Each single interface can sustain bound SPPs. When the separation between adjacent interfaces is comparable to or smaller than the decay length of the interface mode, interaction (coupling) between these SPPs gives rise to new coupled modes.

Consider first a three-layer system with a central layer of thickness $d$: 
1. The insulator/metal/insulator (**IMI**) heterostructure: A thin metallic layer (medium 1, thickness $d$) is sandwiched between two (semi-infinitely thick) dielectric claddings (media 2 and 3).
2. The metal/insulator/metal (**MIM**) heterostructure: A thin dielectric core layer (medium 1, thickness $d$) is sandwiched between two metallic claddings (media 2 and 3).

![Attachments/Notes/Plasmonics/2 Surface Plasmon Polaritons at Metal-Insulator Interfaces/Plasmonics - Fundamentals and Applications 8.webp|700](/img/user/Attachments/Notes/Plasmonics/2%20Surface%20Plasmon%20Polaritons%20at%20Metal-Insulator%20Interfaces/Plasmonics%20-%20Fundamentals%20and%20Applications%208.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=48&rect=110,99,328,196| ]]

We are interested in the lowest-order bound TM modes that are non-oscillatory (evanescent) in the $z$-direction normal to the interfaces within each layer and decay exponentially in the outer claddings. For $d \to \infty$, this problem reduces to two uncoupled SPPs at the respective interfaces.

Now consider the symmetric case where the claddings (media 2 and 3) share the same dielectric response, so $\varepsilon_2 = \varepsilon_3$, and thus $\kappa_2 = \kappa_3$. The dispersion relations for the coupled modes in such a symmetric three-layer structure (central layer $\varepsilon_1$, thickness $d,$ claddings $\varepsilon_2$) are given by a pair of transcendental equations:

- For symmetric $H_y$ field profile; often termed antisymmetric or odd mode for $E_x$:
	$$\tanh\left(\frac{\kappa_1 d}{2}\right) = -\frac{\kappa_2 \varepsilon_1}{\kappa_1 \varepsilon_2}$$
- For antisymmetric $H_y$ field profile; often termed symmetric or even mode for $E_x$ or charge distribution): 
	$$\coth\left(\frac{\kappa_1 d}{2}\right) = -\frac{\kappa_2 \varepsilon_1}{\kappa_1 \varepsilon_2}$$

Here $\kappa_1 = \sqrt{\beta^2 - k_0^2\varepsilon_1}$ and $\kappa_2 = \sqrt{\beta^2 - k_0^2\varepsilon_2}$. The parity refers to the symmetry of the dominant field component ($H_y$) or charge distribution with respect to the center of the middle layer. For example:
1. The first equation (with $\tanh$) typically corresponds to modes where $H_y(z)$ is symmetric (even function) with respect to the center of layer 1, and $E_x(z)$ is antisymmetric (odd).
2. The second equation (with $\coth$) typically corresponds to modes where $H_y(z)$ is antisymmetric (odd), and $E_x(z)$ is symmetric (even).

For the **IMI geometry**, we have $\varepsilon_1 = \varepsilon_{\text{metal}}(\omega)$ for the metal film and $\varepsilon_2 > 0$ (real) for the insulating claddings. For example, consider the case of air/silver/air with two different thicknesses of the silver film:

![Attachments/Notes/Plasmonics/2 Surface Plasmon Polaritons at Metal-Insulator Interfaces/Plasmonics - Fundamentals and Applications 9.webp|700](/img/user/Attachments/Notes/Plasmonics/2%20Surface%20Plasmon%20Polaritons%20at%20Metal-Insulator%20Interfaces/Plasmonics%20-%20Fundamentals%20and%20Applications%209.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=50&rect=91,119,345,290| ]]

For simplicity, if the dielectric function of silver is approximated as a Drude metal with negligible damping, $\varepsilon_1(\omega)$ is real, leading to $\operatorname{Im}\{\beta\} = 0$ for these bound modes. The coupling of SPPs from the two interfaces of the metal film splits the original single-interface SPP dispersion into two branches: a lower-frequency (or lower-energy) symmetric mode, and a higher-frequency (or higher-energy) antisymmetric mode. For large wave vectors $\beta$, achievable with negligible damping, the limiting frequencies $\omega_{\pm}$ approach modified surface plasmon resonance frequencies influenced by the coupling and film thickness $d$.
The mode corresponding to an antisymmetric $H_y$ profile (symmetric $E_x$) has the interesting property that as the metal film thickness $d$ decreases, its effective index can decrease, and its fields can extend further into the dielectric. For real, absorptive metals, this can lead to a significantly increased SPP propagation length for very thin films; these are known as _long-ranging SPPs_ (LRSPPs). The mode with symmetric $H_y$ (antisymmetric $E_x$) typically exhibits increased confinement to the metal as $d$ decreases, resulting in reduced propagation length (_short-ranging SPPs_).

In the **MIM geometry** (metal/insulator/metal, so $\varepsilon_1$ is dielectric, $\varepsilon_2$ is metal), one of the most interesting modes is the fundamental TM mode (often symmetric $E_x$, antisymmetric $H_y$), which can guide light with very high confinement in a thin dielectric gap and does not exhibit a cut-off frequency for vanishing core layer thickness $d$:

![Attachments/Notes/Plasmonics/2 Surface Plasmon Polaritons at Metal-Insulator Interfaces/Plasmonics - Fundamentals and Applications 10.webp|700](/img/user/Attachments/Notes/Plasmonics/2%20Surface%20Plasmon%20Polaritons%20at%20Metal-Insulator%20Interfaces/Plasmonics%20-%20Fundamentals%20and%20Applications%2010.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=52&rect=93,446,348,610| ]]

If the dielectric function of the metal is taken as complex (including damping), the propagation constant $\beta$ does not go to infinity as a non-retarded surface plasmon frequency is approached. Instead, it exhibits bending and loss features.
Large propagation constants (and thus strong field confinement and short wavelengths) can be achieved for MIM gap SPPs even for excitation frequencies well below $\omega_{\mathrm{sp}}$ of a single interface, provided that the dielectric core is sufficiently thin. This indicates that strong localisation effects, typically associated with frequencies near $\omega_{\mathrm{sp}}$ for a single interface, can also be attained at lower frequencies (so infrared) in MIM structures.

Note that this discussion has primarily focused on the fundamental bound modes. IMI structures can also support leaky (radiative) modes, while MIM structures can support higher-order guided modes if the dielectric core is thick enough. Additionally, if the cladding dielectrics are different ($\varepsilon_2 \neq \varepsilon_3$), the system becomes asymmetric, and the mode properties and dispersion relations change, generally prohibiting simple phase matching with external plane waves without specific coupling mechanisms.

---