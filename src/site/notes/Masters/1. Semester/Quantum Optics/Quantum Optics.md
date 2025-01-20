---
{"dg-publish":true,"dg-path":"Draft/Quantum Optics","permalink":"/draft/quantum-optics/","updated":"2025-01-19T18:36:59.000+01:00"}
---

>[!DANGER] Work in progress from here on
>Notes have been automatically translated from handwritten to latex
>No manual adjustments done yet.

Quantization of electromagnetic field
Maxwell's equations in source-free field:
$$
\begin{align*}
\begin{aligned}
& \int \vec{\nabla} \cdot \vec{E}=0 \\
& \vec{\nabla} \vec{B}=0 \\
& \vec{\nabla} \times \vec{E}=-\frac{\partial \vec{B}}{\partial t} \quad \text { Source-free: } \rho, \vec{P}, \vec{\jmath}=0 \\
& \vec{\nabla} \times \vec{B}=\frac{1}{c^{2}} \frac{\partial \vec{E}}{\partial t} \\
& (i \vec{k} \cdot \tilde{E}(k)=0 \\
& i \vec{k} \cdot \tilde{B}(k)=0 \\
& \overrightarrow{i k} \times \tilde{B}(k)=\frac{1}{c^{2}} \frac{\partial \tilde{E}}{\partial t} \quad \text { Their advantage: They are local, hence no spatial derivative }
\end{aligned}
\end{align*}
$$

In reciprocal space: $\left\{\begin{array}{l}\vec{K} \times \tilde{E}(k)=-\frac{\partial \widetilde{B}}{\partial t}\end{array}\right.$ where $\tilde{E}$ and $\tilde{B}$ are the fouriertransformed of $\vec{E}$ and $\vec{B}$.

The lagrangian $L=\int d^{3} r \frac{\varepsilon_{0}}{2}\left(\vec{E}^{2}-c^{2} \vec{B}^{2}\right)=\int d^{3} r \cdot \alpha(r)$ gives free field Maxwell-equation.
The vector potential $\vec{A}$ is defined via $\vec{E}=-\frac{\partial \vec{A}}{\partial t}$ and $\nabla \times \vec{A}=\vec{B}$. We choose the coulomb gauge $\vec{\nabla} \cdot \vec{A}=0 \Leftrightarrow \vec{k} \cdot \vec{A}=0$ $\Rightarrow \alpha(r)=\frac{\varepsilon_{0}}{2}\left(\dot{\vec{A}}^{2}-c^{2}(\vec{\nabla} \times \vec{A})^{2}\right)$ so it only depends on $\vec{A}(r)$. However, from coulomb gave we know that $\left\{A_{i}\right\}$ are not independent.

Going to reciprocal space: $L=\int d^{3} k \cdot \tilde{\alpha}(k)$ with $\tilde{\alpha}(k)=\frac{\varepsilon_{0}}{2}\left(|\tilde{E}|^{2}-c^{2} \cdot|\tilde{B}|^{2}\right)=\frac{\varepsilon_{0}}{2}\left(|\dot{\tilde{A}}|^{2}-c^{2} k^{2}|\tilde{A}|^{2}\right)=\sum_{\sigma_{k}} \frac{\varepsilon_{0}}{2}\left(\left|\dot{\tilde{A}}_{\sigma_{k}}\right|^{2}-c^{2} k^{2}\left|\tilde{A}_{\sigma_{k}}\right|^{2}\right)$ since $\tilde{k} \cdot \tilde{A}=0$ constrains to plane perpenticular to $\tilde{k}$. The $\sigma_{k}$ are 2 independent and orthonormal polarization vectors per $k$.

Thus, our generalized, independant coordinates are $\tilde{A}_{\sigma_{k}^{2}}$ and $\tilde{A}_{\sigma_{k}^{2}}$, the tvansuerse vector field.
The conjugate momentum is defined as $\pi_{\sigma_{k}}(k)=\left(\frac{\partial \tilde{L}}{\partial \dot{\tilde{A}}_{\sigma_{k}}}\right)^{*}=\varepsilon_{0} \cdot \dot{\tilde{A}}_{\sigma_{k}}=-\varepsilon_{0} \tilde{E}_{\sigma_{k}}$
Now the quantization: Introduce operators $\left[\tilde{A}_{\sigma_{k}}(k), \pi_{\sigma_{k^{\prime}}}^{*}\left(k^{\prime}\right)\right]=i \hbar \delta_{\sigma_{k} \sigma_{k^{\prime}}} \delta\left(k-k^{\prime}\right)$
The hamiltonian becomes $H=\int d^{3} k \cdot \tilde{\mathcal{H}}(k)$ with $\tilde{H}=\frac{|\tilde{\Pi}|^{2}}{2 \varepsilon_{0}}+\frac{\varepsilon_{0} c^{2} k^{2}}{2}|\tilde{A}|^{2}$ similar to harm. oscillator: $\frac{p^{2}}{2 m}+\frac{k^{2} x^{2}}{2}$

Introduce new operator: $a_{\sigma_{k}}(k)=\sqrt{\frac{1}{2 \hbar w}}\left(w \varepsilon_{0} \tilde{A}_{\sigma_{k}}+i \tilde{\pi}_{\sigma_{k}}\right)$ satisfying $\left[a_{\sigma_{k}}(k), a_{\sigma_{k^{\prime}}}^{+}\left(k^{\prime}\right)\right]=\delta_{\sigma_{k} \sigma_{k^{\prime}}} \delta\left(k-k^{\prime}\right)$
Switching to volume $V=L^{3}$, replacing $\int d^{3} k$ with $\left(\frac{2 \pi}{L}\right)^{3} \sum_{k}$ yields:
$$
\begin{align*}
\vec{E}(r)=\sum_{k, \sigma_{k}} \sqrt{\frac{\hbar w_{k}}{2 \varepsilon_{0} L^{3}}} \cdot \hat{\sigma}_{k} \cdot\left(a_{k, \sigma_{k}} e^{i k r}+a_{k, \sigma_{k}}^{\dagger} e^{-i k r}\right) \text { and } H=\sum_{k, \sigma_{k}} \hbar w_{k}\left(a_{k, \sigma_{k}}^{\dagger} a_{k, \sigma_{k}}+\frac{1}{2}\right) \text { infinite collection of harm. osailators }
\end{align*}
$$

The ground state $|0\rangle$ satisfies $a_{k_{1} \sigma_{k}}|0\rangle=0$

Quantum states of light
Focussing on single-field mode: $a_{k_{1} \sigma_{k}} \rightarrow a_{c}$ ar hamiltonian becomes $H=\hbar w_{c} a_{c}^{\dagger} a_{c}$ with $\left[a_{c} a_{c}^{\dagger}\right]=1$
The eigenstates are $\left|n_{c}\right\rangle=\sqrt{\frac{1}{n!}}\left(a_{c}^{+}\right)^{n}|0\rangle$ with energy $E_{n}=\hbar w_{c} n$ and the spectrum is
The spectrum is harmonic for all $\left(k, \sigma_{k}\right)$, a direct consequence of linearity of the maxwells equations.

Interestingly, $\langle n| \vec{E}(r)|n\rangle=0 \forall n$, however 2 ero-results are uncomnon: Rarely dealing with fields in eigenstate.
Defining the coherent state $|\alpha\rangle=e^{-|\alpha|^{2} / 2} \sum_{n} \frac{\alpha^{n}}{\sqrt{n!}}|n\rangle$ (ground state coherent with $\alpha=0$ ) with key properties.
$\left(\begin{array}{l}\text { 1) }\langle\alpha| \vec{E}|\alpha\rangle=E_{c 1} \neq 0 \\ \langle\alpha| n_{c}|\alpha\rangle=|\alpha|^{2}\end{array}\right\} \begin{aligned} & \text { Properties of noise-free } \quad \text { Furthermore, } \Delta n^{2}=|\alpha|^{2} \cong \text { intensity fluctuations and poissonian dishibution. } \\ & \text { classical field. }\end{aligned}$
11) Driving fields mode with classical current $j(r, t)$, generates $|\alpha\rangle$.

Described by Hint $=-i\left(\beta^{*} a_{c}-\beta a_{c}^{+}\right)$so $|\psi(\tau)\rangle=D(\alpha)|0\rangle=|\alpha\rangle$ with displacement operator $D(\alpha)=e^{\alpha a_{c}^{+}-\alpha^{*} O_{c}^{+}}, \alpha=\beta \tau$
IIII) It is all order coherent: $g^{(n)}\left(t_{1} \ldots t_{n}\right)=1 \quad \forall n$

Splitting $E(r, t)=E^{(t)}(r, t)+E^{(-)}(r, t)$ in positive and negative fequency terms $E^{(t)}=\sqrt{\frac{\hbar \omega_{c}}{2 \varepsilon_{0} L^{3}}} \cdot a_{c} \cdot e^{i(k r-\omega t)}=\left(E^{(-)}\right)^{t}$

Phase-space representation
Writing $E_{c}(r)=\sqrt{\frac{\hbar w_{c}}{2 \varepsilon_{0} v}}\left(a_{c} e^{i k z}+a_{c}^{+} e^{-i k z}\right) \varepsilon_{c}(x, y)$ where $\varepsilon_{c}$ is extent of field in transverse direction.
Introduce quadratures $a_{Q}=\frac{a_{c}+a_{c}^{+}}{2}$ and $a_{p}=\frac{a_{c}-a_{c}^{+}}{2 i}$ allows to write $E_{c}(r)=2 E_{v a c}\left(a_{Q} \cdot \cos (k z)-a_{p} \cdot \sin (k z)\right) \varepsilon(x, y)$
They do not commute $\left[a_{Q}, a_{p}\right]=\frac{i}{2}$ so the cos and sin component can't be measured with arbitrary precision.
We define $a_{Q}|q\rangle=q|q\rangle$ and $a_{p}|p\rangle=p|p\rangle$ to get $|q\rangle=\int d p \cdot e^{i p q}|p\rangle$
This implies $a_{p}|q\rangle=\int d p \cdot e^{i p q} \cdot p|p\rangle=\frac{1}{i} \frac{d}{d q}|q\rangle$
Photon number $\leftrightarrow$ phase are conjugate

Next, $\phi_{0}(q)=\langle q \mid 0\rangle$ and $\phi_{0}(p)=\langle p \mid 0\rangle$. Noting $a_{c}=a_{Q}+i a_{p}:\langle q| a_{c}|0\rangle=0=q \cdot \phi_{0}(q)+\frac{d}{d q} \phi_{0}(q)=0$
We can conclude $\left\{\begin{array}{l}\phi_{0}(q)=\sqrt{\frac{1}{2 \pi}} e^{-q^{2} / 2} \\ \phi_{0}(p)=\sqrt{\frac{1}{2 \pi}} e^{-p^{2} / 2}\end{array}\right.$
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-03.jpg?height=826&width=2389&top_left_y=491&top_left_x=2264)

Since the phase is unknown, we have rotational symmetry.
We use the Wigner-function $W_{10\rangle}(p, q)=\frac{1}{\pi} \int d q_{1} \cdot\left\langle q-q_{1} \mid 0\right\rangle\left\langle 0 \mid q+q_{1}\right\rangle e^{-i 2 p \cdot q_{1}}$ where $|\psi\rangle$ classical $\Rightarrow W \geqslant 0$
Coherent stales have $\left\langle a_{Q}^{2}\right\rangle=\left\langle a_{p}^{2}\right\rangle=\frac{1}{4}$ and is thus a minimum uncertanity state.
Generation of squeezed states non-linear optics
Since the uncertainity relation requires $\Delta a_{Q} \cdot \Delta a_{P} \geqslant \frac{1}{4}$, we can squeeze the state in one direction: $\Delta a_{Q}<\Delta a_{p}$
We now consider two modes $\omega_{b}$ and $\omega_{c}$ :
$H=\hbar w_{c} a_{c}^{\dagger} a_{c}+\hbar w_{b}^{b_{b}^{\dagger} b}+i \hbar X\left(a_{c}^{+} b-b^{\dagger} a_{c}^{2}\right)^{2}$ where the last term couples both modes. Non linear optics: One photon crates two.

We choose 2 simplifications:

1) $w_{b}=2 w_{c}$ to cancle factor from going to interaction picture.
2) Mode $b$ driven by classical current with $\omega_{b}:\langle\tilde{b}\rangle \neq 0$ and $\langle\tilde{b}\rangle=\beta$, coherent state in mode $b$.
memean-field approximation
We go to interaction picture, e.g. $a_{c}=\tilde{a}_{c} e^{-i w_{c} t}, b=\tilde{b} e^{-i \omega_{b} t}$ and replace $\tilde{b}$ by $\beta$. Then the $e^{i\left(2 w_{c}-w_{b}\right) t}$ term candles.
$\tilde{H}=\hbar \omega_{c} \tilde{a}_{c}^{t} \tilde{a}_{c}+i \hbar X \beta\left(\tilde{a}_{c}^{t^{2}}-\tilde{a}_{c}^{2}\right)$ and the Leisenberg-equation gives it $\frac{d a_{c}}{d t}=\left[H, a_{c}\right]=i \hbar \frac{d}{d t}\left(\tilde{a}_{c} e^{-i \omega_{c} t}\right)$

We find $\frac{d \tilde{a}_{c}}{d t}=2 x \beta \tilde{a}_{c}^{+}$and the same for $\tilde{a}_{c}^{+}$. Using $a_{Q}=\frac{a_{c}+a_{c}^{+}}{2}$ and $a_{p}=\frac{a_{c}-a_{c}^{+}}{2 i}$, we have finally decoupled the equation:
Non linearity mixes $a_{c}$ and $\tilde{a}_{c}$
$$
\begin{align*}
\begin{aligned}
& \frac{d a_{Q}}{d t}=2 x \beta a_{Q} \text { and } \frac{d a_{p}}{d t}=-2 x \beta a_{p} \\
& \rightarrow a_{Q}(t)=a_{Q}(0) e^{2 x \beta t}
\end{aligned}
\end{align*}
$$

1) Start in $\left|a_{c}\right\rangle:\left\langle a_{Q}(0)\right\rangle=\left\langle a_{p}(0)\right\rangle=0$ and $\Delta a_{Q}(0) \cdot \Delta a_{p}(0)=\frac{1}{4} \Rightarrow\left\langle a_{Q}(t)\right\rangle=\left\langle a_{p}(t)\right\rangle=0$
2) $\left.N(t)=\left\langle a_{c}^{\dagger} a_{c}\right\rangle=\left\langle b^{\dagger} b\right\rangle=\left\langle\left(a_{Q}(t)-i a_{p}(t)\right)\left(a_{Q}(t)+i a_{p}(t)\right)\right\rangle=\sinh ^{2}(2 x \beta t)\right\rangle 0$
III) Since $\Delta a_{Q}^{2}=\left\langle a_{Q}^{2}\right\rangle-\left\langle Q_{Q}\right\rangle^{2}=\frac{1}{4} e^{4 \times \beta+} \Rightarrow \Delta a_{Q} \cdot \Delta a_{p}=\frac{1}{4}$ Still minimal uncertainity state.

Atom-field interactions
Consider charged particle interacting with quantized field in coulomb gauge:

We rewrite $L_{\text {int }}=\sum_{\alpha} q_{\alpha} \dot{r}_{\alpha} A\left(r_{\alpha}\right)$ which is independent of $\dot{A} \Rightarrow$ Conjugate momenta $\Pi_{\sigma_{k}}(k)=\left(\frac{\partial \alpha}{\partial \dot{A}}\right)^{x}=\varepsilon_{0} \widetilde{A}_{\sigma_{k}}(k)$ unchanged. However conjugate momenta for charged particle gets modified: $p_{\alpha}=\frac{\partial \alpha}{\partial \dot{r}_{\alpha}}=m_{\alpha} \dot{r}_{\alpha}+q_{\alpha} A\left(r_{\alpha}\right) \Leftrightarrow \dot{r}_{\alpha}=\frac{p_{\alpha}-q_{\alpha} A\left(r_{\alpha}\right)}{m_{\alpha}}$

The hamiltonian is $H=\sum_{\alpha} \dot{r}_{\alpha} \cdot p_{\alpha}-L=\sum_{\alpha} \frac{1}{2} m_{\alpha} \dot{r}_{\alpha}^{2}+V_{\text {coil }}-L_{\text {field }}=\sum_{\alpha} \frac{1}{2 m_{\alpha}}\left(p_{\alpha}-q_{\alpha} A\left(r_{\alpha}\right)\right)^{2}+V_{\text {coll }}+H_{\text {field }}$
$$
\begin{align*}
\begin{aligned}
& =\sum_{\alpha} \frac{p_{\alpha}^{2}}{2 m_{\alpha}}+V_{\text {col }}-\sum_{\alpha} \frac{p_{\alpha}}{m_{\alpha}} q_{\alpha} A\left(r_{\alpha}\right)+\sum_{\alpha} \frac{1}{2 m_{\alpha}} q_{\alpha}^{2} A^{2}\left(r_{r_{\alpha}}\right)+H_{\text {field }} \\
& =H_{\text {particle }}+H_{\text {int }}^{(1)}+H_{\text {int }}^{(2)}+H_{\text {field }}
\end{aligned}
\end{align*}
$$

- $H_{\text {int }}^{(1)}$ couples particle and field degrees of freedom.
- $H_{\text {lint }}^{(2)}$ describes vibrational kinetic energy of charged particle in sinusoidal field.
$\Rightarrow$ Provided intra-atomic folds $\gg$ external fields: $\left|H_{\text {mit }}^{(1)}\right| \gg\left|H_{\text {int }}^{(2)}\right| \triangleq$ optical domain

In Quantum optic, we use $H_{\text {int }}=-\sum_{\alpha} q_{\alpha} \vec{r}_{\alpha} \vec{E}_{\alpha}$ the electric-dipole hamiltonian.
We want formulation where $H_{\text {paticices }}=H_{\text {emitter }}=H_{\text {athens }}$ remains unchanged in presence of field.
$L \rightarrow \tilde{L}=L+\frac{d}{d t} F\left(r_{\alpha}\right)$ gives same equations.

1) Göppert-Meyer transformation relevant for LWA

We choose $F=-\sum_{\alpha} q_{\alpha} \cdot \vec{r}_{\alpha} \cdot \vec{A}(0, t)$ where $A\left(r_{1}+t\right) \rightarrow A(0, t)$ justified for field wavelength $\lambda$ assonnm maximums so vation of a atoms 0.1 nm Then $\tilde{L}=L_{\text {particle }}+L_{\text {Redd }}+L_{\text {int }}-\sum_{\alpha} q_{\alpha} \frac{d}{d t}\left(r_{\alpha} A(0,+)\right)=L_{\text {partite }}+L_{\text {redd }}+\sum_{\alpha} q_{\alpha} \dot{r}_{\alpha} A\left(r_{\alpha}\right)-\sum_{\alpha} q_{\alpha} \frac{d}{d t}\left(r_{\alpha} A(0, t)\right)=L_{\text {particle }}+L_{\text {reid }}-\sum_{\alpha} q_{\alpha} r_{\alpha} \dot{A}(0,+)$ Assuming field is not dynamical: $L_{\text {field }}=0$ or $\dot{A}=0 \Rightarrow p_{\alpha}=m_{\alpha} \dot{r}_{\alpha}$ we get our new hamiltonian:
$$
\begin{align*}
\begin{aligned}
\tilde{H}=\sum_{\alpha} \dot{r}_{\alpha} p_{\alpha}-\tilde{L}=\sum_{\alpha} m_{\alpha} \dot{r}_{\alpha}^{2}-\tilde{L} & =\sum_{\alpha} \frac{1}{2} m_{\alpha} \dot{r}_{\alpha}^{2}+V_{\text {cool }}+\sum_{\alpha} q_{\alpha} r_{\alpha} \dot{A}(0,+) \\
& =\sum_{\alpha} \frac{p_{\alpha}^{2}}{2 m_{\alpha}}+V_{\text {col }}-d \cdot E(0, t) \quad \text { where the dipole operator is } \vec{d}=\sum_{\alpha} q_{\alpha} \vec{r}_{\alpha}
\end{aligned}
\end{align*}
$$

Justified for servi-classical limit and dynamical fields in LWA limit.
2) Power - Zienav - Wooley transformation

Consider $F(r)=-\int d^{3} r \cdot \vec{P}(r) \cdot \vec{A}(r)$ with the polarization density: $\vec{P}(r)=\sum_{\alpha} q_{\alpha} r_{\alpha} \int_{0}^{1} d \lambda \cdot \delta\left(r-\lambda r_{\alpha}\right)$.
Further assume globally neutral system: $\sum_{\alpha} q_{\alpha}=0$
We can write $j(r)=\dot{P}(r)+\nabla \times M(r)$ where $\dot{P}$ is polavization comment and $\nabla \times \vec{M}$ is magnetization current.

Going back to $L_{\text {int }}=\int d^{3} r \cdot \vec{\jmath}(r) \cdot \vec{A}(r)=\int d^{3} r \cdot \dot{P}(r) A(r)+\int d^{3} r \cdot(\nabla \times M(r)) A(r)$. Our specific choice of $F(r)=-\int d^{3} r \cdot \vec{P}(r) \cdot \vec{A}(r)$ will get rid of first part, it however leaves $-\int d^{3} r \cdot \vec{P}(r) \dot{\vec{A}}(r)$.

For the second term, we integrate by parts to $\tilde{L}_{\text {int }}=L_{\text {int }}+\frac{d}{d t} F=-\int d^{3} r \cdot P(r) \dot{A}(r)+\int d^{3} r \cdot M(r) \cdot B(r)$
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-05.jpg?height=733&width=4120&top_left_y=3044&top_left_x=1906)

Furthermore, the conjugate momenta?
term leads to magn.dipole
transitions and diamagnetic terms
for fields: $\tilde{\Pi}_{\sigma_{k}}(k)=-\varepsilon_{0} \dot{\tilde{A}}_{\sigma_{k}}(k)-\widetilde{P}_{\sigma_{k}}(k)$
In the LWA limit and $E(r) \approx E(0)+\left.\vec{r} \cdot \vec{\nabla} \vec{E}(r)\right|_{r=0} \ldots$ gives $\mathcal{H}_{\text {int }}=\int d^{3} r \cdot P(r) \cdot E(r) \approx-\sum_{\alpha} q_{\alpha} \vec{r}_{\alpha} \vec{E}_{1}(0, t)+\ldots$
where the first term is the electric-dipole term. Note $r=0$ is position of emitter.
Note further, $\frac{\text { magn. dipole }}{\text { elechic dipole }} \approx \frac{\alpha}{2}$ so $M D \ll E D \quad M D$ and $E Q$ only important if ED transitions are not allowed by symmetry.

Taynes-Cummings model
We can now write $H=H_{\text {emitter }}+\sum_{k, \sigma_{k}} \hbar w_{k} a_{k}^{+} a_{k}-\vec{d} \vec{E}(0, t)$ which is valid in the LWA limit.
For states such as $1 s, 2 s, 2 p \ldots \quad \sqrt{\left\langle r^{2}\right\rangle} \approx 1 \AA<\lambda_{i j} \approx 2 n m$, this is a good approximation.
We will consider $H_{e m i t t e r}=H_{a t o m}=\sum_{i} \hbar w_{i} \mid i><i l$ e.g a single emitter, since we are interested in emitter-field-intevaction.
Writing $\vec{d}=q \vec{r}=\sum_{i j}|i><i| \vec{d}|j \ll j|=\sum_{i j} M_{i j}|i\rangle\langle j|$ with $M_{i j}$ mahix element. Important is that $M_{i i}=\langle i| d|i\rangle=0$ (angular momentum $\underset{\text { conservation) }}{\text { ( }}$

It follows: $\quad H_{\text {lint }}=-d \cdot E(0, t)=-i \sum_{i j k \alpha} M_{i j}^{(\alpha)} \sqrt{\frac{\hbar \omega_{k}}{2 E_{0} V}} \operatorname{li}<j l_{a}\left(a_{k} e^{i k R_{\alpha}}+a_{k}^{+} e^{-i k R_{\alpha}}\right)$
We note that $\left|R_{\alpha}-R_{\alpha}\right| \gg \lambda$, does not violate $L W A$, since each dipole has to be small to $\lambda$.
Introduce $g_{k}^{i j}=M_{i j}^{(\alpha)} \sqrt{\frac{\hbar w_{k}}{2 \varepsilon_{0} V}}$ the coupling strength of mode $k$ and atomic transition $i \rightarrow j$.

Now, three key approximations are made:

1) We deal with emitter at $R_{\alpha}=0$
II) Only single mode couples strongly to emitter: $\left\{w_{c}, a_{c}\right\}$ (done by carry)
III) Only two states $|g\rangle$ and $|e\rangle$ couple to $a_{c}$ with decent strength.
$$
\begin{align*}
\Rightarrow H_{\text {int }}^{\text {shr. }}=-i \hbar g_{c}(|e><g|+|g><e|)\left(a_{c}-a_{c}^{+}\right)=-i \hbar g_{c}\left(\sigma_{e g}+\sigma_{g e}\right)\left(a_{c}-a_{c}^{\dagger}\right) \text { with } g_{c}=M_{e g} \sqrt{\frac{\hbar w_{c}}{2 \varepsilon_{0} V_{c}}} \text { and optimal cavity volume } V_{c}=\left(\frac{M_{e g}}{q}\right)^{2} \cdot \lambda
\end{align*}
$$

Now to the rotating wave approximation: $H_{i n t}^{\operatorname{sch} r .}$ contains 4 terms: $\left\{\begin{array}{l}\sigma_{e g} a_{c}^{+}, \sigma_{g e} a_{c} \\ \sigma_{e g} a_{c}, \sigma_{g e} a_{c}^{\dagger}\end{array}\right.$ for $w_{c} \approx w_{e g: ~}^{\text {not energy cons er }} \begin{array}{l}\text { energy conserving }\end{array}$
The non-conserving terms lead to energy change of $\omega_{\text {eg }}+w_{c} \hat{=}$ virtual process
Transforming to interaction picture $\mathcal{H}_{\text {int }}^{i n k t .}=-i \hbar g_{c}\left(\sigma_{e g} a_{c} e^{i\left(\omega_{e g}-\omega_{c}\right) t}-\sigma_{e g} a_{c}^{t} e^{i\left(\omega_{e g}+\omega_{c}\right) t}+h^{c}\right)$

Let us assume $|\psi(0)\rangle=\left|g_{1, n}\right\rangle$ and weak coupling. Then $|\psi(t)\rangle=a_{g, n}|g, n\rangle+a_{e, n-1}|e, n-1\rangle+a_{e, n+1}\left|e_{, n} n+1\right\rangle+\ldots$
Plugging into Schrōdinger equation: $\left\{\begin{array}{l}\frac{d a_{e, n-1}}{d t}=+g_{c} \sqrt{n} e^{i\left(\omega_{e g}-w_{c}\right) t} \cdot a_{g, n}+\ldots \\ \frac{d a_{e, n+1}}{d t}=-g_{c} \sqrt{n+1} \cdot e^{i\left(w_{e g}+w_{c}\right) t} \cdot a_{g, n}+\ldots\end{array}\right.$

Now assume $g_{e} \sqrt{n}, w_{e g}-w_{c} \ll w_{e g}+w_{c}$ so we get $\left\{\begin{array}{l}\left|a_{e, n-1}\right| \approx\left|\frac{g_{c} \sqrt{n+1}}{\omega_{e g}-w_{c}}\right| \\ \left|a_{e, n+1}\right| \approx\left|\frac{g_{c} \sqrt{n}}{w_{e g}+w_{c}}\right| \Rightarrow \text { For } g_{c} \sqrt{n} \ll w_{e g,} \text { it is }\left|a_{e, n-n}\right| \gg\left|a_{e, n+1}\right| \\ \text { Only consider energy conserving terms }=R W A\end{array}\right.$

Then the Jaynos-Cummings hamiltonian is $\mathcal{H}_{J C}^{\text {inter }}(t)=-i \hbar g_{c}\left(\sigma_{e g} a_{c} e^{i\left(\omega_{e g}-\omega_{c}\right) t}-\sigma_{g e} a_{c}^{t} e^{-i\left(\omega_{e g}-\omega_{c}\right) t}\right)$
$$
\begin{align*}
\mathcal{H}_{J c}^{\sin r}=-i \hbar g_{c}\left(\sigma_{e g} a_{c}-\sigma_{g e} a_{c}^{+}\right)=-\hbar g_{c}\left(\sigma_{\text {eg }} a_{c}+\sigma_{g e} a_{c}^{+}\right)
\end{align*}
$$

1 cavity mode
2 emitter states
1 emitter

If $g_{c} \sqrt{n} \sim \omega_{\text {eg, }}$ the RWA would not be valid and we consider another transition: $\left|g_{1} 1\right\rangle \leftrightarrow\left|f_{1} 0\right\rangle$

Taynes-cummings model: Cavity QED
$g_{c}$ is usually $\sim 10 \mathrm{MHz}, w_{\text {eg }} \sim 300 T H z \sim w_{c}, M_{\text {eg }} \sim e\langle r\rangle$ eg $\sim 10^{-2 g}$. We want $l \geqslant\langle r\rangle_{\text {eg }} \Rightarrow \frac{g_{c}}{w_{c}}=\sqrt{\alpha} \Leftrightarrow g_{c}\left\langle w_{c}\right.$ as expected.

Vacuum Rabi oscillations
Assume $|\psi(0)\rangle=|e, n\rangle$ and $\omega_{e g}=\omega_{c}$, then $\mathcal{H}_{\text {int }}^{\text {inter. }}=\hbar g_{c}\left(\sigma_{\text {eg }} a_{c}+\sigma_{g e} a_{c}^{+}\right)$is relevant.
In RWA only states within excitation manifolds couple: $|e, n\rangle \longleftrightarrow|g, n+1\rangle \quad$ (without $R W A_{1}|g, n\rangle \leftrightarrow|e, n+1\rangle$ )

Setting $|\Psi(t)\rangle=a_{g}|g, n+1\rangle+a_{e}|e, n\rangle$ and using Schrödinger equation yields:
$$
\begin{align*}
i \hbar \frac{d}{d t}|\psi(t)\rangle=i \hbar\left(\dot{a}_{g}\left|g_{1} n+1\right\rangle+a_{e}|e, n\rangle\right)=H_{\text {int }}^{\text {inks }}|\psi(t)\rangle=i \hbar g_{c}\left(a_{g} \sqrt{n+1}|e, n\rangle-a_{e} \sqrt{n+1}\left|g_{, n}+1\right\rangle\right)
\end{align*}
$$
$\left\{\begin{array}{l}\dot{a}_{g}=-g_{c} \sqrt{n+1} \cdot a_{e}\end{array}\right.$
solved by $a_{g}(t)=-\sin \left(g_{c} \cdot \sqrt{n+1} \cdot t\right)$ and $a_{e}(t)=\cos \left(g_{c} \sqrt{n+1} t\right)$

Important: Even $n=0$ yields sinusoidal oscillations. Vacuum acts like coherent field.
For $g_{c} \sqrt{n+1} t \neq k \pi$, the field are entangled.
If we were to set $|\Psi(0)\rangle=|e, \alpha\rangle, P_{e}(t)=\sum_{n}\left|c_{n}\right|^{2} \frac{1+\cos (2 g \sqrt{n+1} t)}{2} \cong$ Oscillation quickly gets out of phase.
Collaps time $t_{c 0 l}$ can be estimated by $t_{c 01} \cdot g\left(\sqrt{\bar{n}+\frac{\Delta n}{2}}-\sqrt{n-\frac{\Delta n}{2}}\right)=\pi$ when $\left\langle\sigma_{e e}\right\rangle \approx \frac{1}{2}$
For coherent fields, $\bar{n}=\Delta n$, here we get $t_{c o 1} \approx \frac{2 \pi}{g_{c}}$ which is independant of the photon number.
The oscillatory behavior reoccurs when the different terms are $2 \pi$ out of phase: $g_{c}(\sqrt{\bar{n}+1}-\sqrt{\bar{n}}) t_{\text {rev }}=2 \pi \Rightarrow t_{\text {rev }}=\frac{4 \pi}{g_{e}} \sqrt{n}$ Dressed states
$$
\begin{align*}
\approx \frac{1}{2} \sqrt{\frac{1}{\bar{n}}}
\end{align*}
$$

We now set $w_{e g} \neq w_{c}$ and the hamiltonian of interest is $H=\hbar w_{c} a_{c}^{+} a_{c}+\hbar w_{e g} \sigma_{e e}+\hbar g_{c}\left(\sigma_{e g} a_{c}+\sigma_{g e} a_{c}^{+}\right)=H_{0}+H_{\text {int }}$
We want to solve the schrodinger equation: $\left(H_{0}+H_{1 n t}\right)(\alpha|g, n+1\rangle+\beta|e, n\rangle)=E_{n+1}\left(\alpha\left|g_{1} n+1\right\rangle+\beta|e, n\rangle\right)$ where $H_{0}\left|g_{1} n+1\right\rangle=E_{g n+1}\left|g_{1 n+1}\right\rangle$.
$$
\begin{align*}
\text { Multiply }\left\langle g_{, n}+1\right| \text { and <e,n| from left: }\left\{\begin{array}{l}
\alpha E_{g_{1 n+1}}=\alpha E_{n+1}+\beta\left\langle g_{1} n+1\right|+\|_{i n t}\left|e_{1} n\right\rangle \\
\beta E_{e_{1} n}=\beta E_{n+1}+\alpha\left\langle e_{1 n}\right| H_{i n t}\left|g_{1} n+1\right\rangle
\end{array}\right.
\end{align*}
$$

Knowing that $\left\langle e_{1} n\right| H_{\text {int }}\left|g_{1} n+1\right\rangle=\hbar g_{c} \sqrt{n+1}$, we must solve the syskm of equations.
$$
\begin{align*}
\operatorname{det}\left(\begin{array}{cc}
E_{n+1}-E_{g, n+1} & \hbar g_{c} \sqrt{n+1} \\
\hbar g_{c} \sqrt{n+1} & E_{n+1}-E_{e, n}
\end{array}\right) \stackrel{!}{=} 0 \Rightarrow E_{n+1}^{ \pm}=\hbar w_{c}(n+1)+\hbar \frac{\Delta w}{2} \pm \hbar \sqrt{\left(\frac{\Delta w}{2}\right)^{2}+g_{c}^{2}(n+1)} \quad \text { with } \Delta w=w_{e g}-w_{c}
\end{align*}
$$

The eigenstates are $|+, n+1\rangle=\cos \theta \cdot e^{i \frac{\varphi}{2}}\left|g_{1} n+1\right\rangle+\sin \theta e^{-i \frac{\varphi}{2}}\left|e_{1} n\right\rangle$ and $|-, n+1\rangle=-\sin \theta \cdot e^{i \frac{\varphi}{2}}\left|g_{1} n+1\right\rangle+\cos \theta e^{-i \frac{\varphi}{2}}\left|e_{1} n\right\rangle$

For $\varphi=0: \quad \cos (2 \theta)=\frac{\Delta w}{\sqrt{(\Delta w)^{2}+4 g_{c}^{2}(n+1)}}$
For $\Delta w=0 \quad\left(\theta=45^{\circ}\right) \Rightarrow \cos (\theta)=\sqrt{\frac{1}{2}}$
The JC spectrum is anharmonic, in contrast to coupled harmonic oscillators.
$$
\begin{align*}
\Delta w=0: \quad \Delta w \neq 0:
\end{align*}
$$
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-08.jpg?height=472&width=1456&top_left_y=1985&top_left_x=3373)
$$
\begin{align*}
|+1,2\rangle
\end{align*}
$$
$$
\begin{align*}
\begin{gathered}
\left.2 g_{c} \downarrow=\begin{array}{c}
|+, 1\rangle \\
-\quad|-, 1\rangle \mid \\
\square\left|g_{1}, 0\right\rangle
\end{array} \right\rvert\,
\end{gathered}
\end{align*}
$$
$\qquad$
$$
\begin{align*}
-|-, 2\rangle
\end{align*}
$$
$$
\begin{align*}
\begin{aligned}
& 2 g_{c} \sqrt{2} \downarrow \\
& \Delta=(2-\sqrt{2}) g_{c} \downarrow \\
& |+, 2\rangle \\
& |-12\rangle
\end{aligned}
\end{align*}
$$
$$
\begin{align*}
\begin{gathered}
\Delta=(2-\sqrt{2}) g_{c} \downarrow \\
2 g_{c} \downarrow=\begin{array}{l}
\text { antibuncuii } \\
\omega_{\text {eg }}-g_{c} \downarrow \\
|+, 1\rangle \\
|-, 1\rangle \\
|g, 0\rangle
\end{array}
\end{gathered}
\end{align*}
$$

Anharmonic

Dispersive Jaynes-Cummings
For a single emitter in cavity with $\Delta w=w_{0 g}-\omega_{c} \gg g_{c} \sqrt{n}$, the spectrum is
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-08.jpg?height=1009&width=1152&top_left_y=4096&top_left_x=4778)

The schrieffer-Wolff transformation is $\tilde{H}=e^{-s} H e^{s}$ with $S=-\frac{g_{c}}{\Delta w}\left(\sigma_{e g} a_{c}-a_{c}^{+} \sigma_{g e}\right)$
$$
\begin{align*}
\Rightarrow \tilde{H}=e^{-s}\left(H_{0}+H_{i h t}\right) e^{s}=H_{0}+\frac{1}{2}\left[H_{i n t,} s\right]+0\left(\left(\frac{g_{c}}{\Delta w}\right)^{3}\right)=\hbar \omega_{c} a_{c}^{+} a_{c}+\hbar \omega_{e g} \sigma_{e e}+\hbar \frac{g_{c}^{2}}{\Delta \omega} \sigma_{e e}+\hbar \frac{g_{c}^{2}}{\Delta w} a_{c}^{+} a_{c}\left(\sigma_{e e}-\sigma_{g g}\right)=\tilde{H}
\end{align*}
$$

No more transition
This hamiltonian conserves the atomic population $\left(\sigma_{e e}-\sigma_{g g}\right)$ and the photon number $a_{c}^{\dagger} a_{c}:\left[\tilde{H}_{1} \sigma_{u}-\sigma_{g g}\right]=\left[\tilde{H}_{1} a_{c}^{\dagger} a_{c}\right]=0$
Measurement conserves photon number instead of using absorption.
$\cong$ Cavity induced $A C$-stark shift:
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-08.jpg?height=787&width=4070&top_left_y=7237&top_left_x=1947)
emitter sees AC-staik shift, field seen stake dependant detuning
Cavity $A C$-Stark shift
In the heisenberg picture: $i \hbar \frac{d \sigma_{e g}}{d t}=\left[H_{1} \sigma_{e g}\right] \Rightarrow \sigma_{e g}(t)=\sigma_{e g}(0) \cdot e^{-i \frac{g_{c}^{2}}{\Delta \omega} \tau_{\text {transit }} \cdot a_{c}^{+} a_{c}}$
Similarly, $a_{c}(t)=a_{c}(0) \cdot \exp \left(-i \frac{q_{c}^{2}}{\Delta w}\left(\sigma_{e e}-\sigma_{g g}\right)\right)$
$\Rightarrow$ Atomic phase contains information about photon number $\Rightarrow$ Quantum non-demolition measurement QND
"Extensions" of the Jaynes-Cummings model

1) $N$ identical 2-level atoms coupled to single mode: Tavis-Cummings
2) Single atom with $\geqslant 3$ internal states coupled to $\geqslant 2$ modes: Raman transitions
iII) Single atom coupled to continuum of field modes: Spontaneous emission.

Tavis-Cummings model
$N$ identical atoms $\left(\omega_{e g}^{i}=\omega_{\text {eg }}, g_{c}^{i} \equiv g_{c}\right)$ coupled to same cavity mode $a_{c}: H_{T c}=\sum \hbar \omega_{e g} \sigma_{e e}^{i}+\sum_{i} \hbar g_{c}\left(\sigma_{e g}^{i} a_{c}+a_{c}^{+} \sigma_{g e}^{i}\right)$
For $N=2: \quad \frac{}{\sqrt{2} g_{c}}|+, 1\rangle$
For $N=2: \frac{\sqrt{2} g_{c}}{\sqrt{2} g_{c}}-\left|\varphi_{0}, 0\right\rangle$ with the dark state $\left|\varphi_{D}\right\rangle=\frac{|e, g\rangle-|g, 0\rangle}{\sqrt{2}}$ that does not couple to the cavity.
It's "dark" since $H_{\text {int }}\left|\varphi_{0,}, n\right\rangle=0$. It will never decay, however that is hard to implement:
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-09.jpg?height=302&width=715&top_left_y=3617&top_left_x=880)
must be close to each other and then they start interacting.
$$
\begin{align*}
| \pm, 1\rangle=\frac{|g, g, 1\rangle \pm\left|\varphi_{B}, 0\right\rangle}{\sqrt{2}} \text { and the bright state: }\left|\varphi_{B}\right\rangle=\frac{|e, g\rangle+\left|g_{1} e\right\rangle}{\sqrt{2}} \text { with } H_{\text {int }}\left|\varphi_{B}, n\right\rangle \sim \sqrt{n+1}\left|g_{1} g, n+1\right\rangle+\left|e_{1},, n-1\right\rangle
\end{align*}
$$
$\Rightarrow\left\langle\varphi_{b}, n\right| H_{\text {int }}\left|g_{1}, g, n+1\right\rangle=\hbar g_{c} \sqrt{n+1} \triangleq$ collective enhancement of light-matter coupling.
So $E_{N}^{\dagger}-E_{N}^{-}=2 \sqrt{N} g_{c} \hat{=}$ coupling to cavity enhanced by $\sqrt{N} \simeq$ linear for $N \gg 1$.

Generally, for $N \gg 1$, the $n=1$ photon manifold has $N-1$ dark states and the single multiatom bright state:
$$
\begin{align*}
\left|\varphi_{B}\right\rangle=\frac{\left|e_{1} g_{1}, g\right\rangle+\ldots+\left|g_{1} \ldots, g_{1} e\right\rangle}{\sqrt{N}}=\frac{1}{\sqrt{N}} \sum_{i} \sigma_{e g}^{i}|G\rangle:=\frac{1}{\sqrt{N}} J_{+}|G\rangle \text { where }|G\rangle=\left|g_{1} \ldots, g\right\rangle
\end{align*}
$$

The eigenstates of the Tavis-Cummings hamiltonian are $| \pm, 1\rangle=\sqrt{\frac{1}{2}}\left(|G, 1\rangle \pm \frac{J_{+}}{\sqrt{N}}|G, 0\rangle\right)$ for the $n=1$ manifold.
We define the bright eigenstates as dicke states $\left(J_{t}\right)^{n}|G\rangle$. The total angular momentum $J^{2}$ is conserved:
This is only true as $\omega_{e g}^{i}=\omega_{e g}$ and $g_{c}^{i}=g_{c}$. With $J_{+}=\sum_{i} \sigma_{e g}^{i}$ and $J_{z}=\sum_{i}\left(\sigma_{g g}^{i}-\sigma_{e e}^{i}\right)$ the commutar becomes $\left[J_{+1} J_{-}\right]=i \hbar J_{z}$ $\Rightarrow J^{2}=J_{+}^{2}+J_{-}^{2}+J_{z}^{2}$ conserved.
$$
\begin{align*}
N=2
\end{align*}
$$

Natoms: $2^{N}$-dim. Hilbert space
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-09.jpg?height=1540&width=6090&top_left_y=8487&top_left_x=142)

Ultra-strong coupling
For one atom, $g_{c} \ll \omega_{c}=\omega_{e g}$, however for $N$ atoms $g_{c} \sqrt{N} \sim \omega_{e g} \triangleq$ Ultra-stivong coupling.
So RWA is no longer valid and the 2-elevel approximation neither.

Spontaneous emission
$$
\begin{align*}
|e\rangle \longleftarrow \equiv \begin{aligned}
& \left|1_{k_{2}}\right\rangle \\
& \left|1_{k_{1}}\right\rangle
\end{aligned} \quad \text { single excited. Single event = No reservoir }
\end{align*}
$$

Now we couple single atom to continuum $\left(k, \sigma_{k}\right)$ of modes: $|g\rangle--\left|0_{k}\right\rangle$ approximation

Start at $H=\hbar \omega_{e g} \sigma_{e e}+\hbar \sum_{k, \sigma_{k}} g_{k} a_{k}^{+} a_{k}^{+}+\hbar \sum_{k, \sigma_{k}} g_{k}^{+}\left(\sigma_{e g} a_{k}+a_{k}^{+} \sigma_{g_{e}}\right)$ still using RWA.

Wigner-Weisckopf derivation:
$|\psi(0)\rangle=\left|e_{1} 0_{k}\right\rangle$ where $O_{k}$ denotes no photons in mode $k$. Then $|\psi(t)\rangle=a_{e}(t)\left|e_{1} 0_{k}\right\rangle+\sum_{k} a_{k}(t)\left|g_{1} 1_{k}\right\rangle$
Working in Schrödinges picture $H_{\text {int }}^{\operatorname{schr} .}=i \hbar \sum_{k} g_{k}\left(\sigma_{e g} a_{k} e^{i\left(\omega_{e g}-\omega_{c}\right) t}-h . c\right)$

It follows $\frac{d}{d t}|\psi(t)\rangle=\frac{1}{i \hbar} H_{\text {int }}|\Psi(t)\rangle=\sum_{k} g_{k}\left(a_{k}(t)\left|e_{1} 0_{k}\right\rangle e^{i\left(\omega_{\text {eg }}-\omega_{k}\right) t}-a_{e}(t)\left|g_{1} 1_{k}\right\rangle e^{-i\left(\omega_{\text {eg }}-\omega_{k}\right) t}\right)$
$\Rightarrow \frac{d a_{e}}{d t}=\sum_{k} g_{k} a_{k} e^{i\left(\omega_{e g}-\omega_{k}\right) t}$ and $\frac{d a_{k}}{d t}=-g_{k} a_{e}(t) e^{-i\left(\omega_{e g}-\omega_{k}\right) t}$. Integrate and put into $\frac{d a_{e}}{d t}$ grelds:
$\frac{d a_{e}}{d t}=-\sum_{k}\left|\vec{g}_{k}\right|^{2} \int d t^{\prime} \cdot a_{e}\left(t^{\prime}\right) e^{i\left(\omega_{e g}-\omega_{k}\right)\left(t-t^{\prime}\right)} \quad$ Now using $\sum_{k} \rightarrow \frac{V}{(2 \pi)^{3}} \int d^{3} k \quad$ and $\quad g_{k}=\sqrt{\frac{\omega_{k}}{2 \pi \hbar V}}\left(\vec{M}_{e g} \vec{\sigma}_{k}\right)$, and $\omega_{k}=k \cdot c$ :

Choose $\vec{M}_{\text {eg }}=M_{\text {eg }} \cdot \hat{z}$ with $\theta=\left.\Varangle(\hat{z}, \hat{k}) \Rightarrow \lg _{k}\right|^{2} \sim\left(\vec{\Pi}_{e g} \vec{\sigma}_{k}\right)^{2}=M_{\text {eg }}^{2} \sin ^{2} \theta$. So $\sum_{k} \rightarrow \frac{V}{3 \pi^{3}} \int d w \cdot \frac{w^{2}}{c^{3}}$ since $\phi_{1} \theta$ give $\frac{2 \pi}{3}$
$$
\begin{align*}
\Rightarrow \frac{d a_{e}}{d t}=-\frac{M_{e g}^{2}}{6 \pi^{2} \hbar \varepsilon} \int_{0}^{\infty} d \omega \cdot \frac{\omega^{3}}{c^{3}} \int_{0}^{0} d t^{\prime} \cdot a_{e}\left(t^{\prime}\right) e^{i\left(\omega_{e g}-\omega_{k}\right)\left(t-t^{\prime}\right)}
\end{align*}
$$

Now the Markov approximation: $\left\{\begin{array}{l}1) a_{e}\left(t^{\prime}\right) \text { changes on timescales much slower than } \frac{1}{w_{e g}} \\ \text { II) }\end{array} \quad a_{e}\left(t^{\prime}\right) \rightarrow a_{0}(t)\right.$
$$
\begin{align*}
\Rightarrow \frac{d a_{e}}{d t}=-\frac{\Pi_{e g}^{2}}{6 \pi^{2} \hbar \varepsilon} \int_{0}^{t} d t^{\prime} \cdot a_{e}(t) \int_{0}^{\infty} d w \cdot \frac{\omega^{3}}{c^{3}} e^{i\left(\omega_{e g}-\omega_{k}\right)\left(t-t^{\prime}\right)}
\end{align*}
$$

Note that last integral is like $\delta\left(t-t^{\prime}\right)$ since $\left|t-t^{\prime}\right| \gg \frac{1}{\omega_{\text {eg }}}$ so fast oscillation sinus terms average to 0.

Write $i\left(\omega_{\text {eg }}-\omega_{k}\right)=\lim _{\varepsilon \rightarrow 0}\left(i\left(\omega_{\text {eg }}-\omega_{k}\right)-\varepsilon\right)$ to get:
$$
\begin{align*}
\frac{d a_{e}}{d t}=-\frac{M_{e g}^{2}}{6 \pi \hbar \varepsilon_{0} c^{3}} a_{e}(t)-i \frac{M_{e g}^{2}}{6 \pi^{2} \hbar \varepsilon_{0} c^{3}} P\left(\frac{\omega_{e g}^{2}}{\omega_{e g}-\omega}\right) a_{e}(t):=-\frac{\Gamma_{e g}}{2} a_{e}(t)-i \Delta_{l s} \cdot a_{e}(t)=\frac{d a_{e}}{d t}
\end{align*}
$$

The first term describes decay, the second is the lamb shift. Since its complex, its an energy shift of atomic transitions. Then $\frac{\Gamma_{e g}}{\omega_{e g}}=\alpha \cdot \frac{\left\langle\sigma_{e q}\right\rangle^{2}}{\lambda^{2}} \cdot \frac{4 \pi^{3}}{3}$ small! So for $\Gamma_{e g} \ll \omega_{e g}$ our assumptions are correct.

Note that effective hamiltonian $\mathcal{H}_{e f f}=\left(\hbar \omega_{e g}-\hbar \Delta_{l s}\right) \sigma_{e e}-i \hbar \frac{\Gamma_{e q}}{2} \sigma_{e e}$ would yield $\lim _{t \rightarrow \infty} a_{e}(t)=0$, but also $a_{g}(t)=0$ since there is no coupling to ground state. $\%$

Important observations: 1) Unitary Schrödinges equation ends in exponential decay. The decay rate $\Gamma$ is correct, but We cun't just use emitter wavefunction that discards field degrees of freedom.
11) Not just $\omega_{e g}=\omega_{k}$ are responsible for spontaneous emission, but vather the presence of large bandwidth of modes ensures validity of Markov's approximation.

Density operator
Since emitter becomes correlated with reservoir $|\psi(t)\rangle \neq\left|\varphi_{\text {atom }}\right\rangle\left|\phi_{\text {rad.f.eld }}\right\rangle$, we can't use $|\psi(t)\rangle=\alpha|e\rangle+\beta|g\rangle$.
Our information is incomplete, so we need the density operator formalism.
Assume closed system: Full information of system contained in $|\psi(t)\rangle$ where $\rho(t)=|\psi(t)\rangle\langle\psi(t)|$
$\operatorname{Van}$ Newman equation: it $\frac{d \rho}{d t}=[H, \rho(t)]$ and $\langle A\rangle=\langle\psi| A|\psi\rangle=\operatorname{Tr}[A \rho(t)]=\operatorname{Tr}[\rho A(t)]$

For the $J C$ model, $|\psi(t)\rangle_{A B}=\alpha\left|e_{1} O_{C}\right\rangle+\beta\left|g_{1} 1_{c}\right\rangle$ such that $T_{B}\left[|\psi\rangle\left\langle\left.\psi\right|_{A B}\right] \approx \frac{1}{2} \mathbb{1}_{A} \hat{=} N_{0}\right.$ information, but information in corelation.
Properties of density operator:

1) $\operatorname{Tr}[9]=1$ so probability is conserved
2) $\rho(t)=\sum_{i} p_{i}|\psi(t)\rangle\langle\psi(t)|$ with $\sum_{i} p_{i}=1$ and $\operatorname{Tr}\left[\rho^{2}\right] \leqslant 1$
3) $\rho$ pure $\Rightarrow \operatorname{Van~Neumann~entropy~}-k_{B} \operatorname{Tr}[\rho \log \rho]=0$
4) Time evolution $\frac{d \rho_{A}}{d t}=\frac{1}{i \hbar}\left[H_{A_{1}} \rho_{A}\right]+\alpha\left(\rho_{A}\right)$ where $\alpha\left(\rho_{A}\right)=0$ for $\rho_{A}^{2}=\rho_{A}$

Note that $\rho(t)$ is hermitian. The thermal state $\rho_{T}=\sum_{n} \frac{\bar{n}^{n}}{(n+1)^{n+1}}|n\rangle\langle n|$ maximizes entropy.

Master equation
We want expand derivation of spontaneous emission and get time evolution for reduced $P_{s}$.

Consider $\quad H_{i n t}=\sum_{i} \beta_{i} A_{s}^{i} \otimes B_{R}^{i}=\hbar \sum_{k} g_{k}\left(\sigma_{e g} a_{c}+\sigma_{g e} a_{c}^{+}\right)$with assumption that bath is bosonic and $B_{i}$ linear in $a_{k} a_{k}^{+}$.

In the interaction picture $H_{\text {int }}^{\text {inter. }}=\hbar \sum_{k} g_{k}\left(\sigma_{e g} a_{c} e^{i\left(\omega_{e g}-\omega\right) t}+\sigma_{g e} a_{c}^{+} e^{-i\left(\omega_{e g}-\omega\right) t}\right)$

1) Integrate van Neumann equation: $\rho_{A B}(t)=\rho_{A B}(0)+\frac{1}{i \hbar} \int_{0}^{t} d t^{\prime} \cdot\left[H_{\text {int }}\left(t^{\prime}\right), \rho_{A B}\left(t^{\prime}\right)\right]$
2) Plug back into von Newman equation: $\frac{d \rho_{A B}}{d t}=\frac{1}{i \hbar}\left[H_{\text {int }}(t), \rho_{A B}(0)\right]-\frac{1}{\hbar^{2}} \int_{0}^{t} d t^{\prime}\left[H_{\text {int }}(t),\left[H_{\text {int }}\left(t^{\prime}\right), P_{A D}\left(t^{\prime}\right)\right]\right]$
3) Take Trace over $B: \quad \frac{d \rho_{A}}{d t}=-\frac{1}{\hbar^{2}} \int_{0}^{t} d t^{\prime} . \operatorname{Tr}_{B}\left[\left[H_{i n t}(t),\left[H_{\text {int }}\left(t^{\prime}\right), \rho_{A B}\left(t^{\prime}\right)\right]\right]\right]$ no approximation, only assuming thermal reservoir.

The first term drops out, because we take $\rho_{A B}(0)=\rho_{A}(0) \otimes|0 \times 0|_{B} \cong$ Bath is in ground state initially.

The general form is $\rho_{A B}\left(t^{\prime}\right)=\rho_{A}\left(t^{\prime}\right) \otimes \rho_{B}\left(t^{\prime}\right)+\Delta \rho_{\text {corr }}\left(t^{\prime}\right)$
$\approx \rho_{A}\left(t^{\prime}\right) \otimes \rho_{B}\left(t^{\prime}\right) \quad$ Born approximation: Weak interaction, $t_{\text {corr }} \ll$ system evolution time scale
$\approx \rho_{A}\left(t^{\prime}\right) \otimes \rho_{B}(0) \quad$ Reservoir approximation: Resevoir state independent of interaction
$\approx P_{A}(t) \otimes \rho_{B}(0) \quad$ Markov approximation: System has no memory (implies Born)
broad and flat bandwidth require to use single rate
$\Rightarrow \frac{d \rho_{A}}{d t}=-\frac{1}{\hbar^{2}} \int_{0}^{t} d t^{\prime} \cdot \operatorname{Tr}_{B}\left[H_{\text {int }}(t) H_{\text {int }}\left(t^{\prime}\right) \rho_{A}(t) \rho_{B}(0)+3\right.$ other $]$. All 4 terms with $\operatorname{Tr}_{b}$ give $\sim \hbar^{2} \sum_{k}\left|g_{k}\right|^{2} e^{ \pm i\left(w_{e g}-w_{k}\right)\left(t-t^{\prime}\right)}$
since only $\operatorname{Tr}_{r_{B}}\left[a_{k^{\prime}} a_{k}^{+} \rho_{B}(0)\right]=\delta_{k k^{\prime}}$. All 4 terms integrated gives: $\sim \int_{0}^{t} d t^{\prime} \cdot \sum_{k}\left|g_{k}\right|^{2} e^{ \pm i\left(w_{e g}-w_{k}\right)\left(t-t^{\prime}\right)}=-\frac{\Gamma_{e g}}{2}+i \Delta_{L s}$
so finally $\frac{d \rho_{A}}{d t}=\frac{\Gamma_{e g}}{2}\left(2 \sigma_{g e} \rho_{A} \sigma_{e g}-\sigma_{e e} \rho_{A}-\rho_{A} \sigma_{e e}\right)+$ terms with $\Delta_{L S}$

The general Master equation $\frac{d \rho_{A}}{d t}=\frac{1}{i \hbar}\left[H_{A} \rho_{A}\right]+\sum_{i} \frac{\Gamma_{i}}{2}\left(2 C_{i} \rho_{A} C_{i}^{+}-C_{i}^{+} c_{i} \rho_{A}-P_{A} c_{i}^{+} c_{i}\right)$ for Born+ Markov + RWA justified.

Consider $\left\langle\dot{\sigma}_{e e}\right\rangle=\operatorname{Tr}\left[\sigma_{e e} \cdot \frac{d \rho_{A}}{d t}\right]=-\Gamma_{e g}\left\langle\sigma_{e e}\right\rangle$ exponential decay
Similarly $\left\langle\dot{\sigma}_{g g}\right\rangle=\Gamma_{\text {eg }}\left\langle\sigma_{g g}\right\rangle$ population increase due to spontaneous emission $V$
The coherences decay exponentially: $\left\langle\dot{\sigma}_{\text {eg }}\right\rangle=-\frac{\Gamma}{2}\left\langle\sigma_{\text {eg }}\right\rangle$

Purcell effect
Consider photon loss due to imperfect mirror at rate $\mathrm{K}_{c}$ :
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-13.jpg?height=946&width=2338&top_left_y=307&top_left_x=3022)

System $s$ is emitter and cavity $\Rightarrow \frac{d \rho_{s}}{d t}=\frac{1}{i \hbar}\left[H_{s} \rho_{s}\right]+\frac{\Gamma_{e g}}{2}\left(2 \sigma_{g e} \rho_{s} \sigma_{e g}-\sigma_{e e} \rho_{s}-\rho_{s} \sigma_{e c}\right)+\frac{k_{c}}{2}\left(2 a_{c} \rho_{s} a_{c}^{+}-a_{c}^{+} a_{c} \rho_{s}-\rho_{s} a_{c}^{+} a_{c}\right)$
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-13.jpg?height=604&width=6678&top_left_y=1788&top_left_x=166)
Then $\left\langle\sigma_{e e}\right\rangle=T_{1}\left[\sigma_{\text {oe }} g_{s}\right]=\left\langle e_{1} 0\right| \rho_{s}\left|e_{1} 0\right\rangle$ and similarly $\left.\left\langle a_{c} \sigma_{e g}\right\rangle=\operatorname{Tr}\left[a_{c} \sigma_{\text {eg }} \rho_{s}\right]=\left\langle g_{1}\right| 1 \rho_{s}\left|\rho_{1},\right\rangle\right\rangle=g_{g e}$
$$
\begin{align*}
\left.\begin{array}{rl}
\Rightarrow\left\langle\dot{\sigma}_{e c}\right\rangle= & \frac{d \rho_{e e}}{d t}=\left\langle e_{1} 0\right| \frac{d \delta_{s}}{d t}\left|e_{0} 0\right\rangle=-i g_{c}\left(\rho_{g e}-\rho_{e g}\right)-\Gamma_{e g} \rho_{e e} \\
\frac{d \rho_{e e}}{d t}=\left\langle\left. g_{,} 1 \frac{d \rho_{s}}{d t} \right\rvert\, e_{1} 0\right\rangle=-i g_{c}\left(\rho_{e_{e e}}-\rho_{g_{g j}}\right)-\left(\frac{\Gamma_{e g}+k_{e}}{2}\right) \rho_{e g}
\end{array}\right\}
\end{align*}
$$

The purcell regime is $K_{c} \gg g_{c}>\Gamma_{\text {eg }}$ and eigenstates of coupled cavity-emitter system are not entangled.
In steady state $\frac{d \rho_{\text {ge }}}{d t}=0 \Leftrightarrow \rho_{\text {eg }}=\frac{-i 22_{c}}{\Gamma_{\text {eg }}+K_{c}} \rho_{\text {ce }}$. Into first equation: $\frac{d \rho_{e e}}{d t}=-\left(\frac{4 g_{c}^{2}}{\Gamma_{R_{e g}}+K_{c}}+\Gamma_{\text {eg }}\right) \rho_{\text {see }} \approx-\left(4 \cdot \frac{g_{c}^{2}}{k_{c}}+\Gamma_{e g}\right) \rho_{\text {see }}$
This is an enhancement of the emitter decay rate. There is now cavity mediated decay.
Purcell factor $F=4 \frac{g_{c}^{2}}{f_{\text {oo }} K_{c}}=\frac{3}{4 \pi^{2}}\left(\lambda_{n}^{3} \frac{Q}{V}\right)$ with quality factor $Q=\frac{\omega_{c}}{k_{c}}$ ratio of cavity-induced decay to spontaneous decay.

For $F \gg 1, g_{c}^{2} \gg k_{c} \Gamma_{\text {eg }}$ so the emitters decay primarily through cavity coupling.
The purcell factor $F$ is sometimes called coperaritining $C$.
$O_{\text {plical bloch equations }}$
These equations are valid for two-level atom driven conerentity:
$$
\begin{align*}
\begin{array}{ll}
\frac{d \rho_{\text {ea }}}{d t}=-i \frac{\Omega_{L}}{2}\left(\rho_{g e}-\rho_{e g}\right)-\Gamma_{\text {eg }} \Gamma_{\text {le }} & \operatorname{Tr}[\rho]=1 \Leftrightarrow \frac{d}{d t}\left(\rho_{\text {le }}+\rho_{g g}\right)=0 \\
\frac{d \rho_{\text {eg }}}{d t}=-i \frac{\Omega_{L}}{2}\left(\rho_{g g}-\rho_{e e}\right)-\left(\frac{\gamma}{2}+i \Delta\right) \rho_{g e} & \text { for } \gamma \text { total coherence decay. }
\end{array}
\end{align*}
$$

Generation of quantum optical fields
So far we assumed laser fields to be unaffected by atoms.
Emitters at $\vec{R}$, we want $E^{(+)}(\vec{r}, t)$ with $|\vec{r}-\vec{R}| \gg=\frac{\omega_{\text {eg }}}{2 \pi c}$ far fired.
A) Semi-classical approach

Consider fully quantum mechanical emitter dexcribed by OBE / Master equation and classical fields described by Maxwell's equation.
Note that we have large amount of emitters, so Polarization is created.
Maxull's equation withat free charges yield $\nabla^{2} E=\frac{1}{c^{2}} \frac{\partial^{2} E}{\partial \partial^{2}}+\mu_{0} \frac{\partial^{2} P}{\partial t^{2}}$ where last term is the source term.
If fields change slowly compared to period/wave length: $E\left(r_{1}, t\right)=\operatorname{Re}\left\{\tilde{E}\left(r_{1}+\right) e^{i(k z-\omega t)}\right\} \hat{=}$ plane wave with $x, y$ weak components. $\Rightarrow \frac{\partial \tilde{E}}{\partial z}<k E \tilde{E}$ and $\frac{\partial \tilde{E}}{\partial t}<\omega \tilde{E}$ and we can also do $\quad P\left(r_{1} t\right)=\operatorname{Re}\left\{\tilde{P}\left(z_{1}+e^{i(k z-\omega t)}\right\}\right.$

Plugging both into the equation gives: $\frac{\partial \tilde{E}}{\partial z}+\frac{1}{v_{g}} \frac{\partial \tilde{E}}{\partial t}=i \frac{\pi}{2} \omega \tilde{P}$
To get $\tilde{P}_{\text {, we consider } N}$ identical atoms: $P\left(r_{1}, t\right)=\frac{1}{V} \sum_{i}\left\langle\psi_{i}\left(r_{1}\right)\right| \hat{d}\left|\psi_{i}\left(r_{1} t\right)\right\rangle=\frac{1}{V} \sum_{i} T_{i}\left[\hat{d}_{i} \rho\right]$
For 2 -level emitters, $\hat{d}=M_{\text {eg }}\left(\sigma_{\text {eg }}+\sigma_{g e}\right)$ gives $\quad P\left(r_{1} t\right)=\frac{M_{\text {eg }}}{V} \sum_{i}\left(\rho_{\text {eg }}^{i}+\rho_{g e}^{\prime}\right) . \quad P\left(r_{1} t\right)$ not zero $\Leftrightarrow \rho_{\text {eg }}, \rho_{g e}$ not zero.
The problem: The OBE withat coherent field but with spontaneous emission give $\rho_{e g}=\rho_{g e}=0 \Rightarrow$ Need fully quantum approach However, the semiclassical approach allows to describe amplification and absorption of a field:
In Steady state $\frac{\partial \tilde{E}}{\partial t}=0 \Rightarrow \frac{\partial \tilde{E}}{\partial z}=i \frac{\Omega}{2} \omega \tilde{P}=i \frac{\Omega}{2} \omega \frac{N}{V}\left(\rho_{\text {eg }}+\rho_{\text {ge }}\right) \approx-\left(\frac{3}{2 \pi} \lambda_{\text {eg }}^{2}\right) \frac{N}{V} \tilde{E}:=-\sigma_{\text {abs }} \frac{N}{V} \tilde{E}$.
This result is from master equation for covenant field and weak drive $\left.\rho_{g g}\right\rangle \rho_{\text {bee }} a_{\text {bon }}<\sigma_{\text {abs }}$ is size of atom, up to $50 \%$ absorption.
B) Quantum approach
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-14.jpg?height=1186&width=2424&top_left_y=8278&top_left_x=161)

Detector measures $I=\left\langle E^{(-1}\left(r_{1}+\right) E^{(+)}\left(r_{1}+\right)\right\rangle$

In heisenberg picture: $E^{(+)}\left(r_{1} t\right)=i \sum_{k} \sqrt{\frac{\hbar \omega_{k}}{2 \varepsilon_{0} V}} \cdot \hat{\delta}_{k} a_{k} e^{i k r}$ and use $H_{i n t}=\hbar \sum_{k} g_{k}\left(\sigma_{e g} a_{k} e^{i k R}+\sigma_{g e} a_{k}^{+} e^{-i k R}\right)_{1} H_{0}=\sum_{k} \hbar \omega_{k} a_{k}^{\dagger} a_{k}$

1) Heisenberg equation: $\quad \frac{d a_{k}}{d t}=\frac{1}{i \hbar}\left[a_{k 1} H_{0}+H_{i n t}\right]=-i w_{k} a_{k}-g_{k} \sigma_{g e} e^{-i k R}$. Write $a_{k}(t)=\tilde{a}_{k}(t) e^{-i \omega_{k} t}$ and $\sigma_{g e}(t)=\tilde{\sigma}_{g e}(t) e^{-i \omega_{\text {eg }} t}$
2) Integrating: $\tilde{a}_{k}(t)=\tilde{a}_{k}(0)-g_{k} \int_{0}^{t} d t^{\prime} \cdot \tilde{\sigma}_{g e}\left(t^{\prime}\right) e^{-i k R} e^{-i\left(\omega \operatorname{vg}_{g}-\omega\right) t^{\prime}}$
3) Plugging into $E^{(t)}\left(r_{i} t\right)=i \sum_{k} \sqrt{\frac{\hbar \omega_{k}}{2 \varepsilon_{0} v}} \hat{\varepsilon}_{k} \tilde{a}_{k} e^{i\left(k r-\omega_{k} t\right)}=E_{\text {free fold }}^{(+)}+E_{\text {Source }}^{(+)}$
with $E_{\text {source }}^{(t)}\left(r_{1} t\right)=-i \sum_{k} \sqrt{\frac{\omega_{k}}{2 \hbar \xi_{0} V}} \hat{\varepsilon}_{k}\left(\hat{\varepsilon}_{k} \vec{M}_{\text {eg }}\right) e^{i k(r-R)} e^{i \omega_{\text {eg }} t} \cdot \int_{0}^{t} d t^{\prime} \cdot \tilde{\sigma}_{g e}\left(t^{\prime}\right) e^{i\left(\omega_{\text {eg }}-\omega_{k}\right)\left(t-t^{\prime}\right)}$ using $g_{k}=\hat{\varepsilon}_{k} \vec{M}_{\text {eg }} \sqrt{\frac{\omega}{2 \varepsilon \hbar V}}$

In far field: $|r-R| \gg \lambda$ and $\vec{k} \| \vec{r}-\vec{R}$ and transverse field $\hat{\varepsilon}_{k} \vec{\Pi}_{e g}=\sin \alpha \cdot \mu_{e g}$ :
We get two terms in the integral of $E_{\text {Source }}^{(+)}: e^{i\left(\omega_{\text {eg }}-\omega\right)\left(t-t^{\prime} \pm \frac{|r-R|}{c}\right)} e^{i \frac{\omega_{e g}}{c}|r-R|}$ where $\left\{\begin{array}{l}t \text { is non-2ero for } t^{\prime}=t+\frac{|r-R|}{c}>t \\ - \text { is non-2ero for } t^{\prime}=t-\frac{|r-R|}{c}<t\end{array}\right.$
The adranced-time term with "+" will give 0 in integral:
$$
\begin{align*}
E_{\text {sake }}^{(t)}(r, t)=-\hat{x} \cdot E_{0}(r) \cdot \sigma_{g e}\left(t-\frac{|r-R|}{c}\right)
\end{align*}
$$

A coherent drive is required for $\left\langle E_{\text {source }}\right\rangle \neq 0$ which in turn implies $\left\langle\sigma_{g e}\right\rangle \neq 0$.
Spontaneous emission of single emitter generates mulli-mode Fork state for which expectation of elachis field vanisher.
Source field has retarded and advanced contribution.
$$
\begin{align*}
t^{(-1)} \sim a
\end{align*}
$$
measures: $\langle E(t+\tau) E(t)\rangle \sim\left\langle E^{(-1}(t+\tau) E^{(-1)}(t)\right\rangle+\left\langle E^{(t)}(t+\tau) E^{(t)}(t)\right\rangle+\left\langle E^{(-)}(t+\tau) E^{(t)}(t)\right\rangle+h . c$
Coherent vs incoherent light emission
Measuring $\left\langle E_{\text {source }}^{(t)}(r, t)\right\rangle=\vec{E}_{0}(r)\left\langle\sigma_{\text {ge }}(\tilde{t})\right\rangle=0$ if we do not drive with coherent light ( $($ assr $)$.
Intensity of the field: $I=\left\langle E_{\text {sarre }}^{(-)} E_{\text {source }}^{(+)}\right\rangle=\left|E_{0}(r)\right|^{2} \cdot\left\langle\sigma_{\text {eq }}(t) \sigma_{\text {ge }}(t)\right\rangle=\left|E_{0}(1)\right|^{2}\left\langle\sigma_{e e}(t)\right\rangle$. We see $\langle I\rangle \neq 0$ even for $\left\langle\sigma_{g e}\right\rangle=0$.
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-15.jpg?height=947&width=6817&top_left_y=7078&top_left_x=2)
Solving for $\rho_{g e}$ :

1) $\Omega_{L} \ll \gamma, \Delta \omega$ : Heisenberg picture gives $\left\langle\sigma_{g e}\right\rangle \sim e^{-i \omega_{L} t}$ emitter responds at laser frequency.
iI) $\Omega_{L} \sim \gamma$ and $\Delta w=0$ : Again $\left\langle\sigma_{g e}\right\rangle \sim e^{-i \omega_{L} t} \sim\left\langle E_{\text {source }}^{(+)}\right\rangle$

Pure dephasing $\gamma_{\text {dep }} \neq 0$ leads to inconevent emission.
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-15.jpg?height=1826&width=3308&top_left_y=8066&top_left_x=3724)

Stronger driver $\Rightarrow$ stronger intensity.

Cohence, classical, coherent states

1) Coherence of light field does not allow (quasi)-classical description
2) "Coherence" $\equiv 1^{s^{+}}$order coherence $\equiv$ electric fold correlation
3) Single mode thermal/conereet/fock state $=1^{\text {st }}$ order coherent
4) "Conenert state" $\equiv$ All order coherent: $g^{(n)}=1$ for all $n$.
5) Driving cavity with classical current $j_{c e}=\frac{\partial}{\partial t}\langle P\rangle$ creates coherent state: $\langle P\rangle,\left\langle\sigma_{\text {eg }}\right\rangle \neq 0$

Driving emitter with "classical laser" $\hat{a} \rightarrow \alpha: \quad\left\langle\sigma_{g e}\right\rangle \neq 0$ from $O B E$
6) Coherent state does not imply classical dynamics, for example revival of conerences.
7) Incoherent emission: Information about emitted field shared by emitter.

The first-order elechic-field coherence function: $G^{(1)}(\tau)=\left\langle E^{(-1}(t+\tau) E^{(t)}(t)\right\rangle$ evaluated in steady state $t \geqslant \frac{1}{\Delta \omega}, \frac{1}{\gamma}, \frac{1}{\Omega_{L}}$
$$
\begin{align*}
\begin{aligned}
& g^{(1)}(\tau)=\frac{G^{(1)}(\tau)}{G^{(1)}(\tau=0)}=\frac{\left\langle\sigma_{e g}(t+\tau) \sigma_{g e}(t)\right\rangle}{\left\langle\sigma_{e e}(t)\right\rangle} \leqslant 1 \text { and } g^{(1)}(\tau) \equiv 1 \cong \text { perfectly coherent } \\
& \Rightarrow g^{(1)}(\tau=0)=\frac{G^{(1)}(0)}{a^{(1)}(0)}=1, \quad g_{e 1}^{(1)}(\tau) \equiv 1
\end{aligned}
\end{align*}
$$

The spectrum $S(\omega)=2 \cdot \operatorname{Re}\left\{\mathcal{F}\left(\mathcal{g}^{(1)}(\tau)\right)(\omega)\right\}$ allows to identify coherent/incoherent contribution
To measure $G^{(1)}$, we can use Mach-Zennder-Interferometer: It measures
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-16.jpg?height=1199&width=4459&top_left_y=5968&top_left_x=126)

Quantum regression theorem coherence time

Start with OBE: $\frac{d}{d t}\left(\begin{array}{l}\left\langle\sigma_{e g}(t)\right\rangle \\ \left\langle\sigma_{e e}-\sigma_{g g}\right\rangle \\ \left\langle\sigma_{g e}\right\rangle\end{array}\right)=\left(\begin{array}{ccc}-\left(\frac{\gamma}{2}-i \Delta \omega\right) & i \frac{\Omega_{L}}{2} & 0 \\ i \Omega_{L} & -\Gamma_{e g} & -i \Omega_{L} \\ 0 & -i \frac{\Omega_{L}}{2} & -\left(\frac{\gamma}{2}+i \Delta \omega\right)\end{array}\right)\left(\begin{array}{c}\left\langle\sigma_{e g}(t)\right\rangle \\ \left\langle\sigma_{e e}-\sigma_{g g}\right\rangle \\ \left\langle\sigma_{g e}\right\rangle\end{array}\right)-\left(\begin{array}{l}0 \\ \Gamma_{e g} \\ 0\end{array}\right) \equiv \frac{d}{d t}\left\langle X_{i}\right\rangle=\sum_{j} M_{i j}\left\langle X_{j}\right\rangle+\lambda_{i}$
Here $\gamma=\gamma_{\text {eph }}+\Gamma_{\text {eg }}$ and $\Delta w=\omega_{\text {eg }}-\omega_{c}$

Then: For $\left\langle X_{i}(t)\right\rangle$ satisfying $O B E \frac{d}{d t}\left\langle X_{i}(t)\right\rangle=\sum_{i j} M_{i j}\left\langle X_{j}(t)\right\rangle+\lambda_{i}$ it follows that For markovian dynamics. $\frac{d}{d \tau}\left\langle X_{i}(t+\tau) X_{k}(t)\right\rangle=\sum_{i j} M_{i j}\left\langle X_{j}(\tau+t) X_{k}(t)\right\rangle+\lambda_{i}\left\langle X_{k}(t)\right\rangle$ for $\left\langle X_{k}(t)\right\rangle$ evaluated in steady state.

Starting condition: $\left\langle X_{i}(\tau=0) X_{k}\right\rangle$

For $\left\langle\sigma_{g e}\right\rangle: \frac{d}{d t}\left\langle\sigma_{g e}\right\rangle=i \frac{\Omega_{L}}{2}\left(\left\langle\sigma_{e e}\right\rangle-\left\langle\sigma_{g g}\right\rangle\right)-\left(\frac{\gamma}{2}+i \Delta w\right)\left\langle\sigma_{g e}\right\rangle$
$$
\begin{align*}
\Rightarrow \frac{d}{d \tau}\left\langle\sigma_{g e}(\tau) \sigma_{g e}\right\rangle=i \frac{\Omega_{L}}{2}\left(\left\langle\sigma_{e e}(\tau) \sigma_{g e}\right\rangle-\left\langle\sigma_{g g}(\tau) \sigma_{g e}\right\rangle\right)-\left(\frac{\gamma}{2}+i \Delta \omega\right)\left\langle\sigma_{g e}(\tau) \sigma_{g e}\right\rangle \text { with starting condition }\left\langle\sigma_{g e}(\tau=0) \sigma_{g e}\right\rangle=0
\end{align*}
$$

No need for steady state.

Using Laplace-transformation: $\vec{V}(s)=\int_{0}^{\infty} d \tau \cdot e^{-s \tau} \vec{U}(\tau)$, the OBE reads $s \vec{V}(s)-\vec{U}(\tau=0)=M \vec{V}(s)+\frac{1}{s} \vec{\lambda}$.
$\Rightarrow \operatorname{det}(s-M) \stackrel{!}{=} 0$ yields characteristic frequencies $s_{i}$.
a) $\Delta w=0$ and $\gamma_{\text {dept. }}=0$
$$
\begin{align*}
g^{(1)}(\tau)=\underbrace{\ldots e^{-i w_{L} \tau}}_{\text {coherent }}+\underbrace{\ldots e^{-\frac{\Gamma_{\lg }}{2}-i \omega_{L} \tau}+\ldots e^{\left(-\frac{3}{4} \Gamma_{\log }+k\right) \tau}+\ldots e^{\left(-\frac{3}{4} \Gamma_{\lg }-k\right)-i \omega_{L} \tau}}_{\text {incoherent }}
\end{align*}
$$

We can calculate the spectrum $S(w)=2 \operatorname{Re}\left\{F\left(g^{(1)}(\tau)\right)(w)\right\}$. The coherent part of $g^{(1)}$ gives delta function.

1) Weak field limit: $\quad \Omega_{L} \ll \Gamma_{\text {eg }}$ :
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-17.jpg?height=1429&width=2420&top_left_y=3910&top_left_x=440)

Scatiened light has frequency of excitation
2) Strong field limit: $\Omega_{L} \gg \Gamma_{\text {eg }}$ :
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-17.jpg?height=1438&width=2462&top_left_y=3969&top_left_x=4083)

Same number of emitted photons on average

From Jaynes-Cummings (RWA + Resonance) and coherent drive:

For small photon number $n_{c}$ :
$$
\begin{align*}
\begin{aligned}
2 \sqrt{2} g_{c} \uparrow & \cdots \\
2 g_{c} \uparrow & \cdots\left|g_{1} 1\right\rangle \pm|e, 0\rangle \\
& =\left|g_{1}, 0\right\rangle
\end{aligned}
\end{align*}
$$

For large $n_{c} \approx 10^{6}$, the difference is equal.
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-17.jpg?height=1116&width=1586&top_left_y=6129&top_left_x=3903)

Each spontaneous emission corresponds to incoherent pumping of one of the dressed states.
Increasing $\Omega_{L}$ broadens dressed states, but not the coherent Rayleigh peak
b) For $\Delta w \neq 0, \gamma_{\text {dan al }} \neq 0$ and $\Omega_{l} \ll \Gamma_{\text {ea }}$
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-17.jpg?height=1492&width=2230&top_left_y=8320&top_left_x=297)

The reservoir responsible for $\gamma_{\text {eph }}$ provides the energy to emit at $w_{\text {eg }}>w_{L}$.

Measurement of intensity/photon correlations
A) For classical fields: $G_{c 1}^{(2)}(\tau)=\langle I(t+\tau) I(t)\rangle$ and $g^{(2)}(\tau)=\frac{G^{(2)}(\tau)}{\langle I(t+\tau)\rangle\langle I(t)\rangle}$ where $\langle\ldots\rangle$ is ensemble average or time average in shady state. So we can write $G^{(2)}(\tau)=\frac{1}{N} \sum_{i} I\left(t_{i}+\tau\right) I\left(t_{i}\right)$ for $t_{i}-t_{i-1} \gg$ system time scale. Experimentally difficulty.

We need highly sensitive detector to see fluctuations. To circumvent dead-tine:
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-18.jpg?height=1000&width=1968&top_left_y=1856&top_left_x=452)

To measure $\left\langle I(t)^{2}\right\rangle N$ times set $\tau=0$ so $\left\langle I^{2}(t)\right\rangle \geqslant\langle I(t)\rangle^{2}$.
$g_{c 1}^{(2)}(\tau=0)=\frac{\left\langle I^{2}(t)\right\rangle}{\langle I(t)\rangle^{2}} \geqslant 1$ and $g_{c l}^{(2)}(\tau)=1$ if light is noise-free and $g_{c 1}^{(2)}(0) \geqslant g_{c 1}^{(2)}(\tau)$ For classical fields.
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-18.jpg?height=2009&width=6804&top_left_y=4080&top_left_x=1)
of final states. If detector is in ground state, only $\sim \mid f_{i}>\langle G| E^{(t)}(r, t)$ important, since $H_{\text {int }}\left|G, \varphi_{\text {initial }}\right\rangle \sim|G\rangle\left\langle f_{i}\right| E^{(-)}\left|G, \varphi_{\text {initial }}\right\rangle=0$.
$$
\begin{align*}
M_{f, g}=\left\langle f_{i 1} \varphi_{\text {final }}\right| H_{\text {int }}\left|G_{1} \varphi_{\text {initial }}\right\rangle
\end{align*}
$$

Fermis golden rule: $W_{f, g}=\frac{2 \pi}{\hbar} \sum_{f_{i}}\left|M_{f, g}\right|^{2} S(E) \simeq\left\langle G_{1} \varphi_{\text {innal }}\right| E^{(-)} E^{(+)}\left|G_{1} \varphi_{\text {initial }}\right\rangle$ normal ordered
For joint absorption of 2 photons: $M_{i j}^{(2)}=-\frac{1}{\hbar^{2}} \int_{0}^{t+\tau} d t^{\prime} \cdot \int_{0}^{t} d t^{\prime \prime} \cdot\left\langle\varphi_{A, i 1} \varphi_{B, j}, \varphi_{\text {final }}\right| H_{\text {int }}\left(R_{A}\right) H_{\text {int }}\left(R_{B}\right)\left|G_{A 1} G_{B 1} \varphi_{\text {find }}\right\rangle$
$$
\begin{align*}
\Rightarrow W=\frac{2 \pi}{\hbar} \sum_{i j}\left|M_{i j}^{(2)}\right|^{2} \sim\langle\ldots| E^{(-)}(t) E^{(-)}(t+\tau) E^{(t)}(t+\tau) E^{(t)}(t)|\ldots\rangle \text { normal ordered! }
\end{align*}
$$

Detection based on absorption enforces normal ordering as direct consequence of photon field detection based on stimulated absorption. Initial state of detector being ground-state also enforces it: Creation left $E^{(-)}$, annihilation right. key difference to classical physics.

So we write $G^{(2)}(\tau)=\left\langle E^{(-1)}(t) E^{(-)}(t+\tau) E^{(t)}(t+\tau) E^{(t)}(t)\right\rangle$ evaluated on $\left|\varphi_{\text {single }}\right\rangle=\int d k \cdot a_{k}^{+} \varphi(k)|0\rangle$ and

For photons of 2-level emitter: $g^{(2)}(\tau)=\frac{\left\langle\sigma_{\text {eg }}(t) \sigma_{e g}(t+\tau) \sigma_{g e}(t+\tau) \sigma_{g e}(t)\right\rangle}{\left\langle\sigma_{\text {gee }}(t)\right\rangle \cdot\left\langle\sigma_{e e}(t+\tau)\right\rangle}=\frac{\left\langle\sigma_{e g}(t) \sigma_{e e}(t+\tau) \sigma_{g e}(t)\right\rangle}{\left\langle\sigma_{e e}(t)\right\rangle^{2}}$ since $t$ is stationary.

To evaluate, use $Q R T$ with $\Delta w=0, \gamma_{\text {dep }}=0$ : $g^{(2)}(\tau=0)=0 \hat{=}$ ho 2 photons at same time. This violates the classical case: $g_{c l}^{(2)}(\tau=0) \geq 1$
a) Weak field: $\Omega_{L} \ll \Gamma_{e g}: g^{(2)}(\tau) \approx 1+e^{-\Gamma_{e g} \tau}+2 e^{-\Gamma_{e g} \frac{\tau}{2}}$
b) Strong field: $\Omega_{L} \gg \Gamma_{\text {eg }}$ : $\quad g^{(2)}(\tau) \approx 1-e^{-\frac{3}{4} \Gamma_{g} \tau} \cdot \cos \left(\Omega_{L} \tau\right)$
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-19.jpg?height=1730&width=2896&top_left_y=2276&top_left_x=59)
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-19.jpg?height=1738&width=3776&top_left_y=2264&top_left_x=3117)

After detection, atom must be projected onto graundstate. Afterwards it must be in Rabi-oscillation. Projections happen at random times.
$\Rightarrow\left\langle\sigma_{e e}\right\rangle=\frac{1}{2}$ so our information about system is incomplete.
For all light sources $\lim _{\tau \rightarrow \infty} g^{(2)}(\tau)=1$ and $G^{(2)}(\tau)=\langle: I(t+\tau) I(t):\rangle$
Light source consisting of $M$ identical atoms
$M$ emitters at positions $R_{i}: E_{M}^{(t)}(r, t)=\sum_{i} E_{i}^{(t)}(r, t)$ with $E_{i}^{(t)}(r, t)=E_{0}(r) \sigma_{g e}\left(t-\frac{\left|r-R_{i}\right|}{c}\right) e^{-i \omega_{e g}\left(t-\frac{\left|r-R_{i}\right|}{c}\right)}$
They satisfy $\phi_{i}=\omega_{e g} \frac{\left|r-R_{i}\right|}{c}$ with $\phi_{i}-\phi_{j}$ random in $(0,2 \pi)$. Further $\left|\left|r-R_{i}\right|-\left|r-R_{j}\right|\right| \ll\left|r-R_{i}\right| \quad \forall i, j$
$$
\begin{align*}
\begin{aligned}
& \Rightarrow G_{M}^{(1)}=\left\langle E_{M}^{(-)}(t+\tau) E^{(t)}(t)\right\rangle=\sum_{i j}\left\langle E_{i}^{(-1)}(t+\tau) E_{j}^{(t)}(t)\right\rangle=\sum_{i}\left\langle E_{i}^{(-)}(t+\tau) E_{j}^{(t)}(t)\right\rangle=M \cdot G_{\text {single }}^{(1)}(\tau) \text { for identical atoms. } \\
& \Rightarrow \quad g_{M}^{(1)}(\tau)=\frac{G_{M}^{(1)}(\tau)}{G_{M}^{(1)}(0)}=g_{\text {single }}^{(1)}(\tau) \text { indepondant on } M \text {. } \\
& G_{M}^{(2)}(\tau)=\sum_{i j k e}\left\langle E_{i}^{(-)}(t) E_{j}^{(-1)}(t+\tau) E_{k}^{(t)}(t+\tau) E_{l}^{(t)}(t)\right\rangle=M \cdot G_{\text {single }}^{(2)}(\tau)+\sum_{i \neq j}\left(\left\langle E_{i}^{(-)}(t) E_{i}^{(+)}(t)\right\rangle \cdot\left\langle E_{j}^{(t)}(t+\tau) E_{j}^{(+1)}(t+\tau)\right\rangle+\left\langle E_{i}^{(-)}(t) E_{i}^{(-)}(t+\tau)\right\rangle \cdot\left\langle E_{j}^{(+)}(t+\tau) E_{j}^{(t)}(t+\tau)\right\rangle\right) \\
& =M \cdot G_{\text {single }}^{(2)}(\tau)+\left[\left(\bar{I}_{i \neq j}(t) \overline{I_{j}}(t)+G_{\text {single }}^{(1)} G_{\text {single }}^{(1)}\right)=M G_{\text {single }}^{(2)}(\tau)+M(M-1) \bar{I}_{\text {single }}^{2}(t)+M(M-1)\left|G_{\text {single }}^{(1)}(t)\right|^{2}\right. \\
& \Rightarrow g_{M}^{(2)}(\tau)=\frac{G_{n}^{(2)}(\tau)}{\left(M \cdot I_{\text {single }}\right)^{2}}=\frac{g_{\text {single }}^{(2)}(\tau)}{M}+\frac{M-1}{M}+\frac{M-1}{M}\left|g_{\text {single }}^{(1)}(\tau)\right|^{2} \approx 1+\left|g_{\text {single }}^{(1)}(\tau)\right|^{2} \text { for large } M \text {. }
\end{aligned}
\end{align*}
$$

Note that for large $M: g_{M}^{(2)}(\tau=0) \approx 1+\left|g_{\text {singe }}^{(1)}(\tau=0)\right|^{2}=2 \hat{=}$ Emission from one atom stimulates emission from ot hes atoms. Bunching.

For large $M$ :
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-20.jpg?height=1294&width=2150&top_left_y=384&top_left_x=99)

For $M=2: \quad g^{(2)}=\frac{1}{2}\left(1+g_{\text {single }}^{(2)}(\tau)+\left|g_{\text {single }}^{(1)}(\tau)\right|^{2}\right)$
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-20.jpg?height=1294&width=3087&top_left_y=416&top_left_x=3327)
$g^{(2)}(\tau=0)<\frac{1}{2}$ for $\tau_{\text {con }} \ll \tau_{\text {del. }} \Rightarrow$ Souks has single emitter.

Hang-Ou-Mandel interference: Two photon interference
Instead of continuous excitations, we use pulses. The lasel shape determines the photon shape.
The generic form of single-photon pulse $\left|\psi_{a}(t)\right\rangle=\int d k_{z} \cdot e^{-i k c t} \cdot \varphi_{a}^{*}(k) a_{k}^{\dagger}|0\rangle_{a}$ where $\varphi_{a}^{*}(k)$ is photon pulse shape.
We will use $\left|\psi_{a}(t)\right\rangle$ instead of $E_{\text {sarre }}^{(t)} \sim\left\langle\sigma_{g e}\left(t-\frac{|r-R|}{c}\right)\right.$, since we now use single photon-source instead of continuous drive.
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-20.jpg?height=1564&width=6568&top_left_y=3454&top_left_x=0)

The input: $\left|\psi_{\text {in }}\right\rangle=\int d k_{1} \cdot d k_{2} \cdot e^{-i c t\left(k_{1}+k_{2}\right)} \varphi_{a}^{*}\left(k_{n}\right) \varphi_{b}^{*}\left(k_{2}\right) a_{k_{1}}^{+} b_{k_{2}}^{+}|0,0\rangle a b \hat{} \hat{=} \ln p t$ is single-photon pulse. HBT uses continuous laser. The output: $\left|\Psi_{\text {out }}\right\rangle=\frac{1}{2} \int d k_{1} \cdot d k_{2} \cdot e^{-i c t\left(k_{1}+k_{2}\right)} \varphi_{a}^{*}\left(k_{1}\right) \varphi_{b}^{*}\left(k_{2}\right)\left(c_{k_{1}}^{\dagger}+d_{k_{1}}^{+}\right)\left(c_{k_{2}}^{\dagger}-d_{k_{2}}^{+}\right)|0,0\rangle<d$
$$
\begin{align*}
\text { focus only on coincidence: } c^{1 / A}, \not t / d^{t}
\end{align*}
$$
$$
\begin{align*}
\begin{aligned}
& \simeq \frac{1}{2} \int d k_{1} \cdot d k_{2} \cdot e^{-i c t\left(k_{1}+k_{2}\right)} \varphi_{a}^{*}\left(k_{1}\right) \varphi_{b}^{*}\left(k_{2}\right)\left(d_{k_{1}}^{+} c_{k_{2}}^{+}-c_{k_{1}}^{+} d_{k_{2}}^{t}\right)|0,0\rangle_{c d} \\
& \left.=\frac{1}{2} \int d k_{1} \cdot d k_{2} e^{-i c t\left(k_{1}+k_{2}\right)}\left(\varphi_{a}^{*}\left(k_{1}\right) \varphi_{b}^{*}\left(k_{2}\right)-\varphi_{a}^{*}\left(k_{2}\right) \varphi_{b}^{*}\left(k_{1}\right)\right) d_{k_{1}}^{+} c_{k_{2}}^{t}|0,0\rangle\right\rangle_{c d}
\end{aligned}
\end{align*}
$$

Thisterm is zero for $\varphi_{a}(k)=\varphi_{b}(k)$ so no coincidences (=photon bunching) for identical single -photon pulse input.
Identical photon means identical spatiotemporal profile.
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-20.jpg?height=481&width=6682&top_left_y=7906&top_left_x=173) Hong-Ou-Mandel effect: Photons bunch Both inputs send pulses each $T_{R}$.
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-20.jpg?height=1687&width=3681&top_left_y=8332&top_left_x=2276) $c$ or in mode $d$. half as many therefore

Applications of HOM interferometer in QIP

1) $Q K D$ : single-photon pulses which does require indistinguishability
2) Quantum repeaters and photonic quantum computers require indistinguishable single photons.
a) Show that pulses really contain at most 1 photon: $\rho=p_{0}|0 \times 0|+p_{1} \Psi_{a}^{\dagger}|1>1| \Psi_{a}$.
b) Show indistinguishability with HOM.
c) Generate photonic quits:

Polarization quits: $\quad \frac{p_{-}}{\sigma_{-}} \frac{p_{+}}{\left.\right|^{z}} p_{1} J=1 \quad\left|\psi_{\text {in }}\right\rangle=|s\rangle|0\rangle$, apply elliptically pol. $\pi$-pulse: $\left|\psi_{\text {intern. }}\right\rangle=\left(\alpha\left|p_{+}\right\rangle+\beta\left|p_{-}\right\rangle\right)|0\rangle$
After spontaneous emission: $\left|\psi_{\text {final }}\right\rangle=|s\rangle\left(\alpha \psi_{+}^{+}+\beta \psi_{-}^{+}\right)|0\rangle$ with $\psi_{+}^{+}=\int d k \cdot \varphi_{+}(k) a_{k_{1, t}}^{+} e^{-i k c t}$

Partial Bell-basis measurement
We use $\left|\psi_{\text {in }}\right\rangle=\sqrt{\frac{1}{2}}\left(a_{H}^{\dagger} b_{v}^{\dagger}-a_{v}^{\dagger} b_{H}^{\dagger}\right)|0\rangle$ only leads to coincidences, due to destructive inter ference (two different signs $\pm \frac{1}{2}$ ) Consider $\left|\psi_{\text {in }}\right\rangle=\underbrace{\left(\alpha a_{H}^{t}+\beta a_{v}^{\dagger}\right)}_{\text {photonic qubit }} \cdot \underbrace{\left(\gamma b_{H}^{+}+\delta b_{v}^{t}\right)})|0\rangle$ with computational basis $a_{H}^{t} b_{H}^{+} a_{H}^{+} b_{v}^{+}, a_{V}^{+} b_{H}^{\dagger}, a_{v}^{\dagger} b_{v}^{t}$.
The bell basis is $\left|\phi^{ \pm}\right\rangle=\sqrt{\frac{1}{2}}\left(a_{H}^{+} b_{H}^{+} \pm a_{v}^{+} b_{v}^{+}\right)|0\rangle$ and $\left|\psi^{ \pm}\right\rangle=\sqrt{\frac{1}{2}}\left(a_{H}^{+} b_{v}^{+} \pm a_{v}^{+} b_{H}^{+}\right)|0\rangle$
In HOM, only $\left|\psi^{-}\right\rangle=\sqrt{\frac{1}{2}}\left(a_{H}^{+} b_{v}^{+}-a_{v}^{+} b_{H}^{+}\right)|0\rangle$ leads to coincidences, while $\left|\phi^{ \pm}\right\rangle$and $\left|\psi^{+}\right\rangle$give no coincidences, so bunching.
If coincidence has been detected, input state is projected onto maximally entangled state $\left|\psi^{-}\right\rangle$.

Quantum Teleportation
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-21.jpg?height=945&width=6437&top_left_y=6682&top_left_x=565)

Soin-photon entanglement
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-21.jpg?height=850&width=4887&top_left_y=7856&top_left_x=63)

We can wait until state is $\left|s_{+}\right\rangle$. It is called optical pumping and good for preparation of pure atomic states
We can also use red/blue instead of horizontal/vertical.

Distant spin entanglement
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-22.jpg?height=1079&width=905&top_left_y=444&top_left_x=341)
$$
\begin{align*}
\left|\Psi_{i n}\right\rangle=\sqrt{\frac{1}{2}}\left(\left|g_{1}\right\rangle a_{H}^{\dagger}+\left|f_{1}\right\rangle a_{v}^{\dagger}\right) \cdot\left(\left|g_{2}\right\rangle b_{H}^{\dagger}+\left|f_{2}\right\rangle b_{V}^{\dagger}\right)|0\rangle \quad \text { spin-photon entanglement in each lab. }
\end{align*}
$$
$$
\begin{align*}
=\frac{1}{2}(\left|\psi^{-}\right\rangle \frac{\left|g_{1}\right\rangle\left|f_{2}\right\rangle-\left|g_{2}\right\rangle\left|f_{1}\right\rangle}{\sqrt{2}}+\underbrace{\left.\left|\psi^{+}\right\rangle \ldots\right)|0\rangle}
\end{align*}
$$
no coincidence
After measuring coincidence: $\left|\psi_{\text {final }}\right\rangle=\left|\psi^{-}\right\rangle \frac{\left|g_{1}\right\rangle\left|f_{2}\right\rangle-\left|g_{2}\right\rangle\left|f_{1}\right\rangle}{\sqrt{2}}$ entangled. However we only have $25 \%$ chance.
Note the entangled states of 1 and 2 have never directly interacted.
Raman coupling
A) Electromagnetically induced transparency
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-22.jpg?height=1357&width=3884&top_left_y=2895&top_left_x=364)

For $\Delta \gg \Omega_{11} \Omega_{2} \Gamma_{\log } \Gamma_{\text {eff }}$ and the hamiltonian:
$H_{\text {eff }}=\hbar \frac{\Omega_{1} \Omega_{2}}{\Delta}\left(\sigma_{f g}+\sigma_{g f}\right)-i \hbar \Gamma_{\text {eff }} \sigma_{f f}$. Use SchriefferWolff $S=\frac{g_{1}}{\Delta}\left(\sigma_{f g} a_{1}-a_{n}^{\dagger} \sigma_{g f}\right)$
$\Rightarrow$ Couples $|g\rangle_{1}|f\rangle$
Photon-photon interactions
non-linear optical element
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-22.jpg?height=792&width=6494&top_left_y=5180&top_left_x=0)
$U$ is the interaction between photons and $H_{\text {drive }}=\hbar \Omega_{L}\left(a_{c} e^{i \omega_{C} t}+a_{c}^{t} e^{-i \omega_{c} t}\right)$ to ensure lost photons are replenished.
Photon blockade: $\quad U>K_{\text {cav }}$ for weak drive $\Omega_{L}$. This impress that the steady-state of the photonic system could be entangled many-body state.
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-22.jpg?height=1508&width=2650&top_left_y=6607&top_left_x=103)

In general, $U$ arises from pertubative coupling to atoms or solids.
$H_{\text {int }}=\sum_{i j} \hbar g_{i j}\left(\sigma_{i j} a_{c}+\sigma_{j i} a_{c}^{\dagger}\right)$ and use Schrieffer-Wolff.
Eliminate atomic excitations: $\quad H_{e f f} \approx \frac{g^{4}}{\Delta w_{1} \Delta w_{2}} a_{c}^{+^{2}} a_{c}^{2} \quad$ for 3-lenel atom

Non pertubative regime: Resonant JC model
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-22.jpg?height=1096&width=938&top_left_y=8693&top_left_x=197)

Excitation of 2 photons is not possible due to defusing.

Cavity-Optomechanics
Photons are elementary excitations of elechomagnetic field with frequency $\omega_{c}$ : Energy $\hbar w_{c}$, momentum $|\vec{k}|=\frac{w_{c}}{c}$.
Cavity with movable mirror: Mirror can be moved by $x$ to get new
Treating mirror as quantum mechanical oscillator: $\quad H_{m i r r o r}=\hbar \omega_{m} C_{m}^{+} c_{m}$ and displacement operator $x=x_{0}\left(C_{m}^{+}+c_{m}\right)$
So we can write $\omega_{c}(x)=\omega_{0}-\omega_{0} \frac{x}{L}=\omega_{0}-\omega_{0} \frac{x_{0}}{L}\left(c_{m}^{+}+c_{m}\right)$ to get:
$\Rightarrow H=\hbar w_{0} a_{c}^{\dagger} a_{c}+\hbar w_{m} c_{m}^{\dagger} c_{m}-\hbar w_{0} \frac{x_{0}}{L} a_{c}^{\dagger} a_{c}\left(c_{m}^{\dagger}+c_{m}\right)$ coupled non-linear oph-mechanical system.

We can also consider $\Delta p=2 \hbar k \cong$ imported momentum on mirror $\Rightarrow$ Average force on mirror: $\langle F\rangle=\frac{2 \hbar k}{T}=2 \hbar k \cdot \frac{c}{2 L}=\hbar \omega_{0} \frac{1}{L}$
Work done also yields $H=\hbar w_{0} a_{c}^{\dagger} a_{c}-\hbar w_{0} \frac{x_{0}}{L} a_{c}^{\dagger} a_{c}$. The effective coupling is $g_{m}=w_{0} \frac{x_{0}}{L}$ with $g_{m} \ll w_{m}$ : Change in frequency minor upon displacement. Then it becomes $H_{1}=-\hbar g_{m} a_{c} a_{c}\left(C_{m}+C_{m}^{\dagger}\right)$ similar to $J C$.

Consider drive term: $H_{\text {drive }}=\hbar w_{L} a_{L}^{\dagger} a_{L}+\hbar g_{L}\left(a_{L}^{\dagger} a_{L}+a_{c}^{\dagger} a_{L}\right)$ couples external field mode to cavity via fixed mirror.
$H^{\text {shr. }}=\hbar \omega_{0} a_{c}^{+} a_{c}+\hbar \omega_{m} c_{m}^{\dagger} c_{m}+\hbar \omega_{L} a_{L}^{\dagger} a_{L}-\hbar g_{m} a_{c}^{\dagger} a_{c}\left(c_{m}+c_{m}\right)+\hbar g_{L}\left(a_{L}^{\dagger} a_{c}+a_{c}^{\dagger} a_{L}\right)$ Full hamiltonian in schrodinger picture.

Using Schrieffer-Wolff: $S=\frac{g_{m}}{\omega_{m}} a_{c}^{+} a_{c}\left(C_{m}^{+}-C_{m}\right)$ with $\left[H_{0} s\right]=-H_{1}$. We have $\frac{g_{m}}{w_{m}} \ll 1$ so we consider up to $g_{m}^{2}$ :
$$
\begin{align*}
\tilde{H}=e^{s} H e^{-s}=H+\left[S_{1} H\right]+\ldots \approx H_{0}-\hbar \frac{g_{m}^{2}}{\omega_{m}}\left(a_{c}^{+} a_{c}\right)^{2}+\hbar g_{L}\left(a_{c}^{+} a_{l}+a_{l}^{+} a_{c}\right)+\hbar \frac{g_{L} g_{m}}{\omega_{m}}\left(a_{c}^{+} a_{l}+a_{L}^{+} a_{c}\right)\left(c_{m}-c_{m}^{+}\right) \quad \frac{g_{m}}{w_{m}} \ll 1
\end{align*}
$$

Going to interaction picture, replacing $\left\langle a_{L} \rightarrow \alpha_{L} \in \mathbb{R}\right.$ and $g_{L} \alpha_{L}=\Omega_{L}$ gives new hamiltonian:
$$
\begin{align*}
\tilde{H}^{\text {inter }}=-\hbar \frac{g_{m}^{2}}{w_{m}}\left(a_{c}^{\dagger} a_{c}\right)^{2}+\hbar \Omega_{L}\left(a_{c} e^{i\left(\omega_{L}-w_{c}\right) t}+h_{. c}\right)+\hbar \frac{g_{m} \Omega_{L}}{\omega_{m}}\left(\left(a_{c} e^{i\left(\omega_{L}-\omega_{c}\right) t}+h . c\right) \cdot\left(c_{m} e^{-i w_{m} t}+h . c\right)\right) \quad \frac{x_{0} w_{0}}{w_{m L}} \ll 1
\end{align*}
$$

- $+w_{L}$ from $a_{L}$
$$
\begin{align*}
H_{\substack{\text { laser ling } \\ \text { cooling }}}^{\text {inter }}=\hbar \Omega_{L}\left(a_{c} \cdot e^{i\left(w_{L}-w_{c}\right) t}+h \cdot c\right)+\hbar \frac{\Omega_{L} g_{m}}{w_{m}}\left(a_{c} c_{m} e^{i\left(w_{L}-w_{c}-w_{m}\right) t}-h \cdot c\right)-\hbar \frac{\Omega_{L} g_{m}}{w_{m}}\left(a_{c} c_{m}^{\dagger} e^{i\left(w_{L}-w_{c}+w_{m}\right) t}-h^{c}\right)
\end{align*}
$$

RWA invalid: $w_{w_{14}}<W_{c}$

Spectrum of coupled cavity-mechanical system:
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-23.jpg?height=1159&width=2016&top_left_y=7670&top_left_x=3204)

Considering $W_{L}=W_{L}-W_{m}$ and $g_{L} \cdot \alpha_{L}=\Omega_{L} \ll W_{m}$, only the red sideband maters.
Trausitition rates: $\left\{\begin{array}{l}\omega_{\text {exc, vertical }}=\left(\frac{\Omega_{L}}{w_{m}}\right)^{2} k_{\text {car }} \text { decay rale }|1, n\rangle+0|0, n\rangle \\ \omega_{\text {exc, red }}=\frac{\Omega_{L} g_{m}}{\omega_{m}}\end{array}\right.$. For red-sideband transition dominant: $\left.\left.\omega_{\text {exc, red }}\right\rangle \omega_{\text {exc, vert }} \Rightarrow g_{m}\right\rangle \frac{\Omega_{L} k_{\text {cav }}}{\omega_{m}}$

For dominant red-sideband and $V_{\text {excired }}<k_{\text {cav }}$ we can describe dynamics in incoherent way. By fermi's golden rule says:
$\omega_{\text {cool }}=\frac{V_{\text {exceed }}}{k_{\text {cav }}}=\left(\frac{g_{m} \Omega_{L}}{\omega_{m}}\right)^{2} k_{\text {cav }} \hat{=}$ cooling rate / rate at which phonons ave removed.
thervoul pumping
phonon decay
$\frac{d S_{m}}{d t}=\frac{\Gamma_{m} \bar{t}_{t h}}{2}\left(2 c_{m}^{\dagger} P_{m} c_{m}-c_{m} c_{m}^{+} P_{m}-P_{m} c_{m} c_{m}^{\dagger}\right)+\frac{W_{\text {cool }}+P_{m}\left(1+\bar{n}_{t a}\right)}{2}\left(2 c_{m} P_{m} c_{m}^{\dagger}-c_{m}^{+} c_{m} P_{m}-P_{m} c_{m}^{\dagger} c_{m}\right)$ for $\Gamma_{m}\left(1+\bar{u}_{t h}\right)$ phonon decay.

Using steady state: $\frac{d}{d t}\left\langle n_{m}\right\rangle=T_{r}\left[n_{m} \cdot \frac{d \Phi_{m}}{d t}\right]=-\left(\omega_{\text {cool }}+\Gamma_{m}\right)\left\langle n_{m}\right\rangle+\Gamma_{m} \bar{n}_{t h} \stackrel{!}{=} 0 \Rightarrow\left\langle n_{m}\right\rangle=\frac{\Gamma_{m} \bar{n}_{t n}}{w_{\text {cool }}+\Gamma_{m}} \quad$ steady- state phonon number
We require $\left.W_{\text {cool }}\right\rangle \Gamma_{m}$ and low $\bar{n}_{t h}$ to get low $\left\langle n_{m}\right\rangle$.
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-24.jpg?height=1595&width=2190&top_left_y=2518&top_left_x=111)
$\Omega_{L}$
$\Omega_{L} \cdot \frac{g_{m}}{w_{m}} \sqrt{n_{m}} \Rightarrow$ High temperature, sideband stronger $\Omega_{i} \frac{g_{m}}{w_{m}} \sqrt{n_{m}+1}$ For high $n_{m}$, both sidebands are equal.

If we cool to ground state, red sideband will disappear, since it has nowhere to jump.
really 0 for
symmetric cavity
EIT: Electromagnetically induced transparency
Looking at susceptibility $x, \operatorname{Im}(x)$ gives absorption and $\operatorname{Re}(x)$ gives transparency.
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-24.jpg?height=2242&width=6196&top_left_y=4140&top_left_x=166)
$$
\begin{align*}
\begin{aligned}
& \text { If } \Omega_{c}<\Gamma_{\text {eg }}+\Gamma_{e f}: \Gamma \text { and } \Omega_{c}^{2}>\Gamma \delta \\
& \Rightarrow x^{\prime}=\operatorname{Re}(x) \sim x^{\prime \prime} \cdot \frac{\Omega_{c}^{2}}{\Gamma \delta} \\
& \delta=0 \text { no phase shift of incoming feed } \\
& \delta \neq 0 \text { no absorption, } x^{\prime \prime} \approx 0 \text {, large phase. }
\end{aligned}
\end{align*}
$$

EIT in cavity
$\left|g_{1} 1_{p}\right\rangle \stackrel{g_{p} \sqrt{N_{a n m}}}{\longleftrightarrow}\left|e_{1} O_{p}\right\rangle \stackrel{\Omega_{c}}{\stackrel{\Omega_{c}}{ }{ }_{\text {comet }}}\left|f_{1} O_{p}\right\rangle$ and if $w_{f}-w_{g}+w_{c}-w_{p}=0$ system is in dark state:
a dark state for $\delta=0$ = peak of transitition.
$\Rightarrow|\psi\rangle=\frac{\Omega_{c}}{\sqrt{\Omega_{c}^{2}+g_{p}^{2} N_{\text {atom }}}}\left(\Omega_{c}\left|g_{1} \Lambda_{p}\right\rangle-g_{p} \sqrt{N_{\text {atom }}}\left|f_{1} O_{p}\right\rangle\right)$ dark state. If $\left.g_{p} \sqrt{N_{\text {atom }}}\right\rangle \Omega_{c} \Rightarrow$ incident photon converts $\left|g_{1} 1_{p}\right\rangle \rightarrow\left|f_{c} O_{p}\right\rangle$
Were in the dark state for $\delta=0$ 仓 peak in transition. You can use EIT to indre non-linearties.
Rydberg EIT
$1005 \prod$ If $\left.O_{p}\right\rangle$ long decoherence time: given by rydberg state $\Gamma_{\text {rydberg }} \sim \frac{1}{n^{3}}$ very small
Strongly interacting $U \sim \frac{C_{6}}{R^{6}}$ extremely strong
$g_{p} \sqrt{N_{\text {atom }}}$ cavity mode Trying to put $2^{\text {nd }}$ photon into $f$ creates anharmonicity.
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-24.jpg?height=390&width=1572&top_left_y=9514&top_left_x=404)

Effect of light-matter interaction on atomic motion
Linear paul trap:
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-25.jpg?height=1106&width=3623&top_left_y=407&top_left_x=1131)

Switching sign faster than atom time scale (blue first, ned second)
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-25.jpg?height=1051&width=1051&top_left_y=474&top_left_x=1180)
from side:

+     + 

![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-25.jpg?height=374&width=1284&top_left_y=638&top_left_x=3118) gives trapping potential.

It's possible to trap ion in negro in space << $\lambda^{3}$ wavelength relevant for optical transition (optical wavelength)
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-25.jpg?height=495&width=6942&top_left_y=1823&top_left_x=138)

Multiple atoms, they try to keep distance maximum. If one moves: high fequencylenergy motion.

Analogy from cavity QED:
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-25.jpg?height=613&width=1259&top_left_y=4056&top_left_x=1750)
$$
\begin{align*}
H_{\text {int }}=\hbar \sum_{A_{1} B_{i}, c} g_{i}\left(\sigma_{\text {eg }}^{i} a_{c}+a_{c}^{+} \sigma_{g e}^{i}\right) \text { One atom effects the others: }
\end{align*}
$$

Atom A in excited, can emit photon, that pheton can excite atom Bor.

Trapped ions:
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-25.jpg?height=802&width=2103&top_left_y=5151&top_left_x=963)
$X_{0}^{2}=\sqrt{\frac{\hbar}{2 m w_{z}}}$ three ions increase mass
Put atom $A$ in $n=1$, all atoms will be in $n=1$.
Phononmode that corresponds to slashing motion of ions is the cavity mode.

For $\mathrm{Ca}^{+}$ion with $4 s$ ground state:
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-25.jpg?height=787&width=2833&top_left_y=6777&top_left_x=2010)

Replace $g\left\langle a_{L}\right\rangle$ with classical $g \alpha_{L}$ will give is $\Omega_{L}$ lases rabi frequency.
$H_{\text {int }}=\hbar \Omega_{L}\left(\sigma_{\text {eg }} e^{i k_{L} R_{A}}+\sigma_{g e} e^{-i k_{L} R_{A}}\right)$ we keep phase as ion not perfectly shill anymore. $R_{A}$ is position operates of ion $A$.
Write $R_{A}=R_{0}+x$ with $x$ small fluctuations (compared to wavelength). Check: $x_{0}=\sqrt{\frac{\hbar}{2 m w_{z}}}\left(b+b^{t}\right)=x_{\text {Rms }}\left(b+b^{\dagger}\right)$ so $x_{\text {RMs }}=10^{-8} \mathrm{~m}<\lambda \approx 400 \mathrm{~nm}$
So wavelength of eight much larger than uncertainty of position $\Rightarrow$ LWA shill valid:
$e^{i k_{L} R_{n}} \approx e^{i k_{L} R_{0}}\left(1+i k_{L} x\right)=e^{i k_{L} R_{0}}\left(1+i \frac{2 \pi}{\lambda} x_{\operatorname{Rms}}\left(b+b^{\dagger}\right)+\ldots\right)$ with $b$ annihilation operator of elementary excitation of notion.

The lamb dike parameter is $\Omega=\frac{2 \pi}{\lambda} x_{\text {Rms }}$ so the hamiltonian becomes:
$$
\begin{align*}
H_{\text {int }}^{\operatorname{schr} .}=\sum_{i} \hbar \Omega_{L}\left(\sigma_{e g}^{i} a_{c} e^{i k_{c} R_{i}}+\sigma_{g e}^{i} a_{c}^{t} e^{-i k_{L} R_{i}}\right) \approx \sum_{i} \hbar \Omega_{L}(\underbrace{\left.\sigma_{e g}^{i}+\sigma_{g e}^{i}\right)}_{\text {2ero-phonon }}+i \hbar \Omega_{L}^{i} \Omega\left(\sigma_{e g}^{i}\left(b+b^{t}\right)-\sigma_{g e}^{i}\left(b+b^{\dagger}\right)\right)
\end{align*}
$$

We can excite atom by absorbing or emitting quantum of collective motion.
This is possible as RWA is no longer valid: Frequency of collective motion ~ Rabi frequency

Trapped ions
$$
\begin{align*}
)_{\Theta}^{\Omega_{L}^{A}}()^{\Omega_{L}^{B}}()^{\Omega_{L}^{c}}
\end{align*}
$$
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-26.jpg?height=1754&width=6783&top_left_y=3565&top_left_x=75)

Red sideband will only couple if blue sideband has excited first atom, since red sideband takes away phonon.

Cirac-Zoller
Consider 2 ions and initial state $|\psi\rangle_{\text {init }}=\left(\alpha|g\rangle_{A}+\beta|e\rangle_{A}\right) \cdot\left(\gamma|g\rangle_{B}+\delta|e\rangle_{B}\right) \otimes|0\rangle \quad$ and drive sideband of ion $A$ :
$$
\begin{align*}
\begin{aligned}
& \beta \sim \underline{\left.|e, 0\rangle \otimes|\psi\rangle_{B} \quad|\quad| e, 1\right\rangle}
\end{aligned}
\end{align*}
$$
$$
\begin{align*}
\begin{aligned}
& \left.\left|\left|\psi_{1}\right\rangle=\right| g\right\rangle_{A} \cdot\left(\gamma|g\rangle_{B}+\delta|e\rangle_{D}\right) \otimes(\alpha|0\rangle+\beta|1\rangle)
\end{aligned}
\end{align*}
$$
information stoned in collective notion
Final step: $-\pi$-pulse: $\quad|e\rangle_{A}|0\rangle \leftrightarrow|g\rangle_{A}|1\rangle$ transition: $\quad|\psi\rangle_{\text {final }}=|g\rangle_{A} \cdot\left(\gamma|e\rangle_{A}+\delta|g\rangle_{A}\right)+|e\rangle_{A} \cdot\left(\gamma|e\rangle_{A}-\delta|g\rangle_{A}\right) \triangleq$ conditional $\quad Z g a t e$
Rotational conditional: We have $2 \pi$-pulse only if ion B in excited and we have phonon.
Requires 10$\rangle$ initially
We have phonon only if ion A initially in excited state.

Measurement of the quantum state:
For single quit $|\psi\rangle=\alpha|g\rangle+\beta|e\rangle$. Projecting this onto $|g\rangle$ or $|e\rangle:|\psi\rangle_{\text {final }}=|g\rangle$ or $|e\rangle$
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-27.jpg?height=1437&width=1056&top_left_y=1011&top_left_x=313)

Turn on the laser: If we see photons, the system is in the exited states.
Careful| that $|f\rangle$ does not decay to $|e\rangle$. Choose $|f\rangle J=\frac{1}{2}$ and $|e\rangle J=\frac{5}{2}$

Initial superposition of
$\Rightarrow$ Transition $|f\rangle \rightarrow|e\rangle$ not allowed.

Light forces: Laser cooling
Drive free 2 -level atom with laser: $\quad H=\hbar w_{\text {eg }} \sigma_{e l}+\hbar \Omega_{L}(R)\left(\sigma_{e g} e^{i\left(k_{L} R_{A}-w_{L}+\right)}+h \cdot c\right)+\frac{P^{2}}{2 m} \quad$ for $\Omega_{L}(R)=2 \frac{M_{e g}}{\hbar} E_{L}(R)=g_{L} \cdot \alpha \cdot f(R)$ with $\alpha=\left\langle a_{L}\right\rangle$ and $f(R) \cong e^{\frac{-x^{2}-y^{2}}{R^{2}}}$ laser shape function.

Center of mass motion and internal motion are coupled.
Rotating frame: $\sigma_{e g} \rightarrow \sigma_{e g} e^{i \omega_{L} t} \quad$ and $\Delta=\omega_{a g}-\omega_{L}: \quad H=\hbar \Delta \cdot \sigma_{e e}+\frac{p^{2}}{2 m}+i \hbar \Omega(R) \cdot\left(\sigma_{e g} e^{i k_{L} R_{A}}-h_{\cdot c}\right)$
Momentum is no longer conserved, so a force on the atom exist.
$$
\begin{align*}
\Rightarrow F=\frac{d P}{d t}=\frac{1}{i \hbar}\left[H_{1} P\right]=-\left[H_{\text {int }} \nabla_{R}\right]=-\nabla_{R} H_{\text {int }}(R)=-\hbar \cdot \nabla_{R} \Omega_{L}(R)\left(\sigma_{\text {eg }} e^{i k_{L} R_{A}}+h . c\right)-\hbar \Omega_{L}(R) i \vec{k}_{L}\left(\sigma_{\text {eg }} e^{i k_{L} R_{A}}+h . c\right) \text { using product rule. }
\end{align*}
$$
in -phase with incident lases: $1_{1}^{1} \frac{\pi}{2}$ out of phase (from i):
conservative dipole force dissipative scattering force

Dipole term gives laser trapping of ions and scattering term gives laser cooling/heating of atoms.
Estimating $\Delta R_{\text {atone }}=\frac{V_{\text {atom }}}{\Gamma_{\text {eg }}} \approx 10^{-8} \mathrm{~m} \ll$ Wave e length $10^{-6} \mathrm{~m}$, we replace $\sigma_{g} e^{i K_{L} R_{A}}$ with steady state.

Procedure: 1) Solve $O B E$ for steady state assuming $R(t)=R_{\text {mean }}+V_{\text {mean }} \cdot t$ for slow $V_{\text {mean }}$ : internal time scales $<C O M$ motion.
2) Use steady state values of $\left\langle\sigma_{e g}\right\rangle e^{i k_{L} R_{A}} \pm h_{1 . c}$ in $\frac{d}{d t}\langle P\rangle$
$$
\begin{align*}
\begin{aligned}
& H_{\text {int }}=\hbar \Omega_{l}(R)\left(\sigma_{e g} e^{i k_{L}\left(R_{m m}+V_{m} t\right)}+h . c\right) \text { and } g o \sigma_{l e g} \rightarrow \sigma_{e g} e^{-i k_{L} V_{m} t} \text { and } \Delta \rightarrow \Delta+k_{L} V_{m}=\Delta w \\
& \Rightarrow H=\hbar \Delta w \cdot \sigma_{l e}+\frac{p^{2}}{2 m}+\hbar \Omega_{l}(R)\left(\sigma_{e g} e^{i k_{L} R_{m}}+h . c\right)
\end{aligned}
\end{align*}
$$

End

Using that hamiltonian in $O B E$.
In fame of atom $\vec{k}_{L} \stackrel{v_{m}}{ }$ dopplesshift, so $w_{L} \rightarrow w_{L}-k_{L} v_{m}=w_{L}+\left|k_{L}\right| \cdot\left|v_{m}\right|$
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-28.jpg?height=1653&width=3259&top_left_y=879&top_left_x=52)
$$
\begin{align*}
\frac{d}{d t}\langle P\rangle=-\hbar v_{s s} \cdot \nabla_{R_{n}} \Omega_{l}\left(R_{m}\right)+V_{s s} \cdot \hbar k_{L} \cdot \Omega_{L}\left(R_{m}\right)
\end{align*}
$$
where $u_{s s}$ and $v_{s s}$ ane steady-state solutions.

For $|\Delta W| \ll \Gamma_{\text {eg }}, U_{s s} \gg v_{s s}: F_{\text {dip }}=-\hbar U_{s s} \cdot \nabla_{R_{m}} \Omega_{l}\left(R_{m}\right)=\frac{1}{2} \nabla_{R_{m}}\left(\frac{\hbar \Omega_{L}^{2}\left(R_{m}\right)}{\Delta w}\right) \hat{=} A($ stark shift
For $\Delta W=\Delta+K_{L} V_{m}>0$ : AC stark shift is red shift: Strong field seeking atoms
For $\Delta w<0$ : Laser blue detured: Weak field seeking, atoms accelerated away
$F_{\text {scatter }}=v_{s s} \cdot \hbar k_{L} \cdot \Omega_{L}\left(R_{m}\right) \approx F_{\text {scatter }}(v=0)+v_{s s} \cdot \vec{k}_{L} \vec{V}_{m}$ depends on velocity: Friction force
![](https://cdn.mathpix.com/cropped/2025_01_19_965791fe7c92864a8cd2g-28.jpg?height=968&width=2476&top_left_y=4172&top_left_x=253)
$$
\begin{align*}
\hbar w_{c}(x) a_{c}^{\dagger} a_{c}+\hbar w_{m} c_{m}^{\dagger} c_{m}+\hbar g_{c}\left(a_{L} a_{c}^{\dagger}+a_{c} a_{L}^{t}\right)+\hbar w_{L} a_{L}^{\dagger} a_{L}
\end{align*}
$$

