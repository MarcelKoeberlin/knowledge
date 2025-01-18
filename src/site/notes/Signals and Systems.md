---
{"dg-publish":true,"dg-path":"Notes/Signals and Systems","permalink":"/notes/signals-and-systems/","updated":"2025-01-18T20:39:54.972+01:00"}
---

This note will mostly follow along the book 'Signals and Systems - 2nd edition' by Alan V. Oppenheim and Alan S. Willsky. Not every chapter is covered, especially the more 'basic' ones. Also its not an in-depth note.

# 1 Signals and Systems
## 1.1 Continous-time and discrete-time signals 
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=32&selection=69,0,79,7|🔗]]

Signals are represented mathematically as functions of one or more independent variables. Here, attention is on signals involving a single independent variable, usually time $t$ for convenience. 
In the case of continuous-time signals the independent variable is continuous, and thus these signals are defined for a continuum of values of the independent variable. On the other hand, discrete-time signals are defined only at discrete times, and consequently, for these signals, the independent variable takes on only a discrete set of values. For continuous-time signals we will enclose the independent variable in parentheses $( · )$, whereas for discrete-time signals we will use brackets $[ · ]$ to enclose the independent variable. A discrete-time signal $x[n]$ may represent a phenomenon for which the independent variable is inherently discrete. Signals such as demographic data are examples of this. On the other hand, a very important class of discrete-time signals arises from the sampling of continuous-time signals. In this case, the discrete-time signal $x[n]$ represents successive samples of an underlying phenomenon for which the independent variable is continuous. 


## 1.2 Energy and Power
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=36&selection=158,0,170,5|🔗]]

In many applications, the signals considered are directly related to physical quantities capturing power and energy in a physical system. As starting example, consider voltage $v(t)$ and current $I(t)$ across a resistor with resistance $R$. The instantaneous power is 
$p(t)=v(t)I(t)=v^2(t)/R$. This allows to get the total energy expended over the time interval $t_1<t<t_2$ as 
$$\int_{t_1}^{t_2}dt\cdot p(t) $$ and the average power as
$$\frac{1}{t_2-t_1}\int_{t_1}^{t_2}dt\cdot p(t).$$ With these simple physical examples in mind, it is common to use similar terminiology for power and energy for _any_ continous-time signal $x(t)$ and _any_ discrete-time signal $x[n]$. 

The energy in a given time-interval $[t_1, t_2]$ is $$E=\int_{t_{1}}^{t_{2}} d t \cdot|x(t)|^{2}=\sum_{n=n_{1}}^{n_{2}}|x[n]|^{2},$$while the time-averaged power is $$P=\frac{E}{t_{2}-t_{1}}=\frac{E}{n_{2}-n_{1}+1}.$$
For signals over in finite time-interrals, we find $$E_{\infty}=\int_{-\infty}^{\infty} d t \cdot|x(t)|^{2}=\sum_{n=-\infty}^{\infty}|x[n]|^{2}.$$Note that for some signals, these integrals might not converge (for example a nonzero constant signal). These signals have infinite energy. The time-areraged power then becomes $$P_{\infty}=\lim _{T \rightarrow \infty} \frac{1}{2 T} \int_{-T}^{T} d t \cdot|x(t)|^{2}=\lim _{N \rightarrow \infty} \frac{1}{2 N+1} \sum_{n=-N}^{N}|x[n]|^{2}.$$These definitions allow us to identify three important classes of signals
1) Finite energy signals: $E_{\infty}<\infty \Rightarrow P_{\infty}=\lim \frac{E_{\infty}}{2 T}=0.$
2) Finite average power signals: $P_{\infty}<\infty \Rightarrow E_{\infty}=\infty.$
3) Signal with neither finite energy nor finite power, such as $x(t)=t$.

## 1.3 Transformations
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=38&selection=226,0,236,8|🔗]]

A very central concept in signal and system analysis is that of the transformation of a signal. Transformations happen all around us: Digital-analog-converters or noise-reduction in music systems for example. 

Some important and very fundamental transformations:
- Time shift: $x(t) \rightarrow x\left(t-t_{0}\right)$, 
- Time-reversal: $x(t) \rightarrow x(-t)$, and
- Time scaling: $x(t) \rightarrow x(\alpha \cdot t)$.
## 1.4 Periodic signals 
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=42&selection=502,0,506,7|🔗]]

A very important class of signals encountered frequently here, are periodic signals. The defining property is that, for a positive value of $T$, it holds that
$$x(t)=x(t)+T$$ for all values of $t$. In other words, a periodic signal is unchanged by a time shift $T$. Then, the signal $x(t)$ is periodic with period $T$. 
## 1.5 Even and odd signals
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=44&selection=36,0,46,7|🔗]]

Another set of useful properties of signals relates to their symmetry under time reversal. A signal is considered even if $x(t)=x(-t)$, and odd if $x(-t)=-x(t). An odd signal must be zero at time zero, as we can see from the definition. Thus, every signal can be written as superposition of an odd and even part, $$x(t)=\mathcal{E}(x)+\mathcal{O}(x)=\frac{x(t)+x(-t)}{2}+\frac{x(t)-x(-t)}{2}.$$
## 1.6 Exponential signals
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=46&selection=12,0,17,18|🔗]]

Consider the continous-time complex exponential signal of the form $x(t)=C \cdot e^{\alpha^{t}}$.
Depending on the values of $\alpha$ and $C$, these signals can have different characteristics:
1) Real exponential signals $\alpha, c \in \mathbb{R}$. They have two different behaviours:
	1) $\alpha<0 \Rightarrow$ exponential decrease, or
	2) $\alpha>0 \Rightarrow$ exponential increase with time.
2) Periodic complex exponential $\operatorname{Re}(\alpha)=0$. These signals are periodic with periodicity $T_{0}=\frac{2 \pi}{w_{0}}$ for $\alpha=i\omega_{0}$. Like any periodic signal, they have infinite total energy, but finite average power. 
3) General complex exponential signals $\alpha, C \in \mathbb{C}$. We can differentiate two cases:
	1) $\operatorname{Re}(\alpha)=0$ : $x(t)$ sinusoidal, or
	2) $\operatorname{Re}(\alpha)>0$ : sinusoidal multiplied by increasing exponential, or
	3) $\operatorname{Re}(\alpha)<0$ : sinusoidal multiplied by decaying exponential.

The discussion in [[Signals and Systems#1.3 Transformations\|#1.3 Transformations]] to [[Signals and Systems#1.6 Exponential signals\|#1.6 Exponential signals]] are exactly analogous in the case of a discrete-time signal and will not be repeated. Note that this is the last notice about this occurence.
## 1.7 Unit impulse and unit step
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=61&selection=111,0,127,9|🔗]]

In this section, several other basic signals of considerable importance are introduced. 
### 1.7.1 Unit pulse
Consider the unit impulse $$\delta[n] =
\begin{cases} 
1 & \text{if } n = 0, \\
0 & \text{otherwise}
\end{cases},$$ and theunit step $$u[n] = \begin{cases} 1 & \text{if } n \geq 0, \\ 0 & \text{otherwise.} \end{cases}$$ 
There is a close relation between the unit impulse and the unit step. In particular, the unit impulse is the _first difference_ of the unit step: $$\delta[n]=u[n]-u[n-1],$$ while the unit step is the _running sum_ of the unit sample: $$u[n]=\sum_{m=-\infty}^{n} \delta[n]=\sum_{k=0}^{\infty} \delta[n-k].$$
Further, we find that $x[n] \delta\left(n-n_{0}\right)=x\left[n_{0}\right] \delta\left[n-n_{0}\right]$. 
Instead, in continuous independant variables, the relation is  $$u(t)=\int_{-\infty}^t d\tau\cdot\delta(\tau)=\int_{0}^{\infty} d \sigma \cdot \delta(t-\sigma),$$and $$\delta(t)=\frac{d u(t)}{d t}.$$ The unit impulse should be considered an idealization of an infinitely short pulse. Any system has some 'inertia' associated to it, such that the response of a system to a _sufficiently short_ pulse is independent of the pulse duration or shape. The primary characteristic of the pulse is therefore only its integrated effect, e.g. its area. For system with a fast response, the pulse must be shorter as well for this to hold true. The ideal unit impulse is short enough for _any_ system. 
## 1.8 Interconnection of systems
## 1.9 Memory, Invertibility, Causality, stability, time invariance
A system has no memory if the output at a given time depends only on the input at that time. Then, we call it memoryless.
The accumulator $y(n)=\sum_{k=-\infty}^{n} x(k)$ has memory, as well as the delay $y(n)=x(n-1)$.
A capacitor has memory, since the output (voltage) is $V(t)=\frac{1}{c} \int_{-\infty}^{t} d \tau \cdot I(\tau)$.
A system is invertible if distinct input implies distinct output. Then, an inverse system exist, such that $x \rightarrow y \rightarrow w=x$.

A system is causal if the output at time $t$ depends only on values in the present or past.
All memorylers systems are casual.
A system is stable if small inputs lead to non-diverging outputs.
A system is time-invariant if its behavior and charactenstics ane fixed over time. Formally, it is time-invariant if $x(n) \rightarrow y(n) \Leftrightarrow x\left(n-n_{0}\right) \rightarrow y\left(n-n_{0}\right)$.

## 1.10 Linearity
A linear system fulfills additivity $x_{1}+x_{2} \rightarrow y_{1}+y_{2}$ and homogeneity $\alpha x_{1} \rightarrow \alpha y_{1}$.
We combine it to $\alpha x_{1}+\beta x_{2} \rightarrow \alpha y_{1}+\beta y_{2}$.

# 2 Linear time-invariant systems
The sifting property is $x(n)=\sum_{k=-\infty}^{\infty} x(k) \delta(n-k)$ of the disccete-time unit impulse.
Let $h_{k}(n)$ be the response of a linear system to input $\delta(n-k)$, e.g. $\delta(n-k) \rightarrow h_{k}(n)$.
Then, it holds $y(n)=\sum_{k=-\infty}^{\infty} x(k) h_{k}(n)$, e.g. we are able to deduce an arbitrary input.
If the system is additionally time-invariant and $\delta(n) \rightarrow h(n)$, then $y(n) \rightarrow \sum_{k} x(h) h(n-k)$.
We call this the convolution/ superposition sum, and also write $y(n)=x(n) * h(n)$.
For continow -tine LTI systems, we have the sifting property $x(t)=\int_{-\infty}^{\infty} d \tau \cdot x(\tau) \delta(\tau-t)$, and finally $y(t)=x(t) * h(t)=\int_{-\infty}^{\infty} d \tau \cdot x(\tau) h(t-z)$ if $\delta(t) \rightarrow h(t)$.

The charactenstics of an $L T I$ system is fully determined by its impulse response.
## 2.1 Convolution properties
We have commutativity $x(t) * h(t)=h(t) * x(t)$, distributivity $x *\left(h_{1}+h_{2}\right)=x * h_{1}+x * h_{2}$, which we depict graphically. Further, it is associative $x *\left(h_{1} * h_{2}\right)=\left(x * h_{1}\right) * h_{2}$.
![Attachments/Oppenheim,Willsky_Signals and Systems 1.webp](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%201.webp)[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=136&rect=108,407,300,593|🔗]]

![](https://cdn.mathpix.com/cropped/2025_01_18_52f89a1b79001871df74g-04.jpg?height=791&width=1355&top_left_y=1698&top_left_x=47)

## 2.2 Memory, invertibility, causality, stability, step response
An LTI system can only be memory less if $h(n)=0$ for $n \neq 0$, such that $h(n) \sim \delta(n)$ and y~x.
If $h=\delta_{1}$, then $x=x * \delta=y$ the identity, or the sifting property.

If an $L T 1$ system is invertible, its inverse is $L T I$. If $x \xrightarrow{h} y$ and we want $y \xrightarrow{h^{\prime}} x$,
we must must $h * h^{\prime}=1=\delta$ the identity.

Causality requires $h(n)=0$ for $n<0$. In linear systems, causility is equivalent to the condition of initial rest, e.g. if $x\left(t<t^{\prime}\right)=0$, then $y\left(t<t^{\prime}\right)=0$.

An $L T \mid$ system is stable if $\sum_{k}|h(k)|^{2}<\infty$ since then $|x|<B<\infty \Rightarrow|y| \leq B \cdot \sum_{k}|\ln (k)|^{2}<B<\infty$.
For continuous variables, $\int d t \cdot|h(t)|^{2}<\infty$ translates to absolutely integrable.
The step response is $s(n)=u(u) * h(n)=\sum_{k=-\infty}^{n} h(k)=\int_{-\infty}^{t} d \tau \cdot h(\tau)$.
Then $h(n)=s(n)-s(n-1)=\frac{d s}{d t}$.
## 2.3 Linear constant-coefficient differential equations

Consider a general Nth-order linear constant-coefficient differential equation:
$\sum_{k=0}^{N} a_{k} \cdot \frac{d^{k} y(t)}{d t^{k}}=\sum_{k=0}^{M} b_{k} \cdot \frac{d^{k} x(t)}{d t^{k}}$ which becomes $a_{n}$ explicit function for $N=0, y(t)=\frac{1}{a_{0}} \sum_{k=0}^{M} b_{k} \frac{d^{k} x}{d t^{k}}$.
For $N \geqslant 1, y(t)$ consists of two parts, one being the particular solution plus the part that solves the homogeneous equation $\sum_{k=0}^{N} a_{k} \cdot \frac{d^{k} y(t)}{d t^{k}}=0$, the so-called natural responses. In discrete-time variables, it is $\sum_{k=0}^{N} a_{k} y(n-k)=\sum_{k=0}^{M} b_{k} x(n-k)$ and the unnatural response solves $\sum_{k=0}^{N} a_{k} y(n-k)=0$
An alternate here is that we can rewrite $y(n)=\frac{1}{a_{0}}\left(\sum_{k=0}^{M} b_{k} x(n-k)-\sum_{k=1}^{N} a_{k} y(n-k)\right)$ which requires us to know $y(n-1), \ldots, y(n-N)$. It is a recursive equation.
For $N=0$ we have $y(n)=\sum_{k=0}^{M} \frac{b_{k}}{a_{0}} x(n-k)$ so $h(n)=\frac{b_{n}}{a_{0}}$ if $0 \leq n \leq M$. As its impulse response $\frac{b_{n}}{a_{0}}$ finite, we call the system that it describer as finite impulse response system.

Usually $_{y}$, for $N \geqslant 1$ when the differential equation is recursive, the impulse response is infinite.
## 2.4 Block diagram representation
Start at $y(n)+a y(n-1)=b x(n)$ which we can rewrite as $y(n)=b x(n)-a y(n-1)$.
![](https://cdn.mathpix.com/cropped/2025_01_18_52f89a1b79001871df74g-06.jpg?height=508&width=504&top_left_y=461&top_left_x=59)

Thus, its representation is
![](https://cdn.mathpix.com/cropped/2025_01_18_52f89a1b79001871df74g-06.jpg?height=369&width=700&top_left_y=588&top_left_x=817)

The feedback is a direct consequence of the recursive equation.
Next, consider $\frac{d y}{d t}+a y(t)=b x(t)$ in continons time, and find $y(t)=-\frac{1}{a} \frac{d y}{d t}+b x(t)$ which could be implemented with the elements before, however differentiators $D \hat{=} \frac{d}{d t}$ are extremely sensitive to noise. Instead do $y(t)=\int_{-\infty}^{t} d \tau(b x(z)-a y(z)) d z$ assuming $y(-\infty)=0$. We define a new element, the integrator. The representation of the equation therefore is:
![](https://cdn.mathpix.com/cropped/2025_01_18_52f89a1b79001871df74g-06.jpg?height=331&width=1722&top_left_y=1699&top_left_x=55)

The integrator is a memory -element, as we can see writing $y(t)=y\left(t_{0}\right)+\int_{t}^{t} d \tau(b x(z)-a y(z)) d z$ where it must stove $y\left(t_{0}\right)$.

## 2.5 Singularity functions
We define the unit impulse through convolution, so $x(t)=x(t) * \delta(t)$ for any signal $x(t)$.
This also implies $1=x=1 \times \delta=\int_{-\infty}^{\infty} d \tau \cdot \delta(\tau)$.

The unit impulse is of the class of singularity functions.
Consider the system that does $y(t)=\frac{d x}{d t}:=x(t): u_{1}(t)$ with $u_{1}$ the unit doublet.
If $\frac{d^{2} x}{d t^{2}}:=x * u_{2}=\left(x * u_{1}\right) * u_{1}$ if follows $u_{2}=u_{1} * u_{1}$ by associativity.
Further, consider $x=1$ so $0=\frac{d x}{d t}=\int_{-\infty}^{\infty} d \tau \cdot u_{1}(z)$ and $-g^{\prime}(0)=\int_{-\infty}^{\infty} d z \cdot g(\tau) \cdot u_{1}(z)$.

We can define the integrator $y(t)=x * u=\int_{-\infty}^{n_{0}} d \tau \cdot x(\tau)$.
We find $u(t)=\int_{-\infty}^{t} d \tau \cdot \delta(\tau)$ and $x(t) * u_{1}(t)=\int_{\infty}^{t} d \tau \cdot x(\tau)$.
Again, we define $u_{-2}(t)=u * u=\int_{-\infty}^{t} d z \cdot u(z)=t \cdot u(t)$ since $u(t)=1$ for $t>0$.
Therefore, $u_{-2}$ is also called the unit ramp function.
Then $u_{-k}=\int_{-\infty}^{t} d z \cdot u_{-(k-1)}(z)=\frac{t^{k-1}}{(k-1)!} u(t)$ is the cascade of integrators.
Alternative notations are $\delta(t)=u_{0}(t)$ and $u_{-1}(t)=u(t)$.

Then $\delta(t)=u_{1} * u_{-1}$ as expected, or generally $u_{k+r}(t)=u_{k}(t) * u_{r}(t)$.

# 3 Fourier series representation of periodic signals
In LTI systems, we have $e^{s t} \longrightarrow H(s) e^{s t}$ and $e^{z} \longrightarrow H(z) e^{z}$ for continons, respectively discrete time with a complex amplitude factor $H$.

A signal $x \longrightarrow a \cdot x$ is called eigenfunction of the system and the (complex) constant a
is called the eigenvalue. Therefore, we claim that exponentials are eigenfunctions of any
LTI system, we show $y(t)=\int_{-\infty}^{t} d \tau \cdot h(\tau) x(t-\tau)=\int_{-\infty}^{t} d \tau \cdot h(\tau) e^{s(t-\tau)}=e^{s t} \int_{-\infty}^{t} d \tau \cdot h(\tau) e^{-s \tau}$ assuming that the integral converges.

It is useful to decompose a general signal into eigenfunctions $x(t)=\sum_{n} a_{n} e^{s . t}$ such that $y(t)=\sum_{n} a_{n} H\left(s_{n}\right) e^{s_{n} t}$.

Fourier series representation continons-time periodic signals
The representation is $x(t)=\sum_{k=-\infty}^{\infty} a_{k} e^{i k \frac{2 \pi}{T} t}$ for a periodic signal with periodicity 7 .
For real $x=x^{*}$, we also get $a_{k}^{*}=a_{-k}$ which allows to write
$$
x(t)=a_{0}+\sum_{k=1}^{\infty}\left\{a_{k} e^{i k \omega_{0} t}+a_{k}^{*} e^{-i k \omega_{0} t}\right\}=a_{0}+\sum_{k=1}^{\infty} 2 \operatorname{Re}\left(a_{k} e^{i k \omega_{0} t}\right)=a_{0}+2 \cdot \sum_{k=1}^{\infty} A_{k} \cos \left(k \omega_{0} t+\theta_{k}\right)
$$
if we write $a_{k}=A_{k} e^{i \theta_{k}}$.
Equivalently, if $a_{k}=B_{k}+i C_{k}$, then $x(t)=a_{0}+2 \cdot \sum_{k=1}^{\infty}\left\{B_{k} \cos \left(k \omega_{0} t\right)-C_{k} \sin \left(k \omega_{0} t\right)\right\}$.
We still weed to proof that any periodic $x(t)$ can be written in that form.
Continuing the assumption, we $g e t \int_{0}^{T} d t \cdot x(t) e^{-i k n \omega_{0} t}=\int_{0}^{T} d t \cdot \sum_{k} a_{k} e^{i(k-n) \omega_{0} t}$ which eventually implies $\int_{t^{\prime}}^{t^{\prime}+T} d t \cdot e^{i(k-n) w_{0} t}=T$ if $k=n$ for any $t^{\prime}$.
We will write the integral $\int_{t^{\prime}}^{t^{\prime}+T}$ ar $\int_{T}$ from now on.
Then, $a_{n}=\frac{1}{T} \int_{T} d t \cdot x(t) e^{-i n \omega_{0} t}$ and $a_{0}=\frac{1}{T} \int_{T} d t \cdot x(t)=\bar{x}(t)$, so the average over one period.

# 4 Convergence of the Founder series
Approximate a general signal $x(t)$ as $x_{N}(t)=\sum_{k=-N}^{N} a_{k} e^{i k w_{0} t}$ such that the error of approximation becomes $e_{N}(t)=x(t)-x_{N}(t)=x(t)-\sum_{k=-N}^{N} a_{k} e^{i k w_{0} t}$
The energy over one period is $E_{N}=\int_{T} d t \cdot\left|e_{N}(t)\right|^{2}$ which is minimized by $a_{k}=\frac{1}{T} \int_{T} d t \cdot x(t) e^{-i k w_{0} t}$.
Obviously $\lim _{N \rightarrow \infty} E_{N}=0$ if $x(t)$ has a founder series representation.
Consider two classes of signals:
1) Periodic signals with finite power, $\int_{T} d t \cdot|x(t)|<\infty$ implying $\left|a_{k}\right|<\infty$, and $a \mid$ so $\int_{T} d t \cdot|e(t)|^{2}=0$ for $e(t)=x(t)-\sum_{k=-\infty}^{\infty} a_{k} e^{i k w_{0} t}$. However, this does not imply $x(t)=\sum_{k=-\infty}^{\infty} a_{k} e^{i k w_{0} t}$. It only means that their energies are equal. This is useful, since physical systems react to signal energy so that from their perspective, $x(t)$ and its fourier representation are equal.

The Dinchlet conditions are
1) Over one period, $x(t)$ must absolutely integrable, so $\int_{T} d t \cdot|x(t)|^{2}<\infty$.

This implies $\left|a_{k}\right| \leq \int_{T} d t \cdot|x(t)|^{2}<\infty$.
2) In any finite interval of time, $x(t)$ is of bounded variation. In other words, there ave only a finite number of minima and maxima per period.
3) In any finite interval of time, $x(t)$ has only a finite number of discontinonties, and each of them is finite.

While there are many functions violating one of the conditions, most signals in nature do fulfill them.

For a penodic signal without discontinuities, $x(t)=\sum_{k=-\infty}^{\infty} a_{k} e^{i k w_{0} t}$ for all $t$.
For a periodic signal with a finite number of discontinuities, $x(t)=\sum_{k=-\infty}^{\infty} a_{k} e^{i k w_{0} t}$ for all $t$, expect at the discontinuities. There, $\sum_{k=\infty}^{\infty} a_{k} e^{i k w_{0} t} \rightarrow \frac{1}{2}\left(x\left(t_{\text {dis is }}^{+}\right)+x\left(t_{\text {disc }}^{-}\right)\right)$the average valve on either side.

Their energy difference is zero, and since they only differ at isolated points, the integral over any interval is equal for both. Therefore, both signals behave equal under convolution, and are identical in LTI systems.

The Gibbs phenomenon implies that near to a discontinuity, the truncated Fourier sanies
will exhibit high -frequency riples that get wake with increasing $N$.
![](https://cdn.mathpix.com/cropped/2025_01_18_52f89a1b79001871df74g-10.jpg?height=269&width=1900&top_left_y=1162&top_left_x=55)

## 4.1 Properties of continous-time Founder series
![](https://cdn.mathpix.com/cropped/2025_01_18_52f89a1b79001871df74g-10.jpg?height=1143&width=1446&top_left_y=1567&top_left_x=74)

Parseval's Relation for Periodic Signals
$$
\frac{1}{T} \int_{T}|x(t)|^{2} d t=\sum_{k=-\infty}^{+\infty}\left|a_{k}\right|^{2}
$$