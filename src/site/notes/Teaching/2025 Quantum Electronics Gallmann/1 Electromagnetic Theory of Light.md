---
{"dg-publish":true,"permalink":"/teaching/2025-quantum-electronics-gallmann/1-electromagnetic-theory-of-light/","hide":"true","updated":"2025-02-17T18:23:16.000+01:00"}
---

Jump back to ==[[Teaching/2025 Quantum Electronics Gallmann/Quantum Electronics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Teaching/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.1 Microscopic Form of Maxwell's Equations in Vacuum\|1.1 Microscopic Form of Maxwell's Equations in Vacuum]]
- [[Teaching/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.2 Maxwell's Equations in a Medium\|1.2 Maxwell's Equations in a Medium]]
- [[Teaching/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.3 The Material Equations\|1.3 The Material Equations]]
- [[Teaching/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.4 Macroscopic Approximation\|1.4 Macroscopic Approximation]]
- [[Teaching/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.5 Wave Equation\|1.5 Wave Equation]]
- [[Teaching/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.6 Solutions to the wave equation\|1.6 Solutions to the wave equation]]
- [[Teaching/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.7 Polarisation\|1.7 Polarisation]]
- [[Teaching/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.8 Poynting Vector and Poynting's Theorem\|1.8 Poynting Vector and Poynting's Theorem]]
- [[Teaching/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.9 Timescales\|1.9 Timescales]]
- [[Teaching/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.10 Momentum of Light\|1.10 Momentum of Light]]

---
# 1 Electromagnetic Theory of Light
[[Reading/Books/Lasers and Nonlinear Optics/Fundamentals of Photonics.pdf#page=422&selection=0,0,1,22|•]]

Light is an electromagnetic wave governed by the same theoretical principles that describe all forms of electromagnetic radiation. It consists of coupled oscillating electric and magnetic fields.

---
## 1.1 Microscopic Form of Maxwell's Equations in Vacuum
[[Teaching/2025 Quantum Electronics Gallmann/QE_script.pdf#page=13&selection=12,0,15,3|•]] [[Reading/Books/Lasers and Nonlinear Optics/Fundamentals of Photonics.pdf#page=426&selection=35,0,35,35|•]] [[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=26&selection=0,0,0,14|•]]

We begin with the simplest case by considering the electric and magnetic fields in free space, meaning there are no charges or currents present. The governing equations are Maxwell's equations:

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= 0, \\
\nabla \cdot \mathbf{B} &= 0, \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t}, \\
\nabla \times \mathbf{B} &= \varepsilon_0 \mu_0 \frac{\partial \mathbf{E}}{\partial t}.
\end{aligned}
$$

Here, $\varepsilon_0$ is the permittivity of free space, and $\mu_0$ is the permeability of free space. These equations describe how the electric field $\mathbf{E}$ and the magnetic field $\mathbf{B}$ evolve in time and space, with both fields being functions of position and time, i.e., $\mathbf{E}(\mathbf{r},t)$ and $\mathbf{B}(\mathbf{r},t)$. 

A key property of Maxwell's equations is their linearity: any linear combination of solutions remains a valid solution. These equations have been experimentally confirmed for over a century and are fundamental to classical electrodynamics.

---
## 1.2 Maxwell's Equations in a Medium
[[Teaching/2025 Quantum Electronics Gallmann/QE_script.pdf#page=14&selection=72,0,74,31|•]] [[Reading/Books/Lasers and Nonlinear Optics/Fundamentals of Photonics.pdf#page=428&selection=80,0,80,31|•]] [[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=30&selection=0,45,0,45|•]]

To describe electromagnetic waves in a medium, we need a framework that accounts for the charge densities and currents at the atomic scale. The microscopic form of Maxwell's equations in a medium is given by:

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0}, \\
\nabla \cdot \mathbf{B} &= 0, \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t}, \\
\nabla \times \mathbf{B} &= \mu_0 \left( \mathbf{j} + \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} \right),
\end{aligned}
$$

where $\mathbf{j}$ is the current density and $\rho$ is the charge density. However, determining these microscopic quantities exactly would require knowledge of every individual electron and nucleus, which is impractical. 

To circumvent this, we introduce two macroscopic fields: the electric displacement field $\mathbf{D}$ and the magnetic field $\mathbf{H}$. These quantities result from an effective "averaging" over the medium, which is justified since atomic-scale structures are typically on the order of nanometres, whereas the relevant electromagnetic wavelengths are on the order of hundreds of nanometres.

The macroscopic fields are defined as:

$$
\begin{aligned}
\mathbf{D} &= \varepsilon_0 \mathbf{E} + \mathbf{P}, \\
\mathbf{H} &= \frac{1}{\mu_0} \mathbf{B} - \mathbf{M},
\end{aligned}
$$

where $\mathbf{P}$ is the electric polarisation density, and $\mathbf{M}$ is the magnetisation density. These definitions allow us to describe the response of the medium without explicitly tracking individual charges. In a dielectric medium, the polarisation is the macroscopic sum of the electric dipole moments induced by the electric field. The magnetisation is defined analogously. Both the displacement field and the magnetic field are often referred to as _auxiliary fields_. The polarisation and magnetisation are related to the electric field and magnetic flux through material-dependent relations. In free space, where both polarisation and magnetisation are absent, we recover the simpler forms:

$$
\begin{aligned}
\mathbf{D} &= \varepsilon_0 \mathbf{E}, \\
\mathbf{H} &= \frac{1}{\mu_0} \mathbf{B}.
\end{aligned}
$$

In most cases, we assume that the relations between these fields are linear, meaning they can be described solely by the dielectric function $\varepsilon(\mathbf{r},t)$ and the permeability $\mu(\mathbf{r},t)$. Furthermore, in many practical problems, it is sufficient to solve for the electric field alone. This is because, in the non-relativistic regime, the force exerted by the magnetic component is much weaker than that of the electric component. This assumption is further justified by the fact that most materials relevant to optics are non-magnetic. However, one must always keep in mind the presence of the magnetic field.

---
## 1.3 The Material Equations
[[Teaching/2025 Quantum Electronics Gallmann/QE_script.pdf#page=16&selection=182,0,185,16|•]] [[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=34&selection=0,0,0,31|•]]

Solving Maxwell's equations requires an explicit relationship between the microscopic and macroscopic fields. As mentioned earlier, this relationship depends on the material properties. To establish it, we begin by separating both the external charge density and the macroscopic current density into two components: _free_ and _bound_:

$$
\begin{aligned}
\rho(\mathbf{r}, t) &= \rho_f + \rho_b, \\
\mathbf{j}(\mathbf{r}, t) &= \mathbf{j}_f + \mathbf{j}_b.
\end{aligned}
$$

Our goal is to eliminate explicit dependence on the bound charge contribution in the equations. Starting from the microscopic equation in a medium,

$$
\nabla \cdot \mathbf{D}(\mathbf{r}, t) = \nabla \cdot \left(\varepsilon_0 \mathbf{E} + \mathbf{P} \right),
$$

we define the polarisation density via

$$
\rho_b = -\nabla \cdot \mathbf{P},
$$

which allows us to rewrite the equation as

$$
\nabla \cdot \mathbf{D} = \rho_f.
$$

At this point, we have successfully removed explicit dependence on the bound charges, such as immobile core electrons or localised valence electrons. A similar approach applies to the magnetic field. We define the magnetisation density as

$$
\nabla \times \mathbf{M} = \mathbf{j}_b - \frac{\partial \mathbf{P}}{\partial t},
$$

which leads to

$$
\nabla \times \mathbf{H} = \mathbf{j}_f + \varepsilon_0 \frac{\partial \mathbf{D}}{\partial t}.
$$

As before, we have eliminated explicit dependence on the bound currents, leaving only free (macroscopic) current densities. An example of bound currents includes current loops arising from intrinsic spin or orbital angular momentum. We therefore can summarise the ==microscopic Maxwell equations in vacuum==, and the ==macroscopic Maxwell equations in a medium==:

| Microscopic Maxwell's equations in vacuum                                                   | Macroscopic Maxwell's equations in a medium                                             | Auxiliary relations                                                                     |
| ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| $\mathbf{\nabla} \cdot \mathbf{E}=0$                                                        | $\mathbf{\nabla} \cdot \mathbf{D}=\rho_f$                                               | $\mathbf{D}=\epsilon_0 \mathbf{E}+\mathbf{P}$                                           |
| $\mathbf{\nabla} \cdot \mathbf{B}=0$                                                        | $\mathbf{\nabla} \cdot \mathbf{B}=0$                                                    | $\rho_b=-\nabla \cdot \mathbf{P}$                                                       |
| $\mathbf{\nabla} \times \mathbf{E}=-\frac{\partial \mathbf{B}}{\partial t}$                 | $\mathbf{\nabla} \times \mathbf{E}=-\frac{\partial \mathbf{B}}{\partial t}$             | $\mathbf{H}=\frac{1}{\mu_0} \mathbf{B}-\mathbf{M}$                                      |
| $\mathbf{\nabla} \times \mathbf{B}=\epsilon_0 \mu_0 \frac{\partial \mathbf{E}}{\partial t}$ | $\mathbf{\nabla} \times \mathbf{H}=\mathbf{j}_f+\frac{\partial \mathbf{D}}{\partial t}$ | $\mathbf{\nabla} \times \mathbf{M}=\mathbf{j}_b-\frac{\partial \mathbf{P}}{\partial t}$ |

The bound current density is given by  

$$
\mathbf{j}_{\mathrm{b}}(\mathbf{r}, t) = \frac{\partial \mathbf{P}(\mathbf{r}, t)}{\partial t}.
$$

---
## 1.4 Macroscopic Approximation  
[[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=39&selection=0,0,0,25|•]]

We now discuss how macroscopic quantities can be computed. The total charge is obtained as  

$$
q_R = \int \rho\left(\mathbf{r}^{\prime}\right) d^3 r^{\prime},
$$  

while the total current is  

$$
\mathbf{i}_R = \int \mathbf{j}\left(\mathbf{r}^{\prime}\right) d^3 r^{\prime}.
$$  

The electric dipole moment is defined as  

$$
\mathbf{p}_R = \int\left(\mathbf{r}^{\prime}-\mathbf{R}\right) \rho\left(\mathbf{r}^{\prime}\right) d^3 r^{\prime},
$$  

while the magnetic dipole moment is  

$$
\mathbf{m}_R = \frac{1}{2} \int\left(\mathbf{r}^{\prime}-\mathbf{R}\right) \times \mathbf{j}\left(\mathbf{r}^{\prime}\right) d^3 r^{\prime}.
$$  

The integrals are carried out over a macroscopic volume $V$ at position $\mathbf{R}$, leading to macroscopic quantities. The free charge and free current densities are then given by  

$$
\rho_f = \frac{q_R}{V} \quad \text{and} \quad \mathbf{j}_f = \frac{\mathbf{i}_R}{V},
$$  

while the total polarisation and total magnetisation are  

$$
\mathbf{P} = \frac{\mathbf{p}_R}{V} \quad \text{and} \quad \mathbf{M} = \frac{\mathbf{m}_R}{V}.
$$  

The macroscopic Maxwell equations reduce to their microscopic counterparts if the free charge and current densities are uniform within each cube and if the bound charge and current densities arise only at the boundaries between adjacent cubes. This approximation is valid as long as the fields do not vary significantly over each individual cube.  

To proceed further, we require knowledge of the polarisation and magnetisation. Thus, we introduce six (!) approximations:  

1. **Electric and magnetic field dependence:** $\mathbf{P}$ depends on $\mathbf{E}$ but not on $\mathbf{B}$, while $\mathbf{M}$ depends on $\mathbf{B}$ but not on $\mathbf{E}$. This assumption is valid in most cases, provided the frequency is not too low (e.g., above 10 THz).  

2. **Locality:** $\mathbf{P}$ and $\mathbf{M}$ depend on the local values of $\mathbf{E}$ and $\mathbf{B}$, meaning that bound charges and currents do not move significantly relative to the scale over which the fields change. This corresponds to the long-wavelength approximation.  

3. **Homogeneity:** The functional dependence of $\mathbf{P}$ and $\mathbf{M}$ on $\mathbf{E}$ and $\mathbf{B}$, respectively, does not vary with position in the medium, implying that the medium is optically homogeneous. The explicit time dependence is irrelevant.  

4. **No dispersion:** $\mathbf{P}$ and $\mathbf{M}$ depend only on the immediate values of $\mathbf{E}$ and $\mathbf{B}$, eliminating any time integrals. This assumption is valid only for optically transparent materials far from absorption resonances. However, in reality, this is a poor approximation and will be refined later.  

5. **Linearity:** $\mathbf{P}$ and $\mathbf{M}$ are linear in $\mathbf{E}$ and $\mathbf{B}$.  

6. **Isotropy:** $\mathbf{P}$ and $\mathbf{M}$ align with $\mathbf{E}$ and $\mathbf{B}$, either in the same or opposite direction. This implies that the corresponding tensors are identity matrices scaled by a scalar. Since this assumption is violated in crystalline materials, it will be corrected later.  

Let us examine the effect of each assumption. With assumption 1, we may write
$$
\begin{aligned}
\mathbf{P}(\mathbf{r}, t) & =\int_{-\infty}^t \mathbf{f}_P\left(\mathbf{r}, \mathbf{E}\left(\mathbf{r}, t^{\prime}\right), t^{\prime}\right) d t^{\prime} \quad\text{and}\\
\mathbf{M}(\mathbf{r}, t) & =\int_{-\infty}^t \mathbf{f}_M\left(\mathbf{r}, \mathbf{H}\left(\mathbf{r}, t^{\prime}\right), t^{\prime}\right) d t^{\prime}.
\end{aligned}
$$
Further, with assumption 2 to 4, we obtain
$$
\begin{aligned}
& \mathbf{P}(\mathbf{r}, t)=\int_{-\infty}^{t} \mathbf{f}_P\left(\mathbf{r}, \mathbf{E}\left(\mathbf{r}, t^{\prime}\right), t^{\prime}\right) d t^{\prime} \implies \mathbf{P}(\mathbf{r}, t)=\mathbf{f}_P(\mathbf{r}, \mathbf{E}(\mathbf{r}, t)) \\
& \mathbf{M}(\mathbf{r}, t)=\int_{-\infty}^t \mathbf{f}_M\left(\mathbf{r}, \mathbf{H}\left(\mathbf{r}, t^{\prime}\right), t^{\prime}\right) d t^{\prime} \implies \mathbf{M}(\mathbf{r}, t)=\mathbf{f}_M(\mathbf{r}, \mathbf{H}(\mathbf{r}, t)).
\end{aligned}
$$
With assumption 5, we may expand both the magnetisation and polarisation in a Taylor series:
$$
\begin{aligned}
P_i(\mathbf{r}, t) & =P_i^{(0)}+\varepsilon_0 \chi_{i j}^{(1)} E_j(\mathbf{r}, t)+\varepsilon_0 \chi_{i j k}^{(2)} E_j(\mathbf{r}, t) E_k(\mathbf{r}, t)+\ldots \\
M_i(\mathbf{r}, t) & =M_i^{(0)}+\chi_{i j}^{(m 1)} H_j(\mathbf{r}, t)+\chi_{i j k}^{(m 2)} H_j(\mathbf{r}, t) H_k(\mathbf{r}, t)+\ldots.
\end{aligned}
$$
The zeroth order constants $P_i^{(0)}$ and $M_i^{(0)}$ can often be neglected in most materials, and sometimes are zero due to symmetry reason. Every term higher than, and including, second order can be neglected due to our assumption of linearity. Note that both $\chi_{i j}^{(1)}$ and $\chi_{i j}^{(m 1)}$ are constant second-rank tensors. Higher order terms are the focus of nonlinear optics, but in this course, low-intensity light is assumed. We will often even assume the aforementioned tensors to be simple scalar coefficients, due to the fact that we assume the medium to be extremely isotropic. Finally, together with assumption 6, we may write 
$$
\begin{aligned}
\mathbf{P}(\mathbf{r}, t)  \approx \varepsilon_0 \chi \mathbf{E}(\mathbf{r}, t) \quad\text{and}\quad
\mathbf{M}(\mathbf{r}, t)  \approx \chi_{\mathrm{m}} \mathbf{H}(\mathbf{r}, t),
\end{aligned}
$$
where $\chi$ is the dielectric susceptibility, and $\chi_m$ is the magnetic susceptibility. With these, the dielectric constant and electric permeability can be defined as 
$$
\varepsilon=1+\chi\quad\text{and}\quad \mu=1+\chi_m.
$$
Therefore, we can write the displacement and magnetic field as 
$$
\begin{aligned}
\mathbf{D}=\varepsilon_0 \varepsilon \mathbf{E} \quad\text{and}\quad \mathbf{B}=\mu_0 \mu \mathbf{H}.
\end{aligned}
$$
In this course, and in optics in general, we generally deal with non-magnetisable media. Therefore, we may assume the magnetisation is zero, e.g. that $\mathbf{M}=0.$ This is equivalent to $\mu=1.$ 

---
## 1.5 Wave Equation
[[Teaching/2025 Quantum Electronics Gallmann/QE_script.pdf#page=22&selection=8,0,10,45|•]] [[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=45&selection=0,0,0,17|•]]

To finally be able to describe the propagation of light, we want to relate the time-derivative of each field to its spatial derivative. We do this for the simplest case discussed before: We assume a homogeneous, isotropic, dispersionless medium, with no free currents or charges. Note, that in principal the Maxwell equations are enough to describe the propagation of light, however a much more simple form exists for our needs. 
Consider the macroscopic curl equation in vacuum:
$$
\nabla \times E=-\frac{\partial \mathbf{B}}{\partial t}.
$$
Apply the curl operator on both sides to obtain

$$
\nabla \times(\nabla \times E)=-\frac{\partial(\nabla \times \mathbf{B})}{\partial t}.
$$
The vector identity used now is
$$
\nabla \times(\nabla \times \mathbf{A})=\nabla(\nabla \cdot \mathbf{A})-\nabla^2 \mathbf{A},
$$
which yields (done for both electric and magnetic field)
$$
\nabla^2 \mathbf{E}=\varepsilon_0 \mu_0 \varepsilon \mu \frac{\partial^2 \mathbf{E}}{\partial t^2}\quad\text{and}\quad\nabla^2 \mathbf{H}=\varepsilon_0 \mu_0 \varepsilon \mu \frac{\partial^2 \mathbf{H}}{\partial t^2}.
$$
We used that $\nabla\cdot\mathbf{E}=0$ and that $\mathbf{\nabla} \times \mathbf{H}=\mathbf{j}_f+\frac{\partial \mathbf{D}}{\partial t},$ and similarly for the magnetic field. Both equations have the form of generic linear wave equations, with wave velocity, or phase velocity, $v_p=1 / \sqrt{\varepsilon_0 \mu_0 \varepsilon \mu}$. The speed of light $c$ in vacuum is thus given by

$$
c=\frac{1}{\sqrt{\varepsilon_0 \mu_0}}.
$$
The refractive index is defined as

$$
n=\frac{c}{v_p}=\sqrt{\mu \varepsilon}=\sqrt{1+\chi}
$$
and describes how much the medium slows the phase of velocity of light compared to the propagation of light. Note, the last step assumes a non-magnetic medium ($\mu=1$).  Therefore, the ==wave equation== is 
$$
\nabla^2 \mathbf{E}=\frac{1}{v_p^2} \frac{\partial^2 \mathbf{E}}{\partial t^2}.
$$

## 1.6 Solutions to the wave equation
[[Teaching/2025 Quantum Electronics Gallmann/QE_script.pdf#page=23&selection=17,0,19,30|•]] [[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=49&selection=0,0,0,11|•]]

One solution of the wave equation is the monochromatic plane wave: 
$$
\mathbf{E}(\mathbf{r}, t)=\mathbf{E}_0 \cos (\omega t-\mathbf{k} \cdot \mathbf{r}+\phi),
$$
where the angular frequency $\omega$ and the wavevector $\mathbf{k}$ are related by
$$
\omega=c\frac{k}{n}.
$$
The relation between the wavenumber and the wavelength is 
$$
k=\frac{2 \pi}{\lambda}.
$$
We can see that the wave equation is linear (since derivatives are linear), and thus also the superposition of any solution is a solution again. Since this wave equation is a product of our assumptions, this might not generally hold. In fact, the plane waves form a complete basis for all possible solutions, but this is not shown here. Due to the fact that the divergence of the displacement field is zero, $\mathbf{E}$ and $\mathbf{k}$ stand perpendicular to each other, e.g.
$$
\nabla \cdot \mathbf{D}=\varepsilon_0 \varepsilon \nabla \cdot \mathbf{E}=-\varepsilon_0 \varepsilon \mathbf{E}_0 \cdot \mathbf{k} \sin (\omega t-\mathbf{k} \cdot \mathbf{r}+\phi)=0 \implies \mathbf{E}_0\cdot\mathbf{k}=0.
$$
Similarly for the magnetic field, we obtain 
$$
\mathbf{B}(\mathbf{r}, t)=\mathbf{B}_0 \cos \left(\omega_m t-\mathbf{k}_m \cdot \mathbf{r}+\phi_m\right).
$$
From the Maxwell equations it becomes clear that the magnetic and electric field are not independent of each other. From $\nabla \times \mathbf{E}=-\frac{\partial \mathbf{B}}{\partial t}$, enforcing that this has to hold for all space and time, we obtain
$$
\mathbf{k} \times \mathbf{E}_0=\omega \mathbf{B}_0.
$$
Therefore, the electric field is perpendicular to the wavevector, and both stand perpendicular to the magnetic field! This is illustrated in the next figure:

![Attachments/01_Introduction_and_theoretical_foundation.webp|700](/img/user/Attachments/01_Introduction_and_theoretical_foundation.webp)[[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=26&rect=370,191,795,456|•]]

Sometimes, it is also written as $\mathbf{H}_0=\sqrt{\frac{\epsilon_0 \epsilon}{\mu_0 \mu}} \hat{\mathbf{k}} \times \mathbf{E}_0=\frac{1}{Z} \hat{\mathbf{k}} \times \mathbf{E}_0,$ where $Z_0=\sqrt{\frac{\mu_0}{\epsilon_0}}=377 \Omega$ is the optical impedance in vacuum, and then $Z=Z_0/n$ is the optical impedance. It is a measure of the amplitude ratio between electric and magnetic field in an electromagnetic wave. 
Because the electric and magnetic field stand orthogonal to each other, these waves are also called transverse electro-magnetic waves, or simply TEM waves. Very often, it is more convenient to stick to complex notation:
$$
\mathbf{E}(\mathbf{r}, t)=\tilde{\mathbf{E}}_0 e^{i(\omega t-\mathbf{k} \cdot \mathbf{r})}+h . c .
$$
In this case, the tilde has absorbed the factor of $1/2.$ We will often drop the 'hermitian conjugate', and it is understood that it is still there. However careful to not forget it, especially when calculating quantities depending nonlinearly on the fields, such as the Poynting vector (see later).

---
## 1.7 Polarisation
[[Teaching/2025 Quantum Electronics Gallmann/QE_script.pdf#page=24&selection=209,0,211,12|•]] [[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=53&selection=0,0,0,12|•]]

Taking the k-vector to point into the z-direction, linear polarisation means that the electric field fulfils:
$$
\mathbf{E}(\mathbf{r}, t)=E_0(\hat{\mathbf{x}} \cos \theta+\hat{\mathbf{y}} \sin \theta) \cos (\omega t-k z).
$$
Graphically:

![Attachments/01_Introduction_and_theoretical_foundation 1.webp|700](/img/user/Attachments/01_Introduction_and_theoretical_foundation%201.webp)[[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=53&rect=81,103,208,230|•]]

The underlying physics comes from the dipole moments defined as $\mathbf{p}=q\mathbf{L},$ where $q$ is a charge and $\mathbf{L}$ is the vector separating the two charges of a dipole. Then, the polarisation $\mathbf{P}$ is the sum over all dipole moments in a volume $V.$ If there are $N$ dipoles per unit volume, and $\mathbf{p}$ is the average dipole moment, we obtain:
$$
\mathbf{P}=\frac{\sum_i \mathbf{p}_i}{V}=N \mathbf{p}.
$$
Polarisation is important in the interaction of light with matter: The amount of reflected light of a surface depends on  it, and also the amount of light absorbed. This is even more general - Light scattering is polarisation dependent. This also holds for the refractive index. However, light does not have to be polarised, it can also be elliptically polarised, an equal superposition of $E_x$ and $E_y$ with $\phi\neq0$:

![Attachments/01_Introduction_and_theoretical_foundation 3.webp|700](/img/user/Attachments/01_Introduction_and_theoretical_foundation%203.webp)[[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=55&rect=46,256,802,462|•]]

Some more examples:

![Attachments/01_Introduction_and_theoretical_foundation 4.webp|700](/img/user/Attachments/01_Introduction_and_theoretical_foundation%204.webp)[[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=56&rect=24,97,818,465|•]]

A so-called polariser lets only the project along a certain angle pass through. Namely, consider the electric field
$$
\begin{aligned}
&\mathbf{E}_{in}(\mathbf{r}, t)=\frac{1}{2} E_0\left(\hat{\mathbf{x}}+\hat{\mathbf{y}} e^{i \phi}\right) e^{i(\omega t-k z)}+h . c ,
\end{aligned}
$$
such that the output of the polariser turned to the angle $\theta$ is
$$
\mathbf{E}_{\text {out }}=\left[\mathbf{E}_{\text {in }} \cdot(\hat{\mathbf{x}} \cos \theta+\hat{\mathbf{y}} \sin \theta)\right](\hat{\mathbf{x}} \cos \theta+\hat{\mathbf{y}} \sin \theta).
$$

![Attachments/01_Introduction_and_theoretical_foundation 5.webp|700](/img/user/Attachments/01_Introduction_and_theoretical_foundation%205.webp)[[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=58&rect=58,303,372,459|•]]

![Attachments/01_Introduction_and_theoretical_foundation 6.webp|700](/img/user/Attachments/01_Introduction_and_theoretical_foundation%206.webp)[[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=58&rect=432,289,738,449|•]]

---
## 1.8 Poynting Vector and Poynting's Theorem
[[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=60&selection=0,23,0,23|•]] [[Teaching/2025 Quantum Electronics Gallmann/QE_script.pdf#page=28&selection=4,0,6,26|•]] [[Reading/Books/Lasers and Nonlinear Optics/Fundamentals of Photonics.pdf#page=430&selection=89,0,89,28|•]]

Light carries energy. The quantity quantifying the flow of electromagnetic power is called the Poynting vector
$$
\mathbf{S}=\mathbf{E}_r\times \mathbf{H}_r.
$$

Therefore, the energy flow is orthogonal to both the electric and magnetic field. We use the real fields, since the product of fields occurs. Otherwise, we would obtain non-physical solutions. By applying the divergence operator on both sides, we find an important theorem. The Poynting theorem states that the rate of energy transfer per unit volume from a region of space equals the rate of work done of the charge distribution in the region, plus the energy flux leaving that region (see proof at end of sub-chapter). In math, this means
$$
\nabla \cdot \mathbf{S}+\frac{\partial u}{\partial t}=-\mathbf{j}_{\mathbf{f}} \cdot \mathbf{E},
$$
where the electromagnetic energy density is given by 
$$
u=\frac{1}{2}(\mathbf{E} \cdot \mathbf{D}+\mathbf{B} \cdot \mathbf{H}).
$$
As can be seen from the general form of this theorem, it represents conservation/balance of energy: The power flow escaping from the surface of some small volume equals the time rate of change of the energy stored in that volume. In this form, it is however only valid for non-dispersive media. The right-hand side of the Poynting theorem contains the so-called source terms due to electric work performed on free and bound charges.
To gain some intuition, consider that the sign of the divergence of the Poynting vector tells the direction of energy density:
- $\nabla \cdot S>0$ implies energy density is decreasing, energy flowing away.
- $\nabla \cdot S<0$ implies energy density is increasing, energy is flowing in.

**Proof of Poynting's Theorem:**

In the first step, we multiply both curl equations by $\mathbf{E}_r$ and $\mathbf{H}_r:$
$$
\begin{aligned}
& \mathbf{H}_r \cdot \nabla \times \mathbf{E}_r+\mu_0 \mathbf{H}_r \cdot \frac{\partial}{\partial t} \mathbf{H}_r=0 \\
& \mathbf{E}_r \cdot \nabla \times \mathbf{H}_r-\varepsilon_0 \mathbf{E}_r \cdot \frac{\partial}{\partial t} \mathbf{E}_r=\mathbf{E}_r \cdot\left(\mathbf{j}_r+\frac{\partial}{\partial t} \mathbf{P}_r\right)
\end{aligned}
$$
Subtracting both equations from each other, we obtain:
$$
\mathbf{H}_r \cdot \nabla \times \mathbf{E}_r-\mathbf{E}_r \cdot \nabla \times \mathbf{H}_r+\varepsilon_0 \mathbf{E}_r \cdot \frac{\partial}{\partial t} \mathbf{E}_r+\mu_0 \mathbf{H}_r \cdot \frac{\partial}{\partial t} \mathbf{H}_r=-\mathbf{E}_r \cdot\left(\mathbf{j}_r+\frac{\partial}{\partial t} \mathbf{P}_r\right).
$$
This expression is simplified to the Poynting theorem using
$$
\mathbf{A} \cdot \nabla \times \mathbf{B}-\mathbf{B} \cdot \nabla \times \mathbf{A}=\nabla \cdot\left(\mathbf{B} \times \mathbf{A}\right).
$$

---
## 1.9 Timescales
[[Teaching/2025 Quantum Electronics Gallmann/QE_script.pdf#page=28&selection=57,0,57,53|•]] [[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=62&selection=0,0,0,24|•]]

If one optical cycle lasts roughly $T_0=2\pi/\omega_0=10$ fs, with pulse duration $T_\text{pulse}$ and measurement duration $T_m$, then generally we have:
$$
T_\text{pulse}\gg T_0\quad\text{and}\quad T_m\gg T_0.
$$
The duration of one pulse is typically many optical cycles, while the duration of measurement is typically on the order of nano- to milliseconds. We can separate the electric field into a [[Notes/Ultrafast Laser Physics/2 Linear Pulse Propagation#2.4.1 Slowly-Varying-Envelope Approximation\|slowly-varying envelope]], and a fast oscillation varying on the timescale of the optical cycle:
$$
E(\mathbf{r}, t)\sim A(\mathbf{r}, t) \cdot\mathrm{e}^{\mathrm{i}\omega_0 t}.
$$
This is depicted in the next figure. The left box-like behaviour is captured by the slowly-varying envelope $A(\mathbf{r},t),$ while the fast (second) oscillation is captured by $e^{i\omega_0t}:$ 

![Attachments/01_Introduction_and_theoretical_foundation 8.webp|700](/img/user/Attachments/01_Introduction_and_theoretical_foundation%208.webp)[[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=64&rect=375,159,832,274|•]]

Let us next explicitly calculate the instantaneous Poynting vector for such pulses:
$$
\begin{aligned}
\mathbf{S}(\mathbf{r}, t) & =\mathbf{E}_r \times \mathbf{H}_r \\
& =\frac{1}{4}\left[\widetilde{\mathbf{E}}(\mathbf{r}, t) \times \widetilde{\mathbf{H}}^*(\mathbf{r}, t)+\widetilde{\mathbf{E}}^*(\mathbf{r}, t) \times \widetilde{\mathbf{H}}(\mathbf{r}, t)\right] \\
& +\frac{1}{4}\left[\widetilde{\mathbf{E}}(\mathbf{r}, t) \times \widetilde{\mathbf{H}}(\mathbf{r}, t) e^{-2 i \omega_0 t}+\widetilde{\mathbf{E}}^*(\mathbf{r}, t) \times \widetilde{\mathbf{H}}^*(\mathbf{r}, t) e^{2 i \omega_0 t}\right] \\
& =\underbrace{\frac{1}{2} \mathfrak{Re}\left[\widetilde{\mathbf{E}}(\mathbf{r}, t) \times \widetilde{\mathbf{H}}^*(\mathbf{r}, t)\right]}_{\text {Slow }}+\underbrace{\frac{1}{2} \mathfrak{Re}[\widetilde{\mathbf{E}}(\mathbf{r}, t) \times \widetilde{\mathbf{H}}(\mathbf{r}, t)] \cos \left(2 \omega_0 t\right)}_{\text {Fast }} \\
& +\underbrace{\frac{1}{2} \mathfrak{Im}\left[\widetilde{\mathbf{E}}^*(\mathbf{r}, t) \times \widetilde{\mathbf{H}}^*(\mathbf{r}, t)\right] \sin \left(2 \omega_0 t\right)}_{\text {Fast }} .
\end{aligned}
$$
Therefore, the Poynting vector has slow contributions which change over time scales of the pulse envelope, and fast contributions changing over time scales of the optical cycle (through $\omega_0$). 

To obtain a measure for the average energy flux over a given time interval $T_m$, we calculate
$$
\begin{align}
\langle\mathbf{S}(\mathbf{r}, t)\rangle=\frac{1}{T_m} \int_{t-T_m / 2}^{t+T_m / 2} \mathbf{S}\left(\mathbf{r}, t^{\prime}\right) d t^{\prime}.
\end{align}
$$
This expression might not be easy to calculate, however we are luckily: What saves us is that fast oscillations (as those from the $\cos$ and $\sin$ terms) cancel out in the integration. Therefore, only the slowly-varying term contributes, and we can write
$$
\langle\mathbf{S}(\mathbf{r}, t)\rangle=\frac{1}{2} \frac{1}{T_m} \int_{t-T_m / 2}^{t+T_m / 2} \mathfrak{Re}\left[\widetilde{\mathbf{E}}\left(\mathbf{r}, t^{\prime}\right) \times \widetilde{H}^*\left(\mathbf{r}, t^{\prime}\right)\right] d t^{\prime}
$$
Of course, the integral is done over every position $\mathbf{r}$. However, let us consider the case of a stationary, monochromatic fields. In this scenario, the pulse envelope is independent on time at all, which means the pulses are infinitely long. We then obtain
$$
\langle\mathbf{S}(\mathbf{r}, t)\rangle=\frac{1}{2} \mathfrak{Re}\left[\mathbf{E}(\mathbf{r}) \times \mathbf{H}^*(\mathbf{r})\right] .
$$
This is then the definition of the optical intensity
$$
I\equiv\left|\langle\mathbf{S}(\mathbf{r}, t)\rangle\right|.
$$
The intensity is therefore the magnitude of time-averaging the Poynting vector, and its units are Watts per centimetre squared, e.g. W/cm$^2.$ By measuring intensity, we average over the fast varying optical cycle, and thus discard all phase information.

---
## 1.10 Momentum of Light
[[Teaching/2025 Quantum Electronics Gallmann/QE_script.pdf#page=30&selection=247,79,251,1|•]] [[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=66&selection=0,0,0,17|•]]

Light carries momentum. To calculate the momentum transferred to a disc of area $A$, we can calculate 
$$
\begin{gathered}
p=\frac{n}{c} \int_{t_0}^{t_1} \mathbf{S} d t \int_A \hat{S} \cdot d \mathbf{A}. 
\end{gathered}
$$
Evaluating the average for a disk inclined by an angle $\theta$ is
$$
\langle p\rangle=\frac{n}{c} \cdot I_0 \Delta t \cdot A \cos \theta \\
I=|\langle\mathbf{S}(\mathbf{r}, t)\rangle|.
$$
The linear momentum of light finds applications in laser cooling, as light sail for space telescopes or to measure the output power of a high-power ultrafast laser. This is called the radiation pressure. For example, for a laser with pulse duration 10 fs, 10 PW peak power and an intensity of $10^{23}$ W/cm$^2$, the radiation pressure ranges from $10^7$ to $10^9$ bar. 

---