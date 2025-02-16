---
{"dg-publish":true,"permalink":"/teaching/2025-quantum-electronics-gallmann/1-electromagnetic-theory-of-light/","hide":"true","updated":"2025-02-16T20:49:50.382+01:00"}
---

Jump back to ==[[Teaching/2025 Quantum Electronics Gallmann/Quantum Electronics#Table of Contents\|chapter selection]]==.C

---
**Table of Contents**

- [[Teaching/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.1 Microscopic Form of Maxwell's Equations in Vacuum\|1.1 Microscopic Form of Maxwell's Equations in Vacuum]]
- [[Teaching/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.2 Maxwell equations in a Medium\|1.2 Maxwell equations in a Medium]]
- [[Teaching/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.3 The Material Equations\|1.3 The Material Equations]]
- [[Teaching/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.4 Macroscopic Approximation\|1.4 Macroscopic Approximation]]
- [[Teaching/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.5 Wave Equation\|1.5 Wave Equation]]
- [[Teaching/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.6 Solutions to the wave equation\|1.6 Solutions to the wave equation]]
- [[Teaching/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.7 Polarisation\|1.7 Polarisation]]
- [[Teaching/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.8 Poynting Vector and Poynting's Theorem\|1.8 Poynting Vector and Poynting's Theorem]]
- [[Teaching/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.9 Timescales\|1.9 Timescales]]

---
# 1 Electromagnetic Theory of Light
[[Reading/Books/Lasers and Nonlinear Optics/Fundamentals of Photonics.pdf#page=422&selection=0,0,1,22|•]]

Light is an electromagnetic wave described by the same theoretical principles that govern all forms of electromagnetic radiation. This wave, consists of an oscillating electric and magnetic field, which are both coupled. 

---
## 1.1 Microscopic Form of Maxwell's Equations in Vacuum
[[Teaching/2025 Quantum Electronics Gallmann/QE_script.pdf#page=13&selection=12,0,15,3|•]] [[Reading/Books/Lasers and Nonlinear Optics/Fundamentals of Photonics.pdf#page=426&selection=35,0,35,35|•]] [[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=26&selection=0,0,0,14|•]]

We start with the easiest treatment, by considering the electric and magnetic field in free space, meaning that the _space_ is free of charges and currents. Of course, the describing equations are the Maxwell equations:
$$
\begin{aligned}
\nabla \cdot \mathbf{E} & =0 \\
\nabla \cdot \mathbf{B} & =0 \\
\nabla \times \mathbf{E} & =-\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} & =\varepsilon_0 \mu_0 \frac{\partial \mathbf{E}}{\partial t}.
\end{aligned}
$$

We call $\varepsilon_0$ the permittivity of free space, and $\mu_0$ the magnetic permeability of free space. In this form, it is implied that both the electric and magnetic flux are functions of space and time, e.g. $\mathbf{E}(\mathbf{r},t)$ and $\mathbf{B}(\mathbf{r},t).$ It is important to note that the Maxwell equations are linear: The superposition of fields solving the Maxwell equations are therefore also solutions. These equations have been experimentally verified over a century ago, and have since then been accepted. 

---
## 1.2 Maxwell equations in a Medium
[[Teaching/2025 Quantum Electronics Gallmann/QE_script.pdf#page=14&selection=72,0,74,31|•]] [[Reading/Books/Lasers and Nonlinear Optics/Fundamentals of Photonics.pdf#page=428&selection=80,0,80,31|• ]] [[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=30&selection=0,45,0,45|•]]

To consider the forms of the waves in a medium, we need a precise description of relevant charge densities and currents on atomic scale. The microscopic Maxwell equations in a medium are 
$$
\begin{aligned}
\mathbf{\nabla} \cdot \mathbf{E} & =\frac{\rho}{\epsilon_0} \\
\mathbf{\nabla} \cdot \mathbf{B} & = 0 \\
\mathbf{\nabla} \times \mathbf{E} & =-\frac{\partial \mathbf{B}}{\partial t} \\
\mathbf{\nabla} \times \mathbf{B} & =\mu_0 \left(\mathbf{j}+\epsilon_0 \frac{\partial \mathbf{E}}{\partial t}\right),
\end{aligned}
$$
where $\mathbf{j}$ is the current density and $\rho$ is the electric charge density. However, it is impossible know all microscopic details, since it requires knowledge about every electron and nucleus. Therefore, it is useful to define two new vector fields, the electric displacement $\mathbf{D}$, and the magnetic field $\mathbf{H}.$ These are _macroscopic_ quantities, and therefore some kind of 'averaging' procedure is done over the medium. This is justified, since the intrinsic length scale of electrons and nuclei is of the order of few nanometres, while the wavelengths under consideration are hundreds of nanometres. The definitions of the displacement and magnetic field are
$$
\begin{align}
&\mathbf{D}=\varepsilon_0\mathbf{E}+\mathbf{P} \quad\text{and}\\
&\mathbf{H}=\frac{1}{\mu_0}\mathbf{B}-\mathbf{M},
\end{align}
$$
with the magnetisation (density) $\mathbf{M}$ and polarisation (density) $\mathbf{P}.$ In a dielectric medium, the polarisation is the macroscopic sum of the electric dipole moments that the electric field induces. The magnetisation uses a similar definition. Note that we call both the displacement field and the magnetic field 'auxiliary fields'. Both the magnetisation and polarisation are related to the electric field and magnetic flux by relations depending on the electric and magnetic properties of the medium. In free space, both magnetisation and polarisation are zero, such that we retrieve the simple forms
$$
\begin{align}
&\mathbf{D}=\varepsilon_0\mathbf{E}\quad\text{and}\\
&\mathbf{H}=\frac{1}{\mu_0}\mathbf{B}.
\end{align}
$$
Mostly, we will assume that the relation between these fields are linear. Then, this relationship is solely described by the dielectric _function_ $\varepsilon(\mathbf{r},t)$ and the permeability $\mu(\mathbf{r},t).$ Further it will enough to solve problems for the electric field only, since in the non-relativistic regime, the force exerted by the magnetic component is much weaker than by those of the electric component. This is even more justified by the fact that more materials relevant for optics are non-magnetic. However, never forget about the magnetic field!

---
## 1.3 The Material Equations
[[Teaching/2025 Quantum Electronics Gallmann/QE_script.pdf#page=16&selection=182,0,185,16|• ]] [[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=34&selection=0,0,0,31|•]]

Solving the Maxwell equations requires a the exact relation between the microscopic and macroscopic fields. As already mentioned, their relation depends on the material properties. Therefore, we begin by separating both the external charge density and the macroscopic current density into two parts: The 'free' and 'bound' part:
$$
\begin{aligned}
\rho(\mathbf{r}, t) & =\rho_f+\rho_b \\
\mathbf{j}(\mathbf{r}, t) & =\mathbf{j}_f+\mathbf{j}_b.
\end{aligned}
$$
The goal is to rid any equations from the bound contribution. Therefore, consider the microscopic equation in a medium:
$$
\nabla \cdot \mathbf{D}(\mathbf{r}, t)=\nabla\cdot\left(\varepsilon_0\mathbf{E}+\mathbf{P}\right).
$$
Next, we define the polarisation density through 
$$
\rho_b=-\nabla \cdot \mathbf{P},
$$
which allows to rewrite the obtain

$$
\nabla \cdot \mathbf{D}=\rho_f.
$$
It is important now that we removed the explicit dependence on the bound charges, e.g. immobile charges as core electrons or localised valence electrons. A similar approach is taken for the magnetic field. We define the magnetisation density as 
$$
\mathbf{\nabla} \times \mathbf{M}=\mathbf{j_b}-\frac{\partial \mathbf{P}}{\partial t},
$$
such that we obtain 
$$
\mathbf{\nabla} \times \mathbf{H}=\mathbf{j_f}+\epsilon_0 \frac{\partial \mathbf{D}}{\partial t}.
$$
Similarly to before, we removed the explicit dependence on the bound currents. Only free, or macroscopic, current densities appear. An example of bound currents are current loops such as intrinsic spin or orbital angular momentum. We therefore can summarise the ==microscopic Maxwell equations in vacuum==, and the ==macroscopic Maxwell equations in a medium==:

| Microscopic Maxwell's equations in vacuum                                                   | Macroscopic Maxwell's equations in a medium                                             | Auxiliary relations                                                                     |
| ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| $\mathbf{\nabla} \cdot \mathbf{E}=0$                                                        | $\mathbf{\nabla} \cdot \mathbf{D}=\rho_f$                                               | $\mathbf{D}=\epsilon_0 \mathbf{E}+\mathbf{P}$                                           |
| $\mathbf{\nabla} \cdot \mathbf{B}=0$                                                        | $\mathbf{\nabla} \cdot \mathbf{B}=0$                                                    | $\rho_b=-\nabla \cdot \mathbf{P}$                                                       |
| $\mathbf{\nabla} \times \mathbf{E}=-\frac{\partial \mathbf{B}}{\partial t}$                 | $\mathbf{\nabla} \times \mathbf{E}=-\frac{\partial \mathbf{B}}{\partial t}$             | $\mathbf{H}=\frac{1}{\mu_0} \mathbf{B}-\mathbf{M}$                                      |
| $\mathbf{\nabla} \times \mathbf{B}=\epsilon_0 \mu_0 \frac{\partial \mathbf{E}}{\partial t}$ | $\mathbf{\nabla} \times \mathbf{H}=\mathbf{j}_f+\frac{\partial \mathbf{D}}{\partial t}$ | $\mathbf{\nabla} \times \mathbf{M}=\mathbf{j}_b-\frac{\partial \mathbf{P}}{\partial t}$ |

Note that we can calculate the bound current density as
$$
\mathbf{j}_{\mathrm{b}}(\mathbf{r}, t)=\partial \mathbf{P}(\mathbf{r}, t) / \partial t.
$$
---
## 1.4 Macroscopic Approximation
[[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=39&selection=0,0,0,25|•]]

Let us now discuss how macroscopic quantities can be calculated:
The total charge is obtained as

$$
q_R=\int \rho\left(\mathbf{r}^{\prime}\right) d^3 r^{\prime},
$$
while the total current is 

$$
\mathbf{i}_R=\int \mathbf{j}\left(\mathbf{r}^{\prime}\right) d^3 r^{\prime}.
$$
The electric dipole moment is defined as
$$
\mathbf{p}_R=\int\left(\mathbf{r}^{\prime}-\mathbf{R}\right) \rho\left(\mathbf{r}^{\prime}\right) d^3 r^{\prime},
$$
while the magnetic dipole moment is

$$
\mathbf{m}_R=\frac{1}{2} \int\left(\mathbf{r}^{\prime}-\mathbf{R}\right) \times \mathbf{j}\left(\mathbf{r}^{\prime}\right) d^3 r^{\prime}.
$$
The integrals are carried out over a macroscopic volume $V$ at position $\mathbf{R}$, and therefore, macroscopic quantities. Then, the free charge and free current density are
$$
\rho_f=q_R/V\quad\text{and}\quad\mathbf{j}_f=\mathbf{i}_R/V,
$$
while the total polarisation and total magnetisation are
$$
\mathbf{P}=\mathbf{p}_R/V\quad\text{and}\quad\mathbf{M}=\mathbf{m}_R/V.
$$
We can now find that the macroscopic Maxwell equations reduce to the microscopic equations, if the free charge and current densities are uniform within each cube, and if the bound charge and current densities are only due to charge and currents at the boundary between cubes. This approximation works well if we assume fields to note change much over each individual cube. To do more, we need to know the polarisation and magnetisation. Therefore, we will make six (!) approximations:

10. $\mathbf{P}$ depends on $\mathbf{E}$ and not $\mathbf{B}, \mathbf{M}$ depends on $\mathbf{B}$ and not $\mathbf{E}$ - This is a good assumption in most cases if the frequency is not too low, e.g. below 10 THz.
11. Locality: $\mathbf{P}$ and $\mathbf{M}$ depend on local values of $\mathbf{E}$ and $\mathbf{B}$ - This assumes that bound charges and currents do not 'move around much' compared to the scale of the changes in the fields. This is equivalent to the long wavelength assumption.
12. Homogeneity: The functional dependence of $\mathbf{P}$ and $\mathbf{M}$ on $\mathbf{E}$ and $\mathbf{B}$, respectively, does not depend on the position in the medium. This means that the medium is optically homogeneous. The explicit time dependence does not matter.
13. No dispersion: $\mathbf{P}$ and $\mathbf{M}$ depend on immediate values (and not past values) of $\mathbf{E}$ and $\mathbf{B}$, to remove the time integral. This is a good assumption only for optically transparent materials far from absorption resonances. However, in reality this is a terrible assumption and will be repaired next. 
14. Linearity: $\mathbf{P}$ and $\mathbf{M}$ are linear in $\mathbf{E}$ and $\mathbf{B}$. 
15. Isotropy: $\mathbf{P}$ and $\mathbf{M}$ point in the same or opposite direction as $\mathbf{E}$ and $\mathbf{B}$. Therefore, tensors are identity matrices multiplied by a scalar. Since this is violated crystals, this will later be corrected.

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
\mathbf{S}=\mathfrak{Re}\left[\mathbf{E}\right]\times\mathfrak{Re}\left[\mathbf{H}\right].
$$

Therefore, the energy flow is orthogonal to both the electric and magnetic field. We use the real fields, since the product of fields occurs. By applying the divergence operator on both sides, we find an important theorem. The Poynting theorem states that the rate of energy transfer per unit volume from a region of space equals the rate of work done of the charge distribution in the region, plus the energy flux leaving that region. In math, this means
$$
\nabla \cdot \mathbf{S}+\frac{\partial u}{\partial t}=-\mathbf{j}_{\mathbf{f}} \cdot \mathbf{E},
$$
where the electromagnetic energy density is given by 
$$
u=\frac{1}{2}(\mathbf{E} \cdot \mathbf{D}+\mathbf{B} \cdot \mathbf{H}).
$$
As can be seen from the description of this theorem, it represents conservation of energy: The power flow escaping from the surface of some small volume equals the time rate of change of the energy stored in that volume. In this form, it is however only valid for non-dispersive media. 
To gain some intuition, consider that the sign of the divergence of the Poynting vector tells the direction of energy density:
- $\nabla \cdot S>0$ implies energy density is decreasing, energy flowing away.
- $\nabla \cdot S<0$ implies energy density is increasing, energy is flowing in.

---
## 1.9 Timescales
[[Teaching/2025 Quantum Electronics Gallmann/QE_script.pdf#page=28&selection=57,0,57,53|•]] [[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=62&selection=0,0,0,24|•]]

>[!Info] To be continued


---