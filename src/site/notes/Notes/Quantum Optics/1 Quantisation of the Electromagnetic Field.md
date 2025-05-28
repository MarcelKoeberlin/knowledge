---
{"dg-publish":true,"permalink":"/notes/quantum-optics/1-quantisation-of-the-electromagnetic-field/","hide":"true","updated":"2025-04-05T17:25:07.000+02:00"}
---

Jump back to ==[[Notes/Quantum Optics/Quantum Optics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Quantum Optics/1 Quantisation of the Electromagnetic Field#1.1 Maxwell Equations\|1.1 Maxwell Equations]]
- [[Notes/Quantum Optics/1 Quantisation of the Electromagnetic Field#1.2 Coulomb Gauge\|1.2 Coulomb Gauge]]
- [[Notes/Quantum Optics/1 Quantisation of the Electromagnetic Field#1.3 Canonical Quantisation\|1.3 Canonical Quantisation]]
- [[Notes/Quantum Optics/1 Quantisation of the Electromagnetic Field#1.4 Diagonalisation of the Hamiltonian\|1.4 Diagonalisation of the Hamiltonian]]

---
# 1 Quantisation of the Electromagnetic Field
[[Courses/1. Semester/Quantum Optics/QO_Home.pdf#page=9&selection=2,0,2,30|•]]

## 1.1 Maxwell Equations
[[Courses/1. Semester/Quantum Optics/QO_Home.pdf#page=9&selection=2,0,2,30|•]]

The starting point for any discussion about optics is by starting with the classical Maxwell equations. This is not different in the field of Quantum Optics, where it is even more important to have a basic understanding of the process of quantisation. It is simple to outline three tasks that we have to fulfil in order to successfully quantise the electromagnetic field:
1. We need to identify the independent generalised coordinates,
2. we need to find the corresponding conjugate momenta, and
3. we need to introduce the canonical commutation relation between the operators which correspond to these quantities.

With that, lets start by considering the Maxwell equations for the free electromagnetic field with no charges:
$$
\begin{aligned}
\nabla \cdot \mathbf{E}(\mathbf{r}, t) & =0 \\
\nabla \cdot \mathbf{B}(\mathbf{r}, t) & =0 \\
\nabla \times \mathbf{E}(\mathbf{r}, t) & =-\frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t} \\
\nabla \times \mathbf{B}(\mathbf{r}, t) & =\frac{1}{c^2} \frac{\partial \mathbf{E}(\mathbf{r}, t)}{\partial t}.
\end{aligned}
$$
As we will see later, it will be useful to write the electric field in the reciprocal space, by Fourier transforming the original field:
$$
\begin{aligned}
\tilde{\mathbf{E}}(\mathbf{k}, t) & =\frac{1}{(2 \pi)^{3 / 2}} \int_{-\infty}^{\infty} \mathrm{d}^3 r \mathbf{E}(\mathbf{r}, t) e^{-i \mathbf{k} \cdot \mathbf{r}} \\
\mathbf{E}(\mathbf{r}, t) & =\frac{1}{(2 \pi)^{3 / 2}} \int_{-\infty}^{\infty} \mathrm{d}^3 k \tilde{\mathbf{E}}(\mathbf{k}, t) e^{i \mathbf{k} \cdot \mathbf{r}}.
\end{aligned}
$$
The expression for the magnetic field $\textbf{B}$ is similar. Note that the electric field is real (we can measure it!), and therefore we have
$$
\tilde{\mathbf{E}}^*(\mathbf{k}, t)=\tilde{\mathbf{E}}(-\mathbf{k}, t) .
$$
This is important, since it is a constraint and we thus did **not** double the number of variables to describe our system  by introducing complex quantities. 
Using the Fourier transform, we find the Maxwell equations in reciprocal space:
$$
\begin{aligned}
i \mathbf{k} \cdot \tilde{\mathbf{E}} & =0 \\
i \mathbf{k} \cdot \tilde{\mathbf{B}} & =0 \\
i \mathbf{k} \times \tilde{\mathbf{E}} & =-\tilde{\mathbf{B}} \\
i \mathbf{k} \times \tilde{\mathbf{B}} & =\frac{1}{c^2} \tilde{\mathbf{E}}.
\end{aligned}
$$
The really important point that is worth stressing, is that these are local in k-space! This means that no spatial derivative operator appears, which, we will soon see, is useful to formulate a quantum theory of light, 

---
## 1.2 Coulomb Gauge
[[Courses/1. Semester/Quantum Optics/QO_Home.pdf#page=10&selection=123,0,125,13|•]]

The structure of the Maxwell equations is such that the electric and magnetic field can always be derived from the vector and scalar potentials:

$$
\begin{aligned}
\mathbf{B} & =\nabla \times \mathbf{A} \\
\mathbf{E} & =-\frac{\partial \mathbf{A}}{\partial t}-\nabla U,
\end{aligned}
$$
which, in Fourier space, yields

$$
\begin{aligned}
\tilde{\mathbf{B}} & =i \mathbf{k} \times \tilde{\mathbf{A}} \\
\tilde{\mathbf{E}} & =-\frac{\partial \tilde{\mathbf{A}}}{\partial t}-i \mathbf{k} \tilde{U}
\end{aligned}
$$
There is now a freedom in the **Gauge** that we chose, and we choose the Coulomb gauge:

$$
\nabla \cdot \mathbf{A}=0 \Longrightarrow \mathbf{k} \cdot \tilde{\mathbf{A}}=0
$$
The effect is that we can now divide the electric field equation into two parts:
1. The part parallel to $\textbf{k}$: 
	$$ \tilde{\mathbf{E}}_{\text {perp }}=-\frac{\partial \tilde{\mathbf{A}}}{\partial t} $$
2. The part perpendicular to $\textbf{k}$: 
	$$ \tilde{\mathbf{E}}_{\text {perp }}=-\frac{\partial \tilde{\mathbf{A}}}{\partial t} $$

Both these results are general meaning that they hold in the presence of charges too. Consider as well the first equation of the Maxwell equations in the presence of a charge density: 

$$
\mathbf{k} \cdot \tilde{\mathbf{E}}=|\mathbf{k}| \tilde{\mathbf{E}}_{\text {parallel }}=\frac{\bar{\rho}}{\epsilon_0} .
$$
Therefore, there exists a relation between the parallel component of the Fourier transformed electric field, and the charge density. Obviously then, the charge density is also directly connected to the scalar potential in reciprocal space. This has implications: The scalar potential is not a free parameter of the field anymore, since it is dependent on charge position and momenta. Therefore, it is ignored in the free-field quantisation below. 

---
## 1.3 Canonical Quantisation
[[Courses/1. Semester/Quantum Optics/QO_Home.pdf#page=11&selection=57,0,59,22|•]]

The next step towards the quantisation of the electromagnetic field is 'finding' a suitable Lagrangian $L$. Here, we will choose it such that the Euler-Lagrange equations give the free-field Maxwell equations:

$$
L(\mathbf{r})=\frac{\varepsilon_0}{2} \int \mathrm{~d}^3 r\left[\mathbf{E}^2(\mathbf{r}, t)-c^2 \mathbf{B}^2(\mathbf{r}, t)\right].
$$
Rewriting this in terms the vector potential and making use of the Coulomb gauge $\nabla \cdot \mathbf{A}=0$, we may simplify the expression to 

$$
L(\mathbf{r})=\frac{\varepsilon_0}{2} \int \mathrm{~d}^3 r\left[\dot{A}^2(\mathbf{r})-c^2(\nabla \times \mathbf{A}(\mathbf{r}))^2\right].
$$
A few noteworthy things on this form of the Lagrangian:
- The Lagrangian depends on a single field variable $\textbf{r}$ and also its time-derivative. However, unlike the Lagrangian of a particle, determining $L(\mathbf{r})$ requires the value of $\mathbf{A}(\mathbf{r})$ for all $\mathbf{r}$.
- Although we would like to form generalised co-ordinates, the different vector components of $\mathbf{A}$ are not linearly independent, since $\nabla \cdot \mathbf{A}=0$. The components of $\mathbf{A}$ span a two-dimensional vector space - these are the perpendicular components of the vector potential from above.

The first problem is readily solved by considering instead the expression in reciprocal space:

$$
L=\int d^3 k \cdot\tilde{L}(\mathbf{k}),
$$
where we then find
$$
\begin{aligned}
\tilde{L}(\mathbf{k}) & =\frac{\varepsilon_0}{2}\left[\dot{\mathbf{E}}^*(\mathbf{k}) \cdot \dot{\mathbf{E}}(\mathbf{k})-c^2 \dot{\mathbf{B}}^*(\mathbf{k}) \cdot \tilde{\mathbf{B}}(\mathbf{k})\right] \\
& =\frac{\varepsilon_0}{2}\left[\dot{\mathbf{A}}^*(\mathbf{k}) \cdot \dot{\mathbf{A}}(\mathbf{k})-c^2 k^2 \tilde{\mathbf{A}}^*(\mathbf{k}) \cdot \tilde{\mathbf{A}}(\mathbf{k})\right].
\end{aligned}
$$
The Coulomb gauge implies that $\mathbf{k} \cdot \tilde{\mathbf{A}}=0$, which constrains $\tilde{\mathbf{A}}$ to lie in a plane perpendicular to $\mathbf{k}$. This forms the 2-D polarisation basis with 2 independent elements for each $k$, such that we can write the Lagrangian as a sum of terms including only scalar variables

$$
\tilde{L}(k)=\frac{\varepsilon_0}{2} \sum_{\sigma_{\mathbf{k}}=1,2}\left[\dot{\tilde{A}}_{\sigma_{\mathbf{k}}}^{\star}(\mathbf{k}) \dot{\tilde{A}}_{\sigma_{\mathbf{k}}}(\mathbf{k})-c^2 k^2 \tilde{A}_{\sigma_{\mathbf{k}}}^{\star}(\mathbf{k}) \tilde{A}_{\sigma_{\mathbf{k}}}(\mathbf{k})\right].
$$
Now is the point to remember the constraints on $\tilde{A}$ and $\tilde{A}^*$, which means that these are not independent. However, since $\tilde{A}^*(\mathbf{k})=\tilde{A}(-\mathbf{k})$, it is possible to treat these independently by only integrating over positive $\mathbf{k}$. Such an integral is indicated with a $f$ symbol, such that the Lagrangian becomes

$$
L=f d^2 k \tilde{L}(\mathbf{k})
$$
We can see that we may form generalised coordinates for each $\tilde{A}_{\sigma_{\mathrm{k}}}(\mathrm{k})$. The conjugate momenta are

$$
\begin{aligned}
\Pi_{\sigma_k}(\mathbf{k}) \equiv\left(\frac{\partial \tilde{L}}{\partial \dot{\tilde{A}}_{\sigma_{\mathbf{k}}}(\mathbf{k})}\right)^* & =\varepsilon_0 \dot{\tilde{A}}_{\sigma_{\mathbf{k}}}(\mathbf{k}) =-\varepsilon_0 \tilde{E}_{\sigma_{\mathbf{k}}}(\mathbf{k}).
\end{aligned}
$$
We can also form the Hamiltonian in the usual way from Lagrangian mechanics, again using a reciprocal space definition

$$
H=\int d^3 k \tilde{H}(\mathbf{k}),
$$

using an integral over the full space again, and inserting

$$
\begin{aligned}
\tilde{H}(\mathbf{k}) & =\sum_{\sigma_{\mathbf{k}}} \frac{\Pi_{\sigma_{\mathbf{k}}}(\mathbf{k}) \dot{\tilde{A}}_{\sigma_{\mathbf{k}}}^*(\mathbf{k})+\Pi_{\sigma_{\mathbf{k}}}^*(\mathbf{k}) \dot{\tilde{A}}_{\sigma_{\mathbf{k}}}(\mathbf{k})}{2}-\tilde{L}(\mathbf{k}) \\
& =\sum_{\sigma_{\mathbf{k}}} \frac{\left|\Pi_{\sigma_{\mathbf{k}}}(\mathbf{k})\right|^2}{2 \varepsilon_0}+\frac{\varepsilon_0 c^2 k^2\left|\tilde{A}_{\sigma_{\mathbf{k}}}(\mathbf{k})\right|^2}{2}
\end{aligned}
$$
Note that the factor of $1/2$ appears because we switched back to an integral over full space. We should be familiar with this term, by considering the energy density of classical fields: The first term is an electric field term, while the second corresponds to the energy in the magnetic field. 
Now comes the main step of quantisation: We replace $\tilde{A}_{\sigma_{\mathrm{k}}}$ and $\Pi_{\sigma_{\mathrm{k}}}$ with operators and introduce the commutation relation

$$
\left[\tilde{A}_{\sigma_{\mathbf{k}^{\prime}}^{\prime}}\left(\mathbf{k}^{\prime}\right), \Pi_{\sigma_{\mathbf{k}}}^*(\mathbf{k})\right]=i \hbar \delta_{\sigma_{\mathbf{k}^{\prime}}^{\prime}, \sigma_{\mathbf{k}}} \delta\left(\mathbf{k}-\mathbf{k}^{\prime}\right),
$$
which implies that the transverse vector potential and the electric field of a single mode defined by wavevector $k$ and polarisation $\sigma_{\mathrm{k}}$ are non-commuting observables, similar to position and momentum for mechanical oscillators.

---
## 1.4 Diagonalisation of the Hamiltonian
[[Courses/1. Semester/Quantum Optics/QO_Home.pdf#page=13&selection=6,0,8,34|•]]

To diagonalise the Hamiltonian, we introduce the normal variables
$$
\hat{a}_{\sigma_{\mathbf{k}}}(\mathbf{k})=\sqrt{\frac{1}{2 \hbar \omega_k \varepsilon_0}}\left[\varepsilon_0 \omega_k \hat{A}_{\sigma_{\mathbf{k}}}(\mathbf{k})+i \hat{\Pi}_{\sigma_{\mathbf{k}}}(\mathbf{k})\right],
$$
where $\omega_k=c|\mathbf{k}|$. Using this normal mode substitution, we may rewrite the Hamiltonian as
$$
\hat{H}=\int \mathrm{d}^3 k \sum_{\sigma_{\mathbf{k}}} \hbar \omega_k\left[\hat{a}_{\sigma_{\mathbf{k}}}^{\dagger}(\mathbf{k}) \hat{a}_{\sigma_{\mathbf{k}}}(\mathbf{k})+\frac{1}{2}\right]
$$
with the commutation relations

$$
\left[\hat{a}_{\sigma_{\mathbf{k}}}(\mathbf{k}), \hat{a}_{\sigma_{\mathbf{k}^{\prime}}^{\prime}}^{\dagger}\left(\mathbf{k}^{\prime}\right)\right]=\delta_{\sigma_{\mathbf{k}} \sigma_{\mathbf{k}^{\prime}}^{\prime}} \delta\left(\mathbf{k}-\mathbf{k}^{\prime}\right).
$$
Therefore we can see that the Hamiltonian for the free-field equation can recognised as a collection of uncoupled harmonic oscillators with $a_{\sigma_{\mathrm{k}}}^{\dagger}(\mathrm{k})$ that creates a mode of polarisation $\sigma$ and wave vector $k$. These operators $\hat{a}$ and $\hat{a}^\dagger$ are called annihiliation and creation operators, respectively. They may also be expressed as a function of the electric field operator $\hat{E}_{\sigma_{\mathrm{k}}}$

$$
\begin{align}
\hat{a}_{\sigma_{\mathbf{k}}}(\mathrm{k})=\sqrt{\frac{\varepsilon_0}{2 \hbar \omega_k}}\left[\omega_k \hat{A}_{\sigma_{\mathbf{k}}}(\mathbf{k})-i \hat{E}_{\sigma_{\mathbf{k}}}(\mathbf{k})\right] \quad \text{and}\quad 
\hat{a}_{\sigma_{\mathbf{k}}}^{\dagger}(\mathbf{k})=\sqrt{\frac{\varepsilon_0}{2 \hbar \omega_k}}\left[\omega_k \hat{A}_{\sigma_{\mathbf{k}}}^{\dagger}(\mathbf{k})+i \hat{E}_{\sigma_{\mathbf{k}}}^{\dagger}(\mathbf{k})\right].
\end{align}
$$
By simply reshuffeling the terms, we may write the electric field operator in terms of the new annihiliation and creation operators:
$$
\hat{E}_{\sigma_{\mathbf{k}}}(\mathbf{k})=i \sqrt{\frac{\hbar \omega_k}{2 \varepsilon_0}}\left[\hat{a}_{\sigma_{\mathbf{k}}}(\mathbf{k})-\hat{a}_{\sigma_{\mathbf{k}}}^{\dagger}(-\mathbf{k})\right].
$$
Applying the inverse Fourier transform allows us to get back to real space to obtain
$$
\hat{\mathbf{E}}(\mathbf{r})=i \int \mathrm{~d}^3 k \sum_{\sigma_{\mathbf{k}}} \sqrt{\frac{\hbar \omega_k}{2 \varepsilon_0(2 \pi)^3}}\left[\hat{a}_{\sigma_{\mathbf{k}}}(\mathbf{k}) e^{i \mathbf{k} \cdot \mathbf{r}} \mathbf{e}_{\sigma_{\mathbf{k}}}-\hat{a}_{\sigma_{\mathbf{k}}}^{\dagger}(\mathbf{k}) e^{-i \mathbf{k} \cdot \mathbf{r}} \mathbf{e}_{\sigma_{\mathbf{k}}}\right],
$$
which is a real quantity. 
Next, we may express the energy of the electromagnetic field as 
$$
E=\int d^3k\cdot\sum_{\sigma_k}\left(n_{k,\sigma}+\frac{1}{2}\right)\hbar\omega_k,
$$
where $n_{\mathbf{k}, \sigma}=\hat{a}_{\sigma_{\mathbf{k}}}^{\dagger}(\mathbf{k}) \hat{a}_{\sigma_{\mathbf{k}}}(\mathbf{k})$ is the number operator, which describes the number of excitations (photons) in the mode with wavevector $\mathbf{k}$ and polarisation $\sigma$. The eigenstates of this Hamiltonian are the so-called number states

$$
\left\{\left|n_1\right\rangle \otimes\left|n_2\right\rangle \otimes\left|n_3\right\rangle \otimes \cdots \otimes\left|n_i\right\rangle \otimes \ldots\right\}\equiv\left|n_1, n_2, \ldots, n_i, \ldots\right\rangle.
$$
They do form a basis, and the Hilbert space spanned by them is called the Fock space. The mean of the field in a Fock state is given by 

$$
\langle\hat{\mathbf{E}}(\mathbf{r})\rangle_n=\langle n| \hat{\mathbf{E}}(\mathbf{r})|n\rangle=0.
$$
It is important to note that experiments reveal the macroscopic electric field, and thus we generally do not experience Fock states other than vacuum state $|0\rangle$,f or which we may evaluate $\hat{\mathbf{E}}^2(\mathbf{r})$ for a finite volume $L^3$ as

$$
\begin{aligned}
\left\langle\hat{\mathbf{E}}^2(\mathbf{r})\right\rangle_0 & =i^2\cdot\langle 0|  \sum_{\sigma, \mathbf{k}} \frac{\hbar \omega_k(2 \pi)^3}{2 \varepsilon_0(2 \pi)^3 L^3}\left(\hat{a} e^{i \mathbf{k} \cdot \mathbf{r}}-\hat{a}^{\dagger} e^{-i \mathbf{k} \cdot \mathbf{r}}\right)\left(\hat{a} e^{i \mathbf{k} \cdot \mathbf{r}}-\hat{a}^{\dagger} e^{-i \mathbf{k} \cdot \mathbf{r}}\right)|0\rangle \\
& =\sum_{\sigma, \mathbf{k}} \frac{h \omega_k}{2 \varepsilon_0 L^3}\langle 0| \hat{a} \hat{a}^{\dagger}|0\rangle \\
& =\sum_{\sigma, \mathbf{k}} \frac{\hbar c|\mathbf{k}|}{2 \varepsilon_0 L^3}
\end{aligned}
$$
Reconverting this to an integral, which is not an approximation because we calculate for a finite volume, we find
$$
\left\langle\hat{\mathbf{E}}^2(\mathbf{r})\right\rangle_0=\sum_{\sigma_{\mathbf{k}}} \frac{\hbar c}{4 \pi \varepsilon_0} \int \mathrm{~d}^3 k|\mathbf{k}|.
$$
However, since this expectation can not be infinite, we need to introduce a cut-off frequency to prevent the integral from diverging. Interestingly, the value will not be zero, and these are called the vacuum fluctuations of the electro-magnetic field, responsible for the spontaneous decay of an atom.

---