---
{"dg-publish":true,"permalink":"/notes/quantum-optics/2-quantum-states-of-the-field/","hide":"true","updated":"2025-02-02T13:45:59.000+01:00"}
---

Jump back to [[Notes/Quantum Optics/Quantum Optics#Table of Contents\|chapter selection]].

---
**Table of Contents**

- [[Notes/Quantum Optics/2 Quantum States of the Field#2.1 Single Mode Field Operators and Quadratures\|2.1 Single Mode Field Operators and Quadratures]]
- [[Notes/Quantum Optics/2 Quantum States of the Field#2.2 Photon Number States\|2.2 Photon Number States]]
- [[Notes/Quantum Optics/2 Quantum States of the Field#2.3 Coherent States\|2.3 Coherent States]]
- [[Notes/Quantum Optics/2 Quantum States of the Field#2.4 Squeezed Light\|2.4 Squeezed Light]]

---
# 2 Quantum States of the Field

## 2.1 Single Mode Field Operators and Quadratures
[[Masters/1. Semester/Quantum Optics/QO_Home.pdf#page=16&selection=4,0,6,42|•]]

We consider next a single-mode field, a single value of $k$ and a single polarisation index $\sigma$. The single-mode electric field is
$$
\hat{E}(\chi)=\mathcal{E}_0\left(\hat{a} e^{-i \chi}+\hat{a}^{\dagger} e^{i \chi}\right).
$$
Introducing yet another set of operators, the quadrature operators $\hat{a}_1$ and $\hat{a}_2$ defined as

$$
\hat{a}_1=\frac{\hat{a}+\hat{a}^{\dagger}}{2}, \quad \hat{a}_2=\frac{\hat{a}-\hat{a}^{\dagger}}{2 i},
$$
we can rewrite the electric field as
$$
\hat{E}(\chi)=\hat{X} \cos (\chi)+\hat{Y} \sin (\chi).
$$
It can then be shown that the commutation relation
$$
\left[\hat{E}\left(\chi_1\right), \hat{E}\left(\chi_2\right)\right]=-\frac{i}{2}\left(2 \mathcal{E}_0\right)^2 \sin \left(\chi_1-\chi_2\right)
$$
holds. Remember this important relation between operators and commutator:
$$
[\hat{A}, \hat{B}]=\hat{C} \Rightarrow \Delta A \cdot \Delta B \geq \frac{1}{2}|\langle\hat{C}\rangle|
$$
Applying this to the prior results yields the uncertainty in the field operator as
$$
\Delta \hat{E}\left(\chi_1\right) \Delta \hat{E}\left(\chi_2\right) \geq \frac{1}{4}\left|\sin \left(\chi_1-\chi_2\right)\right|.
$$
Note that in this expression, the field is measured in units of $2\mathcal{E}_0$. What does this result imply? It means that we can measure 'exactly' single mode fields that differ by units of pi. However, we have the case where the difference is $\chi_1-\chi_2=\pi/2$, such that the uncertainty for the product of the field quadratures is  
$$
\Delta \hat{X} \cdot \Delta \hat{Y} \geq \frac{1}{4}\left(2 \mathcal{E}_0\right)^2.
$$

---
## 2.2 Photon Number States
[[Masters/1. Semester/Quantum Optics/QO_Home.pdf#page=17&selection=8,0,10,20|•]]

The photon number state is an eigenstate of the photon number operator $\hat{n}=\hat{a}^\dagger\hat{a}$. Therefore, 
$$\langle n| \Delta \hat{n}|n\rangle=0=\langle n| \hat{n}^2|n\rangle-\langle n| \hat{n}|n\rangle^2.$$
Intuitively, it is a state where we have "perfect" knowledge of the intensity, but no knowledge of the phase. The expectation values of both field quadratures vanish:
$$
\langle n| \hat{X}|n\rangle=\langle n| \hat{Y}|n\rangle=0.
$$



Remembering that $\hat{X}^2+\hat{Y}^2=\left(2 \mathcal{E}_0\right)^2\left(\hat{a}^{\dagger} \hat{a}+1 / 2\right)$ we have that

$$
(\Delta \hat{X})^2=(\Delta \hat{Y})^2=\left\langle\hat{X}^2\right\rangle-\langle\hat{X}\rangle^2=\frac{1}{2}\left(2 \mathcal{E}_0\right)^2\left(n+\frac{1}{2}\right)
$$
which is shown in the next figure (for normalised quadratures):

![Attachments/QO_Home.webp|700](/img/user/Attachments/QO_Home.webp)[[Masters/1. Semester/Quantum Optics/QO_Home.pdf#page=17&rect=192,542,421,705|•]]

The product $\Delta X \cdot \Delta Y$ for a photon number state is

$$
\Delta X \cdot \Delta Y=\frac{1}{2}\left(n+\frac{1}{2}\right) \geq \frac{1}{4}.
$$
As a result, only the vacuum ( $n=0$ ) is a minimum uncertainty state for the quadrature operators. Although they are archetypal quantum states, photon number states are generally hard to produce - the quest for an ideal "single-photon" source, from which photons come out deterministically and in a single mode, is an entire field of research in itself.

## 2.3 Coherent States
[[Masters/1. Semester/Quantum Optics/QO_Home.pdf#page=17&selection=248,0,250,15|•]]

The Hamiltonian that drives a field mode resonantly by a classical oscillation charge is

$$
H_{\mathrm{int}}=-i \hbar\left(\beta^* \hat{a}-\beta \hat{a}^{\dagger}\right)
$$
The time evolution of this Hamiltonian is as usual obtained by considering the corresponding time-evolution operator

$$
U(\tau)=e^{-i H_{\mathrm{int}} \tau / h}.
$$
Defining $\alpha=\beta \tau$, we can rewrite this as

$$
U(\tau)=D(\alpha)=e^{\alpha \hat{a}^{\dagger}-\alpha^* \hat{a}},
$$
which is called the displacement operator. Its effect on the ground state is producing the _coherent state_ $|\alpha\rangle$, defined as

$$
D(\alpha)|0\rangle=|\alpha\rangle.
$$
Using the very useful Baker-Campbell-Hausdorff relation, 

$$
e^A e^B=e^C
$$
with $C=A+B+[A, B] / 2+[A,[A, B]] / 12+\ldots$, we find that 

$$
\begin{aligned}
D(\alpha) D(\beta) & =e^{(\alpha+\beta) \hat{a}^{\dagger}-\left(\alpha^*+\beta^*\right) \hat{a}+\left(\alpha \beta^*-\beta \alpha^*\right) / 2} \\
& =D(\alpha+\beta) e^{\left(\alpha \beta^*-\beta \alpha^*\right) / 2}.
\end{aligned}
$$
This is an exact result since we have that $[A, B]=$ const, and thus all other higher commutators disappear. Using the same formula again on the single displacement operator, we obtain
$$
\begin{aligned}
D(\alpha) & =e^{-|\alpha|^2 / 2} e^{\alpha \hat{a}^{\dagger}} e^{-\alpha^* \hat{a}} \\
& =e^{|\alpha|^2 / 2} e^{-\alpha^* \hat{a}} e^{\alpha \hat{a}^{\dagger}} ..
\end{aligned}
$$
Next, it is straightforward to give the form of the coherent state as a superposition of number states of the mode:

$$
|\alpha\rangle=e^{-\frac{1}{2}|\alpha|^2} \sum_{n=0}^{\infty} \frac{\alpha^n}{\sqrt{n!}}|n\rangle, \quad \alpha \in \mathbb{C}.
$$
The introduction of the coherent state to optical fields is one of the starting points of quantum optics. They have a number of useful and important properties:

- Normalisation:
	$$ \langle\alpha \mid \alpha\rangle=e^{-|\alpha|^2} \sum_{n=0}^{\infty} \frac{\alpha^{* n} \alpha^n}{n!}=1 $$
- They are an overcomplete set, e.g. they span the whole Hilbert space, but are not orthogonal 
	$$ \langle\alpha \mid \beta\rangle=e^{-\frac{1}{2}|\alpha|^2-\frac{1}{2}|\beta|^2+\alpha^* \beta} \Rightarrow|\langle\alpha \mid \beta\rangle|^2=e^{-|\alpha-\beta|^2}. $$
- They are eigenstates of the annihilation operator:
	$$ \hat{a}|\alpha\rangle=e^{-\frac{1}{2}|\alpha|^2} \sum_{n=1}^{\infty} \frac{\alpha^n}{\sqrt{(n-1)!}}|n-1\rangle=\alpha|\alpha\rangle. $$
- They are left eigenstates of the creation operator
	$$ (\hat{a}|\alpha\rangle)^{\dagger}=\langle\alpha| \hat{a}^{\dagger}=\langle\alpha| \alpha^*. $$

With these properties at hand, we may find a number of relevant statistical quantities. Assuming we have the ability to measure the photon number, we obtain for the mean 

$$
\langle\alpha| \hat{a}^{\dagger} \hat{a}|\alpha\rangle=|\alpha|^2\langle\alpha \mid \alpha\rangle=|\alpha|^2.
$$
The number state distribution $P(n)=|\langle n \mid \alpha\rangle|^2$  is a Poisson distribution defined by the mean value $\bar{n}$

$$
P(n)=\frac{\bar{n}^n}{n!} e^{-\bar{n}}.
$$
This means that we should expect that the variance of the photon number is also defined only by $\bar{n}$. Evaluating this, we find

$$
\left\langle\Delta \hat{n}^2\right\rangle=\langle\alpha| \hat{n}^2|\alpha\rangle-\langle\alpha| \hat{n}|\alpha\rangle^2=|\alpha|^2=\bar{n},
$$
which is what we expect. The fractional uncertainty on the number of photons is then

$$
\frac{\langle\Delta \hat{n}\rangle}{\langle\hat{n}\rangle}=\frac{\sqrt{\bar{n}}}{\bar{n}}=\frac{1}{\sqrt{\bar{n}}}=\frac{1}{|\alpha|}.
$$
In an alternative measurement, we may attempt to measure the electric field quadratures directly. We evaluate the expectation values of the field quadratures:

$$
\begin{aligned}
\langle\alpha| \hat{X}|\alpha\rangle & =\langle\alpha| \frac{1}{2}\left(\hat{a}^{\dagger}+\hat{a}\right)|\alpha\rangle=\frac{1}{2}\left(\alpha^*+\alpha\right) \\
\langle\alpha| \hat{X}^2|\alpha\rangle & =\langle\alpha| \frac{1}{4}\left(\hat{a}^{\dagger}+\hat{a}\right)\left(\hat{a}^{\dagger}+\hat{a}\right)|\alpha\rangle=\frac{1}{4}\left(1+\left(\alpha^*+\alpha\right)^2\right).
\end{aligned}
$$
The variance then follows to be 

$$
\langle\alpha| \Delta \hat{X}^2|\alpha\rangle=\langle\alpha| \hat{X}^2|\alpha\rangle-\langle\alpha| \hat{X}|\alpha\rangle^2=\frac{1}{4}.
$$
We can see from this that the coherent state fulfils

$$
\left\langle\Delta \hat{X}^2\right\rangle=\left\langle\Delta \hat{Y}^2\right\rangle=\frac{1}{4} \quad\left(\text { in units of } 2 \mathcal{E}_0\right).
$$
This is the minimum uncertainty allowed by the Heisenberg relation. Additionally this statement is true for any value of $\bar{n}$.  For a measurement of the field of the coherent state with $\alpha=|\alpha| e^{i \theta}$, we can define a signal-to-noise of the quadrature for a given $\chi$ as

$$
\begin{aligned}
\mathrm{SNR} & =\frac{\langle\alpha| \hat{E}(\chi)|\alpha\rangle}{\langle\alpha| \Delta \hat{E}(\chi)|\alpha\rangle}=\frac{(|\alpha| \cos (\chi-\theta))}{1 / 2}=2|\alpha| \cos (\chi-\theta) \\
& =2 \sqrt{\bar{n}} \quad \text { for } \chi=\theta.
\end{aligned}
$$

### 2.3.1 The Husimi-Q Function

As we have seen, the coherent state is a minimum uncertainty state which have their mean at a particular value of $X$ and $Y$. This provides a means of plotting states which is called the Husimi-Q function, often shortened to Q function. This is defined for a pure state  as

$$
Q(|\Psi\rangle\langle\Psi|, \beta)=\frac{1}{\pi}|\langle\beta \mid \Psi\rangle|^2,
$$
where $\beta$ is a coherent state and the factor of $1 / \pi$ accounts for the fact that the coherent states are overcomplete. This function is a regular continuous function which is always positive. Integrating over $\beta$ it gives 1 . Therefore it looks like a probability distribution in classical phase space. In fact this is one of several phase space distributions for quantum oscillators. For a coherent state $\alpha$ the Q function is

$$
\frac{1}{\pi}|\langle\alpha \mid \beta\rangle|^2=\frac{1}{\pi} e^{-|\alpha-\beta|^2}.
$$

### 2.3.2 Coherent States for Measurement

Classical fields are used in interferometry, for example in a Michelson-Morley interferometer using laser light, which is similar to a coherent state field. Usually, we aim to find the phase difference between two fields in an interferometric setup. The uncertainty of the measurement of the phase angle after the measurement of the quadrature is then of interest, since it limits the interferometer. We can evaluate the uncertainty of the phase of the field as
$$
\Delta \phi=\frac{1 / 2}{|\alpha|}=\frac{1}{2 \sqrt{n}}.
$$
It defines the quantum limit for the measurement of the phase angle of a coherent state. From this value, we can derive an analogous result to the Heisenberg uncertainty relation for the phase and photon number:

$$
\Delta n \cdot \Delta \phi=\sqrt{\bar{n}} \cdot \frac{1}{2 \sqrt{\bar{n}}}=\frac{1}{2}.
$$
An important scientific interferometer is the gravitational wave detector LIGO, which enabled the detection of gravitational waves in two MIchelson interferometer. 

---
## 2.4 Squeezed Light
[[Masters/1. Semester/Quantum Optics/QO_Home.pdf#page=22&selection=72,0,74,14|•]]

Heisenberg's uncertainty relation set a limit to the product of the uncertainties of the two quadratures of the field, namely
$$
\Delta X \cdot \Delta Y \geq \frac{1}{4} \quad \text { in normalized units }\left(2 \mathcal{E}_0=1\right).
$$
However, in principle nothing prevents the reduction of one quadrature at the expense of the other. Such a light is called quadrature squeezed if
$$
(\Delta E(\chi))^2<\frac{1}{4} .
$$
Consider the squeezed state $|\xi\rangle$ defined by the application of the squeeze operator onto the vacuum,

$$
|\xi\rangle=\hat{S}(\xi)|0\rangle.
$$
This operator is defined as

$$
\hat{S}(\xi)=\exp \left(\frac{1}{2} \xi^* \cdot \hat{a}^2-\frac{1}{2} \xi \cdot\left(\hat{a}^{\dagger}\right)^2\right) \quad \text{with}\quad\xi=s e^{i \theta},
$$
where $\xi$ is the complex squeeze parameter. The operator $\hat{S}(\xi)$ is unitary, as 

$$
\hat{S}^{\dagger}(\xi) \hat{S}(\xi)=\hat{S}(\xi) \hat{S}^{\dagger}(\xi)=\mathbb{1}.
$$
The resulting state can be written in the Fock state basis as

$$
|\xi\rangle=\sqrt{\operatorname{sech}(s)} \sum_{n=0}^{\infty} \frac{\sqrt{(2 n)!}}{n!}\left[-\frac{1}{2} e^{i \theta} \tanh (s)\right]^n|2 n\rangle,
$$
where $\operatorname{sech}(s)=1 / \cosh (s)=2 /\left(e^s+e^{-s}\right)$. This state is constructed from even number of photons only. We have as a result

$$
\langle\xi| \hat{a}|\xi\rangle=\langle\xi| \hat{a}^{\dagger}|\xi\rangle=0 .
$$
To evaluate $\langle\xi| \hat{X}^2|\xi\rangle$, we will need quantities such as $\langle\xi| \hat{a} \hat{a}|\xi\rangle$ that will be computed using the following equalities

$$
\begin{aligned}
\hat{S}^{\dagger}(\xi) \hat{a} \hat{S}(\xi) & =\hat{a} \cosh (s)-\hat{a}^{\dagger} e^{i \theta} \sinh (s) \\
\hat{S}^{\dagger}(\xi) \hat{a}^{\dagger} \hat{S}(\xi) & =\hat{a}^{\dagger} \cosh (s)-\hat{a} e^{-i \theta} \sinh (s)
\end{aligned}
$$

by using $e^{-\hat{O}} \hat{a} e^{\hat{O}}=\hat{a}+[\hat{a}, \hat{O}]+\frac{1}{2!}[[\hat{a}, \hat{O}], \hat{O}]+\ldots$. We then find that
$$
\begin{aligned}
\langle\xi| \hat{a} \hat{a}|\xi\rangle & =-e^{i \theta} \cosh (s) \sinh (s)\quad\text{and}\quad \langle\xi| \hat{a}^{\dagger} \hat{a}^{\dagger}|\xi\rangle=-e^{-i \theta} \cosh (s) \sinh (s),
\end{aligned}
$$
for $s>0.$ With this at hand, we find the variance of the quadrature $(\Delta \hat{X})^2$ as

$$
\begin{aligned}
(\Delta \hat{X})^2 & =\left\langle\hat{X}^2\right\rangle-\langle\hat{X}\rangle^2=\frac{1}{4}(\cosh (2 s)-\cos (\theta) \sinh (2 s)),
\end{aligned}
$$
and that of the $Y$ quadrature as

$$
(\Delta \hat{Y})^2=\frac{1}{4}(\cosh (2 s)+\cos (\theta) \sinh (2 s)).
$$
The expectation values and their uncertainties are lying on an ellipse with axes of length $\frac{1}{2} e^s$ and $\frac{1}{2} e^{-s}$ inclined at an angle $\frac{\theta}{2}$ from the $x$-axis. Physically, one has squeezed the uncertainty on one quadrature at the expense of the other:

![Attachments/QO_Home 1.webp|700](/img/user/Attachments/QO_Home%201.webp)[[Masters/1. Semester/Quantum Optics/QO_Home.pdf#page=24&rect=203,448,406,610|•]]

The electric field operator $\hat{E}(\chi)$, that we defined as

$$
\hat{E}(\chi)=\mathcal{E}_0\left(\hat{a} e^{-i \chi}+\hat{a}^{\dagger} e^{i \chi}\right)=\hat{X} \cos (\chi)+\hat{Y} \sin (\chi)
$$
is such that the expectation of the field in the state $|\xi\rangle$ is

$$
\langle\xi| \hat{E}(\chi)|\xi\rangle=\langle\xi| \hat{S} \hat{S}^{\dagger} \hat{E} \hat{S} \hat{S}^{\dagger}|\xi\rangle=\langle 0| \hat{S}^{\dagger} \hat{E} \hat{S}|0\rangle=0 .
$$
This is not surprising, since it is a squeezed vacuum state. Similarly, the field variance is
$$
(\Delta \hat{E}(\chi))^2=\left\langle(\hat{X} \cos (\chi)+\hat{Y} \sin (\chi))^2\right\rangle=\frac{1}{4}\left(e^{2 s} \sin^2\left(\chi-\frac{\theta}{2}\right)+e^{-2 s} \cos^2\left(\chi-\frac{\theta}{2}\right)\right) .
$$
This means that the fluctuations are 'modulated' as a function of the phase angle. 

Schematically, it means that the fluctuations are "modulated" as a function of the phase angle. Such squeezed vacuum state can be measured by a homodyne experiment, while the squeezed state can be generated by a non-linear optics process.

![Attachments/QO_Home 2.webp|700](/img/user/Attachments/QO_Home%202.webp)[[Masters/1. Semester/Quantum Optics/QO_Home.pdf#page=24&rect=196,105,419,218|•]]

### 2.4.1 Squeezed Coherent State

Mathematically, a squeezed coherent state can be obtained from a vacuum state by application of a squeeze and displace operator:
$$
|\alpha, \xi\rangle=\hat{D}(\alpha) \hat{S}(\xi)|0\rangle \quad \text {with}\quad \hat{D}(\alpha)=\exp \left(\alpha \hat{a}^{\dagger}-\alpha^* \hat{a}\right).
$$
Application of this pair of operators lead to the following transformations on the operators $\hat{a}$ and $\hat{a}^{\dagger}$
$$
\begin{aligned}
\hat{S}^{\dagger} \hat{D}^{\dagger} \hat{a} \hat{D} \hat{S} & =\hat{a} \cosh (s)-\hat{a}^{\dagger} \sinh (s) e^{i \theta}+\alpha \\
\hat{S}^{\dagger} \hat{D}^{\dagger} \hat{a}^{\dagger} \hat{D} \hat{S} & =\hat{a}^{\dagger} \cosh (s)-\hat{a} \sinh (s) e^{-i \theta}+\alpha^*.
\end{aligned}
$$
We now find that the expectation of the field is non-zero:
$$
\begin{aligned}
\langle\alpha, \xi| \hat{X}|\alpha, \xi\rangle & =\mathfrak{Re}(\alpha)=|\alpha| \cos (\varphi) \quad\text{and}\quad \langle\alpha, \xi| \hat{Y}|\alpha, \xi\rangle  =\mathfrak{Im}(\alpha)=|\alpha| \sin (\varphi).
\end{aligned}
$$
The uncertainties on $(\Delta \hat{X})^2$ and $(\Delta \hat{Y})^2$ are the same as for the vacuum state

$$
(\Delta \hat{X})^2=\frac{1}{4}\left(e^{2 s} \sin^2\left(\frac{\theta}{2}\right)+e^{-2 s} \cos^2\left(\frac{\theta}{2}\right)\right).
$$
Therefore, the noise measured for a specific phase angle $\chi$ is

$$
(\Delta \hat{E}(\chi))^2=\frac{1}{4}\left(e^{2 s} \sin^2\left(\chi-\frac{\theta}{2}\right)+e^{-2 s} \cos^2\left(\chi-\frac{\theta}{2}\right)\right),
$$
while the expectation value is

$$
\langle\alpha, \xi| \hat{E}|\alpha, \xi\rangle=|\alpha| \cos (\chi-\varphi).
$$
The signal over noise is then

$$
\mathrm{SNR}=\frac{S^2}{N}=\frac{\langle\alpha, \xi| \hat{E}(\chi)|\alpha, \xi\rangle^2}{\langle\alpha, \xi| \Delta \hat{E}(\chi)|\alpha, \xi\rangle^2}=\frac{4|\alpha|^2 \cos^2(\chi-\varphi)}{e^{2 s} \sin^2\left(\chi-\frac{\theta}{2}\right)+e^{-2 s} \cos^2\left(\chi-\frac{\theta}{2}\right)}.
$$
The maximum of the SNR is reached for $\chi=\varphi=\frac{\theta}{2}$ and yields

$$
\mathrm{SNR}_{\max }=4|\alpha|^2 e^{2 s}.
$$
The average number of photons in that state is

$$
\langle\alpha, \xi| \hat{n}|\alpha, \xi\rangle=|\alpha|^2+\sinh^2(s)
$$
and follows from the additive properties of the displacement and squeeze operator. For states with large relative photon numbers $\left(|\alpha| \gg e^s\right)$ we have the uncertainty for the photon number $\left(\varphi=\frac{\theta}{2}\right)$

$$
\Delta n=\left(\sqrt{\langle n\rangle}+\frac{1}{4} e^{-s}\right)^2-\left(\sqrt{\langle n\rangle}-\frac{1}{4} e^{-s}\right)^2=\sqrt{\langle n\rangle} e^{-s},
$$
while the uncertainty on the phase is

$$
\Delta \psi=\frac{e^s}{2} \frac{1}{|\alpha|}=\frac{e^s}{2 \sqrt{\langle n\rangle}}.
$$
So we have that  
$$\Delta n \cdot \Delta \psi=\frac{1}{2},$$
as is expected for minimum uncertainty states. By playing with the value of $s$, we can enhance or reduce the relative weight of the phase and photon number uncertainty (or by rotating the angle $\frac{\theta}{2}$, of course). This is then called phase-squeezed or amplitude-squeezed, respectively:

![Attachments/QO_Home 3.webp|700](/img/user/Attachments/QO_Home%203.webp)[[Masters/1. Semester/Quantum Optics/QO_Home.pdf#page=26&rect=113,368,498,500|•]]

---