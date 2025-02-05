---
{"dg-publish":true,"permalink":"/notes/solid-state-theory/5-landau-s-theory-of-fermi-liquids/","hide":"true","updated":"2025-02-02T13:45:59.000+01:00"}
---

Jump back to [[Notes/Solid-State Theory/Solid-State Theory#Table of Contents\|chapter selection]].

---
**Table of Contents**

- [[Notes/Solid-State Theory/5 Landau's Theory of Fermi Liquids#5.1 Lifetime of Quasi-Particles\|5.1 Lifetime of Quasi-Particles]]
- [[Notes/Solid-State Theory/5 Landau's Theory of Fermi Liquids#5.2 Phenomenological Theory of Fermi Liquids\|5.2 Phenomenological Theory of Fermi Liquids]]
- [[Notes/Solid-State Theory/5 Landau's Theory of Fermi Liquids#5.3 Microscopic Considerations\|5.3 Microscopic Considerations]]

---
# 5 Landau's Theory of Fermi Liquids
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=109&selection=2,0,2,32|•]]

In the previous chapters, we considered the electrons of the system as more or less independent particles. The effect of their mutual interactions only entered via the renormalisation of potentials and in the emergence of collective excitations. The underlying assumptions of our earlier discussions were that electrons in the presence of interactions can still be described as Fermionic particles with a well-defined energy-momentum relation, and that their groundstate is a filled Fermi sea with a sharp Fermi surface. Since there is no guarantee that this hypothesis holds in general (and in fact they do not), we have to show that in metals the description of electrons as quasi-particles is justified. This quasi-particle picture will lead us to Landau's phenomenological theory of Fermi liquids. Indeed it is very surprising that a strongly interacting many-electron system does not end up in a extremely complex quantum state. What saves us are two important points:
1. In a metal the long-ranged Coulomb interaction is screened and becomes short-ranged;
2. The Pauli principle reduces the phase space of low-energy excitations of electrons dramatically, at least in a three-dimensional system (quantum protection).

---
## 5.1 Lifetime of Quasi-Particles
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=109&selection=22,0,24,26|•]]

We first consider the lifetime of a state consisting of a filled Fermi sea to which one electron is added. Let $\boldsymbol{k}$ with $|\boldsymbol{k}|>k_{F}\left(\epsilon_{\boldsymbol{k}}=\hbar^{2} \boldsymbol{k}^{2} / 2 m\right.$ with $\left.\epsilon_{\boldsymbol{k}}>\epsilon_{F}\right)$ be the momentum (energy) of the additional electron. Due to interactions between the electrons, this state will decay into a many-body state. In momentum space such an interaction takes the form
$$
\begin{align*}
\mathcal{H}_{e e}=\sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}, \boldsymbol{q}} \sum_{s, s^{\prime}} V(\boldsymbol{q}) \widehat{c}_{\boldsymbol{k}-\boldsymbol{q}, s}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime}+\boldsymbol{q}, s^{\prime}}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime}, s^{\prime}} \widehat{c}_{\boldsymbol{k}, s}
\end{align*}
$$
where $V(\boldsymbol{q})$ represents the electron-electron interaction in momentum space while $\boldsymbol{q}$ indicates the momentum transfer in the scattering process. Below, the short-ranged Yukawa potential
$$
\begin{align*}
V(\boldsymbol{q})=\frac{4 \pi e^{2}}{q^{2} \varepsilon(\boldsymbol{q}, 0)}=\frac{4 \pi e^{2}}{q^{2}+k_{T F}^{2}}
\end{align*}
$$
from equation (3.100) will be used. As we are only interested in very small energy transfers $\hbar \omega \ll \epsilon_{F}$, the static approximation is admissible.
In a perturbative treatment, the lowest order effect of the interaction is the creation of a particle-hole excitation in addition to the single electron above the Fermi energy. As the additional electron changes its momentum from $\boldsymbol{k}$ to $\boldsymbol{k}-\boldsymbol{q}$, a hole appears at $\boldsymbol{k}^{\prime}$ and a second electron with wavevector $\boldsymbol{k}^{\prime}+\boldsymbol{q}$ is created outside the Fermi sea. The transition is allowed whenever both energy and momentum are conserved, meaning
$$
\begin{align*}
\boldsymbol{k}=(\boldsymbol{k}-\boldsymbol{q})-\boldsymbol{k}^{\prime}+\left(\boldsymbol{k}^{\prime}+\boldsymbol{q}\right),
\end{align*}
$$
and
$$
\begin{align*}
\epsilon_{k}=\epsilon_{k-q}-\epsilon_{k^{\prime}}+\epsilon_{k^{\prime}+\boldsymbol{q}}
\end{align*}
$$

We calculate the lifetime $\tau_{\boldsymbol{k}}$ of the initial state with momentum $\boldsymbol{k}$ using Fermi's golden rule, yielding the transition rate from the initial state of a filled Fermi sea and one particle with momentum $\boldsymbol{k}$ to a state with two electrons above the Fermi sea, with momenta $\boldsymbol{k}-\boldsymbol{q}$ and $\boldsymbol{k}^{\prime}+\boldsymbol{q}$, and a hole with $\boldsymbol{k}^{\prime}$:

![Attachments/Script 51.webp|700](/img/user/Attachments/Script%2051.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=110&rect=141,630,462,753|•]]

Since neither the momenta $\boldsymbol{k}^{\prime}$ and $\boldsymbol{q}$, nor the spin of the created electron are fixed, a summation over the possible configuration has to be performed, leading to
$$
\begin{align*}
\frac{1}{\tau_{\boldsymbol{k}}}=\frac{2 \pi}{\hbar} \frac{1}{\Omega^{2}} \sum_{\boldsymbol{k}^{\prime}, \boldsymbol{q}} \sum_{s^{\prime}}|V(\boldsymbol{q})|^{2} n_{0, \boldsymbol{k}^{\prime}}\left(1-n_{0, \boldsymbol{k}-\boldsymbol{q}}\right)\left(1-n_{0, \boldsymbol{k}^{\prime}+\boldsymbol{q}}\right) \delta\left(\epsilon_{\boldsymbol{k}-\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}-\left(\epsilon_{\boldsymbol{k}^{\prime}}-\epsilon_{\boldsymbol{k}^{\prime}+\boldsymbol{q}}\right)\right)
\end{align*}
$$

Note that the term $n_{0, \boldsymbol{k}^{\prime}}\left(1-n_{0, \boldsymbol{k}-\boldsymbol{q}}\right)\left(1-n_{0, \boldsymbol{k}^{\prime}+\boldsymbol{q}}\right)$ takes care of the Pauli principle, by ensuring that the final state after the scattering process exists, i.e. the hole state $\boldsymbol{k}^{\prime}$ lies inside and the two particle states $\boldsymbol{k}-\boldsymbol{q}$ and $\boldsymbol{k}^{\prime}+\boldsymbol{q}$ lie outside the Fermi sea. First the integral over $\boldsymbol{k}^{\prime}$ is performed under the condition that the energy $\epsilon_{\boldsymbol{k}^{\prime}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}^{\prime}}$ of the excitation is small. With that, the integral reduces to
$$
\begin{align*}
\begin{aligned}
S\left(\omega_{\boldsymbol{q}, \boldsymbol{k}}, q\right) & =\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}} n_{0, \boldsymbol{k}^{\prime}}\left(1-n_{0, \boldsymbol{k}^{\prime}+\boldsymbol{q}}\right) \delta\left(\epsilon_{\boldsymbol{k}-\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}-\left(\epsilon_{\boldsymbol{k}^{\prime}}-\epsilon_{\boldsymbol{k}^{\prime}+\boldsymbol{q}}\right)\right) \\
& =\frac{1}{(2 \pi)^{3}} \int d^{3} k^{\prime} n_{0, \boldsymbol{k}^{\prime}}\left(1-n_{0, \boldsymbol{k}^{\prime}+\boldsymbol{q}}\right) \delta\left(\epsilon_{\boldsymbol{k}^{\prime}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}^{\prime}}-\hbar \omega_{\boldsymbol{q}, \boldsymbol{k}}\right) \\
& =\frac{N\left(\epsilon_{F}\right)}{4} \frac{\omega_{\boldsymbol{q}, \boldsymbol{k}}}{q v_{F}}
\end{aligned}
\end{align*}
$$
where $N\left(\epsilon_{F}\right)=m k_{F} / \pi^{2} \hbar^{2}$ is the density of states of the electrons at the Fermi surface and $\hbar \omega_{\boldsymbol{q}, \boldsymbol{k}}=\hbar^{2}\left(2 \boldsymbol{k} \cdot \boldsymbol{q}-\boldsymbol{q}^{2}\right) / 2 m>0$ is the energy loss of the decaying electron. Small $\omega$ are justified, because $\hbar \omega \leq\left(2 k_{F} q-q^{2}\right) / 2 m$ for most allowed $\omega$. The integral may be computed using cylindrical coordinates, where the vector $\boldsymbol{q}$ points along the axis of the cylinder. It results in
$$
\begin{align*}
\begin{aligned}
S(\boldsymbol{q}, \omega) & =\frac{1}{(2 \pi)^{2}} \int_{k_{2}}^{k_{1}} d k_{\perp}^{\prime} k_{\perp}^{\prime} \int_{0}^{k_{F}} d k_{\|}^{\prime} \delta\left(\frac{\hbar^{2} q^{2}}{2 m}+\frac{\hbar^{2} q k_{\|}^{\prime}}{m}-\hbar \omega\right) \\
& =\frac{m}{4 \pi^{2} \hbar^{2} q}\left(k_{1}^{2}-k_{2}^{2}\right)
\end{aligned}
\end{align*}
$$
with $k_{1}^{2}=k_{F}^{2}-k_{\|, 0}^{2}$ and $k_{2}^{2}=k_{F}^{2}-\left(k_{\|, 0}+q\right)^{2}$, where $k_{\|, 0}=\left(2 m \omega-\hbar q^{2}\right) / 2 \hbar q$ is enforced by the delta function. 

![Attachments/Script 52.webp|700](/img/user/Attachments/Script%2052.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=111&rect=238,115,359,225|•]]

The wave vectors $k_{2}$ and $k_{1}$ are the upper and lower limits of integration determined from the condition $n_{0, \boldsymbol{k}^{\prime}}(1-$ $\left.n_{0, \boldsymbol{k}^{\prime}+\boldsymbol{q}}\right)>0$ and can be obtained by simple geometric considerations. equation (5.8) follows immediately.

In order to compute the remaining integral over $\boldsymbol{q}$, we assume that the matrix element $|V(\boldsymbol{q})|^{2}$ depends only weakly on $\boldsymbol{q}$ when $q \ll k_{F}$. This is especially true when the interaction is short-ranged. In spherical coordinates, the integral reads

$$
\begin{align*}
\begin{aligned}
\frac{1}{\tau_{\boldsymbol{k}}} & =\frac{2 \pi}{\hbar} \cdot \frac{N\left(\epsilon_{F}\right)}{4 v_{F} \Omega} \sum_{\boldsymbol{q}, s^{\prime}}|V(\boldsymbol{q})|^{2} \frac{\omega_{\boldsymbol{q}, \boldsymbol{k}}}{q} \\
& =\frac{N\left(\epsilon_{F}\right)}{(2 \pi)^{2} 2 \hbar v_{F}} \int d^{3} \boldsymbol{q}|V(\boldsymbol{q})|^{2} \frac{\omega_{\boldsymbol{q}, \boldsymbol{k}}}{q} \\
& =\frac{N\left(\epsilon_{F}\right)}{(2 \pi) 4 m v_{F}} \int d q|V(q)|^{2} q^{2} \int_{\theta_{1}}^{\theta_{2}} d \theta \sin \theta(2 k \cos \theta-q) \\
& =\frac{N\left(\epsilon_{F}\right)}{(2 \pi) 4 m v_{F}} \int d q|V(q)|^{2} q^{2}\left[-\frac{1}{4 k}(2 k \cos \theta-q)^{2}\right]_{\theta_{1}}^{\theta_{2}}
\end{aligned}
\end{align*}
$$

The restriction of the domain of integration of $\theta$ follows from the two conditions $k^{2} \geq(\boldsymbol{k}-\boldsymbol{q})^{2} \geq$ $k_{F}^{2}$ and $(\boldsymbol{k}-\boldsymbol{q})^{2}=k^{2}-2 k q \cos \theta+q^{2}$. From the first condition, $\cos \theta_{2}=q / 2 k$, and from the second, $\cos \theta_{1}=\left(k^{2}-k_{F}^{2}+q^{2}\right) / 2 k q$. Thus,
$$
\begin{align*}
\begin{aligned}
\frac{1}{\tau_{\boldsymbol{k}}} & =\frac{N\left(\epsilon_{F}\right)}{(2 \pi) 4 m v_{F}} \int d q|V(q)|^{2} \frac{1}{4 k}\left(k^{2}-k_{F}^{2}\right)^{2} \\
& \approx \frac{N\left(\epsilon_{F}\right)}{(2 \pi) 4 v_{F}} \frac{m}{k_{F}} \frac{1}{\hbar^{4}}\left(\epsilon_{\boldsymbol{k}}-\epsilon_{F}\right)^{2} \int d q|V(q)|^{2} \\
& =\frac{1}{8 \pi \hbar^{3}} \frac{N\left(\epsilon_{F}\right)}{v_{F}^{2}}\left(\epsilon_{\boldsymbol{k}}-\epsilon_{F}\right)^{2} \int d q|V(q)|^{2} .
\end{aligned}
\end{align*}
$$

Note that convergence of the last integral over $q$ requires that the integrand does not diverge stronger than $q^{\alpha}(\alpha<1)$ for $q \rightarrow 0$. With the screening of the potential obtained in the previous chapter, this condition is certainly fulfilled (use for $V(q)$, but would not work for the unscreened Coulomb potential. Essentially, the result states that
$$
\begin{align*}
\frac{1}{\tau_{k}} \propto\left(\epsilon_{k}-\epsilon_{F}\right)^{2}
\end{align*}
$$
for $\boldsymbol{k}$ slightly above the Fermi surface. This implies that the state $|\boldsymbol{k} s\rangle$ occurs as a resonance of width $\hbar / \tau_{\boldsymbol{k}}$ and features a quasi-particle, which can be observed in the spectral function $A(E, \boldsymbol{k})$ as depicted here: 

![Attachments/Script 53.webp|700](/img/user/Attachments/Script%2053.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=112&rect=164,554,428,712|•]]

The quasi-particle (coherent) part of the spectral function has a weight reduced from one (corresponding to the quasi-particle weight $Z_{\boldsymbol{k}}$ ). The remaining weight is shifted to higher energies as a so-called incoherent part (continuum without clear momentum-energy relation). The resonance becomes arbitrarily sharp as the Fermi surface is approached
$$
\begin{align*}
\lim _{k \rightarrow k_{F}} \frac{\hbar / \tau_{k}}{\epsilon_{k}-\epsilon_{F}}=0
\end{align*}
$$
so that the quasi-particle concept is asymptotically valid. This equation can also be seen as a verification of Heisenberg's uncertainty principle. Consequently, the momentum of an electron is a good quantum number in the vicinity of the Fermi surface. Underlying this result is the Pauli exclusion principle, which restricts the phase space for decay processes of single particle states close to the Fermi surface. In addition, the assumption of short ranged interactions is crucial. Long ranged interactions can change the behaviour drastically due to the larger number of decay channels.

---
## 5.2 Phenomenological Theory of Fermi Liquids
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=112&selection=67,0,69,40|•]]

The existence of well-defined Fermionic quasi-particles in spite of the underlying complex manybody physics inspired Landau to the following phenomenological theory. Just like the states of independent electrons, quasi-particle states shall be characterised by their momentum $\boldsymbol{k}$ and spin $\sigma$. In fact, there is a one-to-one mapping between the free electrons and the quasi-particles. Consequently, the number of quasi-particles and the number of electrons coincide. The momentum distribution function of quasi-particles, defined as $n_{\sigma}(\boldsymbol{k})$, is subject to the condition
$$
\begin{align*}
N=\sum_{k, \sigma} n_{\sigma}(\boldsymbol{k}) .
\end{align*}
$$

In analogy to the Fermi-Dirac distribution of free electrons, one demands, that the ground state distribution function $n_{\sigma}^{(0)}(\boldsymbol{k})$ for the quasi-particles is described by a simple step function
$$
\begin{align*}
n_{\sigma}^{(0)}(\boldsymbol{k})=\Theta\left(k_{F}-|\boldsymbol{k}|\right) .
\end{align*}
$$
For a spherically symmetric electron system, the quasi-particle Fermi surface is a sphere with the same radius as the one for free electrons of the same density. For a general point group symmetry, the Fermi surface may be deformed by the interactions without changing the underlying symmetry. The volume enclosed by the Fermi surface is always conserved despite the deformation. Note that the distribution $n_{\sigma}^{(0)}(\boldsymbol{k})$ of the quasi-particles in the ground state and that $n_{0 \boldsymbol{k} \boldsymbol{s}}=\left\langle\widehat{c}_{\boldsymbol{k} \sigma}^{\dagger} \widehat{c}_{\boldsymbol{k} \sigma}\right\rangle$ of the real electrons in the ground state are not identical:

![Attachments/Script 54.webp|700](/img/user/Attachments/Script%2054.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=113&rect=153,614,446,736|•]]

Interestingly, $n_{0 k s}$ is still discontinuous at the Fermi surface, but the height of the jump is, in general, smaller than unity. The modification of the electron distribution function from a step function to a "smoother" Fermi surface indicates the involvement of electron-hole excitations and the renormalisation of the electronic properties, which deplete the Fermi sea and populate the states above the Fermi level. The reduced jump in $n_{0 k s}$ is a measure for the quasi-particle weight at the Fermi surface, $Z_{\boldsymbol{k}_{F}}$, i.e. the amplitude of the corresponding free electron state in the quasi-particle state.
In Landau's theory of Fermi liquids, the essential information on the low-energy physics of the system shall be contained in the deviation of the quasi-particle distribution $n_{\sigma}(\boldsymbol{k})$ from its ground state distribution $n_{\sigma}^{(0)}(\boldsymbol{k})$,
$$
\begin{align*}
\delta n_{\sigma}(\boldsymbol{k})=n_{\sigma}(\boldsymbol{k})-n_{\sigma}^{(0)}(\boldsymbol{k}) .
\end{align*}
$$

The symbol $\delta$ is generally used in literature to denote this difference. Unfortunately this may suggest that the term $\delta n_{\sigma}(\boldsymbol{k})$ is small, which is not true in general. Indeed, $\delta n_{\sigma}(\boldsymbol{k})$ is concentrated on momenta $\boldsymbol{k}$ very close to the Fermi energy only, where the quasi-particle concept is valid. This distribution function, describing the deviation from the ground state, enters a phenomenological energy functional of the form
$$
\begin{align*}
E=E_{0}+\sum_{\boldsymbol{k}, \sigma} \epsilon_{\sigma}(\boldsymbol{k}) \delta n_{\sigma}(\boldsymbol{k})+\frac{1}{2 \Omega} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}} \sum_{\sigma, \sigma^{\prime}} f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta n_{\sigma}(\boldsymbol{k}) \delta n_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)+O\left(\delta n^{3}\right)
\end{align*}
$$
where $E_{0}$ denotes the energy of the ground state. Moreover, the phenomenological parameters $\epsilon_{\sigma}(\boldsymbol{k})$ and $f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)$ have to be determined by experiments or by means of a microscopic theory. The variational derivative
$$
\begin{align*}
\tilde{\epsilon}_{\sigma}(\boldsymbol{k})=\frac{\delta E}{\delta n_{\sigma}(\boldsymbol{k})}=\epsilon_{\sigma}(\boldsymbol{k})+\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta n_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)
\end{align*}
$$
yields an effective energy-momentum relation $\tilde{\epsilon}_{\sigma}(\boldsymbol{k})$, whose second term depends on the distribution of all quasi-particles. A quasi-particle moves in the "mean-field" of all other quasi-particles, so that changes $\delta n_\sigma(\textbf{k})$ in the distribution affect $\tilde{\epsilon_\sigma(\textbf{k})}$. The second variational derivative describes the coupling between the quasi-particles

$$
\begin{align*}
\frac{\delta^{2} E}{\delta n_{\sigma}(\boldsymbol{k}) \delta n_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)}=\frac{1}{\Omega} f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)
\end{align*}
$$

We introduce a parametrisation for these couplings $f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)$ by assuming spherical symmetry of the system. Furthermore, the radial dependence is ignored, as we only consider quasi-particles in the vicinity of the Fermi surface where $|\boldsymbol{k}|,\left|\boldsymbol{k}^{\prime}\right| \approx k_{F}$. Therefore the dependence of $f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)$ on $\boldsymbol{k}, \boldsymbol{k}^{\prime}$ can be reduced to the relative angle $\theta_{\hat{k}, \hat{k}^{\prime}}$
$$
\begin{align*}
f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)=f^{s}\left(\hat{k}, \hat{k}^{\prime}\right)+\sigma \sigma^{\prime} f^{a}\left(\hat{k}, \hat{k}^{\prime}\right)
\end{align*}
$$
where $\hat{k}=\boldsymbol{k} /|\boldsymbol{k}|$. The symmetric ( $s$ ) and antisymmetric (a) part of $f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)$ can be expanded in Legendre-polynomials $P_{l}(z)$, leading to
$$
\begin{align*}
f^{s, a}\left(\hat{k}, \hat{k}^{\prime}\right)=\sum_{l=0}^{\infty} f_{l}^{s, a} P_{l}\left(\cos \theta_{\hat{k}, \hat{k}^{\prime}}\right)
\end{align*}
$$

The density of states at the Fermi surface is defined as
$$
\begin{align*}
N\left(\epsilon_{F}\right)=\frac{2}{\Omega} \sum_{\boldsymbol{k}} \delta\left(\epsilon(\boldsymbol{k})-\epsilon_{F}\right)=\frac{k_{F}^{2}}{\pi^{2} \hbar v_{F}}=\frac{m^{*} k_{F}}{\pi^{2} \hbar^{2}}
\end{align*}
$$
and follows from the dispersion $\epsilon(\boldsymbol{k})$ of the bare quasi-particle energy
$$
\begin{align*}
\left.\nabla_{\boldsymbol{k}} \epsilon(\boldsymbol{k})\right|_{\boldsymbol{k}_{F}}=\boldsymbol{v}_{\boldsymbol{F}}=\frac{\hbar \boldsymbol{k}_{F}}{m^{*}}
\end{align*}
$$
where for a fully rotation symmetric system we may write $\epsilon(\boldsymbol{k})=\hbar^{2} \boldsymbol{k}^{2} / 2 m^{*}$ with $m^{*}$ as an "effective mass", although we will be only interested at the spectrum in the immediate vicinity of the Fermi energy. With this definition, we also introduce the so-called Landau parameters
$$
\begin{align*}
\begin{aligned}
& F_{l}^{s}=N\left(\epsilon_{F}\right) f_{l}^{s}, \\
& F_{l}^{a}=N\left(\epsilon_{F}\right) f_{l}^{a},
\end{aligned}
\end{align*}
$$
commonly used in the literature. In the following, we want to study the relation between the different phenomenological parameters of Landau's theory of Fermi liquids and the experimentally accessible quantities of a real system, such as specific heat, compressibility, spin susceptibility among others.

### 5.2.1 Specific Heat - Density of States

Since the quasi-particles are Fermions, they obey Fermi-Dirac statistics
$$
\begin{align*}
n_{\sigma}(T, \boldsymbol{k})=\frac{1}{e^{[\tilde{\varepsilon}(\boldsymbol{k})-\mu] / k_{B} T}+1}
\end{align*}
$$
with the chemical potential $\mu$, leading to

$$
\begin{align*}
\delta n_{\sigma}(\boldsymbol{k})=n_{\sigma}(T, \boldsymbol{k})-n_{\sigma}^{(0)}(0, \boldsymbol{k})
\end{align*}
$$

We will only consider here the behaviour in lowest-order in temperature and restrict ourselves, therefore, to $\tilde{\epsilon}(\boldsymbol{k})=\epsilon(\boldsymbol{k})$. Furthermore, we replaced $\mu=\epsilon_{F}+O\left(T^{2}\right)$ by $\epsilon_{F}$. In order to determine the specific heat, we use the expression for the entropy of a Fermion gas based on the momentum distribution function,
$$
\begin{align*}
S=-\frac{k_{B}}{\Omega} \sum_{\boldsymbol{k}, \sigma}\left[n_{\sigma}(\boldsymbol{k}, T) \ln \left(n_{\sigma}(\boldsymbol{k}, T)\right)+\left(1-n_{\sigma}(\boldsymbol{k}, T)\right) \ln \left(1-n_{\sigma}(\boldsymbol{k}, T)\right)\right]
\end{align*}
$$

Taking the derivative of the entropy $S$ with respect to $T$, the specific heat
$$
\begin{align*}
\begin{aligned}
C(T) & =T \frac{\partial S}{\partial T} \\
& =-\frac{k_{B} T}{\Omega} \sum_{\boldsymbol{k}, \sigma} \frac{e^{\xi(\boldsymbol{k}) / k_{B} T}}{\left(e^{\xi(\boldsymbol{k}) / k_{B} T}+1\right)^{2}} \frac{\xi(\boldsymbol{k})}{k_{B} T^{2}} \ln \left(\frac{n_{\sigma}(\boldsymbol{k})}{1-n_{\sigma}(\boldsymbol{k})}\right) \\
& =\frac{k_{B} T}{\Omega} \sum_{\boldsymbol{k}, \sigma} \frac{1}{4 \cosh \left(\xi(\boldsymbol{k}) / 2 k_{B} T\right)^{2}} \frac{\xi(\boldsymbol{k})}{k_{B} T^{2}} \frac{\xi(\boldsymbol{k})}{k_{B} T}
\end{aligned}
\end{align*}
$$
is obtained, where we introduced $\xi(\boldsymbol{k})=\epsilon(\boldsymbol{k})-\epsilon_{F}$. In the limit $T \rightarrow 0$ we find
$$
\begin{align*}
\begin{aligned}
\frac{C(T)}{T} & \approx \frac{N\left(\epsilon_{F}\right)}{4 k_{B} T^{3}} \int d \xi \frac{\xi^{2}}{\cosh ^{2}\left(\xi / 2 k_{B} T\right)} \\
& \approx \frac{k_{B}^{2} N\left(\epsilon_{F}\right)}{4} \int_{-\infty}^{+\infty} d y \frac{y^{2}}{\cosh ^{2}(y / 2)} \\
& =\frac{\pi^{2} k_{B}^{2} N\left(\epsilon_{F}\right)}{3}
\end{aligned}
\end{align*}
$$
which is the well-known linear behaviour $C(T)=\gamma T$ for the specific heat at low temperatures, with $\gamma=\pi^{2} k_{B}^{2} N\left(\epsilon_{F}\right) / 3$. Since $N\left(\epsilon_{F}\right)=m^{*} k_{F} / \pi^{2} \hbar^{2}$, the effective mass $m^{*}$ of the quasi-particles can directly determined by measuring the specific heat of the system.

### 5.2.2 Compressibility - Landau parameter $\mathbf{F}_{0}^{s}$

A Fermi gas has a finite compressibility because each Fermion occupies a finite amount of space due to the Pauli principle. The compressibility $\kappa$ is defined as
$$
\begin{align*}
\kappa=-\frac{1}{\Omega}\left(\frac{\partial \Omega}{\partial p}\right)_{T, N}
\end{align*}
$$
where $p$ is the uniform hydrostatic pressure. The indices $T, N$ mean, that the temperature $T$ and the particle number $N$ are kept fixed. We consider the response of the Fermi liquid upon application of uniform pressure $p$. The shift of the bare quasi-particle energies is given by
$$
\begin{align*}
\delta \epsilon_{\sigma}(\boldsymbol{k})=\frac{\partial \epsilon_{\sigma}(\boldsymbol{k})}{\partial p} \delta p=\frac{\partial \epsilon(\boldsymbol{k})}{\partial \boldsymbol{k}} \cdot \frac{\partial \boldsymbol{k}}{\partial \Omega} \frac{\partial \Omega}{\partial p} \delta p=\frac{\kappa^{(0)}}{3} \hbar \boldsymbol{v}_{\boldsymbol{k}} \cdot \boldsymbol{k} \delta p=\gamma_{\boldsymbol{k}} \kappa^{(0)} \delta p
\end{align*}
$$

with $n=N / \Omega$.

We use the fact that
$$
\begin{align*}
\boldsymbol{k}=\frac{2 \pi}{L} \boldsymbol{n}=\frac{2 \pi \boldsymbol{n}}{\Omega^{1 / 3}} \Rightarrow \frac{\partial \boldsymbol{k}}{\partial \Omega}=-\frac{1}{3 \Omega} \frac{2 \pi \boldsymbol{n}}{\Omega^{1 / 3}}=-\frac{\boldsymbol{k}}{3 \Omega}
\end{align*}
$$
and denote $\gamma_{\boldsymbol{k}}=\hbar \boldsymbol{v}_{\boldsymbol{k}} \cdot \boldsymbol{k} / 3=2 \epsilon_{\sigma}(\boldsymbol{k}) / 3$ and $\kappa^{(0)}$ is the unrenormalised compressibility derived below. Analogously we introduce the shift of the renormalised quasi-particle energies with the renormalised compressibility $\kappa$,
$$
\begin{align*}
\begin{aligned}
\delta \tilde{\epsilon}_{\sigma}(\boldsymbol{k}) & =\gamma_{\boldsymbol{k}} \kappa \delta p=\delta \epsilon_{\sigma}(\boldsymbol{k})+\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} f_{\sigma, \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta n_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right) \\
& =\gamma_{\boldsymbol{k}} \kappa^{(0)} \delta p+\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} f_{\sigma, \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \frac{\partial n_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)}{\partial \tilde{\epsilon}_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)} \delta \tilde{\epsilon}_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right) \\
& =\gamma_{\boldsymbol{k}} \kappa^{(0)} \delta p-\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} f_{\sigma, \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta\left(\tilde{\epsilon}_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)-\epsilon_{F}\right) \gamma_{\boldsymbol{k}^{\prime}} \kappa \delta p
\end{aligned}
\end{align*}
$$

Changes are concentrated on the Fermi surface such that we can replace $\gamma_{k}=2 \epsilon_{F} / 3$ so that
$$
\begin{align*}
\kappa=\kappa^{(0)}-\kappa N\left(\epsilon_{F}\right) \int \frac{d \Omega_{\hat{k}^{\prime}}}{4 \pi} f^{s}\left(\hat{k}, \hat{k}^{\prime}\right)=\kappa^{(0)}-\kappa F_{0}^{s}
\end{align*}
$$

Therefore we find
$$
\begin{align*}
\kappa=\frac{\kappa^{(0)}}{1+F_{0}^{s}}
\end{align*}
$$

Now we determine $\kappa^{(0)}$ from the volume dependence of the energy
$$
\begin{align*}
E^{(0)}=\sum_{\boldsymbol{k}, \sigma} \epsilon_{\sigma}(\boldsymbol{k})=\frac{3}{5} N \epsilon_{F}=\frac{3}{5} N \frac{\hbar^{2} k_{F}^{2}}{2 m^{*}}=\frac{3}{10} \frac{\hbar^{2} N}{m^{*}}\left(3 \pi^{2} \frac{N}{\Omega}\right)^{2 / 3} .
\end{align*}
$$

Then we determine the pressure
$$
\begin{align*}
p=-\left(\frac{\partial E^{(0)}}{\partial \Omega}\right)_{N}=\frac{1}{5} \frac{\hbar^{2} N}{m^{*}}\left(3 \pi^{2} \frac{N}{\Omega}\right)^{2 / 3} \frac{1}{\Omega}
\end{align*}
$$
and
$$
\begin{align*}
\frac{1}{\kappa^{(0)}}=-\Omega \frac{\partial p}{\partial \Omega}=\frac{1}{3} \frac{\hbar^{2} N}{m^{*} \Omega}\left(3 \pi^{2} n\right)^{2 / 3}=\frac{2}{3} n \epsilon_{F} .
\end{align*}
$$

### 5.2.3 Spin Susceptibility - Landau Parameter $\mathbf{F}_{0}^{\text {a }}$

In a magnetic field $H$ coupling to the electron spins the bare quasi-particle energy is supplemented by the Zeeman term,
$$
\begin{align*}
\epsilon_{\sigma}(\boldsymbol{k})=\frac{\hbar^{2} \boldsymbol{k}^{2}}{2 m^{*}}-g \mu_{B} H \frac{\sigma}{2}
\end{align*}
$$
where $\sigma= \pm 1$ denotes the spin component parallel to the applied field. The shift of the renormalised quasi-particle energy due to the applied field is
$$
\begin{align*}
\begin{aligned}
\delta \tilde{\epsilon}_{\sigma}(\boldsymbol{k}) & =\tilde{\epsilon}_{\sigma}(H, \boldsymbol{k})-\tilde{\epsilon}(H=0, \boldsymbol{k}) \\
& =-g \mu_{B} H \frac{\sigma}{2}+\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} f_{\sigma, \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta n_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right) \\
& =-\tilde{g} \mu_{B} H \frac{\sigma}{2} .
\end{aligned}
\end{align*}
$$

![Attachments/Script 55.webp|700](/img/user/Attachments/Script%2055.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=117&rect=137,637,461,762|•]]

Note that by symmetry, $\delta n_{\sigma}(\boldsymbol{k})=-\delta n_{-\sigma}(-\boldsymbol{k})$. Due to interactions, the renormalised gyromagnetic factor $\tilde{g}$ differs from the value of $g=2$ for free electrons. We focus on the second term, which can be expressed as
$$
\begin{align*}
\begin{aligned}
\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta n_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right) & =\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \frac{\partial n_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)}{\partial \tilde{\epsilon}_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)} \delta \tilde{\epsilon}_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right) \\
& =\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta\left(\tilde{\epsilon}_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)-\epsilon_{F}\right) \tilde{g} \mu_{B} H \frac{\sigma^{\prime}}{2}
\end{aligned}
\end{align*}
$$

We derive
$$
\begin{align*}
\tilde{g}=g-\tilde{g} N\left(\epsilon_{F}\right) \int \frac{d \Omega_{\hat{k}^{\prime}}}{4 \pi} f^{a}\left(\hat{k}, \hat{k}^{\prime}\right)=g-\tilde{g} F_{0}^{a}
\end{align*}
$$
or equivalently
$$
\begin{align*}
\tilde{g}=\frac{g}{1+F_{0}^{a}}
\end{align*}
$$

The magnetisation of the system can be computed from the distribution function,
$$
\begin{align*}
\begin{aligned}
M & =g \mu_{B} \sum_{\boldsymbol{k}, \sigma} \frac{\sigma}{2} \delta n_{\sigma}(\boldsymbol{k})=g \mu_{B} \sum_{\boldsymbol{k}, \sigma} \frac{\sigma}{2} \frac{\partial n_{\sigma}(\boldsymbol{k})}{\partial \tilde{\epsilon}_{\sigma}(\boldsymbol{k})} \delta \tilde{\epsilon}_{\sigma}(\boldsymbol{k}) \\
& =g \mu_{B} \sum_{\boldsymbol{k}, \sigma} \frac{\sigma}{2} \delta\left(\tilde{\epsilon}_{\sigma}(\boldsymbol{k})-\epsilon_{F}\right) \tilde{g} \mu_{B} H \frac{\sigma}{2}
\end{aligned}
\end{align*}
$$
from which the susceptibility is immediately found to be
$$
\begin{align*}
\chi=\frac{M}{H \Omega}=\frac{\mu_{B}^{2} N\left(\epsilon_{F}\right)}{1+F_{0}^{a}}
\end{align*}
$$

The changes in the distribution function induced by the magnetic field feed back into the susceptibility, so that the latter may be either weakened $\left(F_{0}^{a}>0\right)$ or enhanced $\left(F_{0}^{a}<0\right)$. For the magnetic susceptibility, the Landau parameter $F_{0}^{a}$ and the effective mass $m^{*}$ (through $N\left(\epsilon_{F}\right)$ ) lead to a renormalisation compared to the free electron susceptibility.

### 5.2.4 Galilei Invariance - Effective Mass and $\mathbf{F}_{1}^{s}$

We initially introduced by hand the effective mass of quasi-particles in $\epsilon_{\sigma}(\boldsymbol{k})$. In this section we show, that overall consistency of the phenomenological theory requires a relation between
the effective mass and one Landau parameter $\left(F_{1}^{s}\right)$. The reason is, that the effective mass is the result of the interactions among the electrons. This self-consistency is connected with the Galilean invariance of the system. When the momenta of all particles are shifted by $\hbar \boldsymbol{q}$ ( $|\boldsymbol{q}|$ shall be very small compared to the Fermi momentum $k_{F}$ in order to remain within the assumption-range of the Fermi liquid theory) the distribution function given by
$$
\begin{align*}
\delta n_{\sigma}(\boldsymbol{k})=n_{\sigma}^{(0)}(\boldsymbol{k}-\boldsymbol{q})-n_{\sigma}^{(0)}(\boldsymbol{k}) \approx-\boldsymbol{q} \cdot \nabla_{\boldsymbol{k}} n_{\sigma}^{(0)}(\boldsymbol{k}) .
\end{align*}
$$

This function is strongly concentrated around the Fermi energy:

![Attachments/Script 56.webp|700](/img/user/Attachments/Script%2056.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=118&rect=210,501,385,634|•]]

The current density can now be calculated, using the distribution function $n_{\sigma}(\boldsymbol{k})=n_{\sigma}^{(0)}(\boldsymbol{k})+$ $\delta n_{\sigma}(\boldsymbol{k})$. Within the Fermi liquid theory this yields,
$$
\begin{align*}
\boldsymbol{j}_{\boldsymbol{q}}=\frac{1}{\Omega} \sum_{\boldsymbol{k}, \sigma} \boldsymbol{v}(\boldsymbol{k}) n_{\sigma}(\boldsymbol{k})=\frac{1}{\Omega} \sum_{\boldsymbol{k}, \sigma} \boldsymbol{v}(\boldsymbol{k}) \delta n_{\sigma}(\boldsymbol{k})
\end{align*}
$$
with
$$
\begin{align*}
\begin{aligned}
\boldsymbol{v}(\boldsymbol{k}) & =\frac{1}{\hbar} \boldsymbol{\nabla}_{\boldsymbol{k}} \tilde{\epsilon}_{\sigma}(\boldsymbol{k}) \\
& =\frac{1}{\hbar}\left(\nabla_{\boldsymbol{k}} \epsilon_{\sigma}(\boldsymbol{k})+\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} \nabla_{\boldsymbol{k}} f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta n_{\sigma}\left(\boldsymbol{k}^{\prime}\right)\right) .
\end{aligned}
\end{align*}
$$

Thus we obtain for the current density,
$$
\begin{align*}
\begin{aligned}
\boldsymbol{j}_{\boldsymbol{q}} & =\frac{1}{\Omega} \sum_{\boldsymbol{k}, \sigma} \frac{\hbar \boldsymbol{k}}{m^{*}} n_{\sigma}(\boldsymbol{k})+\frac{1}{\Omega^{2}} \sum_{\boldsymbol{k}, \sigma} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}}\left[n_{\sigma}^{(0)}(\boldsymbol{k})+\delta n_{\sigma}(\boldsymbol{k})\right] \frac{1}{\hbar} \boldsymbol{\nabla}_{\boldsymbol{k}} f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta n_{\sigma}\left(\boldsymbol{k}^{\prime}\right) \\
& =\frac{1}{\Omega} \sum_{\boldsymbol{k}, \sigma} \frac{\hbar \boldsymbol{k}}{m^{*}} \delta n_{\sigma}(\boldsymbol{k})-\frac{1}{\Omega^{2}} \sum_{\boldsymbol{k}, \sigma} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} \frac{1}{\hbar}\left[\boldsymbol{\nabla}_{\boldsymbol{k}} n_{\sigma}^{(0)}(\boldsymbol{k})\right] f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta n_{\sigma}\left(\boldsymbol{k}^{\prime}\right)+O\left(q^{2}\right) \\
& =\frac{1}{\Omega} \sum_{\boldsymbol{k}, \sigma} \frac{\hbar \boldsymbol{k}}{m^{*}} \delta n_{\sigma}(\boldsymbol{k})+\frac{1}{\Omega^{2}} \sum_{\boldsymbol{k}, \sigma} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta\left(\epsilon_{\sigma}\left(\boldsymbol{k}^{\prime}\right)-\epsilon_{F}\right) \frac{\hbar \boldsymbol{k}^{\prime}}{m^{*}} \delta n_{\sigma}(\boldsymbol{k})+O\left(q^{2}\right)=\boldsymbol{j}_{1}+\boldsymbol{j}_{2} .
\end{aligned}
\end{align*}
$$
where, for the second line, we performed an integration by parts and neglect terms quadratic in $\delta n$ and, in the third line, used $f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)=f_{\sigma^{\prime} \sigma}\left(\boldsymbol{k}^{\prime}, \boldsymbol{k}\right)$ and
$$
\begin{align*}
\nabla_{\boldsymbol{k}} n_{\sigma}^{(0)}(\boldsymbol{k})=\frac{\partial n_{\sigma}^{(0)}(\boldsymbol{k})}{\partial \epsilon_{\sigma}(\boldsymbol{k})} \nabla_{\boldsymbol{k}} \epsilon_{\sigma}(\boldsymbol{k})=-\delta\left(\epsilon_{\sigma}(\boldsymbol{k})-\epsilon_{F}\right) \nabla_{\boldsymbol{k}} \epsilon_{\sigma}(\boldsymbol{k})=-\delta\left(\epsilon_{\sigma}(\boldsymbol{k})-\epsilon_{F}\right) \frac{\hbar^{2} \boldsymbol{k}}{m^{*}} .
\end{align*}
$$

The first term of equation (5.65) denotes quasi-particle current, $\boldsymbol{j}_{1}$, while the second term can be interpreted as a drag current, $\boldsymbol{j}_{2}$, an induced motion (backflow) of the other particles due to interactions.
From a different viewpoint, we consider the system as being in the inertial frame with a velocity $\hbar \boldsymbol{q} / m$, as all particles received the same momentum. Here $m$ is the bare electron mass. The current density is then given by
$$
\begin{align*}
\boldsymbol{j}_{\boldsymbol{q}}=\frac{N}{\Omega} \frac{\hbar \boldsymbol{q}}{m}=\frac{1}{\Omega} \sum_{\boldsymbol{k}, \sigma} \frac{\hbar \boldsymbol{k}}{m} n_{\sigma}(\boldsymbol{k})=\frac{1}{\Omega} \sum_{\boldsymbol{k}, \sigma} \frac{\hbar \boldsymbol{k}}{m} \delta n_{\sigma}(\boldsymbol{k})
\end{align*}
$$

Since these two viewpoints have to be equivalent, the resulting currents should be the same. Thus, we compare equation (5.65) and (5.66) and obtain the equation,
$$
\begin{align*}
\frac{\hbar \boldsymbol{k}}{m}=\frac{\hbar \boldsymbol{k}}{m^{*}}+\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta\left(\epsilon_{\sigma}\left(\boldsymbol{k}^{\prime}\right)-\epsilon_{F}\right) \frac{\hbar \boldsymbol{k}^{\prime}}{m^{*}}
\end{align*}
$$
which with $\hat{k}=\boldsymbol{k} / k_{F}$ then leads to
$$
\begin{align*}
\frac{1}{m}=\frac{1}{m^{*}}+N\left(\epsilon_{F}\right) \int \frac{d \Omega_{\hat{k}^{\prime}}}{4 \pi} f^{s}\left(\hat{k}, \hat{k}^{\prime}\right) \frac{\hat{k} \cdot \hat{k}^{\prime}}{m^{*}}=\frac{1}{m^{*}}+\frac{1}{m^{*}} \int \frac{d \Omega_{\hat{k}^{\prime}}}{4 \pi} \underbrace{N\left(\epsilon_{F}\right) f^{s}\left(\hat{k}, \hat{k}^{\prime}\right)}_{\sum_{l=0}^{\infty} F_{l}^{s} P_{l}\left(\cos \theta_{k^{\prime}}\right)} \underbrace{\cos \theta_{k^{\prime}}}_{P_{1}\left(\cos \theta_{k^{\prime}}\right)}
\end{align*}
$$
or by using the orthogonality of the Legendre polynomials,
$$
\begin{align*}
\frac{m^{*}}{m}=1+\frac{1}{3} F_{1}^{s}
\end{align*}
$$
where $1 / 3=1 /(2 l+1)$ for $l=1$ originates from the orthogonality relation of Legendrepolynomials, as shown above. Therefore, the relation (5.69) has to couple $m^{*}$ to $F_{1}^{s}$ in order for Landau's theory of Fermi liquids to be self-consistent. Generally, we find that $F_{1}^{s}>0$ so that quasi-particles in a Fermi liquid are effectively heavier than bare electrons.

### 5.2.5 Stability of the Fermi Liquid

Upon inspection of the renormalisation of the quantities treated previously
$$
\begin{align*}
\begin{aligned}
\frac{\gamma}{\gamma_{0}} & =\frac{m^{*}}{m} \\
\frac{\kappa}{\kappa_{0}} & =\frac{m^{*}}{m} \frac{1}{1+F_{0}^{s}} \\
\frac{\chi}{\chi_{0}} & =\frac{m^{*}}{m} \frac{1}{1+F_{0}^{a}}
\end{aligned}
\end{align*}
$$
with
$$
\begin{align*}
\frac{m^{*}}{m}=1+\frac{1}{3} F_{1}^{s}
\end{align*}
$$
and the the response functions of the non-interacting system are given by
$$
\begin{align*}
\gamma_{0}=\frac{k_{B}^{2} m k_{F}}{3 \hbar^{2}}, \kappa_{0}=\frac{3 m}{n \hbar^{2} k_{F}^{2}} \text { and } \chi_{0}=\mu_{B}^{2} \frac{m k_{F}}{\pi^{2} \hbar^{2}}
\end{align*}
$$
one notes that the compressibility $\kappa$ (susceptibility $\chi$ ) diverges for $F_{0}^{s} \rightarrow-1\left(F_{0}^{a} \rightarrow-1\right)$, indicating an instability of the system. A diverging spin susceptibility for example leads to a ferromagnetic state with a split Fermi surface, one for each spin direction. On the other hand, a diverging compressibility leads to a spontaneous contraction of the system. More generally, the deformation of the quasi-particle distribution function may vary over the Fermi surface, so that arbitrary deviations of the Fermi liquid ground state may be classified by the deformation
$$
\begin{align*}
\delta n_{\sigma}(\hat{k})=\sum_{l=0}^{\infty} \sum_{m=-l}^{+l} \delta n_{\sigma, l, m} Y_{l m}\left(\theta_{\boldsymbol{k}}, \phi_{\boldsymbol{k}}\right)
\end{align*}
$$

Note that we allow here formally for complex distribution functions. For pure charge density deformations we have $\delta n_{+, l, m}(\hat{k})=\delta n_{-, l, m}(\hat{k})$, while pure spin density deformations are described by $\delta n_{+, l, m}(\hat{k})=-\delta n_{-, l, m}(\hat{k})$. The general response function for a redistribution $\delta n_{\sigma}(\hat{k})$ with the anisotropy $Y_{l m}\left(\theta_{\boldsymbol{k}}, \phi_{\boldsymbol{k}}\right)$ is given by
$$
\begin{align*}
\chi_{l, m}=\frac{\chi_{l, m}^{(0)}}{1+\frac{F_{l}^{s, a}}{2 l+1}}
\end{align*}
$$
This comes from here:
**General response and distribution deformations**: We consider a force field $F$ with conjugate "polarisation" $P$ which yields a modification of the quasi-particle dispersion,
$$
\begin{align*}
\delta \epsilon_{\sigma}(\boldsymbol{k})=-\alpha \lambda_{\sigma}(\boldsymbol{k}) F \quad \text { and } \quad \delta \tilde{\epsilon}_{\sigma}(\boldsymbol{k})=-\tilde{\alpha} \lambda_{\sigma}(\boldsymbol{k}) F
\end{align*}
$$
where we assume that $\lambda_{\sigma}(\boldsymbol{k})=Y_{l, m}\left(\theta_{\hat{k}}, \phi_{\hat{k}}\right)=(-1)^{m} Y_{l,-m}^{*}\left(\theta_{\hat{k}}, \phi_{\hat{k}}\right)$ without spin dependence. Then we can write
$$
\begin{align*}
\delta \tilde{\epsilon}_{\sigma}(\boldsymbol{k})=\delta \epsilon_{\sigma}(\boldsymbol{k})+\frac{1}{\Omega} \sum_{k^{\prime}, \sigma^{\prime}} f_{\sigma \sigma^{\prime}}\left(\hat{k}, \hat{k}^{\prime}\right) \delta n_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)=\delta \epsilon_{\sigma}(\boldsymbol{k})+\frac{1}{\Omega} \sum_{k^{\prime}, \sigma^{\prime}} f_{\sigma \sigma^{\prime}}\left(\hat{k}, \hat{k}^{\prime}\right) \frac{\partial n_{\sigma^{\prime}}}{\partial \tilde{\epsilon}_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)} \delta \tilde{\epsilon}_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)
\end{align*}
$$

In the last step we take for $\delta n_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)$ the self-consistent value taking the feedback of the quasi-particle coupling into account. We now use the relation
$$
\begin{align*}
f^{s, a}\left(\hat{k}, \hat{k}^{\prime}\right)=\sum_{l^{\prime}=0}^{\infty} f_{l}^{s, a} P_{l^{\prime}}\left(\hat{k} \cdot \hat{k}^{\prime}\right)=4 \pi \sum_{l^{\prime}=0}^{\infty} \frac{f_{l^{\prime}}^{s, a}}{2 l^{\prime}+1} \sum_{m^{\prime}=-l^{\prime}}^{+l^{\prime}} Y_{l^{\prime} m^{\prime}}\left(\theta_{\hat{k}}, \phi_{\hat{k}}\right) Y_{l^{\prime} m^{\prime}}^{*}\left(\theta_{\hat{k}^{\prime}}, \phi_{\hat{k}^{\prime}}\right)
\end{align*}
$$

and find,

$$
\begin{align*}
\tilde{\alpha} \lambda_{\sigma}(\boldsymbol{k}) F=\alpha \lambda_{\sigma}(\boldsymbol{k}) F-N\left(\epsilon_{F}\right) \sum_{l^{\prime}=0}^{\infty} \frac{f_{l^{\prime}}^{s}}{2 l^{\prime}+1} \sum_{m^{\prime}=-l^{\prime}}^{+l^{\prime}} Y_{l^{\prime} m^{\prime}}\left(\theta_{\hat{k}}, \phi_{\hat{k}}\right) \tilde{\alpha} \underbrace{\int d \Omega_{{k^{\prime}}^{\prime}} Y_{l^{\prime} m^{\prime}}^{*}\left(\theta_{\hat{k}^{\prime}}, \phi_{\hat{k}^{\prime}}\right) \lambda_{\sigma}\left(\boldsymbol{k}^{\prime}\right)}_{\delta_{l l^{\prime}} \delta_{m m^{\prime}}} F
\end{align*}
$$
which leads straightforwardly to
$$
\begin{align*}
\tilde{\alpha}=\alpha-\tilde{\alpha} \frac{F_{l}^{s}}{2 l+1} \quad \Rightarrow \quad \tilde{\alpha}=\frac{\alpha}{1+\frac{F_{l}^{s}}{2 l+1}}
\end{align*}
$$

Now the polarisation is calculated which we may define as
$$
\begin{align*}
\begin{aligned}
P & =\frac{1}{\Omega} \sum_{\boldsymbol{k}, \sigma} \alpha \lambda_{\sigma}(\boldsymbol{k})^{*} \delta n_{\sigma}(\boldsymbol{k})=\frac{1}{\Omega} \sum_{\boldsymbol{k}, \sigma} \alpha \lambda_{\sigma}(\boldsymbol{k})^{*} \frac{\partial n_{\sigma}}{\partial \tilde{\epsilon}_{\sigma}(\boldsymbol{k})} \delta \tilde{\epsilon}_{\sigma}(\boldsymbol{k})=\frac{1}{\Omega} \sum_{\boldsymbol{k}, \sigma} \alpha \delta\left(\epsilon_{\sigma}(\boldsymbol{k})-\epsilon_{F}\right) \tilde{\alpha}|\lambda(\boldsymbol{k})|^{2} F \\
& =\alpha \tilde{\alpha} N\left(\epsilon_{F}\right) F \int \frac{d \Omega_{\boldsymbol{k}}}{4 \pi}|\lambda(\boldsymbol{k})|^{2}=\frac{\alpha \tilde{\alpha} N\left(\epsilon_{F}\right) F}{4 \pi}
\end{aligned}
\end{align*}
$$
such that the linear response is given by
$$
\begin{align*}
\chi=\frac{P}{F}=\frac{\alpha^{2} N\left(\epsilon_{F}\right)}{4 \pi\left(1+\frac{F_{i}^{s}}{2 l+1}\right)}.
\end{align*}
$$

Stability of the Fermi liquid against any of these deformations requires
$$
\begin{align*}
1+\frac{F_{l}^{s, a}}{2 l+1}>0
\end{align*}
$$

If for any deformation channel $l$ this conditions is violated one talks about a "Pomeranchuck instability".Generally, the renormalisation of the Fermi liquid leads to a change in the Wilson ratio, defined as
$$
\begin{align*}
\frac{R}{R_{0}}=\frac{\chi}{\chi_{0}} \frac{\gamma_{0}}{\gamma}=\frac{1}{1+F_{0}^{a}}
\end{align*}
$$
where $R_{0}=\chi_{0} / \gamma_{0}=6 \mu_{B}^{2} / \pi^{2} k_{B}^{2}$. Note that the Wilson ratio does not depend on the effective mass. A remarkable feature of the Fermi liquid theory is that even very strongly interacting Fermions remain Fermi liquids, notably the quantum liquid ${ }^{3} \mathrm{He}$ and so-called heavy Fermion systems, which are compounds of transition metals and rare earths. Both are strongly renormalised Fermi liquids. For ${ }^{3} \mathrm{He}$ we give some of the parameters in Table 5.1 both for zero pressure and for pressures just below the critical pressure at which He solidifies ( $p_{c} \approx 2.5 \mathrm{MPa}=25 \mathrm{bar}$ ).

| Pressure  | $m^{*} / m$ | $F_{0}^{s}$ | $F_{0}^{a}$ | $F_{1}^{s}$ | $\kappa / \kappa_{0}$ | $\chi / \chi_{0}$ |
| :-------: | :---------: | :---------: | :---------: | :---------: | :-------------------: | :---------------: |
|   $p=0$   |     3.0     |    10.1     |    -0.52    |     6.0     |         0.27          |        6.3        |
| $p<p_{c}$ |     6.2     |     94      |    -0.74    |    15.7     |         0.065         |        24         |

The trends show obviously, that the higher the applied pressure is, the denser the liquid becomes and the stronger the quasi-particles interact. Approaching the solidification the compressibility is reduced, the quasi-particles become heavier (slower) and the magnetic response increases drastically. Finally the heavy Fermion systems are characterised by the extraordinary enhancements of the effective mass which for many of these compounds lie between 100 and 1000 times higher than the bare electron mass (e.g. $\mathrm{CeAl}_{3}, \mathrm{UBe}_{13}$, etc.). This large masses lead the notion of almost localised Fermi liquids, since the large effective mass is induced by the hybridisation of itinerant conduction electrons with strongly interacting (localised) electron states in partially filled $4 f$ - or $5 f$-orbitals of Lanthanide and Actinide atoms, respectively.

---
## 5.3 Microscopic Considerations
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=121&selection=165,0,167,26|•]]

A rigorous derivation of Landau's Fermi liquid theory requires methods of quantum field theory and would go beyond the scope of these lectures. However, plain Rayleigh-Schrödinger theory applied to a simple model allows to gain some insights into the microscopic fundament of this phenomenologically based theory. In the following, we consider a model of Fermions with contact interaction $U \delta\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)$, described by the Hamiltonian
$$
\begin{align*}
\begin{aligned}
\mathcal{H} & =\sum_{\boldsymbol{k}, s} \epsilon_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} \boldsymbol{s}}+\int d^{3} r d^{3} r^{\prime} \widehat{\Psi}_{\uparrow}(\boldsymbol{r})^{\dagger} \widehat{\Psi}_{\downarrow}\left(\boldsymbol{r}^{\prime}\right)^{\dagger} U \delta\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{\downarrow}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{\uparrow}(\boldsymbol{r}) \\
& =\sum_{\boldsymbol{k}, s} \epsilon_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} \boldsymbol{s}}+\frac{U}{\Omega} \sum_{\boldsymbol{k}, \boldsymbol{k}, \boldsymbol{k}, \boldsymbol{q}} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q} \uparrow}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime}-\boldsymbol{q} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime} \downarrow} \widehat{c}_{\boldsymbol{k} \uparrow} .
\end{aligned}
\end{align*}
$$
where $\epsilon_{\boldsymbol{k}}=\hbar^{2} \boldsymbol{k}^{2} / 2 m$ is a parabolic dispersion of non-interacting electrons. We previously noticed that, in order to find well-defined quasi-particles, the interaction between the Fermions has to be short ranged. This specially holds for the contact interaction.

### 5.3.1 Landau Parameters

Starting form the Hamiltonian before, we will determine Landau parameters for a corresponding Fermi liquid theory. For a given momentum distribution $n_{\boldsymbol{k} s}=\left\langle c_{\boldsymbol{k} s}^{\dagger} c_{\boldsymbol{k} s}\right\rangle=n_{\boldsymbol{k} s}^{(0)}+\delta n_{\boldsymbol{k} s}$, we can expand the energy resulting form equation (5.87) following the Rayleigh-Schrödinger perturbation
method,
$$
\begin{align*}
E=E^{(0)}+E^{(1)}+E^{(2)}+\cdots
\end{align*}
$$
with
$$
\begin{align*}
\begin{aligned}
& E^{(0)}=\sum_{\boldsymbol{k}, \boldsymbol{s}} \epsilon_{\boldsymbol{k}} n_{\boldsymbol{k} \boldsymbol{s}}, \\
& E^{(1)}=\frac{U}{\Omega} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}} n_{\boldsymbol{k} \uparrow} n_{\boldsymbol{k}^{\prime} \downarrow}, \\
& E^{(2)}=\frac{U^{2}}{\Omega^{2}} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}, \boldsymbol{q}} \frac{n_{\boldsymbol{k} \uparrow} n_{\boldsymbol{k}^{\prime} \downarrow}\left(1-n_{\boldsymbol{k}+\boldsymbol{q} \uparrow}\right)\left(1-n_{\boldsymbol{k}^{\prime}-\boldsymbol{q} \downarrow}\right)}{\epsilon_{\boldsymbol{k}}+\epsilon_{\boldsymbol{k}^{\prime}}-\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}^{\prime}-\boldsymbol{q}}} .
\end{aligned}
\end{align*}
$$

The second order term $E^{(2)}$ describes virtual processes corresponding to a pair of particle-hole excitations. The numerator of this term can be split into four different contributions.
We first consider the term quadratic in $n_{\boldsymbol{k}}$ and combine it with the first order term $E^{(1)}$, which has the same structure,
$$
\begin{align*}
\tilde{E}^{(1)}=E^{(1)}+\frac{U^{2}}{\Omega^{2}} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}, \boldsymbol{q}} \frac{n_{\boldsymbol{k} \uparrow} n_{\boldsymbol{k}^{\prime} \downarrow}}{\epsilon_{\boldsymbol{k}}+\epsilon_{\boldsymbol{k}^{\prime}}-\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}^{\prime}-\boldsymbol{q}}} \approx \frac{\tilde{U}}{\Omega} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}} n_{\boldsymbol{k} \uparrow} n_{\boldsymbol{k}^{\prime} \downarrow} .
\end{align*}
$$

In the last step, we defined the renormalised interaction $\tilde{U}$ through,
$$
\begin{align*}
\tilde{U}=U+\frac{U^{2}}{\Omega} \sum_{\boldsymbol{q}} \frac{1}{\epsilon_{\boldsymbol{k}}+\epsilon_{\boldsymbol{k}^{\prime}}-\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}^{\prime}-\boldsymbol{q}}}
\end{align*}
$$

In principle, $\tilde{U}$ depends on the wave vectors $\boldsymbol{k}$ and $\boldsymbol{k}^{\prime}$. However, when the wave vectors are restricted to the Fermi surface $\left(|\boldsymbol{k}|=\left|\boldsymbol{k}^{\prime}\right|=k_{F}\right)$, and if the range of the interaction $\ell$ is small compared to the mean electron spacing, i.e., $k_{F} \ell \ll 1,$ this dependency may be neglected.
We should be careful with our choice of a contact interaction, since it would lead to a divergence in the large- $q$ range. A cutoff for $q$ of order $Q_{c} \sim \ell^{-1}$ would regularise the integral which is dominated by the large- $q$ part. Thus we may use the following expansion,

$$
\begin{aligned}
\frac{1}{\Omega} \sum_{\boldsymbol{q}} \frac{1}{\epsilon_{\boldsymbol{k}}+\epsilon_{\boldsymbol{k}^{\prime}}-\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}^{\prime}-\boldsymbol{q}}} 
&= \frac{1}{(2 \pi)^{3} \hbar^{2}} \int_{0}^{Q_{c}} d q \, q^{2} \int d \Omega_{q} \frac{m}{\left(\boldsymbol{k}^{\prime}-\boldsymbol{k}\right) \cdot \boldsymbol{q} - \boldsymbol{q}^{2}} \\
&= \frac{m}{(2 \pi)^{2} \hbar^{2}} \int d q \, q \int_{-1}^{+1} \frac{d \cos \theta}{K \cos \theta - q} \\
&= \frac{m}{(2 \pi)^{2} \hbar^{2}} \int_{0}^{Q_{c}} d q \, q \ln \left| \frac{q-K}{q+K} \right| \\
&= -\frac{m}{(2 \pi)^{2} \hbar^{2}} \left( Q_{c} + \frac{K^{2} - Q_{c}^{2}}{2 K} \ln \left| \frac{Q_{c} - K}{Q_{c} + K} \right| \right) \\
&\approx -\frac{2 m Q_{c}}{(2 \pi)^{2} \hbar^{2}} \left( 1 - \frac{K^{2}}{Q_{c}^{2}} + O\left(\frac{K^{4}}{Q_{c}^{4}}\right) \right) \\
&= -N(\epsilon_{F}) \frac{Q_{c}}{2 k_{F}} \left( 1 - \frac{K^{2}}{Q_{c}^{2}} + O\left(\frac{K^{4}}{Q_{c}^{4}}\right) \right).
\end{aligned}
$$

where we use $K=\left|\boldsymbol{k}^{\prime}-\boldsymbol{k}\right| \leq 2 k_{F} \ll Q_{c}$. From this we conclude that the momentum dependence of $\tilde{U}$ is indeed weak.
Since the term quartic in $n_{\boldsymbol{k}}$ vanishes due to symmetry, the remaining contribution to $E^{(2)}$ is cubic in $n_{\boldsymbol{k}}$ and reads
$$
\begin{align*}
\tilde{E}^{(2)}=-\frac{\tilde{U}^{2}}{\Omega^{2}} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}, \boldsymbol{q}} \frac{n_{\boldsymbol{k} \uparrow} n_{\boldsymbol{k}^{\prime} \downarrow}\left(n_{\boldsymbol{k}+\boldsymbol{q} \uparrow}+n_{\boldsymbol{k}^{\prime}-\boldsymbol{q} \downarrow}\right)}{\epsilon_{\boldsymbol{k}}+\epsilon_{\boldsymbol{k}^{\prime}}-\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}^{\prime}-\boldsymbol{q}}} .
\end{align*}
$$

We replaced $U^{2}$ by $\tilde{U}^{2}$, which is admissible at this order of the perturbative expansion. The variation of the energy $E$ with respect to $\delta n_{\boldsymbol{k} \uparrow}$ can easily be calculated,
$$
\begin{align*}
\tilde{\epsilon}_{\uparrow}(\boldsymbol{k})=\epsilon_{\boldsymbol{k}}+\frac{\tilde{U}}{\Omega} \sum_{\boldsymbol{k}^{\prime}} n_{\boldsymbol{k}^{\prime} \downarrow}-\frac{\tilde{U}^{2}}{\Omega^{2}} \sum_{\boldsymbol{k}^{\prime}, \boldsymbol{q}} \frac{n_{\boldsymbol{k}^{\prime} \downarrow}\left(n_{\boldsymbol{k}+\boldsymbol{q} \uparrow}+n_{\boldsymbol{k}^{\prime}-\boldsymbol{q} \downarrow}\right)-n_{\boldsymbol{k}+\boldsymbol{q} \uparrow} n_{\boldsymbol{k}^{\prime}-\boldsymbol{q} \downarrow}}{\epsilon_{\boldsymbol{k}}+\epsilon_{\boldsymbol{k}^{\prime}}-\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}^{\prime}-\boldsymbol{q}}},
\end{align*}
$$
and an analogous expression is found for $\epsilon_{\downarrow}(\boldsymbol{k})$. The coupling parameters $f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)$ may be determined using the definition (5.26). Starting with $f_{\uparrow \uparrow}\left(\boldsymbol{k}_{F}, \boldsymbol{k}_{F}^{\prime}\right)$ with wave-vectors on the Fermi surface $\left(\left|\boldsymbol{k}_{F}\right|=\left|\boldsymbol{k}_{F}^{\prime}\right|=k_{F}\right)$, the terms contributing to the coupling can be written as
$$
\begin{align}
\begin{gathered}
& \frac{\tilde{U}^{2}}{\Omega^{2}} \sum_{\boldsymbol{k}^{\prime}, \boldsymbol{q}} n_{\boldsymbol{k}+\boldsymbol{q} \uparrow} \frac{n_{\boldsymbol{k}^{\prime}-\boldsymbol{q} \downarrow}-n_{\boldsymbol{k}^{\prime} \downarrow}}{\epsilon_{\boldsymbol{k}}+\epsilon_{\boldsymbol{k}^{\prime}}-\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}^{\prime}-\boldsymbol{q}}}\\  &\stackrel{\stackrel{\boldsymbol{k}+\boldsymbol{q}\rightarrow \boldsymbol{k}_{F}^{\prime}} {\longrightarrow}}{ } \frac{1}{\Omega} \sum_{\boldsymbol{k}_{F}^{\prime}} n_{\boldsymbol{k}_{F}^{\prime} \uparrow} \frac{\tilde{U}^{2}}{\Omega} \left.\sum_{\boldsymbol{k}^{\prime}} \frac{n_{\boldsymbol{k}^{\prime}-\boldsymbol{q} \downarrow}^{(0)}-n_{\boldsymbol{k}^{\prime} \downarrow}^{(0)}}{\epsilon_{\boldsymbol{k}^{\prime}}-\epsilon_{\boldsymbol{k}^{\prime}-\boldsymbol{q}}}\right|_{\boldsymbol{q}=\boldsymbol{k}_{F}^{\prime}-\boldsymbol{k}_{F}} \\
&=-\frac{1}{\Omega} \sum_{\boldsymbol{k}_{F}^{\prime}} n_{\boldsymbol{k}_{F}^{\prime} \uparrow} \frac{\tilde{U}^{2}}{2} \chi_{0}\left(\boldsymbol{k}_{F}^{\prime}-\boldsymbol{k}_{F}\right),
\end{gathered}
\end{align}
$$
where we consider $n_{\boldsymbol{k}_{F}^{\prime} \uparrow}=n_{\boldsymbol{k}_{F}^{\prime} \uparrow}^{(0)}+\delta n_{\boldsymbol{k}_{F}^{\prime} \uparrow}$. Note that the part in this term which depends on $n_{\boldsymbol{k}_{F}^{\prime} \uparrow}^{(0)}$ will contribute the ground state energy in Landau's energy functional. Here, $\chi_{0}(\boldsymbol{q})$ is the static Lindhard susceptibility as it was defined in (3.63). With the help of equation (5.26), it follows immediately, that
$$
\begin{align*}
f_{\uparrow \uparrow}\left(\boldsymbol{k}_{F}, \boldsymbol{k}_{F}^{\prime}\right)=f_{\downarrow \downarrow}\left(\boldsymbol{k}_{F}, \boldsymbol{k}_{F}^{\prime}\right)=\frac{\tilde{U}^{2}}{2} \chi_{0}\left(\boldsymbol{k}_{F}-\boldsymbol{k}_{F}^{\prime}\right) .
\end{align*}
$$

The other couplings are obtained in a similar way, resulting in
$$
\begin{align*}
f_{\uparrow \downarrow}\left(\boldsymbol{k}_{F}, \boldsymbol{k}_{F}^{\prime}\right)=f_{\downarrow \uparrow}\left(\boldsymbol{k}_{F}, \boldsymbol{k}_{F}^{\prime}\right)=\tilde{U}-\frac{\tilde{U}^{2}}{2}\left[2 \tilde{\chi}_{0}\left(\boldsymbol{k}_{F}+\boldsymbol{k}_{F}^{\prime}\right)-\chi_{0}\left(\boldsymbol{k}_{F}-\boldsymbol{k}_{F}^{\prime}\right)\right],
\end{align*}
$$
where the function $\tilde{\chi}_{0}(\boldsymbol{q})$ is defined as
$$
\begin{align*}
\tilde{\chi}_{0}(\boldsymbol{q})=\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}} \frac{n_{\boldsymbol{k}^{\prime}+\boldsymbol{q} \uparrow}^{(0)}+n_{\boldsymbol{k}^{\prime} \downarrow}^{(0)}}{2 \epsilon_{F}-\epsilon_{\boldsymbol{k}^{\prime}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}^{\prime}}}
\end{align*}
$$

If the couplings are be parameterised by the angle $\theta$ between $\boldsymbol{k}_{F}$ and $\boldsymbol{k}_{F}^{\prime}$, they can be expressed as
$$
\begin{align*}
\begin{aligned}
f_{\sigma \sigma^{\prime}}(\theta)=\frac{\tilde{U}}{2} & {\left[\left(1+\frac{\tilde{U} N\left(\epsilon_{F}\right)}{4}\left(2+\frac{\cos \theta}{2 \sin (\theta / 2)} \ln \frac{1+\sin (\theta / 2)}{1-\sin (\theta / 2)}\right)\right) \delta_{\sigma \sigma^{\prime}}\right.} \\
& \left.-\left(1+\frac{\tilde{U} N\left(\epsilon_{F}\right)}{4}\left(1-\frac{\sin (\theta / 2)}{2} \ln \frac{1+\sin (\theta / 2)}{1-\sin (\theta / 2)}\right)\right) \sigma \sigma^{\prime}\right] .
\end{aligned}
\end{align*}
$$

Finally, we are in the position to determine the most important Landau parameters by matching the expressions (5.102) and (5.103) to the parametrisation (5.105),
$$
\begin{align*}
\begin{aligned}
F_{0}^{s} & =\tilde{u}\left[1+\tilde{u}\left[1+\frac{1}{6}(2+\ln (2))\right]\right] \\
F_{0}^{a} & =-\tilde{u}\left[1+\tilde{u}\left[1-\frac{2}{3}(1-\ln (2))\right]\right] \\
F_{1}^{s} & =\tilde{u}^{2} \frac{2}{15}(7 \ln (2)-1)
\end{aligned}
\end{align*}
$$
where $\tilde{u}=\tilde{U} N\left(\epsilon_{F}\right) / 2$ has been introduced for better readability. Since the Landau parameter $F_{1}^{s}$ is responsible for the modification of the effective mass $m^{*}$ compared to the bare mass $m$, $m^{*}$ is enhanced compared to $m$ for both attractive $(U<0)$ and repulsive $(U>0)$ interactions. Obviously, the sign of the interaction $U$ does not affect the renormalisation of the effective mass $m^{*}$. This is so, because the existence of an interaction (whatever sign it has) between the particles enforces the motion of many particles whenever one is moved. The behaviour of the susceptibility and the compressibility depends on the sign of the interaction. If the interaction is repulsive $(\tilde{u}>0)$, the compressibility decreases $\left(F_{0}^{s}>0\right)$, implying that it is harder to compress the Fermi liquid. The susceptibility is enhanced $\left(F_{0}^{a}<0\right)$ in this case, so that it is easier to polarise the spins of the electrons. Conversely, for attractive interactions ( $\tilde{u}<0$ ), the compressibility is enhanced due to a negative Landau parameter $F_{0}^{s}$, whereas the susceptibility is suppressed with a factor $1 /\left(1+F_{0}^{a}\right)$, with $F_{0}^{a}>0$. The attractive case is more subtle because the Fermi liquid becomes unstable at low temperatures, turning into a superfluid or superconductor, by forming so-called Cooper pairs. This represents another non-trivial Fermi surface instability.

### 5.3.2 Distribution Function

Finally, we examine the effect of interactions on the ground state properties, using again Rayleigh-Schrödinger perturbation theory. The calculation of the corrections to the ground state $\left|\Psi_{0}\right\rangle$, the filled Fermi sea can be expressed as
$$
\begin{align*}
|\Psi\rangle=\left|\Psi^{(0)}\right\rangle+\left|\Psi^{(1)}\right\rangle+\cdots
\end{align*}
$$
where
$$
\begin{align*}
\begin{aligned}
\left|\Psi^{(0)}\right\rangle & =\left|\Psi_{0}\right\rangle \\
\left|\Psi^{(1)}\right\rangle & =\frac{U}{\Omega} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}, \boldsymbol{q}} \sum_{s, s^{\prime}} \frac{\widehat{c}_{\boldsymbol{k}+\boldsymbol{q}, s}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime}-\boldsymbol{q}, s^{\prime}}^{\dagger}{\widehat{\boldsymbol{k}^{\prime}, s^{\prime}}}^{\epsilon_{\boldsymbol{k}}} \widehat{c}_{\boldsymbol{k}, s}}{\epsilon_{\boldsymbol{k}^{\prime}}-\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}^{\prime}-\boldsymbol{q}}}\left|\Psi_{0}\right\rangle
\end{aligned}
\end{align*}
$$

The state $\left|\Psi_{0}\right\rangle$ represents the ground state of non-interacting Fermions. The lowest order correction involves particle-hole excitations, depleting the Fermi sea by lifting particles virtually above the Fermi energy. How the correction (5.112) affects the distribution function, will be discussed next. The momentum distribution $n_{\boldsymbol{k} s}=\left\langle\widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s}\right\rangle$ is obtain as the expectation value,
$$
\begin{align*}
n_{\boldsymbol{k} s}=\frac{\langle\Psi| \wedge_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s}|\Psi\rangle}{\langle\Psi \mid \Psi\rangle}=n_{\boldsymbol{k} s}^{(0)}+\delta n_{\boldsymbol{k} s}^{(2)}+\cdots
\end{align*}
$$
where $n_{\boldsymbol{k s}}^{(0)}$ is the unperturbed distribution $\Theta\left(k_{F}-|\boldsymbol{k}|\right)$, and
$$
\begin{align*}
\delta n_{\boldsymbol{k} s}^{(2)}=\left\{\begin{array}{ll}
-\frac{U^{2}}{\Omega^{2}} \sum_{\boldsymbol{k}_{1}, \boldsymbol{k}_{2}, \boldsymbol{k}_{3}} \frac{\left(1-n_{\boldsymbol{k}_{1}}\right)\left(1-n_{\boldsymbol{k}_{2}}\right) n_{\boldsymbol{k}_{3}}}{\left(\epsilon_{\boldsymbol{k}}+\epsilon_{\boldsymbol{k}_{3}}-\epsilon_{\boldsymbol{k}_{1}}-\epsilon_{\boldsymbol{k}_{2}}\right)^{2}} \delta_{\boldsymbol{k}+\boldsymbol{k}_{3}, \boldsymbol{k}_{1}+\boldsymbol{k}_{2}} & |\boldsymbol{k}|<k_{F} \\
\frac{U^{2}}{\Omega^{2}} \sum_{\boldsymbol{k}_{1}, \boldsymbol{k}_{2}, \boldsymbol{k}_{3}} \frac{n_{\boldsymbol{k}_{1}} n_{\boldsymbol{k}_{2}}\left(1-n_{\boldsymbol{k}_{3}}\right)}{\left(\epsilon_{\boldsymbol{k}_{1}}+\epsilon_{\boldsymbol{k}_{2}}-\epsilon_{\boldsymbol{k}}-\epsilon_{\boldsymbol{k}_{3}}\right)^{2}} \delta_{\boldsymbol{k}+\boldsymbol{k}_{3}, \boldsymbol{k}_{1}+\boldsymbol{k}_{2}} & |\boldsymbol{k}|>k_{F}
\end{array} .\right.
\end{align*}
$$

This yields the modification of the distribution functions as shown here: 

![Attachments/Script 57.webp|700](/img/user/Attachments/Script%2057.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=125&rect=151,587,445,707|•]]

It allows us also to determine the size of the discontinuity of the distribution function at the Fermi surface,
$$
\begin{align*}
n_{\boldsymbol{k}_{F^{-}}}-n_{\boldsymbol{k}_{F}{ }^{+}}=1-\left(\frac{U N\left(\epsilon_{F}\right)}{2}\right)^{2} \ln (2),
\end{align*}
$$
where
$$
\begin{align*}
n_{\boldsymbol{k}_{F^{ \pm}}}=\lim _{|\boldsymbol{k}|-k_{F} \rightarrow 0_{ \pm}}\left(n_{\boldsymbol{k}}^{(0)}+\delta n_{\boldsymbol{k}}^{(2)}\right) .
\end{align*}
$$

The jump of $n_{\boldsymbol{k}}$ at the Fermi surface is reduced independently of the sign of the interaction. The reduction is quadratic in the perturbation parameter $U N\left(\epsilon_{F}\right)$. This jump is also a measure for the weight of the quasi-particle state at the Fermi surface.

### 5.3.3 Fermi Liquid in One Dimension?

Within a perturbative approach the Fermi liquid theory can be justified for a three-dimensional system and we recognise the one-to-one correspondence between bare electrons and quasi-particles renormalised by (short-ranged) interactions. Now we would like to show that within the same approach problems appear in one-dimensional systems, which are conceptional nature and hint that interaction Fermions in one dimension would not form a Fermi liquid, but a Luttinger liquid, as we will motivate briefly below.
The Landau parameters have been expressed above in terms of the response functions $\chi_{0}(\boldsymbol{q}=$ $\left.\boldsymbol{k}_{F}-\boldsymbol{k}_{F}^{\prime}\right)$ and $\tilde{\chi}_{0}\left(\boldsymbol{q}=\boldsymbol{k}_{F}-\boldsymbol{k}_{F}^{\prime}\right)$. For the one-dimensional system, as given in Eqs.(5.102-5.104), the relevant contributions come from two configurations, since there are two Fermi points only (instead of a two-dimensional Fermi surface),
$$
\begin{align*}
\left(k_{F}, k_{F}^{\prime}\right) \quad \Rightarrow \quad q=k_{F}-k_{F}^{\prime}=0, \pm 2 k_{F} .
\end{align*}
$$

We find that the response functions show singularities for some of these momenta, and we obtain
$$
\begin{align*}
f_{\uparrow \uparrow}\left( \pm k_{F}, \pm k_{F}\right)=f_{\downarrow \downarrow}\left( \pm k_{F}, \mp k_{F}\right) \rightarrow \infty
\end{align*}
$$
as well as
$$
\begin{align*}
f_{\uparrow \downarrow}\left(k_{F}, \pm k_{F}\right)=f_{\downarrow \uparrow}\left(k_{F}, \mp k_{F}\right) \rightarrow \infty
\end{align*}
$$
giving rise to the divergence of all Landau parameters. Therefore the perturbative approach to a Landau Fermi liquid is not allowed for the one-dimensional Fermi system.

The same message is obtained when looking at the momentum distribution form which had in three dimensions a step giving a measure for the (reduced but finite) quasi-particle weight. The analogous calculation as in Sect.5.3.2 leads here to
$$
\begin{align*}
n_{\boldsymbol{k s}}^{(2)} \approx\left\{\begin{array}{cl}
\frac{1}{8 \pi^{2}} \frac{U^{2}}{\hbar^{2} v_{F}^{2}} \ln \frac{k_{+}}{k-k_{F}} & k>k_{F} \\
-\frac{1}{8 \pi^{2}} \frac{U^{2}}{\hbar^{2} v_{F}^{2}} \ln \frac{k_{-}}{k_{F}-k} & k<k_{F}
\end{array} .\right.
\end{align*}
$$

Here, $k_{ \pm}$are cutoff parameters of the order of the Fermi wave vector $k_{F}$. Apparently the quality of the perturbative calculation deteriorates as $k \rightarrow k_{F \pm}$, since we encounter a logarithmic divergence from both sides.

![Attachments/Script 58.webp|700](/img/user/Attachments/Script%2058.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=126&rect=164,443,427,582|•]]

Indeed, a more elaborated approach shows that the distribution function is continuous at $k=k_{F}$ in one dimension, without any jump. Correspondingly, the quasi-particle weight vanishes and the elementary excitations cannot be described by Fermionic quasi-particles but rather by collective modes. Landau's Theory of Fermi liquids is inappropriate for such systems. This kind of behaviour, where the quasi-particle weight vanishes, can be described by the so-called bosonisation of Fermions in one dimension, a topic that is beyond the scope of these lectures. However, a result worth mentioning, shows that the Fermionic excitations in one dimensions decay into independent charge and spin excitations, the so-called spin-charge separation. This behaviour can be understood with the naive picture of a half-filled lattice with predominantly antiferromagnetic spin correlations. In this case both charge excitations (empty or doubly occupied lattice site) and spin excitations (two parallel neighbouring spins) represent different kinds of domain walls, and are free to move at different velocities.

---