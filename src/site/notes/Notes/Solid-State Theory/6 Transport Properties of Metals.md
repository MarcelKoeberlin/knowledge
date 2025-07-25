---
{"dg-publish":true,"permalink":"/notes/solid-state-theory/6-transport-properties-of-metals/","hide":"true","updated":"2025-05-31T15:30:52.000+02:00"}
---

Jump back to ==[[Notes/Solid-State Theory/Solid-State Theory#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[#6.1 Electrical Conductivity|6.1 Electrical Conductivity]]
[[#6.2 Transport Equations and Relaxation Time|6.2 Transport Equations and Relaxation Time]]
[[#6.3 Impurity Scattering|6.3 Impurity Scattering]]
[[#6.4 Electron-Phonon Scattering|6.4 Electron-Phonon Scattering]]
[[#6.5 Electron-Electron Scattering|6.5 Electron-Electron Scattering]]
[[#6.6 Matthiessen's Rule and the Ioffe-Regel Limit|6.6 Matthiessen's Rule and the Ioffe-Regel Limit]]
[[#6.7 General Transport Coefficients|6.7 General Transport Coefficients]]
[[#6.8 Anderson Localisation in One-Dimensional Systems|6.8 Anderson Localisation in One-Dimensional Systems]]

---
# 6 Transport Properties of Metals
[[Courses/2. Semester/Solid State Theory/Script.pdf#page=127&selection=2,0,2,30| ]]

The ability to transport electrical current is one of the most remarkable and characteristic properties of metals. At zero temperature, an ideal pure metal is a perfect electrical conductor, that is, its resistivity is zero. However, disorder due to impurities and lattice defects influence the transport and yield a finite residual resistivity, as found in real materials. At finite temperature, electron-electron and electron-phonon scattering lead to a temperature-dependent resistivity. Furthermore, an external magnetic field may influence the resistivity, a phenomenon called magnetoresistance, and also leads to the previously studied Hall effect. In this chapter, the effects of a magnetic field will not be considered. Finally, heat transport, which is also mostly mediated by electrons in metals, goes hand in hand with the electric transport. In this context, transport phenomena such as thermoelectricity (Seebeck and Peltier effect) will be analysed here.

---
## 6.1 Electrical Conductivity
[[Courses/2. Semester/Solid State Theory/Script.pdf#page=127&selection=23,0,25,23| ]]

In a normal metal, an electrical current density $\mathbf{j}(\mathbf{q}, \omega)$ (in $\mathbf{q}, \omega$-space) is induced by an applied electrical field $\mathbf{E}(\mathbf{q}, \omega)$. For a homogeneous isotropic metal, we define the scalar (note that in an anisotropic material, the conductivity $\hat{\sigma}$ would be a full $3 \times 3$ tensor) electrical conductivity $\sigma(\mathbf{q}, \omega)$ within linear response, through
$$
\begin{align*}
\mathbf{j}(\mathbf{q}, \omega)=\sigma(\mathbf{q}, \omega) \mathbf{E}(\mathbf{q}, \omega).
\end{align*}
$$
The current density $\mathbf{j}(\mathbf{q}, \omega)$ is related to the charge density $\rho(\mathbf{r}, t)=-e n(\mathbf{r}, t)$, via the continuity equation
$$
\begin{align*}
\frac{\partial}{\partial t} \rho(\mathbf{r}, t)+\mathbf{\nabla} \cdot \mathbf{j}(\mathbf{r}, t)=0
\end{align*}
$$
or, in Fourier transformed,
$$
\begin{align*}
\omega \rho(\mathbf{q}, \omega)-\mathbf{q} \cdot \mathbf{j}(\mathbf{q}, \omega)=0.
\end{align*}
$$
It is interesting to see that a relation between the conductivity $\sigma(\mathbf{q}, \omega)$ and the dynamical dielectric susceptibility $\chi_{0}(\mathbf{q}, \omega)$ defined in [[Notes/Solid-State Theory/3 Metals#3.2 Charge Excitations and the Dielectric Function\|Chapter 3]] arises from the definition of conductivity and the continuity equation. For this, we can calculate
$$
\begin{align*}
\chi_{0}(\mathbf{q}, \omega) &= -\frac{\rho(\mathbf{q}, \omega)}{e V(\mathbf{q}, \omega)}=-\frac{\mathbf{q} \cdot \mathbf{j}(\mathbf{q}, \omega)}{e \omega V(\mathbf{q}, \omega)} \\
&= -\frac{\sigma(\mathbf{q}, \omega)}{\omega e} \frac{\mathbf{q} \cdot \mathbf{E}(\mathbf{q}, \omega)}{V(\mathbf{q}, \omega)}=-\frac{\sigma(\mathbf{q}, \omega)}{\omega e} \frac{i |\mathbf{q}|^{2} V(\mathbf{q}, \omega)}{e V(\mathbf{q}, \omega)}.
\end{align*}
$$
In the first line, we used the definition of $\chi_{0}(\mathbf{q}, \omega)$ and the continuity equation. To the second line, we made use of the definition of $\sigma(\mathbf{q}, \omega)$ and then replaced $\mathbf{E}(\mathbf{q}, \omega)$ by $i \mathbf{q} V(\mathbf{q}, \omega) / e$, which is nothing else than the Fourier transform of the equation
$$
\begin{align*}
-e \mathbf{E}(\mathbf{r}, t)=-\mathbf{\nabla}_{\mathbf{r}} V(\mathbf{r}, t).
\end{align*}
$$
From these calculations we conclude that
$$
\begin{align*}
\chi_{0}(\mathbf{q}, \omega)=\frac{-i |\mathbf{q}|^{2}}{e^{2} \omega} \sigma(\mathbf{q}, \omega),
\end{align*}
$$
and thus
$$
\begin{align*}
\varepsilon(\mathbf{q}, \omega)=1-\frac{4 \pi e^{2}}{|\mathbf{q}|^{2}} \chi_{0}(\mathbf{q}, \omega)=1+\frac{4 \pi i}{\omega} \sigma(\mathbf{q}, \omega).
\end{align*}
$$
In the limit of large wavelengths $|\mathbf{q}| \ll k_{F}$, we know from previous discussions that $\varepsilon(0, \omega)=1-\omega_{p}^{2} / \omega^{2}$. Then the conductivity simplifies to
$$
\begin{align*}
\sigma(\omega)=\frac{i \omega_{p}^{2}}{4 \pi \omega}.
\end{align*}
$$
One might conclude from this result that the conductivity is purely imaginary in the small-$|\mathbf{q}|$ limit. However, this conclusion is wrong, since the real part of $\sigma(\omega)$ is related to its imaginary part via the Kramers-Kronig relation. Defining $\sigma_{1}\left(\sigma_{2}\right)$ as the real (imaginary) part of $\sigma$, this relation states that
$$
\begin{align*}
\sigma_{1}(\omega)=-\frac{1}{\pi} \mathcal{P}\left[\int_{-\infty}^{+\infty} d \omega^{\prime} \frac{1}{\omega-\omega^{\prime}} \sigma_{2}\left(\omega^{\prime}\right)\right]
\end{align*}
$$
and
$$
\begin{align*}
\sigma_{2}(\omega)=\frac{1}{\pi} \mathcal{P}\left[\int_{-\infty}^{+\infty} d \omega^{\prime} \frac{1}{\omega-\omega^{\prime}} \sigma_{1}\left(\omega^{\prime}\right)\right].
\end{align*}
$$
A simple calculation with the expression for $\sigma_2(\omega)$ from the ideal conductor, yields
$$
\begin{align*}
\sigma_{1}(\omega)&=\frac{\omega_{p}^{2}}{4} \delta(\omega) \\
\sigma_{2}(\omega)&=\frac{\omega_{p}^{2}}{4 \pi \omega}.
\end{align*}
$$
Obviously this metal is perfectly conducting ($\sigma \rightarrow \infty$ for $\omega \rightarrow 0$), which comes from the fact that we considered systems without dissipation so far. An additional important property coming from complex analysis, is the existence of the so-called f-sum rule,
$$
\begin{align*}
\int_{0}^{\infty} d \omega^{\prime} \sigma_{1}\left(\omega^{\prime}\right)=\frac{1}{2} \int_{-\infty}^{+\infty} d \omega^{\prime} \sigma_{1}\left(\omega^{\prime}\right)=\frac{\omega_{p}^{2}}{8}=\frac{\pi e^{2} n}{2 m}.
\end{align*}
$$
This relation is valid for all electronic systems (including semiconductors).

---
## 6.2 Transport Equations and Relaxation Time
[[Courses/2. Semester/Solid State Theory/Script.pdf#page=129&selection=0,0,2,39| ]]

We introduce here Boltzmann's transport theory as a rather simple and efficient way to deal with dissipation and momentum relaxation of non-stationary electronic states in metals.

### 6.2.1 The Boltzmann Equation

In order to tackle the problem of a finite conductivity, we use a formalism similar to Landau's Fermi liquid theory, based on a distribution function of quasi-particles. In transport theory, the distribution function can be used to describe the deviation of the system from an equilibrium. If the system is isolated from external influence, equilibrium is reached through relaxation after some time, a process which is accompanied with an increase of entropy as discussed in statistical physics. Analogously to the theory of transport phenomena, let us introduce the distribution function $f(\mathbf{k}, \mathbf{r}, t)$, where
$$
\begin{align*}
f(\mathbf{k}, \mathbf{r}, t) \frac{d^{3}\mathbf{k}}{(2 \pi)^{3}} d^{3}\mathbf{r}
\end{align*}
$$
is the number of particles in the infinitesimal phase space volume $d^{3}\mathbf{r} d^{3}\mathbf{k} /(2 \pi)^{3}$ centred at $(\mathbf{k}, \mathbf{r})$, at time $t$. Note that, for simplicity, we neglect the electron spin. In general there would be a distribution function for each spin species. Such a description is only applicable if the temporal and spacial variations occur at long wavelengths and small frequencies, respectively, that is, if typically $|\mathbf{q}| \ll k_{F}$ and $\hbar \omega \ll \epsilon_{F}$. The total number of particles $N$ is given by
$$
\begin{align*}
N=2 \int \frac{d^{3}\mathbf{k}}{(2 \pi)^{3}} d^{3}\mathbf{r} f(\mathbf{k}, \mathbf{r}, t).
\end{align*}
$$
The equilibrium distribution $f_{0}$ for the Fermionic quasi-particles is given by the Fermi-Dirac distribution,
$$
\begin{align*}
f_{0}(\mathbf{k}, \mathbf{r}, t)=\frac{1}{e^{\left(\epsilon_{\mathbf{k}}-\mu\right) / k_{B} T}+1},
\end{align*}
$$

and is independent of space $\mathbf{r}$ and time $t$. The general distribution function $f(\mathbf{k}, \mathbf{r}, t)$ obeys the Boltzmann equation
$$
\begin{align*}
\frac{D}{D t} f(\mathbf{k}, \mathbf{r}, t)=\left(\frac{\partial}{\partial t}+\dot{\mathbf{r}} \cdot \mathbf{\nabla}_{\mathbf{r}}+\dot{\mathbf{k}} \cdot \mathbf{\nabla}_{\mathbf{k}}\right) f(\mathbf{k}, \mathbf{r}, t)=\left(\frac{\partial f}{\partial t}\right)_{\mathrm{coll}}
\end{align*}
$$
where the substantial derivative in phase space $D / D t$ is defined as the total temporal derivative in a frame moving with the phase-space volume. The right-hand side is called collision integral and describes the rate of change in $f$ due to collision processes. Without scattering, this equation would represent a continuity equation for $f$. Now, consider the temporal derivatives of $\mathbf{r}$ and $\mathbf{k}$ from a quasi-classical viewpoint. In absence of a magnetic field, we find
$$
\begin{align*}
\dot{\mathbf{r}} &= \frac{\hbar \mathbf{k}}{m} \\
\hbar \dot{\mathbf{k}} &= -e \mathbf{E}
\end{align*}
$$
that is, the force $\hbar \dot{\mathbf{k}}$, which is our central interest, originates from the electric field. The collision integral may be expressed via the probability $W\left(\mathbf{k}, \mathbf{k}^{\prime}\right)$ to scatter a quasi-particle with wave vector $\mathbf{k}$ to $\mathbf{k}^{\prime}$. For simple scattering on static potentials, the collision integral is given by
$$
\begin{align*}
\left(\frac{\partial f}{\partial t}\right)_{\mathrm{coll}}=-\int \frac{d^{3}\mathbf{k}^{\prime}}{(2 \pi)^{3}} & {\left[W\left(\mathbf{k}, \mathbf{k}^{\prime}\right) f(\mathbf{k}, \mathbf{r}, t)\left(1-f\left(\mathbf{k}^{\prime}, \mathbf{r}, t\right)\right)\right.} \\
& \left.-W\left(\mathbf{k}^{\prime}, \mathbf{k}\right) f\left(\mathbf{k}^{\prime}, \mathbf{r}, t\right)(1-f(\mathbf{k}, \mathbf{r}, t))\right].
\end{align*}
$$
The first term, describing the scattering from $\mathbf{k}$ to $\mathbf{k}^{\prime}$, requires a quasi-particle at $\mathbf{k}$, hence the factor $f(\mathbf{k}, \mathbf{r}, t)$, and the absence of a particle at $\mathbf{k}^{\prime}$, therefore the factor $1-f\left(\mathbf{k}^{\prime}, \mathbf{r}, t\right)$. Note that if spin was considered here, this collision term would account for scattering processes where spin is conserved. However, there are in principle also scattering process where the electron spin can be transferred to the lattice (spin-orbit coupling) or an impurity (Kondo effect) and would not be conserved independently. This process describes the scattering out of the phase space volume $d^{3}\mathbf{k} /(2 \pi)^{3}$, that is, reduces the number of particles in it. Therefore, it enters the collision integral with negative sign. The second term describes the opposite process and, according to its positive sign, increases the number of particles in the phase space volume $d^{3}\mathbf{k} /(2 \pi)^{3}$. For a system with time inversion symmetry, we have $W\left(\mathbf{k}, \mathbf{k}^{\prime}\right)=W\left(\mathbf{k}^{\prime}, \mathbf{k}\right)$. Assuming this, we can combine both terms and end up with
$$
\begin{align*}
\left(\frac{\partial f}{\partial t}\right)_{\mathrm{coll}}=\int \frac{d^{3}\mathbf{k}^{\prime}}{(2 \pi)^{3}} W\left(\mathbf{k}, \mathbf{k}^{\prime}\right)\left[f\left(\mathbf{k}^{\prime}, \mathbf{r}, t\right)-f(\mathbf{k}, \mathbf{r}, t)\right].
\end{align*}
$$
The Boltzmann equation is a complicated integro-differential equation and suitable approximations are required. Usually, we study processes close to equilibrium, where the deviation $f(\mathbf{k}, \mathbf{r}, t)-f_{0}(\mathbf{k}, \mathbf{r}, t)$ is small compared to $f(\mathbf{k}, \mathbf{r}, t)$. Here, to generalise we assume $f_{0}(\mathbf{k}, \mathbf{r}, t)$ to be a local equilibrium distribution for which the temperature $T=T(\mathbf{r}, t)$ and the chemical potential $\mu=\mu(\mathbf{r}, t)$ vary slowly in $\mathbf{r}$ and $t$, such that $f_{0}(\mathbf{k}, \mathbf{r}, t)$ can still be expressed via the local Fermi-Dirac distribution. At small deviations from equilibrium (or local equilibrium), we can approximate the collision integral by the relaxation-time approximation. For simplicity, we assume that the system is isotropic, such that the quasi-particle dispersion $\epsilon_{\mathbf{k}}$ only depends on $|\mathbf{k}|$ and, furthermore, that the scattering probabilities are elastic and depend on the angle between $\mathbf{k}$ and $\mathbf{k}^{\prime}$. Then, we make the Ansatz
$$
\begin{align*}
\left(\frac{\partial f}{\partial t}\right)_{\mathrm{coll}}=-\frac{f(\mathbf{k}, \mathbf{r}, t)-f_{0}(\mathbf{k}, \mathbf{r}, t)}{\tau\left(\epsilon_{\mathbf{k}}\right)}.
\end{align*}
$$
The time scale $\tau\left(\epsilon_{\mathbf{k}}\right)$ is called relaxation time and gives the characteristic time within which the system relaxes to equilibrium.

Consider the simplest case of a system at constant temperature subject to a small uniform electric field $\mathbf{E}(t)$. With $f(\mathbf{k}, \mathbf{r}, t)=f_{0}(\mathbf{k}, \mathbf{r}, t)+\delta f(\mathbf{k}, \mathbf{r}, t)$, we can calculate the Fourier-transform of Boltzmann equation in relaxation-time approximation and find, after linearising in $\delta f$,
$$
\begin{align*}
-i \omega \delta f(\mathbf{k}, \omega)-\frac{e \mathbf{E}(\omega)}{\hbar} \mathbf{\nabla}_{\mathbf{k}} f_{0}(\mathbf{k})=-\frac{\delta f(\mathbf{k}, \omega)}{\tau\left(\epsilon_{\mathbf{k}}\right)}
\end{align*}
$$
with
$$
\begin{align*}
f(\mathbf{k}, t)=\int_{-\infty}^{+\infty} \frac{d \omega}{2 \pi} f(\mathbf{k}, \omega) e^{-i \omega t}
\end{align*}
$$
and
$$
\begin{align*}
\mathbf{E}(t)=\int_{-\infty}^{+\infty} \frac{d \omega}{2 \pi} \mathbf{E}(\omega) e^{-i \omega t}.
\end{align*}
$$
In order to come to this expression, we used that $f(\mathbf{k}, \mathbf{r}, t)=f(\mathbf{k}, t)$ for $\mathbf{E}=\mathbf{E}(t)$ are spacially uniform, and assumed for linearising that $\delta f \sim|\mathbf{E}|$. Thus, this equation is consistent to linear order in $|\mathbf{E}|$ and can be easily solved as
$$
\begin{align*}
\delta f(\mathbf{k}, \omega)=\frac{e \tau(\epsilon_{\mathbf{k}}) \mathbf{E}(\omega)}{\hbar(1-i \omega \tau(\epsilon_{\mathbf{k}}))} \mathbf{\nabla}_{\mathbf{k}} f_{0}(\mathbf{k})=\frac{e \tau(\epsilon_{\mathbf{k}}) \mathbf{E}(\omega)}{\hbar(1-i \omega \tau(\epsilon_{\mathbf{k}}))} \frac{\partial f_{0}(\epsilon_{\mathbf{k}})}{\partial \epsilon_{\mathbf{k}}} \mathbf{\nabla}_{\mathbf{k}} \epsilon_{\mathbf{k}}.
\end{align*}
$$
This result leads straightforwardly to the quasi-particle current $\mathbf{j}(\omega)$,
$$
\begin{align*}
\mathbf{j}(\omega)&=-2 e \int \frac{d^{3}\mathbf{k}}{(2 \pi)^{3}} \mathbf{v}_{\mathbf{k}} f(\mathbf{k}, \omega)\\
&=-\frac{e^{2}}{4 \pi^{3}} \int d^{3}\mathbf{k} \frac{\tau\left(\epsilon_{\mathbf{k}}\right)\left[\mathbf{E}(\omega) \cdot \mathbf{v}_{\mathbf{k}}\right] \mathbf{v}_{\mathbf{k}}}{1-i \omega \tau\left(\epsilon_{\mathbf{k}}\right)} \frac{\partial f_{0}\left(\epsilon_{\mathbf{k}}\right)}{\partial \epsilon_{\mathbf{k}}}
\end{align*}
$$
with $\hbar \mathbf{v}_{\mathbf{k}}=\mathbf{\nabla}_{\mathbf{k}} \epsilon_{\mathbf{k}}$, which in turn can be simplified to
$$
\begin{align*}
j_{\alpha}(\omega)=\sum_{\beta} \sigma_{\alpha \beta}(\omega) E_{\beta}(\omega),
\end{align*}
$$
where the conductivity tensor $\sigma_{\alpha \beta}$ reads
$$
\begin{align*}
\sigma_{\alpha \beta}=-\frac{e^{2}}{4 \pi^{3}} \int d \epsilon \frac{\partial f_{0}(\epsilon)}{\partial \epsilon} \frac{\tau(\epsilon)}{1-i \omega \tau(\epsilon)} \int d \Omega_{\mathbf{k}} |\mathbf{k}|^{2} \frac{v_{\alpha\mathbf{k}} v_{\beta\mathbf{k}}}{\hbar\left|\mathbf{v}_{\mathbf{k}}\right|}.
\end{align*}
$$
This corresponds to the Ohmic law. Note that $\sigma_{\alpha \beta}=\sigma \delta_{\alpha \beta}$ in isotropic systems. We recover in this case the expression for the conductivity, which we introduced at the beginning of this chapter. It is also important to notice that $\partial f_{0}(\epsilon) / \partial \epsilon$ concentrates around $\epsilon=\mu$ for $T \ll T_{F}$. In the following, we consider this result for an isotropic system in different limiting cases.

### 6.2.2 The Drude Form

For $\omega \tau \gg 1$ the expression for $\sigma_{\alpha\beta}$ becomes independent on the relaxation time. In an isotropic system $\sigma_{\alpha \beta}=\sigma \delta_{\alpha \beta}$ at low temperatures $T \ll T_{F}$, this leads to
$$
\begin{align*}
\sigma(\omega) \approx i \frac{e^{2} m^{2} v_{F}}{4 \pi^{3} \hbar^{3} \omega} \int d \Omega_{\mathbf{k}} v_{F x}^{2}=i \frac{e^{2} n}{m \omega}=i \frac{\omega_{p}^{2}}{4 \pi \omega},
\end{align*}
$$
which reproduces the previous result for ideal conductors. However now, this does not mean that our system is a perfect conductor, as becomes clear when we turn towards small $\omega (\omega \tau \ll 1)$. We are actually interested in the static limit, where the "dc conductivity" ($\omega=0$; "dc" means "direct current") reduces to
$$
\begin{align*}
\sigma=-\frac{e^{2} n}{m} \int d \epsilon \frac{\partial f_{0}}{\partial \epsilon} \tau(\epsilon)=\frac{e^{2} n \bar{\tau}}{m}=\frac{\omega_{p}^{2} \bar{\tau}}{4 \pi}.
\end{align*}
$$
Since the function $\partial f_{0} / \partial \epsilon$ is strongly peaked around the Fermi energy $\epsilon_{F}$, we introduced a mean relaxation time $\bar{\tau}=-\int d \epsilon \tau(\epsilon) \partial f_{0} / \partial \epsilon$. This form recovers the well-known Drude form of the conductivity. Note, that the phenomenological Drude theory of electron transport can be deduced from purely classical considerations.

If the relaxation time $\tau$ depends only weakly on energy, we can simply calculate the optical conductivity at finite frequency,
$$
\begin{align*}
\sigma(\omega)&=\frac{\omega_{p}^{2}}{4 \pi} \frac{\bar{\tau}}{1-i \omega \bar{\tau}}=\frac{\omega_{p}^{2}}{4 \pi}\left(\frac{\bar{\tau}}{1+\omega^{2} \bar{\tau}^{2}}+i\frac{\bar{\tau}^{2} \omega}{1+\omega^{2} \bar{\tau}^{2}}\right)\\
&=\sigma_{1}+i \sigma_{2}.
\end{align*}
$$
Note that the real part satisfies the $f$-sum rule,
$$
\begin{align*}
\int_{0}^{\infty} d \omega \sigma_{1}(\omega)=\int_{0}^{\infty} d \omega \frac{\omega_{p}^{2}}{4 \pi} \frac{\bar{\tau}}{1+\omega^{2} \bar{\tau}^{2}}=\frac{\omega_{p}^{2}}{8}
\end{align*}
$$
and that $\sigma(\omega)$ recovers the behaviour of $\sigma_1(\omega)$ in dissipationless systems in the limit $\bar{\tau} \rightarrow \infty$. Note that $\sigma_{1}(\omega)$ has Lorentzian form and naturally leads to a delta function:
$$
\begin{align*}
\sigma_{1}(\omega)=\frac{\omega_{p}^{2}}{4 \pi} \frac{\bar{\tau}}{1+\omega^{2} \bar{\tau}^{2}} \quad \xrightarrow{\bar{\tau} \rightarrow \infty} \quad \frac{\omega_{p}^{2}}{4} \delta(\omega).
\end{align*}
$$
This form of the conductivity yields the dielectric function
$$
\begin{align*}
\varepsilon(\omega)=1-\frac{\omega_{p}^{2} \bar{\tau}}{\omega(i+\omega \bar{\tau})}=1-\frac{\omega_{p}^{2} \bar{\tau}^{2}}{1+\omega^{2} \bar{\tau}^{2}}+i \frac{1}{\omega} \frac{\omega_{p}^{2} \bar{\tau}}{1+\omega^{2} \bar{\tau}^{2}}
\end{align*}
$$
which can be used to discuss the optical properties of metals. The complex index of refraction $n+i \kappa$ is given through $(n+i \kappa)^{2}=\varepsilon$. Next, we discuss three important regimes of frequency. To probe optical properties we consider the reflectivity of light hitting a metal surface perpendicularly. Then the reflectivity is given by
$$
\begin{align*}
R=\frac{(n-1)^{2}+\kappa^{2}}{(n+1)^{2}+\kappa^{2}}.
\end{align*}
$$
Inside the metal the light propagation is renormalised by $k \rightarrow k(n+i \kappa)$ with $k=\omega / c$ such that
$$
\begin{align*}
e^{i k(n+i \kappa) z}=e^{i k n z} e^{-\kappa k z}=e^{i k n z} e^{-z / \delta}
\end{align*}
$$
defining the penetration length
$$
\begin{align*}
\delta=\frac{c}{\omega \kappa}.
\end{align*}
$$

**Relaxation-free regime $\left(\omega \bar{\tau} \ll 1 \ll \omega_{p} \bar{\tau}\right)$**

In this limit, the real $\left(\varepsilon_{1}\right)$ and imaginary $\left(\varepsilon_{2}\right)$ part of the dielectric function read
$$
\begin{align*}
\varepsilon_{1}(\omega) &\approx-\omega_{p}^{2} \bar{\tau}^{2} \\
\varepsilon_{2}(\omega) &\approx \frac{\omega_{p}^{2} \bar{\tau}}{\omega}.
\end{align*}
$$
The real part $\varepsilon_{1}$ is constant and negative, whereas the imaginary part $\varepsilon_{2}$ becomes singular in the limit $\omega \rightarrow 0$. Thus, the refractive index turns out to be dominated by $\varepsilon_{2}$
$$
\begin{align*}
n(\omega) \approx \kappa(\omega) \approx \sqrt{\frac{\varepsilon_{2}(\omega)}{2}} \approx \sqrt{\frac{\omega_{p}^{2} \bar{\tau}}{2 \omega}} \gg 1.
\end{align*}
$$
As a result, the reflectivity $R$ is practically $100 \%$. The absorption index $\kappa(\omega)$ determines the penetration depth $\delta$ through
$$
\begin{align*}
\delta(\omega)=\frac{c}{\omega \kappa(\omega)} \approx \frac{c}{\omega_{p}} \sqrt{\frac{2}{\omega \bar{\tau}}}.
\end{align*}
$$
With this, the skin depth of a metal with the famous relation $\delta(\omega) \sim \omega^{-1 / 2}$ is reproduced within the relaxation time approximation of the Boltzmann equation. While length $\delta(\omega)$ is in the centimetre range for frequencies of the order of $10-100\,\mathrm{Hz}$, the Debye length $c / \omega_{p}$, is only of the order of $100\,\mathrm{Å}$ for $\hbar \omega_{p}=10\,\mathrm{eV}$.

**Relaxation regime ($1 \ll \omega \bar{\tau} \ll \omega_{p} \bar{\tau}$)**

Here, we can expand the dielectric function in $(\omega \bar{\tau})^{-1}$, yielding
$$
\begin{align*}
\varepsilon(\omega)=1-\frac{\omega_{p}^{2}}{\omega^{2}}+i \frac{\omega_{p}^{2}}{\omega^{3} \bar{\tau}}.
\end{align*}
$$
The real part $\varepsilon_{1} \approx-\omega_{p}^{2} / \omega^{2}$ is large and negative and dominates in magnitude over $\varepsilon_{2}$. For the optical properties, we obtain
$$
\begin{align*}
\kappa(\omega) &\approx \frac{\omega_{p}}{\omega} \\
n(\omega) &\approx \frac{\omega_{p}}{2 \omega^{2} \bar{\tau}}.
\end{align*}
$$
We find $\kappa(\omega) \gg n(\omega) \gg 1$, which implies a large reflectivity of metals in this frequency range as well. Note that visible frequencies are part of this regime:

![Attachments/Script 59.webp|700](/img/user/Attachments/Script%2059.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=134&rect=191,483,396,743| ]]
![Attachments/Script 60.webp|700](/img/user/Attachments/Script%2060.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=135&rect=197,601,392,750| ]]

The frequency dependence of the penetration depth becomes weak, and its magnitude is approximately given by the Debye length, $\delta \sim c / \omega_{p}$.

**Ultraviolet regime ($\omega \approx \omega_{p}$ and $\omega>\omega_{p}$)**

In this regime, the imaginary part of $\varepsilon$ is approximately zero and the real part has the well known form
$$
\begin{align*}
\varepsilon_{1}(\omega)=1-\frac{\omega_{p}^{2}}{\omega^{2}},
\end{align*}
$$
such that the reflectivity drops drastically, from close to unity towards zero (compare with conceptual diagrams of reflectivity). Metals become nearly transparent in the range $\omega>\omega_{p}$. In conceptual diagrams, one also notices the rapid increase in the penetration depth $\delta$, showing the transparency of the metal.

In all these considerations, we have neglected the contributions to the dielectric function due to the ion cores (core electrons and nuclei). This may be incorporated in the following approximate way:
$$
\begin{align*}
\varepsilon_{1}(\omega)=\varepsilon_{\infty}-\frac{\omega_{p}^{2}}{\omega^{2}}.
\end{align*}
$$
This influences the reflecting properties of metals; particularly, the value of $\omega_{p}$ is reduced to $\omega_{p}^{\prime}=\omega_{p} / \sqrt{\varepsilon_{\infty}}$, where $\varepsilon_{\infty}$ is the frequency-independent part of the dielectric function. With this, the reflectivity for frequencies above $\omega_{p}^{\prime}$ approaches $R_{\infty}=\left(\sqrt{\varepsilon_{\infty}}-1\right)^{2} /\left(\sqrt{\varepsilon_{\infty}}+1\right)^{2}$, and $0<R_{\infty}<1$.

**Colour of metals**

The practically full reflectance for frequencies below $\omega_{p}$ is a typical feature of metals. Since for most metals, the plasma frequency lies well above the range of visible light ($\hbar \omega=1.5-3.5\,\mathrm{eV}$), they appear shiny to our eye. While most polished metal surfaces appear shiny white, like silver, there are some metals with a colour, like gold which is yellow and copper which is reddish. White shininess results from reflectance on the whole visible frequency range, while for coloured metals there is a certain threshold above which the reflectance drops and frequencies towards blue are not or much weaker reflected. In most cases this drop is not connected with the plasma frequency, but with light absorption due to interband transitions. Note that the single band metal which was used for the Drude theory does not allow for optical absorption apart from the plasma excitation. Interband transition play a particularly important role for the noble metals, Cu, Ag, and Au. For these metals, the reflectance drop is caused by the transition from the completely occupied $d$-band to the partially filled $s$-band, $3d \rightarrow 4s$ in case of Cu. For copper, this drop appears below $2.5\,\mathrm{eV}$ so that predominantly red light is reflected. For gold, this threshold frequency is slightly higher, but still in the visible, while for silver, it lies beyond the visible range. For all these cases, the plasma frequency is not so easily recognisable in the reflectance. On the other hand, aluminium shows a reflectance rather close to the expected behaviour. Also here, there is a small reduction of the reflection due to interband absorption. However, this effect is weak and the strong drop occurs at the plasma frequency of $\hbar \omega_{p}=15.8\,\mathrm{eV}$. Like silver also polished aluminium is white shiny.

### 6.2.3 The Relaxation Time

By replacing the collision integral by a relaxation time approximation, we implicitly introduced a connection between the scattering rate $W\left(\mathbf{k}, \mathbf{k}^{\prime}\right)$ and the relaxation time $\tau$. This relation,
$$
\begin{align*}
\frac{f(\mathbf{k})-f_{0}(\mathbf{k})}{\tau\left(\epsilon_{\mathbf{k}}\right)}=\int \frac{d^{3}\mathbf{k}^{\prime}}{(2 \pi)^{3}} W\left(\mathbf{k}, \mathbf{k}^{\prime}\right)\left\{f(\mathbf{k})-f\left(\mathbf{k}^{\prime}\right)\right\}
\end{align*}
$$
will be studied for an isotropic system, with elastic scattering, and a small external field $\mathbf{E}$. The solution of the linearised Boltzmann equation is of the form
$$
\begin{align*}
f(\mathbf{k})=f_{0}(\mathbf{k})+A(|\mathbf{k}|) \mathbf{k} \cdot \mathbf{E},
\end{align*}
$$
such that
$$
\begin{align*}
f(\mathbf{k})-f\left(\mathbf{k}^{\prime}\right)=A(|\mathbf{k}|)\left(\mathbf{k}-\mathbf{k}^{\prime}\right) \cdot \mathbf{E}.
\end{align*}
$$
Without loss of generality, we define $\hat{\mathbf{z}} \| \mathbf{k}$, and introduce the parametrisation of the angles $\theta$ (polar angle of $\mathbf{E}$) and $\theta^{\prime}, \phi^{\prime}$ (polar and azimuth angle of $\mathbf{k}^{\prime}$), leading to
$$
\begin{align*}
\mathbf{k} \cdot \mathbf{E} &= |\mathbf{k}| |\mathbf{E}| \cos \theta \\
\mathbf{k} \cdot \mathbf{k}^{\prime} &= |\mathbf{k}| |\mathbf{k}^{\prime}| \cos \theta^{\prime} \\
\mathbf{k}^{\prime} \cdot \mathbf{E} &= |\mathbf{k}^{\prime}| |\mathbf{E}|\left(\cos \theta \cos \theta^{\prime}+\sin \theta \sin \theta^{\prime} \cos \phi^{\prime}\right).
\end{align*}
$$
For elastic scattering, $|\mathbf{k}|=|\mathbf{k}^{\prime}|$, we obtain
$$
\begin{align*}
f(\mathbf{k})-f\left(\mathbf{k}^{\prime}\right)=A(|\mathbf{k}|) |\mathbf{k}| |\mathbf{E}|\left[\cos \theta\left(1-\cos \theta^{\prime}\right)-\sin \theta \sin \theta^{\prime} \cos \phi^{\prime}\right].
\end{align*}
$$
Inserting this into the right-hand side of the definition of the collision integral, the $\phi^{\prime}$-dependent part of the integration vanishes for an isotropic system, and we are left with
$$
\begin{align*}
\frac{f(\mathbf{k})-f_{0}(\mathbf{k})}{\tau\left(\epsilon_{\mathbf{k}}\right)} &= \int d \Omega_{\mathbf{k}^{\prime}}\left[f(\mathbf{k})-f\left(\mathbf{k}^{\prime}\right)\right] W\left(\mathbf{k}, \mathbf{k}^{\prime}\right) \\
&= A(|\mathbf{k}|) |\mathbf{k}| |\mathbf{E}| \cos \theta \int d \Omega_{\mathbf{k}^{\prime}}\left(1-\cos \theta^{\prime}\right) W\left(\mathbf{k}, \mathbf{k}^{\prime}\right) \\
&= \left[f(\mathbf{k})-f_{0}(\mathbf{k})\right] \int d \Omega_{\mathbf{k}^{\prime}}\left(1-\cos \theta^{\prime}\right) W\left(\mathbf{k}, \mathbf{k}^{\prime}\right).
\end{align*}
$$
The factor $\left[f(\mathbf{k})-f_{0}(\mathbf{k})\right]$ can be dropped on both sides of the equation, resulting in
$$
\begin{align*}
\frac{1}{\tau\left(\epsilon_{\mathbf{k}}\right)}=\int \frac{d^{3}\mathbf{k}^{\prime}}{(2 \pi)^{3}} W\left(\mathbf{k}, \mathbf{k}^{\prime}\right)\left(1-\cos \theta^{\prime}\right)
\end{align*}
$$
where one should remember that, for elastic scattering, the quasi-particle energy $\epsilon_{\mathbf{k}}=\epsilon_{\mathbf{k}^{\prime}}$ is conserved in the collision process. The scattering probability $W\left(\mathbf{k}, \mathbf{k}^{\prime}\right)$ accounts for this restriction. In the next few sections we discuss different scattering processes, looking at collision probabilities, relaxation times and the resulting conductivity and resistivity contributions.

---
## 6.3 Impurity Scattering
[[Courses/2. Semester/Solid State Theory/Script.pdf#page=135&selection=622,0,624,19| ]]

### 6.3.1 Potential Scattering

Every deviation from the perfect periodicity of the ionic lattice is a source of quasi-particle scattering, leading to the loss of their original momentum. Without translational invariance, the conservation of momentum is lost, the energy, however, is still conserved. Possible static scatterers are among others vacancies, dislocations, and impurity atoms. The scattering rate $W\left(\mathbf{k}, \mathbf{k}^{\prime}\right)$ for a potential $\widehat{V}$ can be determined applying Fermi's golden rule,
$$
\begin{align*}
W\left(\mathbf{k}, \mathbf{k}^{\prime}\right)=\frac{2 \pi}{\hbar} n_{\mathrm{imp}}\left|\left\langle\mathbf{k}^{\prime}| \widehat{V}| \mathbf{k}\right\rangle\right|^{2} \delta\left(\epsilon_{\mathbf{k}}-\epsilon_{\mathbf{k}^{\prime}}\right).
\end{align*}
$$
This corresponds to the first Born approximation in scattering theory. Note, that this approximation is insufficient to describe resonant scattering. By $n_{\mathrm{imp}}$ we denote the density of impurities, assuming only one species of them. For small densities $n_{\mathrm{imp}}$, it is reasonable to neglect interference effects between different impurities. According to the derived relation for relaxation time, the relaxation time $\tau$ of a quasi-particle with momentum $\hbar \mathbf{k}$ is given by
$$
\begin{align*}
\frac{1}{\tau(\epsilon_{\mathbf{k}})}
&= \frac{2 \pi}{\hbar} n_{\mathrm{imp}} \int \frac{d^{3}\mathbf{k}^{\prime}}{(2 \pi)^{3}} \left| \langle \mathbf{k}^{\prime} | \widehat{V} | \mathbf{k} \rangle \right|^{2} \left(1 - \hat{\mathbf{k}} \cdot \hat{\mathbf{k}}^{\prime}\right) \delta(\epsilon_{\mathbf{k}} - \epsilon_{\mathbf{k}^{\prime}}) \\
&= n_{\mathrm{imp}} v_{\mathbf{k}} \int \frac{d \sigma}{d \Omega_{\mathbf{k}^{\prime}}} (\mathbf{k}, \mathbf{k}^{\prime}) \left(1 - \hat{\mathbf{k}} \cdot \hat{\mathbf{k}}^{\prime}\right) d \Omega_{\mathbf{k}^{\prime}}.
\end{align*}
$$
with the differential scattering cross section $d \sigma / d \Omega_{\mathbf{k}^{\prime}}$ and $\hat{\mathbf{k}}=\mathbf{k} /|\mathbf{k}|$. Here, we used the connection between Fermi's golden rule and the Born approximation:
The scattering of particles with momentum $\hbar \mathbf{k}$ into the solid angle $d \Omega_{\mathbf{k}^{\prime}}$ around $\mathbf{k}^{\prime}$ yields
$$
\begin{align*}
W(\mathbf{k}, \mathbf{k}^{\prime}) d \Omega_{\mathbf{k}^{\prime}}
&= \frac{2 \pi}{\hbar \Omega} \sum_{\mathbf{k}^{\prime} \in d \Omega_{\mathbf{k}^{\prime}}} \left| \langle \mathbf{k}^{\prime} | \widehat{V} | \mathbf{k} \rangle \right|^{2} \delta(\epsilon_{\mathbf{k}} - \epsilon_{\mathbf{k}^{\prime}}) \\
&= \frac{2 \pi}{\hbar} \int_{\mathbf{k}^{\prime} \in d \Omega_{\mathbf{k}^{\prime}}} \frac{d^{3}\mathbf{k}^{\prime}}{(2 \pi)^{3}} \left| \langle \mathbf{k}^{\prime} | \widehat{V} | \mathbf{k} \rangle \right|^{2} \delta(\epsilon_{\mathbf{k}} - \epsilon_{\mathbf{k}^{\prime}}) \\
&= \frac{2 \pi}{\hbar} \frac{d \Omega_{\mathbf{k}^{\prime}}}{(2\pi)^3} \frac{|\mathbf{k}|^2}{(d\epsilon/dk)} \left| \langle \mathbf{k}^{\prime} | \widehat{V} | \mathbf{k} \rangle \right|^{2} = \frac{d\Omega_{\mathbf{k}'}}{(2\pi)^2 \hbar v_k} |\mathbf{k}|^2 \left| \langle \mathbf{k}^{\prime} | \widehat{V} | \mathbf{k} \rangle \right|^{2}.
\end{align*}
$$
The scattering per incoming particle current $j_{\mathrm{in}}d\sigma(\mathbf{k},\mathbf{k}')=W(\mathbf{k},\mathbf{k}')d\Omega_{\mathbf{k}'}$ determines the differential cross section (where $j_{in} = v_k/\Omega$ for one particle in volume $\Omega$)
$$
\begin{align*}
v_{\mathbf{k}} \frac{d \sigma}{d \Omega_{\mathbf{k}^{\prime}}} (\mathbf{k}, \mathbf{k}^{\prime})
= \frac{\Omega}{(2\pi)^2 \hbar} |\mathbf{k}|^2 \left| \langle \mathbf{k}^{\prime} | \widehat{V} | \mathbf{k} \rangle \right|^{2}.
\end{align*}
$$
Note the difference in the expressions for the relaxation time $\tau$ and for the lifetime $\tilde{\tau}$,
$$
\begin{align*}
\frac{1}{\tilde{\tau}}=\int \frac{d^{3}\mathbf{k}'}{(2 \pi)^{3}} W\left(\mathbf{k}, \mathbf{k}^{\prime}\right)
\end{align*}
$$
given by Fermi's golden rule. The factor $\left(1-\cos \theta^{\prime}\right)$ in the expression for $1/\tau$ gives more weight to backscattering $\left(\theta^{\prime} \approx \pi\right)$ compared to forward scattering $\left(\theta^{\prime} \approx 0\right)$, since the former has more influence in impeding transport. This explains why $\tau$ is also termed transport lifetime.

Assuming defects in the form of point charges $Z e$, whose screened potential is
$$
\begin{align*}
\left\langle\mathbf{k}^{\prime}\right| \widehat{V}|\mathbf{k}\rangle=\frac{4 \pi Z e^{2}}{\left|\mathbf{k}-\mathbf{k}^{\prime}\right|^{2}+k_{\mathrm{TF}}^{2}}.
\end{align*}
$$
In the limit of very strong screening, $k_{\mathrm{TF}} \gg k_{F}$, the differential cross section becomes independent of the deviation $\left(\mathbf{k}-\mathbf{k}^{\prime}\right)$, the transport and the usual lifetime become equal, $\tau=\tilde{\tau},$ and
$$
\begin{align*}
\frac{1}{\tau} \approx \frac{\pi}{\hbar} N\left(\epsilon_{F}\right) n_{\mathrm{imp}}\left(\frac{4 \pi Z e^{2}}{k_{\mathrm{TF}}^{2}}\right)^{2}.
\end{align*}
$$
With this, we are now able to determine the conductivity for scattering on Coulomb defects, assuming $s$-wave scattering only. Then, since $\tau(\epsilon)$ depends weakly on energy, the Drude formula yields
$$
\begin{align*}
\sigma=\frac{e^{2} n \tau\left(\epsilon_{F}\right)}{m}
\end{align*}
$$
or, for the specific resistivity $\rho=1 / \sigma$,
$$
\begin{align*}
\rho=\frac{m}{e^{2} n \tau\left(\epsilon_{F}\right)}.
\end{align*}
$$
Both $\sigma$ and $\rho$ are independent of temperature. This contribution is called the residual resistivity of a metal, which approaches zero for a perfect material. The temperature dependence of the resistivity is induced in other scattering processes like electron-phonon scattering and electron-electron scattering, which will be considered below. The so-called residual resistance ratio $RRR=R(T=300\,\mathrm{K}) / R(T=0)$ is an often used quantity to benchmark the quality of a material. It is defined as the ratio between the resistance $R$ at room temperature and the resistance at zero temperature. The bigger the $RRR$, the better the quality of the material. The typical value of $RRR$ for common copper is $40-50$, while the $RRR$ for very clean aluminium reaches values up to 20000.

### 6.3.2 Kondo Effect

There are impurity atoms inducing so-called resonant scattering. If the resonance occurs close to the Fermi energy, the scattering rate is strongly energy dependent, inducing a more pronounced temperature dependence of the resistivity. An important example is the scattering off magnetic impurities with a spin degree of freedom, yielding a dramatic energy dependence of the scattering rate. This problem was first studied by Kondo in 1964 in order to explain the peculiar minima in resistivity in some materials. The coupling between the local spin impurities $\mathbf{S}_{i}$ at $\mathbf{R}_{i}$ and the quasi-particle spin $\mathbf{s}$ has the exchange form
$$
\begin{align*}
\widehat{V}_{K} &= \sum_{i}\left(\widehat{V}_{K}\right)_{i}=J \sum_{i} \widehat{\mathbf{S}}_{i} \cdot \widehat{\mathbf{s}}(\mathbf{r}) \delta\left(\mathbf{r}-\mathbf{R}_{i}\right) \\
&= J \sum_{i}\left(\widehat{S}_{i}^{z} \widehat{s}^{z}(\mathbf{r})+\frac{1}{2} \widehat{S}_{i}^{+} \widehat{s}^{-}(\mathbf{r})+\frac{1}{2} \widehat{S}_{i}^{-} \widehat{s}^{+}(\mathbf{r})\right) \delta\left(\mathbf{r}-\mathbf{R}_{i}\right) \\
&= \frac{J \hbar}{2 \Omega} \sum_{\mathbf{k}, \mathbf{k}^{\prime}, i}\left[\widehat{S}_{i}^{z}\left(\hat{c}_{\mathbf{k} \uparrow}^{\dagger} \hat{c}_{\mathbf{k}^{\prime} \uparrow}-\hat{c}_{\mathbf{k} \downarrow}^{\dagger} \hat{c}_{\mathbf{k}^{\prime} \downarrow}\right)+\widehat{S}_{i}^{+} \hat{c}_{\mathbf{k} \downarrow}^{\dagger} \hat{c}_{\mathbf{k}^{\prime} \uparrow}+\widehat{S}_{i}^{-} \hat{c}_{\mathbf{k} \uparrow}^{\dagger} \hat{c}_{\mathbf{k}^{\prime} \downarrow}\right] e^{-i\left(\mathbf{k}-\mathbf{k}^{\prime}\right) \cdot \mathbf{R}_{i}}.
\end{align*}
$$
Here, it becomes important that spin flip processes, which change the spin state of the impurity and that of the scattered electron, are enabled. The results for the scattering rate are presented here without derivation,
$$
\begin{align*}
W\left(\mathbf{k}, \mathbf{k}^{\prime}\right) \approx J^{2} S(S+1)\left[1+2 J N\left(\epsilon_{F}\right) \ln \left(\frac{D}{\left|\epsilon_{\mathbf{k}}-\epsilon_{F}\right|}\right)\right]
\end{align*}
$$
where $D$ is the bandwidth and we have assumed that $J N\left(\epsilon_{F}\right) \ll 1$. The relaxation time is found to be
$$
\begin{align*}
\frac{1}{\tau\left(\epsilon_{\mathbf{k}}\right)} \approx \frac{J^{2} S(S+1)}{\hbar} N(\epsilon_{\mathbf{k}})\left[1+2 J N\left(\epsilon_{F}\right) \ln \left(\frac{D}{\left|\epsilon_{\mathbf{k}}-\epsilon_{F}\right|}\right)\right].
\end{align*}
$$
Note that $W\left(\mathbf{k}, \mathbf{k}^{\prime}\right)$ does not depend on angle, meaning that the process is described by $s$-wave scattering. The energy dependence is singular at the Fermi energy, indicating that we are not dealing with simple resonant potential scattering, but with a much more subtle many-particle effect involving the electrons very near the Fermi surface. The fact that the local spins $\mathbf{S}_{i}$ can flip, makes the scattering centre dynamical, because the scatterer is constantly changing. The scattering process of an electron is influenced by previous scattering events, leading to the singularity at $\epsilon_{F}$. This cannot be described within the first Born approximation, but requires at least the second approximation or the full solution. As mentioned before, the resonant behaviour induces a strong temperature dependence of the conductivity. Indeed,
$$
\begin{align*}
\sigma(T) &= \frac{e^{2} k_{F}^{3}}{6 \pi^{2} m} \int d \epsilon \frac{1}{4 k_{B} T \cosh^{2}\left((\epsilon-\epsilon_{F}) / (2 k_{B} T)\right)} \tau(\epsilon) \\
&\approx \frac{e^{2} n}{8 m k_{B} T} \int d \tilde{\epsilon} \frac{\tau(\tilde{\epsilon}+\epsilon_F)^{-1}}{\cosh^{2}\left(\tilde{\epsilon} / (2 k_{B} T)\right)} \\&\approx \frac{e^2 n \tau(\epsilon_F)}{m} \left[1 - c (JN(\epsilon_F))^2 (\ln(D/k_BT))^2 \dots \right]
\end{align*}
$$
A more direct evaluation from $1/\tau(\epsilon_F)$ and integrating $\partial f_0/\partial\epsilon$ would be more appropriate for a first approximation. The result for conductivity is typically:
$$
\begin{align*}
\rho(T) \approx \rho_{0} + A J^{2} S(S+1)\left[1-2 J N\left(\epsilon_{F}\right) \ln \left(\frac{D}{k_{B} T}\right)\right].
\end{align*}
$$
Usual contributions to the resistance, like electron-phonon scattering discussed below, typically decrease with temperature. The Kondo contribution to the resistivity increases with decreasing temperature (for antiferromagnetic $J>0$), inducing a minimum in the total resistance. At even lower temperatures, the resistivity saturates. In reality, the conductivity saturates at a finite value when the temperature is lowered below a characteristic Kondo temperature $T_{K}$,
$$
\begin{align*}
k_{B} T_{K}=D e^{-1 / (|J| N\left(\epsilon_{F}\right))},
\end{align*}
$$
a characteristic energy scale of this system. The real behaviour of the conductivity at temperatures $T \ll T_{K}$ is not accessible by simple perturbation theory. This regime, known as the Kondo problem, represents one of the most interesting correlation phenomena of many-particle physics.

---
## 6.4 Electron-Phonon Scattering
[[Courses/2. Semester/Solid State Theory/Script.pdf#page=138&selection=224,0,226,26| ]]

Even in perfect metals, the conductivity becomes non-zero at finite temperature. The thermally induced distortions of the lattice, phonons, act as fluctuating scattering centres. In the language of electron-phonon interaction, electrons are scattered via absorption and emission of phonons, which induce local fluctuations in volume (as discussed in [[Notes/Solid-State Theory/3 Metals\|Chapter 3]]). The corresponding coupling term was given in previously derived expressions and simplifies with the definition of the displacement field operator to
$$
\begin{align*}
\mathcal{H}_{\mathrm{int}}=2 i \sum_{\mathbf{k}, \mathbf{q}, s} \tilde{V}_{\mathbf{q}} \sqrt{\frac{\hbar}{2 \rho_{0} \omega_{\mathbf{q}}}}|\mathbf{q}|\left(\hat{b}_{\mathbf{q}}-\hat{b}_{-\mathbf{q}}^{\dagger}\right) \hat{c}_{\mathbf{k}+\mathbf{q}, s}^{\dagger} \hat{c}_{\mathbf{k}s}.
\end{align*}
$$
The interaction is formally similar to the coupling between electrons and photons. The dominant processes consist of single-phonon processes, that is, the absorption or emission of one phonon. Energy and momentum are conserved, such that, for the scattering of an electron from momentum $\mathbf{k}$ to $\mathbf{k}^{\prime}$ due to the emission of a phonon with momentum $\mathbf{q}$, we have
$$
\begin{align*}
\mathbf{k} &= \mathbf{k}^{\prime}+\mathbf{q}+\mathbf{G}, \\
\epsilon_{\mathbf{k}} &= \hbar \omega_{\mathbf{q}}+\epsilon_{\mathbf{k}^{\prime}}.
\end{align*}
$$
Here, $\omega_{\mathbf{q}}=c_{s}|\mathbf{q}|$ is the phonon spectrum, while the reciprocal lattice vector $\mathbf{G}$ allows for scattering in nearby Brillouin zones. By this, the phase space available for scattering is strongly reduced, especially near the Fermi energy. Note that $\hbar \omega_{\mathbf{q}} \leq \hbar \omega_{D} \ll \epsilon_{F}$. In order to calculate the scattering rates, the matrix elements of the available processes,
$$
\begin{align*}
\left\langle\mathbf{k}+\mathbf{q} ; N_{\mathbf{q}^{\prime}}\right|\left(\hat{b}_{\mathbf{q}}-\hat{b}_{-\mathbf{q}}^{\dagger}\right) \hat{c}_{\mathbf{k}+\mathbf{q}, s}^{\dagger} \hat{c}_{\mathbf{k}s}\left|\mathbf{k} ; N_{\mathbf{q}^{\prime}}^{\prime}\right\rangle=\langle\mathbf{k}+\mathbf{q}| \hat{c}_{\mathbf{k}+\mathbf{q}, s}^{\dagger} \hat{c}_{\mathbf{k}s}|\mathbf{k}\rangle & \left(\sqrt{N_{\mathbf{q}^{\prime}}^{\prime}} \delta_{N_{\mathbf{q}^{\prime}}, N_{\mathbf{q}^{\prime}}^{\prime}-1} \delta_{\mathbf{q}, \mathbf{q}^{\prime}}\right. \\
& \left.-\sqrt{N_{\mathbf{q}^{\prime}}^{\prime}+1} \delta_{N_{\mathbf{q}^{\prime}}, N_{\mathbf{q}^{\prime}}^{\prime}+1} \delta_{\mathbf{q},-\mathbf{q}^{\prime}}\right)
\end{align*}
$$
need to be calculated. In analogy to the discussion on electromagnetic radiation, the phenomenon of spontaneous phonon emission due to zero-point fluctuations appears. It is formally visible in the additional '+1' in the factors $\left(N_{\pm\mathbf{q}}+1\right)$. From Fermi's golden rule we obtain
$$
\begin{align*}
\left(\frac{\partial f}{\partial t}\right)_{\mathrm{coll}} =&-\frac{2 \pi}{\hbar} \sum_{\mathbf{q}}|g(\mathbf{q})|^{2}\left[\left[f(\mathbf{k})(1-f(\mathbf{k}+\mathbf{q}))\left(N_{-\mathbf{q}}+1\right)\right.\right. \\
&- \left.f(\mathbf{k}+\mathbf{q})(1-f(\mathbf{k})) N_{-\mathbf{q}}\right] \delta\left(\epsilon_{\mathbf{k}+\mathbf{q}}-\epsilon_{\mathbf{k}}+\hbar \omega_{-\mathbf{q}}\right) \\
&-\left[f(\mathbf{k}+\mathbf{q})(1-f(\mathbf{k}))\left(N_{\mathbf{q}}+1\right)\right. \\
&- \left.\left.f(\mathbf{k})(1-f(\mathbf{k}+\mathbf{q})) N_{\mathbf{q}}\right] \delta\left(\epsilon_{\mathbf{k}+\mathbf{q}}-\epsilon_{\mathbf{k}}-\hbar \omega_{\mathbf{q}}\right)\right],
\end{align*}
$$
where $g(\mathbf{q})=\tilde{V}_{\mathbf{q}}|\mathbf{q}| \sqrt{2 \hbar / (\rho_{0} \omega_{\mathbf{q}})}$. Each of these four terms describes one of the single phonon scattering processes depicted here:

![Attachments/Script 61.webp|700](/img/user/Attachments/Script%2061.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=139&rect=141,420,456,487| ]]

The collision integral leads to a complicated integro-differential equation, whose solution is tedious and would involve the solution of the non-equilibrium phonon-problem as well. Instead of a full rigorous calculation including the non-equilibrium redistribution of phonons, we will consider the behaviour in various temperature regimes by an approximate treatment of the phonons. The characteristic temperature of phonons, the Debye temperature $\Theta_{D} \ll T_{F}$, is much smaller than the Fermi temperature. Hence, the phonon energy is unimportant for the energy conservation, $\epsilon_{\mathbf{k}'=\mathbf{k}+\mathbf{q}} \approx \epsilon_{\mathbf{k}}$. Therefore we are allowed to impose momentum conservation $\epsilon_{\mathbf{k}+\mathbf{q}}=\epsilon_{\mathbf{k}}$ and consider the lattice distortion as being essentially static, in the sense of an adiabatic Born-Oppenheimer approximation. The approximate collision integral then reads
$$
\begin{align*}
\left(\frac{\partial f}{\partial t}\right)_{\mathrm{coll}}=\frac{2 \pi}{\hbar} \sum_{\mathbf{q}}|g(\mathbf{q})|^{2} 2 N\left(\omega_{\mathbf{q}}\right)[f(\mathbf{k}+\mathbf{q})-f(\mathbf{k})] \delta\left(\epsilon_{\mathbf{k}+\mathbf{q}}-\epsilon_{\mathbf{k}}\right)
\end{align*}
$$
where we assume the occupation of phonon states according to the equilibrium distribution for bosons,
$$
\begin{align*}
N\left(\omega_{\mathbf{q}}\right)=\frac{1}{e^{\hbar \omega_{\mathbf{q}} / k_{B} T}-1}.
\end{align*}
$$
This approximation includes all important aspects of the electron-phonon scattering we need to derive the temperature dependence of $\rho(T)$.
In analogy to previous approaches, we obtain with relaxation-time Ansatz
$$
\begin{align*}
\frac{1}{\tau\left(\epsilon_{\mathbf{k}}\right)}=\frac{2 \pi}{\hbar} \frac{\lambda}{N\left(\epsilon_{F}\right)} \int \frac{d^{3}\mathbf{q}}{(2 \pi)^{3}} \hbar \omega_{\mathbf{q}} N\left(\omega_{\mathbf{q}}\right)(1-\cos \theta) \delta\left(\epsilon_{\mathbf{k}+\mathbf{q}}-\epsilon_{\mathbf{k}}\right)
\end{align*}
$$
where $|\mathbf{k}|=|\mathbf{k}+\mathbf{q}|=k_{F}$, meaning that only the electrons in a thin shell close to the Fermi surface are relevant. Furthermore, we parameterised $g(\mathbf{q})$ according to
$$
\begin{align*}
|g(\mathbf{q})|^{2}=\frac{\lambda}{2 N\left(\epsilon_{F}\right) \Omega} \hbar \omega_{\mathbf{q}},
\end{align*}
$$
where $\lambda$ is a dimensionless electron-phonon coupling constant. In usual metals $\lambda<1$. As in the case of defect scattering, the relaxation time depends only weakly on the electron energy. But, unlike previously, the direct temperature dependence enters via the dependence on temperature of the phonon occupation $N\left(\omega_{\mathbf{q}}\right)$.

![Attachments/Script 62.webp|700](/img/user/Attachments/Script%2062.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=140&rect=218,384,372,534| ]]

In order to perform the integration in the expression for $1/\tau$, we have to re-express $\delta\left(\epsilon_{\mathbf{k}+\mathbf{q}}-\epsilon_{\mathbf{k}}\right)$ by writing (with $q=|\mathbf{q}|, k_F=|\mathbf{k}_F|$):
$$
\begin{align*}
\delta\left(\epsilon_{\mathbf{k}+\mathbf{q}}-\epsilon_{\mathbf{k}}\right)&=\delta\left(\frac{\hbar^{2}}{2 m}\left(q^{2}-2 k_{F} q \cos \gamma\right)\right)\\
&=\frac{m}{\hbar^{2} k_{F} q} \delta\left(\frac{q}{2 k_{F}}-\cos \gamma\right)
\end{align*}
$$
where $\gamma$ is defined in the relevant geometry. From there, we also see that $2 \gamma+\theta=\pi$, and thus, find the relation
$$
\begin{align*}
1-\cos \theta=1+\cos (2 \gamma)=2 \cos ^{2}(\gamma).
\end{align*}
$$
Obviously, we have to integrate $q$ over the range $\left[0,2 k_{F}\right]$ on the right-hand side of the expression for $1/\tau$, which can be reformulated to
$$
\begin{aligned}
\frac{1}{\tau\left(\epsilon_{F}, T\right)} &= \frac{-\lambda}{N\left(\epsilon_{F}\right)} \frac{m}{\hbar^{2} \pi k_{F}} \int_{0}^{2 k_{F}} d q q \omega_{\mathbf{q}} N\left(\omega_{\mathbf{q}}\right) \int_{0}^{\pi / 2} d \gamma \sin \gamma \cos ^{2}(\gamma) \delta\left(\frac{q}{2 k_{F}}-\cos \gamma\right) \\
&= \frac{\lambda}{4 N\left(\epsilon_{F}\right)} \frac{m c_{s}}{\hbar^{2} \pi k_{F}^{3}} \int_{0}^{2 k_{F}} \frac{q^{4} d q}{e^{\hbar c_{s} q / k_{B} T}-1} \\
&= \frac{\lambda}{4 N\left(\epsilon_{F}\right)} \frac{m c_{s} k_{F}^{2}}{\hbar^{2} \pi}\left(\frac{T}{\Theta_{D}}\right)^{5} \int_{0}^{2 \Theta_{D} / T} \frac{y^{4} d y}{e^{y}-1},
\end{aligned}
$$
where we have approximated the Debye temperature by $k_{B} \Theta_{D} \approx \hbar c_{s} k_{F}$. We notice the two distinct characteristic temperature regimes,
$$
\begin{align*}
\frac{1}{\tau}= \begin{cases}6 \zeta(5) \lambda \pi \frac{k_{B} \Theta_{D}}{\hbar}\left(\frac{T}{\Theta_{D}}\right)^{5}, & T \ll \Theta_{D} \\ \lambda \pi \frac{k_{B} \Theta_{D}}{\hbar}\left(\frac{T}{\Theta_{D}}\right), & T \gg \Theta_{D}\end{cases}.
\end{align*}
$$
The prefactors depend on the details of the approximation, whereas the qualitative temperature dependence does not. We finally obtain the conductivity and resistivity from the formula for conductivity,
$$
\begin{align*}
\sigma &= \frac{e^{2} n}{m} \tau(T) \\
\rho &= \frac{m}{e^{2} n} \frac{1}{\tau(T)}
\end{align*}
$$
where we used the weak energy dependence of $\tau\left(\epsilon \approx \epsilon_{F}, T\right)$. With this, we obtain the well-known Bloch-Grüneisen form
$$
\begin{align*}
\rho(T) \sim \begin{cases}T^{5}, & T \ll \Theta_{D} \\ T, & T \gg \Theta_{D}.\end{cases}
\end{align*}
$$
At high temperatures, $\rho$ is determined by the occupation of phonon states
$$
\begin{align*}
N\left(\omega_{\mathbf{q}}\right) \approx \frac{k_{B} T}{\hbar \omega_{\mathbf{q}}}
\end{align*}
$$
which change the scattering strength (amplitude) of the lattice modulation linear in $T$. At low temperature only the lowest phonon states are occupied $\hbar \omega_{\mathbf{q}}<k_{B} T$ yield $|\mathbf{q}|<k_{B} T / (\hbar c_{s})$. Thus, at low temperatures only long-wave length modulations of the lattice generate a scattering potentials which deflects electrons only slightly from their trajectories (forward scattering dominates). This represents a restriction of the scattering phase space becoming ever smaller with decreasing temperature.

---
## 6.5 Electron-Electron Scattering
[[Courses/2. Semester/Solid State Theory/Script.pdf#page=141&selection=448,0,450,28| ]]

In [[Notes/Solid-State Theory/5 Landau's Theory of Fermi Liquids\|Chapter 5]] we learned that, taking a short-ranged electron-electron interaction into account, scattering rate for electrons decreases strongly close to the Fermi surface. The basic reason for this lies in the constraint of the scattering phase space imposed by the Pauli principle. The lifetime, which we identify with the relaxation time here, has the form
$$
\begin{align*}
\frac{1}{\tau(\epsilon)}=\frac{1}{\tau_{e}}\left(\frac{\epsilon}{\epsilon_{F}}-1\right)^{2}
\end{align*}
$$

where energy and momentum conservation is taken into account and $\tau_{e}$ is a constant of unit time. We may now calculate the mean relaxation time $\bar{\tau}$ as introduced in Section 6.2.2. To regularise the integrals we take here also impurity scattering into account by adding a constant to the scattering rate and obtain for the resistivity
$$
\begin{align*}
\rho(T)=\rho_{0}+\frac{\pi^{2}}{3} \frac{m}{n e^{2} \tau_{e}}\left(\frac{k_{B} T}{\epsilon_{F}}\right)^{2}.
\end{align*}
$$
**Calculation of mean scattering time** $\bar{\tau}$ : We use Matthiessen's rule to add the scattering rates of electron-electron and impurity scattering to the form
$$
\begin{align*}
\frac{1}{\tau(\epsilon)}=\frac{1}{\tau_{e}}\left(\frac{\epsilon}{\epsilon_{F}}-1\right)^{2}+\frac{1}{\tau_{0}}.
\end{align*}
$$
Restricting to the small temperature limit, we determine $\bar{\tau}$ by
$$
\begin{align*}
\bar{\tau} &= -\int d \epsilon \tau(\epsilon) \frac{\partial f_{0}}{\partial \epsilon}=\int_{-\infty}^{+\infty} d E \frac{\tau(E)}{4 k_{B} T \cosh ^{2}\left(E / (2 k_{B} T)\right)} \\
&\approx \int_{-\infty}^{+\infty} d E \frac{1}{4 k_{B} T \cosh ^{2}\left(E / (2 k_{B} T)\right)}\left\{\tau_{0}-\frac{\tau_{0}^{2}}{\tau_{e}} \frac{E^{2}}{\epsilon_{F}^{2}}\right\} \\
&= \tau_{0}-\frac{\pi^{2}}{3} \frac{\tau_{0}^{2}}{\tau_{e}}\left(\frac{k_{B} T}{\epsilon_{F}}\right)^{2}
\end{align*}
$$
where $E=\epsilon-\epsilon_{F}$. The resistivity is given by
$$
\begin{align*}
\rho(T)=\frac{m}{n e^{2} \bar{\tau}(T)} \approx \frac{m}{n e^{2} \tau_{0}}\left\{1+\frac{\pi^{2}}{3} \frac{\tau_{0}}{\tau_{e}}\left(\frac{k_{B} T}{\epsilon_{F}}\right)^{2}\right\}
\end{align*}
$$
and with $\rho_{0}=m / (n e^{2} \tau_{0})$ as the residual resistivity leads to $\rho(T)$.
Electron-electron scattering introduces a quadratic temperature dependence to resistivity. This is a key property of a Fermi liquid and is often considered an identifying criterion.

**Umklapp process**

We should here also address the problem of momentum relaxation through electron-electron scattering. Actually in every electron-electron scattering process the total momentum is conserved,
$$
\begin{align*}
\mathbf{k}_{1}+\mathbf{k}_{2}=\mathbf{k}_{1}^{\prime}+\mathbf{k}_{2}^{\prime}.
\end{align*}
$$
The situation is even more constraint through the fact that all momenta lie essentially on the Fermi surfaces, $\left|\mathbf{k}_{i}\right| \approx k_{F}$. In this way electron-electron scattering could not contribute to momentum relaxation and would not enter the discussion of resistivity, unlike we have done above.
The short-coming of our argument is that the momentum conservation as given in this form is only valid in a completely translational system. It is necessary consider the effect of the ion lattice, such that we actually deal here with lattice momenta $\mathbf{k}$. Under this condition the "momentum conservation" involves also reciprocal lattice vectors,
$$
\begin{align*}
\mathbf{k}_{1}+\mathbf{k}_{2}+\mathbf{G}=\mathbf{k}_{1}^{\prime}+\mathbf{k}_{2}^{\prime}
\end{align*}
$$
which connects different Brillouin zones, as shown here:

![Attachments/Script 63.webp|700](/img/user/Attachments/Script%2063.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=143&rect=173,541,419,749| ]]

In this way momentum can be transferred to the lattice. Still the conditions are constraint by the fact that all electron momenta lie on the Fermi surface. Such processes are termed Umklapp scattering and play an important role in electron-phonon scattering as well.

---
## 6.6 Matthiessen's Rule and the Ioffe-Regel Limit
[[Courses/2. Semester/Solid State Theory/Script.pdf#page=143&selection=55,0,57,43| ]]

Matthiessen's rule states, that the scattering rates of different scattering processes can simply be added, leading to
$$
\begin{align*}
W\left(\mathbf{k}, \mathbf{k}^{\prime}\right)=W_{1}\left(\mathbf{k}, \mathbf{k}^{\prime}\right)+W_{2}\left(\mathbf{k}, \mathbf{k}^{\prime}\right)
\end{align*}
$$

or, expressed in the relaxation time approximation,
$$
\begin{align*}
\frac{1}{\tau}=\frac{1}{\tau_{1}}+\frac{1}{\tau_{2}}
\end{align*}
$$
and
$$
\begin{align*}
\rho=\frac{m}{n e^{2} \tau}=\frac{m}{n e^{2}}\left(\frac{1}{\tau_{1}}+\frac{1}{\tau_{2}}\right)=\rho_{1}+\rho_{2}.
\end{align*}
$$
This rule is not a theorem and corresponds effectively to a serial coupling of resistors in a classical circuit. It is applicable, if the different scattering processes are independent. Actually, the assumption that the impurity scattering rate depends linearly on the impurity density $n_{\mathrm{imp}}$ is already an application of Matthiessen's rule. Mutual influences of impurities, for example, through interference effects due to the coherent scattering of an electron at different impurities, would invalidate this simplification. An example where Matthiessen's rule is violated is a one-dimensional system, where a single scatterer $i$ induces a finite resistance $R_{i}$. Two serial scatterers then lead to a total resistance
$$
\begin{align*}
R=R_{1}+R_{2}+\frac{2 e^{2}}{h} R_{1} R_{2} \geq R_{1}+R_{2}.
\end{align*}
$$
The reason is, that in one-dimensional systems, the interference of backscattered waves is unavoidable and no impurity can be treated as isolated. Furthermore, every particle traversing the whole system has to pass all scatterers. The more general Matthiessen's rule,
$$
\begin{align*}
\rho \geq \rho_{1}+\rho_{2}
\end{align*}
$$
is still valid. Another source of deviation from Matthiessen's rule arises, if the relaxation time depends on $\mathbf{k}$, since then the averaging is not the same for all scattering processes. The electron-phonon coupling can be modified by the scattering on impurities, most importantly in the presence of anisotropic Fermi surfaces. For the analysis of resistance data of simple metals, we often assume the validity of Matthiessen's rule. A typical example is the resistance minimum explained by Kondo, where
$$
\begin{align*}
\rho(T) &= \rho_{0}+\rho_{e-p}(T)+\rho_{K}(T)+\rho_{e-e}(T) \\
&= \rho_{0}+\alpha T^{5}+\beta\left(1+2 J N\left(\epsilon_{F}\right) \ln \left(D / k_{B} T\right)\right)+\gamma T^{2},
\end{align*}
$$
where $\alpha, \beta$, and $\gamma$ are numerical constants. Upon decreasing temperature, the Kondo term is increasing, whereas the electron-phonon and electron-electron contributions decrease. Consequently, there is a minimum.

We now turn to the discussion of resistivity in the high-temperature limit. Believing the previous considerations entirely, the electrical resistivity would grow indefinitely with temperature. In most cases, however, the resistivity will saturate at a finite limiting value. We can understand this from simple considerations writing the mean free path $\ell=v_{F} \tau\left(\epsilon_{F}\right)$ as the mean distance an electron travels freely between two collisions. The lattice constant $a$ is a natural lower boundary to $\ell$ in the crystal lattice. Furthermore, we assumed so far that scattering occurs between two states with sharp momenta $\mathbf{k}$ and $\mathbf{k}^{\prime}$. If the de Broglie wavelength becomes comparable to the mean free path, the framework becomes unfounded and $k_{F}^{-1}$ would become a boundary for $\ell$. In most systems $a$ and $k_{F}^{-1}$ are comparable lengths. Empirically, the resistivity is described via the formula
$$
\begin{align*}
\frac{1}{\rho(T)}=\frac{1}{\rho_{BT}(T)}+\frac{1}{\rho_{\max}}
\end{align*}
$$

corresponding to the parallel addition of two resistivities; on one hand, $\rho_{BT}(T)$, which we have investigated using the Boltzmann transport theory, and on the other hand the limiting value $\rho_{\max}$. This is in clear disagreement to Matthiessen's rule, which is to be expected, since for $k_{F} \ell \sim 1$, complex interference effects will arise. The saturated resistivity $\rho_{\max}$ can be estimated from the Jellium model,
$$
\begin{align*}
\rho_{\max } &= \frac{m}{e^{2} n \tau\left(\epsilon_{F}\right)}=\frac{3 \pi^{2} m}{e^{2} k_{F}^{3} \tau\left(\epsilon_{F}\right)}=\frac{h}{e^{2}} \frac{3 \pi}{2 k_{F}^{2} \ell} \\
&\sim \frac{h}{e^{2}} \frac{3 \pi}{2 k_{F}}
\end{align*}
$$
where we used $\ell^{-1} \sim k_{F}$. For a typical value $k_{F} \sim 10^{8}\,\mathrm{cm}^{-1}$ of the Fermi wave vector, we find $\rho_{\max} \sim 1\,\mathrm{m\Omega\,cm}$, which is called the Ioffe-Regel limit. Establishing a quantitative estimate of $\rho_{\max}$ for a given material is often difficult. There are even materials whose resistivity surpasses the Ioffe-Regel limit.

---
## 6.7 General Transport Coefficients
[[Courses/2. Semester/Solid State Theory/Script.pdf#page=144&selection=336,0,338,28| ]]

Simultaneously with charge, electrons will also transport energy, that is, heat and entropy. This is why charge and heat transport are naturally interconnected. In the following, we generalise the transport theory set up above to include this interplay.

### 6.7.1 Generalised Boltzmann Equation

We consider a metal with weakly space-dependent temperature $T(\mathbf{r})$ and chemical potential $\mu(\mathbf{r})$. The distribution function then reads
$$
\begin{align*}
\delta f(\mathbf{k} ; \mathbf{r})=f(\mathbf{k} ; \mathbf{r})-f_{0}(\mathbf{k}, T(\mathbf{r}), \mu(\mathbf{r})),
\end{align*}
$$
where
$$
\begin{align*}
f_{0}(\mathbf{k}, T(\mathbf{r}), \mu(\mathbf{r}))=\frac{1}{e^{\left(\epsilon_{\mathbf{k}}-\mu(\mathbf{r})\right) / k_{B} T(\mathbf{r})}+1}.
\end{align*}
$$
In addition, we require the charge density to remain constant in space, that is,
$$
\begin{align*}
\int \frac{d^{3}\mathbf{k}}{(2 \pi)^{3}} f(\mathbf{k} ; \mathbf{r})=n_{0}
\end{align*}
$$
for all $\mathbf{r}$. In this section, we introduce the electro-chemical potential for electrons $\eta(\mathbf{r})=-e \phi(\mathbf{r})+\mu(\mathbf{r})$ generating the general force field $\boldsymbol{\mathcal{E}}=-\mathbf{\nabla} \eta=-\mathbf{\nabla}(-e \phi+\mu)$, where $\phi(\mathbf{r})$ denotes the electrostatic potential which produces the electric field $\mathbf{E}=-\mathbf{\nabla} \phi$ such that $\boldsymbol{\mathcal{E}}=-e \mathbf{E}-\mathbf{\nabla} \mu$. With this, the Boltzmann equation for the stationary situation reads
$$
\begin{align*}
\left(\frac{\partial f}{\partial t}\right)_{\mathrm{coll}} &= \mathbf{v}_{\mathbf{k}} \cdot \mathbf{\nabla}_{\mathbf{r}} f+\dot{\mathbf{k}} \cdot \mathbf{\nabla}_{\mathbf{k}} f \\
&= -\frac{\partial f}{\partial \epsilon_{\mathbf{k}}} \mathbf{v}_{\mathbf{k}} \cdot\left(\frac{\epsilon_{\mathbf{k}}-\mu}{T} \mathbf{\nabla}_{\mathbf{r}} T-\boldsymbol{\mathcal{E}}\right).
\end{align*}
$$

![Attachments/Script 64.webp|700](/img/user/Attachments/Script%2064.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=145&rect=108,208,492,407| ]]

In the relaxation time approximation for the collision integral, we obtain the solution
$$
\begin{align*}
\delta f(\mathbf{k})=-\frac{\partial f_{0}}{\partial \epsilon_{\mathbf{k}}} \tau\left(\epsilon_{\mathbf{k}}\right) \mathbf{v}_{\mathbf{k}} \cdot\left(\boldsymbol{\mathcal { E }}-\frac{\epsilon_{\mathbf{k}}-\mu}{T} \mathbf{\nabla}_{\mathbf{r}} T\right),
\end{align*}
$$
which allows us to calculate the charge and heat currents,
$$
\begin{align*}
\mathbf{J}_{e}&=-2 e \int \frac{d^{3}\mathbf{k}}{(2 \pi)^{3}} \mathbf{v}_{\mathbf{k}} \delta f(\mathbf{k}) \\
\mathbf{J}_{q}&=2 \int \frac{d^{3}\mathbf{k}}{(2 \pi)^{3}}\left(\epsilon_{\mathbf{k}}-\mu\right) \mathbf{v}_{\mathbf{k}} \delta f(\mathbf{k})
\end{align*}
$$
respectively. One could be tempted to use
$$
\begin{align*}
\mathbf{J}_{q}=2 \int \frac{d^{3}\mathbf{k}}{(2 \pi)^{3}} \epsilon_{\mathbf{k}} \mathbf{v}_{\mathbf{k}} \delta f(\mathbf{k})
\end{align*}
$$

for the heat current. However, $\epsilon_{\mathbf{k}}$ relates to the internal energy. Considering the specific heat, we obtain for the heat
$$
\begin{align*}
\delta Q=C(T) d T=\frac{2}{\Omega} \sum_{\mathbf{k}} \frac{\partial f_{0}\left(\epsilon_{\mathbf{k}}\right)}{\partial T}\left(\epsilon_{\mathbf{k}}-\mu\right) d T
\end{align*}
$$
which shows that heat involves $\epsilon_{\mathbf{k}}-\mu$ including the chemical potential. Inserting the solution for $\delta f(\mathbf{k})$ into the two definitions above yields
$$
\begin{align*}
\mathbf{J}_{e} &= -e \hat{K}^{(0)} \boldsymbol{\mathcal{E}}-\frac{e}{T} \hat{K}^{(1)}(-\mathbf{\nabla} T) \\
\mathbf{J}_{q} &= +\hat{K}^{(1)} \boldsymbol{\mathcal{E}}+\frac{1}{T} \hat{K}^{(2)}(-\mathbf{\nabla} T)
\end{align*}
$$
where $\mathbf{\nabla}$ should be understood as $\mathbf{\nabla}_{\mathbf{r}}$ and the tensors $\hat{K}^{(n)}\left(n \in \mathbb{N}_{0}\right)$ are defined as
$$
\begin{align*}
K_{\alpha \beta}^{(n)}=-\frac{1}{4 \pi^{3}} \int d \epsilon \frac{\partial f_{0}}{\partial \epsilon} \tau(\epsilon)(\epsilon-\mu)^{n} \int d \Omega_{\mathbf{k}} \frac{v_{F \alpha\mathbf{k}} v_{F \beta\mathbf{k}}}{\hbar\left|\mathbf{v}_{F}\right|} |\mathbf{k}_{F}|^{2}.
\end{align*}
$$
For an isotropic system these transport coefficients are no longer tensors but represented by scalars,
$$
\begin{align*}
K^{(n)}=-\frac{n_{0}}{m} \int d \epsilon \frac{\partial f_{0}}{\partial \epsilon} \tau(\epsilon)(\epsilon-\mu)^{n}.
\end{align*}
$$
In the case $T \ll T_{F}$ we can calculate the coefficients,
$$
\begin{align*}
K^{(0)}\left(\epsilon_{F}\right) &= \frac{n_{0}\left(\epsilon_{F}\right) \tau\left(\epsilon_{F}\right)}{m} \\
K^{(1)}\left(\epsilon_{F}\right) &= \left.\frac{\pi^{2}}{3}\left(k_{B} T\right)^{2} \frac{\partial}{\partial \epsilon} K^{(0)}(\epsilon)\right|_{\epsilon=\epsilon_{F}} \\
K^{(2)}\left(\epsilon_{F}\right) &= \frac{\pi^{2}}{3}\left(k_{B} T\right)^{2} K^{(0)}\left(\epsilon_{F}\right).
\end{align*}
$$
Note, we used that if a function $g(\epsilon)$ depends only weakly on $\epsilon$ in the vicinity of $\epsilon_{F}$, we can use the Sommerfeld expansion to derive a general approximation for following integrals
$$
\begin{align*}
-\int d \epsilon g(\epsilon) \frac{\partial f_{0}}{\partial \epsilon}=g\left(\epsilon_{F}\right)+\left.\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} \frac{\partial^{2} g(\epsilon)}{\partial \epsilon^{2}}\right|_{\epsilon=\epsilon_{F}}+\ldots
\end{align*}
$$
and
$$
\begin{align*}
-\int d \epsilon g(\epsilon)\left(\epsilon-\epsilon_{F}\right) \frac{\partial f_{0}}{\partial \epsilon}=\left.\frac{\pi^{2}}{3}\left(k_{B} T\right)^{2} \frac{\partial g(\epsilon)}{\partial \epsilon}\right|_{\epsilon=\epsilon_{F}}+\ldots,
\end{align*}
$$
in the limit $T \rightarrow 0$. We used that $\mu \rightarrow \epsilon_{F}$ in that asymptotic case.

We measure the electrical resistivity assuming $\mathbf{\nabla} T=\mathbf{\nabla} \mu=0$ for all $\mathbf{r}$. With this, we find the expression
$$
\begin{align*}
\sigma\left(\epsilon_{F}\right)=e^{2} K^{(0)}\left(\epsilon_{F}\right)=\frac{e^{2} n_{0}\left(\epsilon_{F}\right) \tau\left(\epsilon_{F}\right)}{m}.
\end{align*}
$$
In order to determine the thermal conductivity $\hat{\kappa}$ relating the heat current $\mathbf{J}_{q}$ to $\mathbf{\nabla} T$ when no external electric field $\mathbf{E}$ is applied, we set $\mathbf{J}_{e}=0$ as for an open circuit. Then, the expressions for charge and heat current reveal the appearance of an general force field
$$
\begin{align*}
\boldsymbol{\mathcal{E}}=\frac{K^{(1)}}{T K^{(0)}} \mathbf{\nabla} T.
\end{align*}
$$
Thus, the heat current is given by
$$
\begin{align*}
\mathbf{J}_{q}=-\frac{1}{T}\left(K^{(2)}-\frac{(K^{(1)})^{2}}{K^{(0)}}\right) \mathbf{\nabla} T=-\kappa \mathbf{\nabla} T.
\end{align*}
$$
In simple metals, the second term in the expression for thermal conductivity is often negligible as compared to the first one and we obtain in this case
$$
\begin{align*}
\kappa=\frac{1}{T} K^{(2)}=\frac{\pi^{2} k_{B}^{2}}{3} T K^{(0)}=\frac{\pi^{2}}{3} \frac{k_{B}^{2}}{e^{2}} T \sigma,
\end{align*}
$$
which is the well-known Wiedemann-Franz law. Note, that we can write the thermal conductivity in the form
$$
\begin{align*}
\kappa=\frac{C}{e^{2} N\left(\epsilon_{F}\right)} \sigma
\end{align*}
$$
where $C=\pi^{2} N\left(\epsilon_{F}\right) k_{B}^{2} T / 3$ denotes the electronic specific heat (per unit volume if $N(\epsilon_F)$ is per unit volume).

### 6.7.2 Thermoelectric Effect

The relation for the induced electrochemical field gradient shows, that a temperature gradient induces an electric field. For a simple, isotropic system, this relation reduces to
$$
\begin{align*}
\boldsymbol{\mathcal{E}}=-e Q \mathbf{\nabla} T=\frac{K^{(1)}}{T K^{(0)}} \mathbf{\nabla} T
\end{align*}
$$
with the Seebeck coefficient
$$
\begin{align*}
Q=-\left.\frac{\pi^{2}}{3} \frac{k_{B}^{2} T}{e} \frac{\sigma^{\prime}(\epsilon)}{\sigma(\epsilon)}\right|_{\epsilon=\epsilon_{F}}.
\end{align*}
$$
This is the so-called Mott formula which looses its validity at high-temperatures or very anisotropic scattering. Using $\sigma(\epsilon)=n(\epsilon) e^{2} \tau(\epsilon) / m$, we investigate $\sigma^{\prime}(\epsilon)$,
$$
\begin{align*}
\sigma^{\prime}(\epsilon)=\frac{\tau^{\prime}(\epsilon)}{\tau(\epsilon)} \sigma(\epsilon)+\frac{n^{\prime}(\epsilon)}{n(\epsilon)} \sigma(\epsilon)=\frac{\tau^{\prime}(\epsilon)}{\tau(\epsilon)} \sigma(\epsilon)+\frac{N(\epsilon)}{n(\epsilon)} \sigma(\epsilon)
\end{align*}
$$
and obtain an additional contribution to $Q$, if the relaxation time depends strongly on energy. This is most prominent in collision processes in which resonant scattering is involved (for example, the Kondo effect). In the opposite situation, namely, when the first term is irrelevant, the Seebeck coefficient
$$
\begin{align*}
Q=-\frac{\pi^{2}}{3} \frac{k_{B}^{2} T}{e} \frac{N\left(\epsilon_{F}\right)}{n\left(\epsilon_{F}\right)}=-\frac{S}{n e}
\end{align*}
$$
is simply reduced to the entropy per electron (per unit charge). For simple metals such as the alkali metals we may estimate the low-temperature values using this expression
$$
\begin{align*}
Q=-\frac{\pi^{2}}{2} \frac{k_{B}^{2} T}{e \epsilon_{F}}=-\frac{\pi^{2}}{2} \frac{k_{B} T}{e T_{F}}
\end{align*}
$$
which for $T_{F}(\mathrm{Na, K}) \approx 3 \times 10^{4}\,\mathrm{K}$ leads to $Q \approx -1.4 \times (T/\mathrm{K})\,\mathrm{nV\,K^{-1}}$. 
A comparison with experiments shows that the order of magnitude works reasonably well for Na and K. However, for Li and Cs even the sign is different. Differences occur through phonon effects, such as the so-called phonon drag which we have neglected here:

![Attachments/Script 65.webp|700](/img/user/Attachments/Script%2065.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=148&rect=167,196,427,536| ]]

In the following, we consider two different types of thermoelectric effects.

**Seebeck effect**

The first is the Seebeck effect, where a thermoelectric voltage appears in a bi-metallic system (compare with the conceptual diagram). With the relation $\boldsymbol{\mathcal{E}} = -eQ\mathbf{\nabla}T$, a temperature gradient across metal $B$ induces a voltage
$$
\begin{align*}
V &= -\frac{1}{e} \int d\mathbf{l} \cdot \boldsymbol{\mathcal{E}} \\
&= Q_{A} \int_{T_{0}}^{T_{1}} d\mathbf{l} \cdot \mathbf{\nabla}T+Q_{B} \int_{T_{1}}^{T_{2}} d\mathbf{l} \cdot \mathbf{\nabla}T+Q_{A} \int_{T_{2}}^{T_{0}} d\mathbf{l} \cdot \mathbf{\nabla}T \\
&= \left(Q_{B}-Q_{A}\right)\left(T_{2}-T_{1}\right).
\end{align*}
$$
The resulting voltage $V$ appears between the two ends of a second metal $A$, whose contacts are kept at the same temperature $T_{0}$. The integral of $\mathbf{\nabla}\mu$ along the whole path vanishes since the temperature at both ends of metal $A$ is the same $T_{0}$. Here, a bi-metallic configuration was chosen to reveal voltage differences across the contacts which are absent in a single metal.

**Peltier effect**

The second phenomenon, termed Peltier effect, emerges in a system kept at the same temperature everywhere. Here, an electric current $\mathbf{J}_{e}$ between the two contacts of the metal $A$ induces a heat current in the bi-metallic system, such that heat is transferred from one reservoir (top) to another (bottom):

![Attachments/Script 66.webp|700](/img/user/Attachments/Script%2066.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=149&rect=131,587,465,750| ]]

This follows from the general transport equations by assuming $\mathbf{\nabla}T=0$, where
$$
\begin{align*}
\mathbf{J}_{e} &= e^{2} K^{(0)} \mathbf{E} \\
\mathbf{J}_{q} &= -e K^{(1)} \mathbf{E}
\end{align*}
$$
implies (for isotropic systems)
$$
\begin{align*}
J_{q}=-\frac{K^{(1)}}{e K^{(0)}} J_{e}=\Pi J_{e}=Q T J_{e}.
\end{align*}
$$
The coupling $\Pi=T Q$ between $J_{q}$ and $J_{e}$ is called Peltier coefficient. According to the diagram, a contribution to the heat current is to be expected from both metals $A$ and $B$,
$$
\begin{align*}
J_{q}=\left(\Pi_{A}-\Pi_{B}\right) J_{e}=T_{0}\left(Q_{A}-Q_{B}\right) J_{e}.
\end{align*}
$$
This means, that the heat transfer between reservoirs can be controlled by electrical current. It has to be emphasized here that the bi-metal design of the devices described serves the observation of the two effects which both represent bulk effects of the two metals A and B. By no means should it be mistaken as an effect originating from the inter-metal contacts.

---
## 6.8 Anderson Localisation in One-Dimensional Systems
[[Courses/2. Semester/Solid State Theory/Script.pdf#page=150&selection=66,0,68,48| ]]

Transport in one spatial dimension is very special, since there are only two different directions to go: forward and backward. We introduce the transfer matrix formalism and use it to express the conductivity through the Landauer formula. We will then investigate the effects of multiple scattering at different obstacles, leading to the so-called Anderson localisation, which turns a metal into an insulator.

### 6.8.1 Landauer Formula for a Single Impurity

The transmission and reflection at an arbitrary potential with finite support in one dimension can be described by a transfer matrix $\hat{T}$.

![Attachments/Script 67.webp|700](/img/user/Attachments/Script%2067.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=150&rect=152,355,447,451| ]]

In this situation, a suitable choice for a basis of the electron states is the set of plane waves $\{e^{\pm ikx}\}$ (see the conceptual diagram) moving in the positive (negative) $x$-direction with wave vector $+k$ ($-k$). Only plane waves with the same $|k|$ on the left ($I_{1}$) and right ($I_{2}$) side of the scatterer are interconnected. Therefore, we write
$$
\begin{align*}
\psi_{1}(x)&=a_{1+} e^{ikx}+a_{1-} e^{-ikx} \\
\psi_{2}(x)&=a_{2+} e^{ikx}+a_{2-} e^{-ikx}
\end{align*}
$$
where $\psi_{1}\left(\psi_{2}\right)$ is defined in the area $I_{1}\left(I_{2}\right)$. The vectors $\mathbf{a}_{i}=\begin{pmatrix} a_{i+} \\ a_{i-} \end{pmatrix}$ for $i \in\{1,2\}$ are connected via the linear relation,
$$
\begin{align*}
\mathbf{a}_{2}=\hat{T} \mathbf{a}_{1}=\left(\begin{array}{ll}
T_{11} & T_{12} \\
T_{21} & T_{22}
\end{array}\right) \mathbf{a}_{1},
\end{align*}
$$
with the $2 \times 2$ transfer matrix $\hat{T}$. The conservation of current ($J_{1}=J_{2}$) requires that $\hat{T}$ is unimodular, that is, $\mathrm{det}\,\hat{T}=1$. Here,
$$
\begin{align*}
J=\frac{i \hbar}{2 m}\left(\frac{d \psi^{*}(x)}{d x} \psi(x)-\psi^{*}(x) \frac{d \psi(x)}{d x}\right)
\end{align*}
$$
such that, for a plane wave $\psi(x)=(1 / \sqrt{L}) e^{ikx}$ in a system of length $L$, the current results in
$$
\begin{align*}
J=v/L
\end{align*}
$$
with the velocity $v$ defined as $v=\hbar k / m$. Time reversal symmetry implies that, simultaneously with $\psi(x)$, the complex conjugate $\psi^{*}(x)$ is a solution of the stationary Schrödinger equation. From this, we find $T_{11}=T_{22}^{*}$ and $T_{12}=T_{21}^{*}$, such that
$$
\begin{align*}
\hat{T}=\left(\begin{array}{ll}
T_{11} & T_{12} \\
T_{12}^{*} & T_{11}^{*}
\end{array}\right).
\end{align*}
$$
It is easily shown that a shift of the scattering potential by a distance $x_{0}$ changes the coefficient $T_{12}$ of $\hat{T}$ by a phase factor $e^{i 2 k x_{0}}$. Meanwhile, the coefficient $T_{11}$ remains unchanged.
With the Ansatz for a right moving incoming wave ($\sim e^{ikx}$), producing a reflected ($\sim r e^{-ikx}$) and transmitted ($\sim t e^{ikx}$) part, the wave functions on both sides of the scatterer read
$$
\begin{align*}
\psi_{1}(x)&=\frac{1}{\sqrt{L}}\left(e^{ikx}+r e^{-ikx}\right) \\
\psi_{2}(x)&=\frac{1}{\sqrt{L}}\left(t e^{ikx}\right).
\end{align*}
$$
The coefficients of $\hat{T}$ can be determined explicitly in this situation, resulting in
$$
\begin{align*}
\hat{T}=\left(\begin{array}{cc}
\frac{1}{t^{*}} & -\frac{r^{*}}{t^{*}} \\
-\frac{r}{t} & \frac{1}{t}
\end{array}\right).
\end{align*}
$$
Here, the conservation of currents imposes the condition $1=|r|^{2}+|t|^{2}$. Furthermore, we can find a relation between the parameters $(r, t)$ of the potential barrier and the electric resistivity. For this, we notice that the incoming current density $J_{0}$ is split into a reflected $J_{r}$ and transmitted $J_{t}$ part, all given by
$$
\begin{align*}
J_{0} &= -\frac{1}{L} v e=-n_{0} v e, \\
J_{r} &= -\frac{|r|^{2}}{L} v e=-n_{r} v e, \\
J_{t} &= -\frac{|t|^{2}}{L} v e=-n_{t} v e,
\end{align*}
$$
with the velocity $v=\hbar k / m$, the electron charge $-e$, and the particle densities $n_{0}, n_{r}$, and $n_{t}$ corresponding to the incoming, reflected and transmitted particles respectively. The electron density on the two sides of the barrier is given by
$$
\begin{align*}
n_{1}&=n_{0}+n_{r}=\frac{1+|r|^{2}}{L}, \\
n_{2}&=n_{t}=\frac{|t|^{2}}{L}.
\end{align*}
$$
From this consideration, a density difference $\delta n=n_{1}-n_{2}=\left(1+|r|^{2}-|t|^{2}\right) / L=2|r|^{2} / L$ results between the left and the right side of the scatterer. The resistance $R$ of the barrier is defined by the ratio between the voltage drop over the resistor $\delta V$ and the transmitted current $J_{t}$, that is
$$
\begin{align*}
R=\frac{\delta V}{J_{t}}.
\end{align*}
$$
Consequently, a relation between $\delta V$ and the electron density $\delta n$ remains to be established to determine $R$. The connection is easily found via the existing energy difference $\delta E=-e \delta V$ between the two sides of the resistor, such that the expression
$$
\begin{align*}
\delta n = \frac{d n}{d E} \delta E = \frac{d n}{d E}(-e \delta V)
\end{align*}
$$
produces the wished relation. Here, $\frac{d n}{d E} d E$ is the number of states per unit length in the energy interval $[E, E+d E]$ and we find (for spin-degenerate electrons)
$$
\begin{align*}
\frac{d n}{d E}&=\frac{1}{L} \sum_{k, s} \delta\left(E-\frac{\hbar^{2} k^{2}}{2 m}\right)\\
&=2 \int \frac{d k}{2 \pi} \delta\left(E-\frac{\hbar^{2} k^{2}}{2 m}\right)=\frac{2}{\pi \hbar v(E)}.
\end{align*}
$$
The resistance $R$ is finally obtained from the preceding relations, leading to
$$
\begin{align*}
R=\frac{h}{2e^{2}} \frac{|r|^{2}}{|t|^{2}}.
\end{align*}
$$
The Klitzing constant $R_{K}=h / e^{2} \approx 25.8\,\mathrm{k\Omega}$ is a resistance quantum named after the discoverer of the Quantum Hall Effect. This result is the famous Landauer formula, which is valid for all one-dimensional systems and whose application often extends to the description of mesoscopic systems and quantum wires. (Note: the factor of 2 in $h/(2e^2)$ arises from including spin degeneracy).

### 6.8.2 Scattering at Two Impurities

We consider now two spatially separated scattering potentials, represented by $\hat{T}_{1}$ and $\hat{T}_{2}$ each determined by $r_{1}, t_{1}$ and $r_{2}, t_{2}$ respectively:

![Attachments/Script 68.webp|700](/img/user/Attachments/Script%2068.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=152&rect=127,331,474,379| ]]

The particles are multiply scattered at these potentials in a unknown manner, but the global result can again be expressed via a simple transfer matrix $\hat{T}=\hat{T}_{1} \hat{T}_{2}$, given by the matrix multiplication of each transfer matrix. All previously found properties remain valid for the new matrix $\hat{T}$, given by
$$
\begin{align*}
\hat{T}=\left(\begin{array}{cc}
\frac{1}{t_{1}^{*} t_{2}^{*}}+\frac{r_{1}^{*} r_{2}}{t_{1}^{*} t_{2}} & -\frac{r_{2}^{*}}{t_{1}^{*} t_{2}^{*}}-\frac{r_{1}^{*}}{t_{1}^{*} t_{2}} \\
-\frac{r_{1}}{t_{1} t_{2}^{*}}-\frac{r_{2}}{t_{1} t_{2}} & \frac{1}{t_{1} t_{2}}+\frac{r_{1} r_{2}^{*}}{t_{1} t_{2}^{*}}
\end{array}\right)=\left(\begin{array}{cc}
\frac{1}{t^{*}} & -\frac{r^{*}}{t^{*}} \\
-\frac{r}{t} & \frac{1}{t}
\end{array}\right).
\end{align*}
$$
For the ratio between reflection and transmission probability we find
$$
\begin{align*}
\frac{|r|^{2}}{|t|^{2}} &= \frac{1}{|t|^{2}}-1 \\
&= \frac{1}{\left|t_{1}\right|^{2}\left|t_{2}\right|^{2}}\left|1+\frac{r_{1} r_{2}^{*} t_{2}}{t_{2}^{*}}\right|^{2}-1 \\
&= \frac{1}{\left|t_{1}\right|^{2}\left|t_{2}\right|^{2}}\left(1+\left|r_{1}\right|^{2}\left|r_{2}\right|^{2}+\frac{r_{1} r_{2}^{*} t_{2}}{t_{2}^{*}}+\frac{r_{1}^{*} r_{2} t_{2}^{*}}{t_{2}}\right)-1.
\end{align*}
$$
Assuming a (random) distance $d=x_{2}-x_{1}$ between the two potential barriers, we may average over this distance. Note, that for $x_{1}=0$, we find $r_{2} \sim e^{-2ikd}$, while $r_{1}, t_{1}$, and $t_{2}$ are independent on $d$. Consequently, all terms containing an odd power of $r_{2}$ or $r_{2}^{*}$ vanish after averaging over $d$. The remainders of this expression can be collected to
$$
\begin{align*}
\left.\frac{|r|^{2}}{|t|^{2}}\right|_{\mathrm{avg}} &= \frac{1}{\left|t_{1}\right|^{2}\left|t_{2}\right|^{2}}\left(1+\left|r_{1}\right|^{2}\left|r_{2}\right|^{2}\right)-1 \\
&= \frac{\left|r_{1}\right|^{2}}{\left|t_{1}\right|^{2}}+\frac{\left|r_{2}\right|^{2}}{\left|t_{2}\right|^{2}}+2 \frac{\left|r_{1}\right|^{2}}{\left|t_{1}\right|^{2}} \frac{\left|r_{2}\right|^{2}}{\left|t_{2}\right|^{2}}.
\end{align*}
$$
Even though two scattering potentials are added in series, an additional non-linear combination emerges beside the sum of the two ratios $\left|r_{i}\right|^{2} /\left|t_{i}\right|^{2}$. It results from the Landauer formula applied to two scatterers, that resistances do not add linearly to the total resistance. Adding $R_{1}$ and $R_{2}$ serially, the total resistance is not given by $R=R_{1}+R_{2}$, but by
$$
\begin{align*}
R=R_{1}+R_{2}+2 \frac{R_{1} R_{2}}{R_{K}'} > R_{1}+R_{2},
\end{align*}
$$
with $R_{K}'=h/(2e^2)$. This result is a consequence of the unavoidable multiple scattering in one dimension. This effect is particularly prominent if $R_{i} \gg h/(2e^{2})$ for $i \in\{1,2\}$, where resistances are then multiplied instead of summed in the interaction term.

### 6.8.3 Anderson Localisation

Let us consider a system with many arbitrarily distributed scatterers, and let $\rho$ be a mean resistance per unit length. $R(\ell)$ shall be the resistance between points 0 and $\ell$. The change in resistance by advancing an infinitesimal $\delta \ell$ is found from the result for two scatterers, resulting in
$$
\begin{align*}
d R=\rho d \ell+2 \frac{R(\ell)}{R_{K}'} \rho d \ell
\end{align*}
$$
which yields
$$
\begin{align*}
\int_{0}^{\ell} \rho d \ell=\int_{0}^{R(\ell)} \frac{d R}{1+2 R / R_{K}'}
\end{align*}
$$
and thus,
$$
\begin{align*}
\rho \ell=\frac{R_{K}'}{2} \ln \left(1+2 R(\ell) / R_{K}'\right).
\end{align*}
$$
Finally, solving this equation for $R(\ell)$, we find
$$
\begin{align*}
R(\ell)=\frac{R_{K}'}{2}\left(e^{2 \rho \ell / R_{K}'}-1\right).
\end{align*}
$$
Obviously, $R$ grows almost exponentially fast for increasing $\ell$. This means, that for large $\ell$, the system is an insulator for arbitrarily small but finite $\rho>0$. The reason for this is that, in one dimension, all states are bound states in the presence of disorder. This phenomenon is called Anderson localisation. Even though all states are localised, the energy spectrum is continuous, as infinitely many bound states with different energy exist. The mean localisation length $\xi$ of individual states, related to the mean extension of a wave function, is found from this equation to be $\xi=R_{K}'/(2\rho)$. The transmission amplitude is reduced on this length scale, since $|t|^2 \approx 2 e^{-\ell / \xi}$ for $\ell \gg \xi$. In one dimension, there is no linearly increasing electric resistance. For non-interacting particles, only two extreme situations are possible. Either, the potential is perfectly periodic and the states correspond to Bloch waves. Then, coherent constructive interference produces extended states that propagate freely throughout the system, resulting in a perfect conductor without resistance. On the other hand, if the scattering potential is disordered, all states are strictly localised. In this case, there is no propagation and the system is an insulator. In three-dimensional systems, the effects of multiple scattering are far less drastic and the Ohmic law is applicable. Localisation effects in two dimensions are a very subtle topic and part of today's research in solid state physics.
We have also seen in the context of chiral edge states in the Quantum Hall state, that perfect conductance in a one-dimensional channel is obtained if there is no backscattering due to the lack of states moving in the opposite direction. In chiral states, particle move only in one direction.

---