--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Drop databases (except postgres and template1)
--

DROP DATABASE bd_imobiliaria;




--
-- Drop roles
--

DROP ROLE "DOCKER";


--
-- Roles
--

CREATE ROLE "DOCKER";
ALTER ROLE "DOCKER" WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'md5ecf192b8e604797865419196c3a2d773';






--
-- Databases
--

--
-- Database "template1" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4 (Debian 13.4-1.pgdg100+1)
-- Dumped by pg_dump version 13.4 (Debian 13.4-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

UPDATE pg_catalog.pg_database SET datistemplate = false WHERE datname = 'template1';
DROP DATABASE template1;
--
-- Name: template1; Type: DATABASE; Schema: -; Owner: DOCKER
--

CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE template1 OWNER TO "DOCKER";

\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: COMMENT; Schema: -; Owner: DOCKER
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- Name: template1; Type: DATABASE PROPERTIES; Schema: -; Owner: DOCKER
--

ALTER DATABASE template1 IS_TEMPLATE = true;


\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: ACL; Schema: -; Owner: DOCKER
--

REVOKE CONNECT,TEMPORARY ON DATABASE template1 FROM PUBLIC;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;


--
-- PostgreSQL database dump complete
--

--
-- Database "bd_imobiliaria" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4 (Debian 13.4-1.pgdg100+1)
-- Dumped by pg_dump version 13.4 (Debian 13.4-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: bd_imobiliaria; Type: DATABASE; Schema: -; Owner: DOCKER
--

CREATE DATABASE bd_imobiliaria WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE bd_imobiliaria OWNER TO "DOCKER";

\connect bd_imobiliaria

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: imovel_apartamento; Type: TABLE; Schema: public; Owner: DOCKER
--

CREATE TABLE public.imovel_apartamento (
    id_imovel integer NOT NULL,
    qtde_quarto smallint,
    qtde_suite smallint,
    qtde_sala_de_estar smallint,
    qtde_sala_de_jantar smallint,
    qtde_vagas_garagem smallint,
    area real,
    possui_arm_embut smallint,
    descricao text,
    andar smallint,
    valor_condominio real,
    portaria24h boolean
);


ALTER TABLE public.imovel_apartamento OWNER TO "DOCKER";

--
-- Name: apartamento_imovel_id_imovel_seq; Type: SEQUENCE; Schema: public; Owner: DOCKER
--

CREATE SEQUENCE public.apartamento_imovel_id_imovel_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.apartamento_imovel_id_imovel_seq OWNER TO "DOCKER";

--
-- Name: apartamento_imovel_id_imovel_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: DOCKER
--

ALTER SEQUENCE public.apartamento_imovel_id_imovel_seq OWNED BY public.imovel_apartamento.id_imovel;


--
-- Name: cargo; Type: TABLE; Schema: public; Owner: DOCKER
--

CREATE TABLE public.cargo (
    id_cargo integer NOT NULL,
    salario_base real
);


ALTER TABLE public.cargo OWNER TO "DOCKER";

--
-- Name: cargo_id_funcionario_seq; Type: SEQUENCE; Schema: public; Owner: DOCKER
--

CREATE SEQUENCE public.cargo_id_funcionario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cargo_id_funcionario_seq OWNER TO "DOCKER";

--
-- Name: cargo_id_funcionario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: DOCKER
--

ALTER SEQUENCE public.cargo_id_funcionario_seq OWNED BY public.cargo.id_cargo;


--
-- Name: cliente; Type: TABLE; Schema: public; Owner: DOCKER
--

CREATE TABLE public.cliente (
    id integer NOT NULL,
    cpf bigint NOT NULL,
    nome text,
    endereco text,
    telefone bigint,
    telefone2 bigint,
    email text NOT NULL,
    sexo smallint,
    estado_civil smallint,
    profissao text
);


ALTER TABLE public.cliente OWNER TO "DOCKER";

--
-- Name: cliente_fiador_indicacao; Type: TABLE; Schema: public; Owner: DOCKER
--

CREATE TABLE public.cliente_fiador_indicacao (
    id_cliente integer NOT NULL
);


ALTER TABLE public.cliente_fiador_indicacao OWNER TO "DOCKER";

--
-- Name: cliente_proprietario; Type: TABLE; Schema: public; Owner: DOCKER
--

CREATE TABLE public.cliente_proprietario (
    id_cliente integer NOT NULL
);


ALTER TABLE public.cliente_proprietario OWNER TO "DOCKER";

--
-- Name: cliente_usuario; Type: TABLE; Schema: public; Owner: DOCKER
--

CREATE TABLE public.cliente_usuario (
    id_cliente integer NOT NULL,
    id_fiador integer,
    id_indicacao integer,
    id_indicacao2 integer
);


ALTER TABLE public.cliente_usuario OWNER TO "DOCKER";

--
-- Name: forma_pgto; Type: TABLE; Schema: public; Owner: DOCKER
--

CREATE TABLE public.forma_pgto (
    id integer NOT NULL,
    nome text
);


ALTER TABLE public.forma_pgto OWNER TO "DOCKER";

--
-- Name: forma_pgto_id_seq; Type: SEQUENCE; Schema: public; Owner: DOCKER
--

CREATE SEQUENCE public.forma_pgto_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.forma_pgto_id_seq OWNER TO "DOCKER";

--
-- Name: forma_pgto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: DOCKER
--

ALTER SEQUENCE public.forma_pgto_id_seq OWNED BY public.forma_pgto.id;


--
-- Name: funcionario; Type: TABLE; Schema: public; Owner: DOCKER
--

CREATE TABLE public.funcionario (
    id integer NOT NULL,
    cargo smallint,
    cpf bigint,
    nome text,
    endereco text,
    telefone bigint,
    telefone2 bigint,
    data_ingresso date,
    salario_comicao real,
    salario_final real,
    "user" text,
    senha text
);


ALTER TABLE public.funcionario OWNER TO "DOCKER";

--
-- Name: funcionario_id_seq; Type: SEQUENCE; Schema: public; Owner: DOCKER
--

CREATE SEQUENCE public.funcionario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.funcionario_id_seq OWNER TO "DOCKER";

--
-- Name: funcionario_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: DOCKER
--

ALTER SEQUENCE public.funcionario_id_seq OWNED BY public.funcionario.id;


--
-- Name: imovel; Type: TABLE; Schema: public; Owner: DOCKER
--

CREATE TABLE public.imovel (
    id integer NOT NULL,
    id_cliente_prop integer NOT NULL,
    locacao boolean,
    venda boolean,
    ja_foi_vendido boolean,
    ja_foi_locado boolean,
    foto text[],
    data_contrucao date,
    categoria smallint,
    endereco text,
    numero integer,
    bairro text,
    cep bigint,
    valor_venda numeric,
    valor_aluguel numeric,
    vendido boolean,
    data_anuncio_locacao date,
    data_anuncio_venda date,
    disponibilidade smallint
);


ALTER TABLE public.imovel OWNER TO "DOCKER";

--
-- Name: imovel_casa; Type: TABLE; Schema: public; Owner: DOCKER
--

CREATE TABLE public.imovel_casa (
    id integer NOT NULL,
    qtde_quarto smallint,
    qtde_suite smallint,
    qtde_sala_estar smallint,
    qtde_sala_jantar smallint,
    qtde_vaga_garagem smallint,
    area numeric,
    possui_armario_embutido boolean,
    descricao text
);


ALTER TABLE public.imovel_casa OWNER TO "DOCKER";

--
-- Name: imovel_historico; Type: TABLE; Schema: public; Owner: DOCKER
--

CREATE TABLE public.imovel_historico (
    id_imovel integer NOT NULL,
    locacao boolean,
    venda boolean,
    ja_foi_vendido boolean,
    ja_foi_locado boolean,
    foto text[],
    data_construcao date,
    categoria smallint,
    endereco text,
    numero integer,
    bairro text,
    cep bigint,
    valor_venda real,
    valor_aluguel real,
    vendido boolean,
    data_anuncio_locacao date,
    data_anuncio_venda date
);


ALTER TABLE public.imovel_historico OWNER TO "DOCKER";

--
-- Name: imovel_id_seq; Type: SEQUENCE; Schema: public; Owner: DOCKER
--

CREATE SEQUENCE public.imovel_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.imovel_id_seq OWNER TO "DOCKER";

--
-- Name: imovel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: DOCKER
--

ALTER SEQUENCE public.imovel_id_seq OWNED BY public.imovel.id;


--
-- Name: imovel_sala_comercial; Type: TABLE; Schema: public; Owner: DOCKER
--

CREATE TABLE public.imovel_sala_comercial (
    id_imovel integer NOT NULL,
    area real,
    qtde_banheiro smallint,
    qtde_comodos smallint
);


ALTER TABLE public.imovel_sala_comercial OWNER TO "DOCKER";

--
-- Name: imovel_terreno; Type: TABLE; Schema: public; Owner: DOCKER
--

CREATE TABLE public.imovel_terreno (
    id_imovel integer NOT NULL,
    area real,
    largura real,
    comprimento real,
    possui_aclive boolean,
    possui_declive boolean
);


ALTER TABLE public.imovel_terreno OWNER TO "DOCKER";

--
-- Name: operacao_imovel; Type: TABLE; Schema: public; Owner: DOCKER
--

CREATE TABLE public.operacao_imovel (
    id integer NOT NULL,
    id_venda_aluguel integer,
    id_imovel integer
);


ALTER TABLE public.operacao_imovel OWNER TO "DOCKER";

--
-- Name: operacao_imovel_id_seq; Type: SEQUENCE; Schema: public; Owner: DOCKER
--

CREATE SEQUENCE public.operacao_imovel_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.operacao_imovel_id_seq OWNER TO "DOCKER";

--
-- Name: operacao_imovel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: DOCKER
--

ALTER SEQUENCE public.operacao_imovel_id_seq OWNED BY public.operacao_imovel.id;


--
-- Name: sala_comercial_imovel_id_imovel_seq; Type: SEQUENCE; Schema: public; Owner: DOCKER
--

CREATE SEQUENCE public.sala_comercial_imovel_id_imovel_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sala_comercial_imovel_id_imovel_seq OWNER TO "DOCKER";

--
-- Name: sala_comercial_imovel_id_imovel_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: DOCKER
--

ALTER SEQUENCE public.sala_comercial_imovel_id_imovel_seq OWNED BY public.imovel_sala_comercial.id_imovel;


--
-- Name: terreno_id_imovel_seq; Type: SEQUENCE; Schema: public; Owner: DOCKER
--

CREATE SEQUENCE public.terreno_id_imovel_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.terreno_id_imovel_seq OWNER TO "DOCKER";

--
-- Name: terreno_id_imovel_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: DOCKER
--

ALTER SEQUENCE public.terreno_id_imovel_seq OWNED BY public.imovel_terreno.id_imovel;


--
-- Name: venda_aluguel; Type: TABLE; Schema: public; Owner: DOCKER
--

CREATE TABLE public.venda_aluguel (
    id integer NOT NULL,
    id_imovel integer,
    id_forma_pgto integer,
    id_funcionario integer,
    id_usuario integer,
    contrato integer NOT NULL,
    tipo smallint,
    valor real,
    porcentagem_imobi real,
    "		 porcentagem_func" real,
    data date
);


ALTER TABLE public.venda_aluguel OWNER TO "DOCKER";

--
-- Name: venda_contrato_seq; Type: SEQUENCE; Schema: public; Owner: DOCKER
--

CREATE SEQUENCE public.venda_contrato_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.venda_contrato_seq OWNER TO "DOCKER";

--
-- Name: venda_contrato_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: DOCKER
--

ALTER SEQUENCE public.venda_contrato_seq OWNED BY public.venda_aluguel.contrato;


--
-- Name: venda_id_seq; Type: SEQUENCE; Schema: public; Owner: DOCKER
--

CREATE SEQUENCE public.venda_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.venda_id_seq OWNER TO "DOCKER";

--
-- Name: venda_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: DOCKER
--

ALTER SEQUENCE public.venda_id_seq OWNED BY public.venda_aluguel.id;


--
-- Name: cargo id_cargo; Type: DEFAULT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.cargo ALTER COLUMN id_cargo SET DEFAULT nextval('public.cargo_id_funcionario_seq'::regclass);


--
-- Name: forma_pgto id; Type: DEFAULT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.forma_pgto ALTER COLUMN id SET DEFAULT nextval('public.forma_pgto_id_seq'::regclass);


--
-- Name: funcionario id; Type: DEFAULT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.funcionario ALTER COLUMN id SET DEFAULT nextval('public.funcionario_id_seq'::regclass);


--
-- Name: imovel id; Type: DEFAULT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.imovel ALTER COLUMN id SET DEFAULT nextval('public.imovel_id_seq'::regclass);


--
-- Name: imovel_apartamento id_imovel; Type: DEFAULT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.imovel_apartamento ALTER COLUMN id_imovel SET DEFAULT nextval('public.apartamento_imovel_id_imovel_seq'::regclass);


--
-- Name: imovel_sala_comercial id_imovel; Type: DEFAULT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.imovel_sala_comercial ALTER COLUMN id_imovel SET DEFAULT nextval('public.sala_comercial_imovel_id_imovel_seq'::regclass);


--
-- Name: imovel_terreno id_imovel; Type: DEFAULT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.imovel_terreno ALTER COLUMN id_imovel SET DEFAULT nextval('public.terreno_id_imovel_seq'::regclass);


--
-- Name: operacao_imovel id; Type: DEFAULT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.operacao_imovel ALTER COLUMN id SET DEFAULT nextval('public.operacao_imovel_id_seq'::regclass);


--
-- Name: venda_aluguel id; Type: DEFAULT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.venda_aluguel ALTER COLUMN id SET DEFAULT nextval('public.venda_id_seq'::regclass);


--
-- Name: venda_aluguel contrato; Type: DEFAULT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.venda_aluguel ALTER COLUMN contrato SET DEFAULT nextval('public.venda_contrato_seq'::regclass);


--
-- Data for Name: cargo; Type: TABLE DATA; Schema: public; Owner: DOCKER
--

COPY public.cargo (id_cargo, salario_base) FROM stdin;
\.


--
-- Data for Name: cliente; Type: TABLE DATA; Schema: public; Owner: DOCKER
--

COPY public.cliente (id, cpf, nome, endereco, telefone, telefone2, email, sexo, estado_civil, profissao) FROM stdin;
\.


--
-- Data for Name: cliente_fiador_indicacao; Type: TABLE DATA; Schema: public; Owner: DOCKER
--

COPY public.cliente_fiador_indicacao (id_cliente) FROM stdin;
\.


--
-- Data for Name: cliente_proprietario; Type: TABLE DATA; Schema: public; Owner: DOCKER
--

COPY public.cliente_proprietario (id_cliente) FROM stdin;
\.


--
-- Data for Name: cliente_usuario; Type: TABLE DATA; Schema: public; Owner: DOCKER
--

COPY public.cliente_usuario (id_cliente, id_fiador, id_indicacao, id_indicacao2) FROM stdin;
\.


--
-- Data for Name: forma_pgto; Type: TABLE DATA; Schema: public; Owner: DOCKER
--

COPY public.forma_pgto (id, nome) FROM stdin;
\.


--
-- Data for Name: funcionario; Type: TABLE DATA; Schema: public; Owner: DOCKER
--

COPY public.funcionario (id, cargo, cpf, nome, endereco, telefone, telefone2, data_ingresso, salario_comicao, salario_final, "user", senha) FROM stdin;
\.


--
-- Data for Name: imovel; Type: TABLE DATA; Schema: public; Owner: DOCKER
--

COPY public.imovel (id, id_cliente_prop, locacao, venda, ja_foi_vendido, ja_foi_locado, foto, data_contrucao, categoria, endereco, numero, bairro, cep, valor_venda, valor_aluguel, vendido, data_anuncio_locacao, data_anuncio_venda, disponibilidade) FROM stdin;
\.


--
-- Data for Name: imovel_apartamento; Type: TABLE DATA; Schema: public; Owner: DOCKER
--

COPY public.imovel_apartamento (id_imovel, qtde_quarto, qtde_suite, qtde_sala_de_estar, qtde_sala_de_jantar, qtde_vagas_garagem, area, possui_arm_embut, descricao, andar, valor_condominio, portaria24h) FROM stdin;
\.


--
-- Data for Name: imovel_casa; Type: TABLE DATA; Schema: public; Owner: DOCKER
--

COPY public.imovel_casa (id, qtde_quarto, qtde_suite, qtde_sala_estar, qtde_sala_jantar, qtde_vaga_garagem, area, possui_armario_embutido, descricao) FROM stdin;
\.


--
-- Data for Name: imovel_historico; Type: TABLE DATA; Schema: public; Owner: DOCKER
--

COPY public.imovel_historico (id_imovel, locacao, venda, ja_foi_vendido, ja_foi_locado, foto, data_construcao, categoria, endereco, numero, bairro, cep, valor_venda, valor_aluguel, vendido, data_anuncio_locacao, data_anuncio_venda) FROM stdin;
\.


--
-- Data for Name: imovel_sala_comercial; Type: TABLE DATA; Schema: public; Owner: DOCKER
--

COPY public.imovel_sala_comercial (id_imovel, area, qtde_banheiro, qtde_comodos) FROM stdin;
\.


--
-- Data for Name: imovel_terreno; Type: TABLE DATA; Schema: public; Owner: DOCKER
--

COPY public.imovel_terreno (id_imovel, area, largura, comprimento, possui_aclive, possui_declive) FROM stdin;
\.


--
-- Data for Name: operacao_imovel; Type: TABLE DATA; Schema: public; Owner: DOCKER
--

COPY public.operacao_imovel (id, id_venda_aluguel, id_imovel) FROM stdin;
\.


--
-- Data for Name: venda_aluguel; Type: TABLE DATA; Schema: public; Owner: DOCKER
--

COPY public.venda_aluguel (id, id_imovel, id_forma_pgto, id_funcionario, id_usuario, contrato, tipo, valor, porcentagem_imobi, "		 porcentagem_func", data) FROM stdin;
\.


--
-- Name: apartamento_imovel_id_imovel_seq; Type: SEQUENCE SET; Schema: public; Owner: DOCKER
--

SELECT pg_catalog.setval('public.apartamento_imovel_id_imovel_seq', 1, false);


--
-- Name: cargo_id_funcionario_seq; Type: SEQUENCE SET; Schema: public; Owner: DOCKER
--

SELECT pg_catalog.setval('public.cargo_id_funcionario_seq', 1, false);


--
-- Name: forma_pgto_id_seq; Type: SEQUENCE SET; Schema: public; Owner: DOCKER
--

SELECT pg_catalog.setval('public.forma_pgto_id_seq', 1, false);


--
-- Name: funcionario_id_seq; Type: SEQUENCE SET; Schema: public; Owner: DOCKER
--

SELECT pg_catalog.setval('public.funcionario_id_seq', 1, false);


--
-- Name: imovel_id_seq; Type: SEQUENCE SET; Schema: public; Owner: DOCKER
--

SELECT pg_catalog.setval('public.imovel_id_seq', 1, false);


--
-- Name: operacao_imovel_id_seq; Type: SEQUENCE SET; Schema: public; Owner: DOCKER
--

SELECT pg_catalog.setval('public.operacao_imovel_id_seq', 1, false);


--
-- Name: sala_comercial_imovel_id_imovel_seq; Type: SEQUENCE SET; Schema: public; Owner: DOCKER
--

SELECT pg_catalog.setval('public.sala_comercial_imovel_id_imovel_seq', 1, false);


--
-- Name: terreno_id_imovel_seq; Type: SEQUENCE SET; Schema: public; Owner: DOCKER
--

SELECT pg_catalog.setval('public.terreno_id_imovel_seq', 1, false);


--
-- Name: venda_contrato_seq; Type: SEQUENCE SET; Schema: public; Owner: DOCKER
--

SELECT pg_catalog.setval('public.venda_contrato_seq', 1, false);


--
-- Name: venda_id_seq; Type: SEQUENCE SET; Schema: public; Owner: DOCKER
--

SELECT pg_catalog.setval('public.venda_id_seq', 1, false);


--
-- Name: imovel_apartamento apartamento_imovel_pkey; Type: CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.imovel_apartamento
    ADD CONSTRAINT apartamento_imovel_pkey PRIMARY KEY (id_imovel);


--
-- Name: cargo cargo_pkey; Type: CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.cargo
    ADD CONSTRAINT cargo_pkey PRIMARY KEY (id_cargo);


--
-- Name: imovel_casa casa_imovel_pkey; Type: CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.imovel_casa
    ADD CONSTRAINT casa_imovel_pkey PRIMARY KEY (id);


--
-- Name: cliente cliente_pkey; Type: CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (id);


--
-- Name: cliente_fiador_indicacao fiador_indicacao_pkey; Type: CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.cliente_fiador_indicacao
    ADD CONSTRAINT fiador_indicacao_pkey PRIMARY KEY (id_cliente);


--
-- Name: forma_pgto forma_pgto_pkey; Type: CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.forma_pgto
    ADD CONSTRAINT forma_pgto_pkey PRIMARY KEY (id);


--
-- Name: funcionario funcionario_pkey; Type: CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.funcionario
    ADD CONSTRAINT funcionario_pkey PRIMARY KEY (id);


--
-- Name: imovel_historico imovel_historico_pkey; Type: CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.imovel_historico
    ADD CONSTRAINT imovel_historico_pkey PRIMARY KEY (id_imovel);


--
-- Name: imovel imovel_pkey; Type: CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.imovel
    ADD CONSTRAINT imovel_pkey PRIMARY KEY (id);


--
-- Name: operacao_imovel operacao_imovel_pkey; Type: CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.operacao_imovel
    ADD CONSTRAINT operacao_imovel_pkey PRIMARY KEY (id);


--
-- Name: cliente_proprietario proprietario_cliente_pkey; Type: CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.cliente_proprietario
    ADD CONSTRAINT proprietario_cliente_pkey PRIMARY KEY (id_cliente);


--
-- Name: imovel_sala_comercial sala_comercial_imovel_pkey; Type: CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.imovel_sala_comercial
    ADD CONSTRAINT sala_comercial_imovel_pkey PRIMARY KEY (id_imovel);


--
-- Name: imovel_terreno terreno_pkey; Type: CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.imovel_terreno
    ADD CONSTRAINT terreno_pkey PRIMARY KEY (id_imovel);


--
-- Name: cliente_usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.cliente_usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id_cliente);


--
-- Name: venda_aluguel venda_pkey; Type: CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.venda_aluguel
    ADD CONSTRAINT venda_pkey PRIMARY KEY (id);


--
-- Name: cliente_usuario cliente; Type: FK CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.cliente_usuario
    ADD CONSTRAINT cliente FOREIGN KEY (id_cliente) REFERENCES public.cliente(id) NOT VALID;


--
-- Name: funcionario id_cargo; Type: FK CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.funcionario
    ADD CONSTRAINT id_cargo FOREIGN KEY (cargo) REFERENCES public.cargo(id_cargo) NOT VALID;


--
-- Name: cliente_proprietario id_cliente; Type: FK CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.cliente_proprietario
    ADD CONSTRAINT id_cliente FOREIGN KEY (id_cliente) REFERENCES public.cliente(id);


--
-- Name: cliente_fiador_indicacao id_cliente; Type: FK CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.cliente_fiador_indicacao
    ADD CONSTRAINT id_cliente FOREIGN KEY (id_cliente) REFERENCES public.cliente(id) NOT VALID;


--
-- Name: venda_aluguel id_forma_pagamento; Type: FK CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.venda_aluguel
    ADD CONSTRAINT id_forma_pagamento FOREIGN KEY (id_forma_pgto) REFERENCES public.forma_pgto(id) NOT VALID;


--
-- Name: venda_aluguel id_funcionario; Type: FK CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.venda_aluguel
    ADD CONSTRAINT id_funcionario FOREIGN KEY (id_funcionario) REFERENCES public.funcionario(id) NOT VALID;


--
-- Name: imovel_casa id_imovel; Type: FK CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.imovel_casa
    ADD CONSTRAINT id_imovel FOREIGN KEY (id) REFERENCES public.imovel(id) NOT VALID;


--
-- Name: imovel_apartamento id_imovel; Type: FK CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.imovel_apartamento
    ADD CONSTRAINT id_imovel FOREIGN KEY (id_imovel) REFERENCES public.imovel(id) NOT VALID;


--
-- Name: imovel_sala_comercial id_imovel; Type: FK CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.imovel_sala_comercial
    ADD CONSTRAINT id_imovel FOREIGN KEY (id_imovel) REFERENCES public.imovel(id) NOT VALID;


--
-- Name: imovel_terreno id_imovel; Type: FK CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.imovel_terreno
    ADD CONSTRAINT id_imovel FOREIGN KEY (id_imovel) REFERENCES public.imovel(id) NOT VALID;


--
-- Name: operacao_imovel id_imovel; Type: FK CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.operacao_imovel
    ADD CONSTRAINT id_imovel FOREIGN KEY (id_imovel) REFERENCES public.imovel(id);


--
-- Name: venda_aluguel id_imovel; Type: FK CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.venda_aluguel
    ADD CONSTRAINT id_imovel FOREIGN KEY (id_imovel) REFERENCES public.imovel(id) NOT VALID;


--
-- Name: imovel_historico id_operacao_imovel; Type: FK CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.imovel_historico
    ADD CONSTRAINT id_operacao_imovel FOREIGN KEY (id_imovel) REFERENCES public.operacao_imovel(id) NOT VALID;


--
-- Name: imovel id_proprietario; Type: FK CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.imovel
    ADD CONSTRAINT id_proprietario FOREIGN KEY (id_cliente_prop) REFERENCES public.cliente_proprietario(id_cliente) NOT VALID;


--
-- Name: venda_aluguel id_usuario; Type: FK CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.venda_aluguel
    ADD CONSTRAINT id_usuario FOREIGN KEY (id_usuario) REFERENCES public.cliente_usuario(id_cliente) NOT VALID;


--
-- Name: operacao_imovel id_venda_aluguel; Type: FK CONSTRAINT; Schema: public; Owner: DOCKER
--

ALTER TABLE ONLY public.operacao_imovel
    ADD CONSTRAINT id_venda_aluguel FOREIGN KEY (id_venda_aluguel) REFERENCES public.venda_aluguel(id);


--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4 (Debian 13.4-1.pgdg100+1)
-- Dumped by pg_dump version 13.4 (Debian 13.4-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE postgres;
--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: DOCKER
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO "DOCKER";

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: DOCKER
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

